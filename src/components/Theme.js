import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

const themeSass = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!styles/_variables.scss');

const propTypes = {
  config: PropTypes.objectOf(PropTypes.object),
};

const Theme = ({ children, config }) => {
  if (!children) return null;

  let themeProviderOptions;
  if (isEmpty(config)) {
    themeProviderOptions = themeSass;
  } else {
    themeProviderOptions = Object.assign(themeSass, config);
  }
  return <ThemeProvider theme={themeProviderOptions}>{children}</ThemeProvider>;
};

Theme.propTypes = propTypes;

export default Theme;
