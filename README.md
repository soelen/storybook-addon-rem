
# Storybook Addon REM

![Storybook REM preview](https://raw.githubusercontent.com/soelen/storybook-addon-rem/master/.github/images/preview.gif)

A storybook addon which helps you to test how your REM sized components behave.

## Why and when to use REM

[Aleksandr Hovhannisyan](https://www.aleksandrhovhannisyan.com/blog/use-rems-for-font-size/) wrote an awesome article about [rems for font size](https://www.aleksandrhovhannisyan.com/blog/use-rems-for-font-size/). Check it out if you want to learn more about this CSS unit.

## Getting started

Install the addon:

```sh
npm i storybook-addon-rem --dev
```

Add following content to `.storybook/main.(js|mjs|cjs)`:

```js
module.exports = {
  addons: ['storybook-addon-rem']
};
```

Add some css rem declerations to your component styling, e.g.:

```css
.your-component-button {
  font-size: 1rem;
}
```

Run your storybook instance. You should be able to see and use this addon in the toolbar 🚀

## Configuration

### Custom sizes

If you want to pass custom sizes you can do this by adding something like this in the `.storybook/preview.(js|mjs|cjs)` file:
```js
export const parameters = {
  // ...
  rem: {
    // ...
    sizes: [
      { value: 6, title: 'Tiny' },
      { value: 12, title: 'Standard' },
      { value: 72, title: 'Huge' },
    ]
  },
}
```

### Default paddings

By default `storybook-rem-addon` removes storybooks rem paddings on the canvas and docs pages. If you want to keep the rem padding you can configure this in the `.storybook/preview.(js|mjs|cjs)` file:

```js
export const parameters = {
  // ...
  rem: {
    // ...
    canvasRemPadding: true,
    docsRemPadding: true,
  }
};
```

## Events

You can listen for the `rem-update` event via the addons channel:

```js
const channel = api.getChannel();

// On mount
useEffect(() => {
  channel.addListener( 'rem-update', onRemUpdate );

  return () => {

    // On unmount
    channel.removeListener( 'rem-update', onRemUpdate );
  };
});

const onRemUpdate = ( data ) => {
  console.log( data.title, data.value );
}
```


## Storybook addon REM development

run the build:watch process:

```sh
npm build:watch
```

open a second terminal. Go to `examples/basic`:

```sh
cd example/basic/
```

this is a plain storybook setup where this addon has been integrated. Install dependencies with

```sh
npm i
```

then start storybook with

```sh
npm run storybook
```

**Notice**: This storybook instance requires a lower node version than 18.
If needed: Install [NVM](https://github.com/nvm-sh/nvm) and switch to a
lower version of nodejs e.g. `v16.19.0` also known as `lts/gallium`:

```sh
nvm i lts/gallium
nvm use lts/gallium
```

## Roadmap

- ~~Integrate Storybook events~~
- Update icon(s)

## Notes

- Code structure greatly inspired by [storybook-dark-mode](https://github.com/hipstersmoothie/storybook-dark-mode). I learned and adapted a lot ❤️
- Kudos to [@storybook/a11y](https://github.com/storybookjs/storybook/tree/master/addons/a11y) repository for showing how to implement a storybook toolbar with a tooltip.

