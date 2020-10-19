import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import theme from '../styles/theme';
import { StyledRow } from '../styles/components/StyledRow';

const propTypes = {
  /**
   * Reverse de the direction
   */
  reverse: PropTypes.bool,
  /**
   * Align horizontal items like cell
   */
  alignItems: PropTypes.oneOf(['start', 'center', 'end']),
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  reverse: false,
  alignItems: 'center',
  theme: theme,
};

export const Row = props => <StyledRow {...props} />;

StyledRow.displayName = 'StyledRow';

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default withTheme(Row);
