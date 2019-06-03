import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!styles/_variables.scss');

const propTypes = {
  config: PropTypes.object,
};

const defaultProps = {
  config: theme,
};

const Theme = ({ children, config }) => {
  if (!children) return null;
  return <ThemeProvider theme={config}>{children}</ThemeProvider>;
};

Theme.propTypes = propTypes;
Theme.defaultProps = defaultProps;

export default Theme;
