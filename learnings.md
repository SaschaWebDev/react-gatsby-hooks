# learnings

A documentation about my learnings.

## gatsby usage

- good starting codebase as template project

```
gatsby new designcodeweb https://github.com/mengto/gatsby-starter-designcode
```

- starting the project depending on your start scripts

```
gatsby develop
```

### project structure

- pages folder contains views which can be made of many components
- ideally every page/view should be under 200 lines of codes and otherwise the split into components
- components folder are reusable elements (buttons, modals, text).
- components subfolder called layout will contain global css and header/footer as well as the seo file which is very important for sharing and finding the website.
- components subfolder called sections are full width areas on the website like the hero section at the start. Their components can be reused in multiple pages.
- static\images folder contains all graphical assets for the project.

## gatsby trivia

- offers very good SEO out of the box

## CSS

- typing `-apple` into the css with vscode will autocomplete to all mac os fonts with fallbacks for other machines.
- font-sizing should be in pixel and 16px as a beginning is optimal for certain mobile inputs.
- Fonts will look bolder on the website than in the figma design this can be turned off by adding this css. It will make the text less readable tho.

```
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

- Removing the underline of `<a>` elements can make sense because the underline can affect other text when used in buttons
