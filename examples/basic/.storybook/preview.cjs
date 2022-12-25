export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  rem: {
    canvasRemPadding: false,
    docsRemPadding: false,
    // sizes: [
    //   { value: 8, title: 'Tiny' },
    //   { value: 12, title: 'Medium' },
    // ]
  },
}
