import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { GeneralPropTypes, DefaultGeneralPropTypes } from '../utils/propTypes';
import { StyledDots, StyledDot } from '../styles/components/StyledDots';

const propTypes = {
  ...GeneralPropTypes,
  steps: PropTypes.number,
  size: PropTypes.number,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  number: 3,
  size: 4,
};

export const Dots = ({ steps, size, theme, dataCy }) => {
  const dots = [];
  for (let i = 0; i < steps; i += 1) {
    dots.push(<StyledDot key={i} size={size} theme={theme} />);
  }
  return (
    <StyledDots size={size} data-cy={dataCy} theme={theme}>
      {dots}
    </StyledDots>
  );
};

StyledDots.displayName = 'StyledDots';

Dots.propTypes = propTypes;
Dots.defaultProps = defaultProps;

export default memo(withTheme(Dots));
