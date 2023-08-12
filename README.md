# TianGong Prompts Extension

## Table of Contents

- [TianGong Prompts Extension](#tiangong-prompts-extension)
  - [Table of Contents](#table-of-contents)
  - [Intro](#intro)
  - [Features](#features)
  - [Installation](#installation)
    - [Env Setting](#env-setting)
    - [Procedures](#procedures)
  - [Documents](#documents)

## Intro

A Prompt extension for Chrome and Edge.

## Features

- [React 18](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Vite](https://vitejs.dev/)
- [SASS](https://sass-lang.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Chrome Extension Manifest Version 3](https://developer.chrome.com/docs/extensions/mv3/intro/)
- HRR (Hot Rebuild & Refresh/Reload)

## Installation

### Env Setting

Install nvm:

[nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
```

Install node:

```bash
nvm install
nvm use
```

Install yarn:

```bash
npm install -g yarn
```

### Procedures

1. Clone this repository.
2. Run `yarn install` (required >= 18).
3. Run `yarn dev`.
4. Load Extension on Chrome:
   1. Open the Chrome browser.
   2. Access `chrome://extensions`.
   3. Check "Developer mode".
   4. Find "Load unpacked extension".
   5. Select the `dist` folder in this project (after dev or build).
5. If you want to build in production, run `yarn build`.

## Documents

- [Vite Plugin](https://vitejs.dev/guide/api-plugin.html)
- [Chrome Extension](https://developer.chrome.com/docs/extensions/mv3/)
- [Rollup](https://rollupjs.org/guide/en/)
- [Rollup-plugin-chrome-extension](https://www.extend-chrome.dev/rollup-plugin)
