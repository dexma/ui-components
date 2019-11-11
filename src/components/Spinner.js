import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';

import { StyledSpinner } from 'styles/components/StyledSpinner';

const propTypes = {
  ...GeneralPropTypes,
  width: PropTypes.number,
  height: PropTypes.number,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  width: 24,
  height: 24,
};

const Spinner = ({ width, height, variant, theme, dataCy }) => {
  return (
    <StyledSpinner
      width={width}
      height={height}
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
