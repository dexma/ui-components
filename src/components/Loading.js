import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';
import { withTheme } from 'styled-components';

import Spinner from 'components/Spinner';

import { StyledLoading } from 'styles/components/StyledLoading';

const propTypes = {
  ...GeneralPropTypes,
  isLoading: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  isLoading: false,
};

export const Loading = ({ isLoading, dataCy, theme, children }) => {
  return isLoading ? (
    <StyledLoading data-cy={dataCy} theme={theme}>
      <Spinner width={24} height={24} />
    </StyledLoading>
  ) : (
    children
  );
};

StyledLoading.displayName = 'StyledLoading';

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default memo(withTheme(Loading));
