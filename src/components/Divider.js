import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { StyledDivider } from '../styles/components/StyledDivider';
import theme from '../styles/theme';

const propTypes = {
  /**
   * Show the divider vertical
   */
  vertical: PropTypes.bool,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  theme: theme,
  vertical: false,
};

export const Divider = props => (
  <StyledDivider data-testid="divider" {...props} />
);

StyledDivider.displayName = 'StyledDivider';

Divider.propTypes = propTypes;
Divider.defaultProps = defaultProps;

export default withTheme(Divider);
