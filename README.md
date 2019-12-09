<p align="center">
    <img src="/src/assets/voltic_logo.svg" alt="Voltic" width="220">
</p>

<h1 align="center">Voltic Components</h1>

<p align="center">React components for the Voltic Design System</p>

<p align="center">
  <br>
  <a href="https://travis-ci.org/dexma/ui-components">
    <img src="https://travis-ci.org/dexma/ui-components.svg?branch=master" alt="Travis CI badge">
  </a>
  <a href="https://github.com/styled-components/styled-components">
    <img src="https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e" alt="npm version badge">
  </a>
</p>

## Table of contents

- [Usage](#usage)
- [Installation](#installation)
- [Documentation](#documentation)
- [Changelog](#changelog)
- [Testing](#testing)
- [Contributing](#contributing)

## Usage

1) Install with [npm](https://www.npmjs.com): `npm install --save @dexma/ui-components`

2) Import the css and put inside our main app like the example:

```javascript
import "@dexma/ui-components/dist/main.css";
```

3) Now you can use the component importing from the library

```javascript
import { Button } from "@dexma/ui-components";
<Button text="Some text" variant="primary" size="medium"/>
```

4) Optional: You can set the Theme with your personal variables, we provide the Theme component and you only need to set the options:

```javascript
import { Theme, Button } from "@dexma/ui-components";
<Theme options={{
    primary: "#aa0800"
}}>
    <Button text="Some text" variant="primary" size="medium"/>
</Theme>
```

## Installation

To run the installation locally on your machine, you need [Node.js](https://nodejs.org/en/) installed on your computer.

```bash
git clone https://github.com/dexma/ui-components
cd ui-components
npm install
```

## Documentation

For the documentation we use storybook docs that transforms our stories into world-class component documentation.

- Run storybook: `npm run storybook`
- If you need to export static doc run `npm run build-storybook` this will export a static folder with all our component docs

## Changelog
For changelogs, check out [the CHANGELOG section of ui-components](https://github.com/dexma/ui-components/blob/master/CHANGELOG.md)

## Testing
We use Jest and Enzyme as our testing frameworks and we're trying to write more test suite for our components.

- To run our test: `npm run test`

## Contributing
Check out the [CONTRIBUTING document](https://github.com/dexma/ui-components/blob/master/CONTRIBUTING.md) in the root of the repository to learn how you can contribute.



