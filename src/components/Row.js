import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import theme from 'styles/theme';
import { StyledRow } from 'styles/components/StyledRow';

const propTypes = {
  /**
   * Reverse de the direction
   */
  reverse: PropTypes.bool,
  /**
   * Align all the items centered
   */
  alignItems: PropTypes.string,
  /**
   * Component class
   */
  className: PropTypes.string,
  /**
   * The cypress identifier
   */
  dataCy: PropTypes.string,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
  /**
   * Children node
   */
  children: PropTypes.node,
};

const defaultProps = {
  theme: theme,
  reverse: false,
  alignItemsCenter: 'center',
};

export const Row = props => <StyledRow {...props} />;

StyledRow.displayName = 'StyledRow';

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default withTheme(Row);
