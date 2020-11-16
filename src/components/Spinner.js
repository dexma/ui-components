import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { StyledSpinner } from '../styles/components/StyledSpinner';
import theme from '../styles/theme';

const propTypes = {
  /**
   * Set the size of spinner
   */
  size: PropTypes.number,
};

const defaultProps = {
  size: 24,
  theme: theme,
};

export const Spinner = props => (
  <StyledSpinner data-testid="spinner" {...props} />
);

StyledSpinner.displayName = 'StyledSpinner';

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default withTheme(Spinner);
