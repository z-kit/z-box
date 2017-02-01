# <a name="z-box"></a> z-box

[![Greenkeeper badge](https://badges.greenkeeper.io/z-kit/z-box.svg)](https://greenkeeper.io/)

[![Build]](https://travis-ci.org/z-kit/z-box) [![SemVer]](http://semver.org/) [![License]](LICENSE)

The z-kit component template, starter point to create [z-kit compliant components](https://github.com/z-kit/guide). The package is intended to be used in a web page.

## <a name="toc"></a> Table of contents

- [z-box](#z-box)
- [Table of contents](#toc)
- [Install](#install)
  - [Import as HTML/CSS component](#import-css)
  - [Import as Stateless Functional Component (SFC)](#import-sfc)
- [How to use](#howto)
  - [CSS component](#css)
  - [Stateless Functional Component](#sfc)
- [License](#license)

## <a name="install"></a> Install

The package is available to download through [npm](https://npmjs.com):

```bash
npm install z-box --save
```

### <a name="import-css"></a> Import as HTML/CSS component

### The simple case

The package will be located inside the `node_modules` folder, you can import it into the HTML document as follows:

```html
<link rel="stylesheet" href="node_modules/z-box/dist/style.css">
```

### When bundling an web app

**For bundlers that support CSS, like [Webpack](https://webpack.github.io/), you can use it like this:**

```javascript
require('z-box/dist/style.css');
```

### <a name="import-sfc"></a> Import as a Stateless Functional Component (SFC)

The package does not include the renderer, you can use any renderer that supports SFCs. You could use React, Preact, Inferno, etc.

**Notice: This package contains CSS styling, you may need a bundler that's capable of requiring CSS files like Webpack with [css-loader](https://github.com/webpack/css-loader).**

Once you have chosen the renderer you can include the package in your project as follows:

```jsx
// Assuming the React renderer is being used
const React = require('react');
const render = require('react-dom').render;

// Passing the render function when importing
const ZBox = require('z-box')(React.createElement);

// Render it on page, using JSX here :)
render(<ZBox>Content to render inside the box</ZBox>, document.body);
```

## <a name="howto"></a> How to use

### <a name="css"></a> CSS component

Just add the HTML structure and CSS classes to reproduce the UI component.

### Class hierarchy

| Recommended HTML tags                      | Parent | Class    | Description                                       | Type  |
| ------------------------------------------ | ------ | -------- | ------------------------------------------------- | ----- |
| `div`, `nav`, `section`, `main`, `article` | `root` | `.z-box` | Root container that will have the contents padded | Block |

#### Full working example:

```html
<div class="z-box">
  <h1>Hello!</h1>
</div>
```

### <a name="sfc"></a> Stateless Functional Component

Render the HTML by using the SFC and passing props.

### Supported Props

| Prop name  | Expected Type                           | Description             |
| ---------- | --------------------------------------- | ----------------------- |
| `children` | One or more `HTMLElement` or `TextNode` | The contents of the box |

#### Full example (JSX):

```jsx
<ZBox>Hello!</ZBox>
```

## <a name="license"></a> LICENSE

[MIT](LICENSE)

[Build]: https://img.shields.io/travis/z-kit/z-box.svg
[SemVer]: https://img.shields.io/:semver-%E2%9C%93-brightgreen.svg
[License]: https://img.shields.io/npm/l/z-box.svg