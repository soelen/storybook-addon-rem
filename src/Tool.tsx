import { API } from '@storybook/api'
import { IconButton, WithTooltip, TooltipLinkList } from '@storybook/components';

import React, { FunctionComponent, ReactNode, } from 'react';
import Rem from './icons/Rem';

interface Props {
  api: API
}

/**
 * Update the preview iframe class
 */

const updatePreview = ( fontSize: number ) => {
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
  root.style.fontSize = `${ fontSize }px`;

  // Remove rem padding from iframe body

  const body = root.querySelector( 'body' ) as HTMLBodyElement;
  if( !body ) return;
  body.style.padding = `16px`;
};

type Size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type RootFontsize = {
  [key in Size]: {
    value: number,
    title: string,
  };
}

let active: Size = 'md';

const rootFontsizes: RootFontsize = {
  xs: { value: 8, title: 'Extra Small' },
  sm: { value: 12, title: 'Small' },
  md: { value: 16, title: 'Default' },
  lg: { value: 24, title: 'Large', },
  xl: { value: 48, title: 'Extra Large', }
};

interface Link {
  id: string;
  size: Size,
  title: ReactNode;
  right?: ReactNode;
  active: boolean;
  onClick: () => void;
}

const somethingClicked = ( size: Size ) => {
  active = size;
  updatePreview( rootFontsizes[size].value );
}
const createList = ( onHide: () => void, active: Size ):Link[] => {
  return Object.keys( rootFontsizes ).map(( key ) => {
    const size = key as Size;
    return ({

    id: `rem-${ size }`,
    size: size,
    title: <div>{ rootFontsizes[size].title }</div>,
    right: <div>{ rootFontsizes[ size ].value }px</div>,
    active: size === active ? true : false ,
    onClick: () => {
      somethingClicked( size );
      onHide();
    },
  })
})
}

const Tool: FunctionComponent<Props> = ( { api } ) => {
  return(
    <>
      <WithTooltip
        placement="top"
        trigger="click"
        tooltip={({ onHide }) => {
          const list = createList( onHide, active )
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
