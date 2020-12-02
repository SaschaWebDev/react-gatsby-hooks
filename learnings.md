# learnings

A documentation about my learnings.

## gatsby usage

- gatsby install

```
npm install -g gatsby-cli
```

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
- fonts will look bolder on the website than in the figma design this can be turned off by adding this css. It will make the text less readable tho.

```
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

- removing the underline of `<a>` elements can make sense because the underline can affect other text when used in buttons

## Prettier

- in the vscode settings turn format on code on then set `editor: Default Formatter` to `esbenp.prettier-vscode`
- when prettier loads too long it can be enforced by the `F1` command `format Document With... -> Prettier`

## Styled Components

- install with `npm install --save styled-components`
- styled components are helpful to avoid inline styling that gets messy fast or create a css file for every component
- styled components offer the features of Sass and the power of inline styling of javascript
- They make the JSX clean and each element a reusable component, also the names are isolated to the single component so using the same name for styled components will not conflict
- To make use of styled components in JSX you have to defined them under the React function like this

```
const Wrapper = styled.div`
  background: linear-gradient(180deg, #4316db 0%, #9076e7 100%);
`

/* Max width will keep width to 100% if within max-width and else cap it, better to use than fixed width. margin: 0 auto will always apply top right bottom left and will repeat itself if not fully defined. So here top & bottom = 0 and left and right = auto   */
const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
`
```

## Sections

- top level have a Wrapper html element which is full width of the screen and has `position: relative`. It is responsible for the background and can have floating backgrounds.
- within the Wrapper ist a ContentWrapper that is centered to the screen and has some padding to the left and right
- keep in mind that sections also have margins on the y axis between each other but they don't add up. Making an upper section marginBottom 200px and the lower section marginTop 200px results in the margin still being 200px. Padding in contrast will add up on each other.

![](designcodeweb/public/images/learnings/sections-structure.PNG)

## CSS Grid

- using `display: grid; gap: 30px;` is superior to using margins since it will work responsive on many display sizes
-
