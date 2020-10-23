import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import theme from '../styles/theme';
import { StyledGrid } from '../styles/components/StyledGrid';

const propTypes = {
  /**
   * Fluid grid means full grid
   */
  fluid: PropTypes.bool,
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
};

export const Grid = props => <StyledGrid {...props} />;

StyledGrid.displayName = 'StyledGrid';

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default withTheme(Grid);
