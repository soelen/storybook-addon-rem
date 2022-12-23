import { addons, types } from '@storybook/addons';
import { themes } from '@storybook/theming';
import * as React from 'react';

import Tool from '../Tool';
// , { prefersDark, store }

// const currentStore = store();
// const currentTheme = currentStore.current || (prefersDark.matches && 'dark') || 'light';

addons.register('storybook/dark-mode', (api) => {
  addons.add('storybook/dark-mode', {
    title: 'dark mode',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: () => <Tool api={api} />,
  });
});
