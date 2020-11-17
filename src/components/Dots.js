import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { StyledDots, StyledDot } from '../styles/components/StyledDots';
import theme from '../styles/theme';

const propTypes = {
  /**
   * Dots number for the steps
   */
  steps: PropTypes.oneOf([2, 3, 4]),
  /**
   * Size for each dot of step
   */
  size: PropTypes.number,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  theme: theme,
  number: 3,
  size: 4,
};

export const Dots = props => {
  const { steps } = props;
  const dots = [];
  for (let i = 0; i < steps; i += 1) {
    dots.push(<StyledDot data-testid="dot" key={i} {...props} />);
  }
  return (
    <StyledDots data-testid="dots" {...props}>
      {dots}
    </StyledDots>
  );
};

StyledDots.displayName = 'StyledDots';

Dots.propTypes = propTypes;
Dots.defaultProps = defaultProps;

export default withTheme(Dots);
