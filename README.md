<p align="center">
    <img src="https://get.dexma.com/hs-fs/hubfs/Logo/New%20DEXMA%20Logo.png?width=350&name=New%20DEXMA%20Logo.png" alt="Dexma" width="220">
</p>

<h1 align="center">Dexma UI Components</h1>

<p align="center">React components library by Dexma</p>

<p align="center">
  <br>
  <a href="https://app.travis-ci.com/github/dexma/ui-components">
    <img src="https://app.travis-ci.com/dexma/ui-components.svg?branch=master" alt="Travis CI badge">
  </a>
  <a href="https://github.com/styled-components/styled-components">
    <img src="https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e" alt="npm version badge">
  </a>
</p>

## Table of contents

-   [Usage](#usage)
-   [Installation](#installation)
-   [Documentation](#documentation)
-   [Changelog](#changelog)
-   [Testing](#testing)
-   [Contributing](#contributing)

## Usage

1. Install with [npm](https://www.npmjs.com): `npm install --save @dexma/ui-components`

2. Use the component importing from the library

```typescript
import { Button } from '@dexma/ui-components';
<Button text='Some text' variant='primary' size='medium' />;
```

3. Optional: You can set the Theme with your personal variables, we provide the Theme component and you only need to set the options:

```typescript
import { Theme, Button } from '@dexma/ui-components';
<Theme
    options={{
        primary: '#aa0800',
    }}
>
    <Button text='Some text' variant='primary' size='medium' />
</Theme>;
```

You can find all the configuration in the theme file [theme.ts](https://github.com/dexma/ui-components/blob/master/src/lib/utils/theme.ts)

## Typography

The platform font is **Montserrat**, self-hosted by this package — there is no Google Fonts (or any
other CDN) request at runtime.

Every app **must register the font faces once, at its entry point** (one line per webpack/Vite entry):

```typescript
import '@dexma/ui-components/fonts.css';
```

Without this import the UI silently renders the fallback system stack — everything works, but nothing
is Montserrat. `GlobalStyle` applies the font; `fonts.css` provides it. You need both.

The shipped subsets are `latin`, `latin-ext` (pl_PL) and `cyrillic` (bg_BG), each behind a
`unicode-range` so browsers only download what the locale needs. `zh_CN` is not covered by Montserrat
and intentionally falls through to the system CJK faces in the stack.

Never write the font stack as a literal in an app. Where a style genuinely cannot inherit the page
font (shadow-DOM `::part()` rules, canvas/SVG text, server-rendered images), use the exported token:

```typescript
import { typography } from '@dexma/ui-components';

const Styled = styled.div`
    font-family: ${typography.fontFamily};
`;
```

The binaries come from `@fontsource-variable/montserrat` (SIL OFL 1.1) at build time via
`scripts/buildFontConfig.mjs` — that script's header documents the full checklist for changing the
platform font. Repositories that cannot consume this npm package (dexcell, grader-demo, is3frontend,
anomaly-detection-dash-ui, detect-reports-generator) must self-host the **same version** of the font
as this package's `@fontsource-variable/montserrat` devDependency, so rendering stays consistent.

## Installation

To run the installation locally on your machine, you need [Node.js](https://nodejs.org/en/) installed on your computer.

```bash
git clone https://github.com/dexma/ui-components
cd ui-components
npm install
```

## Documentation

For the documentation we use storybook docs that transforms our stories into world-class component documentation.

-   Run storybook: `npm run storybook`
-   If you need to export static doc run `npm run build-storybook` this will export a static folder with all our component docs

## Changelog

For changelogs, check out [the CHANGELOG section of ui-components](https://github.com/dexma/ui-components/blob/master/CHANGELOG.md)

## Testing

We use React Testing Library as our testing lib you can check out the [documentation](https://testing-library.com/docs/react-testing-library/intro)

-   To run our test: `npm run test`

Note: Due to the use of third-party libraries, some components use methods that JSDOM (the DOM implementation used by Jest) hasn't implemented yet, testing it is not easily possible. This is the case with window.matchMedia(). Jest returns `TypeError: window.matchMedia is not a function` and doesn't properly execute the test.

In this case, to resolve this issue to execute successfully your tests when @dexma/ui-components is used, include the following code on setupTest file for Jest to mock matchMedia and it should solve the issue:

```typescript
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});
```

## Contributing

Check out the [CONTRIBUTING document](https://github.com/dexma/ui-components/blob/master/CONTRIBUTING.md) in the root of the repository to learn how you can contribute.
