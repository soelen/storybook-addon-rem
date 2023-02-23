import { API, useParameter } from '@storybook/api'
import { IconButton, WithTooltip, TooltipLinkList } from '@storybook/components';
import { DOCS_RENDERED } from '@storybook/core-events';

import React, { FunctionComponent, ReactNode, useEffect, } from 'react';
import { ADDON_ID, ON_REM_UPDATE } from './constants';
import Rem from './icons/Rem';

/**
 * Update the preview iframe class
 */

const updatePreview = () => {
  const iframe = document
    .getElementById( 'storybook-preview-iframe') as HTMLIFrameElement;

  if (!iframe) return;

  const iframeDocument =
    iframe.contentDocument || iframe.contentWindow?.document;

  const root = iframeDocument?.querySelector<HTMLElement>(':root');

  if ( !root ) return;

  const style = window.getComputedStyle( root, null ).getPropertyValue('font-size');

  // const fontSize = parseFloat(style);
  // root.style.fontSize = `${ fontSize - 2 }px`;
  if (state.fontSize !== null) {
    root.style.fontSize = `${ state.fontSize }px`;
  } else {
    root.style.fontSize = ""
  }

  // Remove rem padding from iframe body

  const body = root.querySelector( '.sb-main-padded' ) as HTMLBodyElement;
  if( body && !state.canvasRemPadding ) body.style.padding = `16px`;

  // Remove rem padding from docs wrapper

  const sbDocsWrapper = root.querySelector( '.sbdocs-wrapper' ) as HTMLElement;
  if( sbDocsWrapper && !state.docsRemPadding ) {
    sbDocsWrapper.style.paddingTop = `64px`;
    sbDocsWrapper.style.paddingBottom = `64px`;
  }
};

export interface Fontsize {
  value: number,
  title: string,
}

interface Link {
  id: string;
  title: ReactNode;
  right?: ReactNode;
  active: boolean;
  onClick: () => void;
}

const createList = ( onCallback: () => void, state: State ):Link[] => {
  const resetLink: Link = {
    active: false,
    id: "rem-reset",
    onClick(): void {
      state.fontSize = null;
      onCallback()
    },
    right: "",
    title: "Reset"
  }

  return [
    resetLink,
    ...state.sizes.map(( size ) => {
      return ({
        id: `rem-${ size.value }`,
        title: <div>{ size.title }</div>,
        right: <div>{ size.value }px</div>,
        active: state.fontSize === size.value ,
        onClick: () => {
          state.fontSize = size.value;
          onCallback();
        },
      })
    })
  ]
}

interface Params {
  canvasRemPadding: boolean,
  docsRemPadding: boolean,
  sizes: Fontsize[],
}


/**
 * Non reactive state.
 */

interface State extends Params {
  fontSize: number | null,
}

const state : State = {
  canvasRemPadding: false,
  docsRemPadding: false,
  fontSize: 16,
  sizes: [
    { value: 8, title: 'Extra Small' },
    { value: 12, title: 'Small' },
    { value: 16, title: 'Default' },
    { value: 24, title: 'Large', },
    { value: 48, title: 'Extra Large', }
  ]
};


const defaultParams: Params = {
  canvasRemPadding: false,
  docsRemPadding: false,
  sizes: [],
}

interface Props {
  api: API
}

const Tool: FunctionComponent<Props> = ( { api }) => {
  const params = useParameter<Params>( 'rem', defaultParams);
  state.canvasRemPadding = params.canvasRemPadding ? true : false;
  state.docsRemPadding = params.docsRemPadding ? true : false;

  state.sizes = Array.isArray( params.sizes ) && params.sizes.length ? params.sizes : state.sizes;
  state.sizes = state.sizes.filter( size => size.title && size.value );
  if( !state.sizes.length ) throw new Error( `No or wrong sizes provided as parameter in ${ ADDON_ID }.` );

  state.fontSize = Array.isArray( params.sizes ) && params.sizes.length ? params.sizes[Math.round((params.sizes.length - 1) / 2)].value : 16;
  const channel = api.getChannel();

  useEffect(() => {
    channel.addListener(DOCS_RENDERED, updatePreview );
    return () => {
      channel.removeListener(DOCS_RENDERED, updatePreview );
    };
  });

  return(
    <>
      <WithTooltip
        placement="top"
        trigger="click"
        tooltip={({ onHide }) => {
          const list = createList( () => {
            onHide();
            updatePreview();
            channel.emit( ON_REM_UPDATE, state.sizes.find( size => size.value === state.fontSize ) )
          }, state )
          return <TooltipLinkList links={list} />;
        }}
        closeOnClick
      >
        <IconButton
          title="Change root font size"
        >
          <Rem />
        </IconButton>
      </WithTooltip>
    </>
  )
}

export default Tool;
