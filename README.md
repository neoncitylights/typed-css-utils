# Typed CSS utils
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub deployments](https://img.shields.io/github/deployments/neoncitylights/typed-css-utils/github-pages?label=deploy)](https://github.com/neoncitylights/typed-css-utils/deployments/activity_log?environment=github-pages)
[![Node.js workflow](https://github.com/neoncitylights/typed-css-utils/actions/workflows/main.yml/badge.svg)](https://github.com/neoncitylights/typed-css-utils/actions/workflows/main.yml)
[![NPM package](https://img.shields.io/npm/v/@neoncitylights/typed-css-utils)](https://www.npmjs.com/package/@neoncitylights/typed-css-utils)

This library provides a set of utilities extending the `csstype` package to help you write typed CSS in TypeScript.

Currently, there's basic support for the following W3C standards:
 - **CSS Conditionals Level 3** (`css-conditional-3`): [Editor's Draft](https://drafts.csswg.org/css-conditional-3/), [CRS](https://www.w3.org/TR/css-conditional-3/)
 - **CSS Media Queries Level 5** (`mediaqueries-5`): [Editor's Draft](https://drafts.csswg.org/mediaqueries-5/), [WD](https://www.w3.org/TR/mediaqueries-5/)

## Install
```
npm install @neoncitylights/css-typed-utils
```

## Usage
Using TypeScript, you can receive type intelliSense, which provides autocomplete suggestions for:
 - CSS property names and values (through `csstype`)
 - Media feature names (e.g `@prefers-color-scheme`, `aspect-ratio`)

```ts
import { matchMediaFeature, cssSupports } from '@neoncitylights/css-typed-utils';

// equivalent to window.matchMedia('(prefers-color-scheme: dark)');
const userPrefersDark: MediaQueryList = matchMediaFeature('prefers-color-scheme', 'dark');

// TypeScript support, which provides strongly typed CSS property
// names and values using the `csstype` package
const supportsGrid: boolean = cssSupports('display', 'grid');
const supportsFlex: boolean = cssSupports('display', 'flex');
```

## License
This library is licensed under the [MIT License](./LICENSE).
