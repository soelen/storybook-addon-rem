import { addons, types } from '@storybook/addons';
import * as React from 'react';
import { ADDON_ID, TOOLBAR_ID } from '../constants';

import Tool from '../Tool';

addons.register( ADDON_ID, (api) => {
  addons.add( TOOLBAR_ID, {
    title: 'Rem',
    type: types.TOOL,
    match: ( { viewMode } ) => viewMode === 'story' || viewMode === 'docs',
    render: () => <Tool api={api} />,
  });
});
