
# Storybook Addon REM

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

**Notice**: This storybook insance requires a lower node version than 18.
If needed: Install [NVM](https://github.com/nvm-sh/nvm) and switch to a
lower version of nodejs e.g. `v16.19.0` also known as `lts/gallium`:

```
nvm i lts/gallium
nvm use lts/gallium
```

## Roadmap

- Update icon(s)
- Integrate Storybook events

## Notes

- Code structure greatly inspired by [storybook-dark-mode](https://github.com/hipstersmoothie/storybook-dark-mode). I learned and adapted a lot ❤️
- Kudos to [@storybook/a11y](https://github.com/storybookjs/storybook/tree/master/addons/a11y) repository for showing how to implement a storybook toolbar with a tooltip.

