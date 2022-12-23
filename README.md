
# Storybook REM

![Storybook REM preview](https://raw.githubusercontent.com/soelen/storybook-rem/master/.github/images/preview.gif)

A storybook addon that lets your users change the root font size.

## Getting started

Install the addon:

```
npm i storybook-rem --dev
```

or with yarn:

```
yarn add -D storybook-rem
```

Last but not least, add following content to .storybook/main.js

```
module.exports = {
  addons: ['storybook-rem']
};
```

## Notes

- Kudos to [storybook-dark-mode](https://github.com/hipstersmoothie/storybook-dark-mode) and its contributors. I learned and adapted a lot from its repository.
- Thanks to [@storybook/a11y](https://github.com/storybookjs/storybook/tree/master/addons/a11y) for showing how to implement a storybook toolbar.
