import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import omit from 'lodash/omit';

import Spinner from './Spinner';
import { StyledLoading } from '../styles/components/StyledLoading';
import theme from '../styles/theme';

const propTypes = {
  /**
   * Set the color name for the loading, it will be a <a href="https://dexma.github.io/ui-components/?path=/docs/colors--colors">color</a>
   */
  color: PropTypes.string,
  /**
   * Size base on the theme
   */
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * The status of the loading
   */
  type: PropTypes.oneOf(['spinner']),
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
  size: 24,
  type: 'spinner',
  isLoading: false,
  theme: theme,
};

export const Loading = props => {
  const { color, size, type, isLoading, children } = props;
  const loadingProps = omit(props, ['isLoading', 'children', 'size', 'color']);
  return isLoading ? (
    <StyledLoading data-testid="loading" {...loadingProps}>
      {type === 'spinner' && <Spinner color={color} size={size} />}
    </StyledLoading>
  ) : (
    children
  );
};

StyledLoading.displayName = 'StyledLoading';

Loading.propTypes = propTypes;
Loading.defaultProps = defaultProps;

export default withTheme(Loading);
