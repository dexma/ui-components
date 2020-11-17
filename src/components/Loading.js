import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import omit from 'lodash/omit';

import Spinner from './Spinner';
import { StyledLoading } from '../styles/components/StyledLoading';
import theme from '../styles/theme';

const propTypes = {
  /**
   * The status of the loading
   */
  isLoading: PropTypes.bool,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  isLoading: false,
  theme: theme,
};

export const Loading = props => {
  const { isLoading, children } = props;
  const loadingProps = omit(props, ['isLoading', 'children']);
  return isLoading ? (
    <StyledLoading data-testid="loading" {...loadingProps}>
      <Spinner width={24} height={24} />
    </StyledLoading>
  ) : (
    children
  );
};

StyledLoading.displayName = 'StyledLoading';

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default withTheme(Loading);
