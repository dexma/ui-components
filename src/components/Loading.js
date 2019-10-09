import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';
import { withTheme } from 'styled-components';

import Spinner from 'components/Spinner';

import { StyledLoading } from 'styles/components/StyledLoading';

const propTypes = {
  ...GeneralPropTypes,
  isLoading: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  children: PropTypes.node,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  isLoading: false,
  width: 80,
  height: 80,
};

const Loading = ({ isLoading, width, height, dataCy, theme, children }) => {
  return isLoading ? (
    <StyledLoading data-cy={dataCy} theme={theme}>
      <Spinner width={width} height={height} />
    </StyledLoading>
  ) : (
    children
  );
};

StyledLoading.displayName = 'StyledLoading';

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default memo(withTheme(Loading));
