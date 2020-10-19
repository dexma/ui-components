import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { GeneralPropTypes, DefaultGeneralPropTypes } from '../utils/propTypes';

import { StyledSpinner } from '../styles/components/StyledSpinner';

const propTypes = {
  ...GeneralPropTypes,
  size: PropTypes.number,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  size: 24,
};

export const Spinner = ({ size, variant, theme, dataCy }) => {
  return (
    <StyledSpinner
      size={size}
      variant={variant}
      data-cy={dataCy}
      theme={theme}
    />
  );
};

StyledSpinner.displayName = 'StyledSpinner';

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default memo(withTheme(Spinner));
