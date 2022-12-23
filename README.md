
# Storybook REM

![Storybook REM preview](https://raw.githubusercontent.com/soelen/storybook-rem/master/.github/images/preview.gif)

A storybook addon which helps you to test how your REM sized components behave.

## Getting started

Install the addon:

```
npm i storybook-rem --dev
```

Add following content to `.storybook/main.(js|mjs|cjs)`:

```
module.exports = {
  addons: ['storybook-rem']
};
```

## Run and test addon locally

run the build:watch process:

```
npm build:watch
```

open a second terminal. Go to `examples/basic`:

```
cd example/basic/
```

this is a plain storybook setup where this addon has been integrated. Install dependencies with

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
