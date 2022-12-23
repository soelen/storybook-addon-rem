
# Storybook REM

![Storybook REM preview](https://raw.githubusercontent.com/soelen/storybook-rem/master/.github/images/preview.gif)

A storybook addon that lets your users change the root font size.

## Getting started

Install the addon:

```
npm i storybook-rem --dev
```

Last but not least, add following content to .storybook/main.js

```
module.exports = {
  addons: ['storybook-rem']
};
```

## Run and test addon locally

run the build:watch proces:

```
npm build:watch
```

open a second terminal. Go to `examples/basic`.

```
cd example/basic/
```

This is a plain storybook setup where this addon has been integrated. Install dependencies with

```
npm i
```

then start storybook with

```
npm run storybook
```





## Notes

- Kudos to [storybook-dark-mode](https://github.com/hipstersmoothie/storybook-dark-mode) and its contributors. I learned and adapted a lot from its repository.
- Thanks to [@storybook/a11y](https://github.com/storybookjs/storybook/tree/master/addons/a11y) for showing how to implement a storybook toolbar.
