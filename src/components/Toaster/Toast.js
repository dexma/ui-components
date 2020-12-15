/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';
import theme from '../../styles/theme';
import { StyledToast } from '../../styles/components/StyledToast';
import Alert from '../Alert';

export const ToastType = Object.freeze({
  INFO: 'INFO',
  SUCCESS: 'SUCCESS',
  WARNING: 'WARNING',
  ERROR: 'ERROR',
});

const propTypes = {
  theme: PropTypes.shape({}),
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.keys(ToastType)).isRequired,
};

const defaultProps = {
  theme: theme,
};

export const Toast = ({ text, type, theme }) => {
  const alertType = {
    [ToastType.INFO]: 'info',
    [ToastType.SUCCESS]: 'success',
    [ToastType.WARNING]: 'warning',
    [ToastType.ERROR]: 'error',
  }[type];

  return (
    <StyledToast theme={theme} type={type}>
      <Alert type={alertType} description={text} showIcon />
    </StyledToast>
  );
};

StyledToast.displayName = 'StyledToast';

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;

export default withTheme(Toast);
