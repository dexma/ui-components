import React from 'react';
import PropTypes from 'prop-types';

import theme from 'styles/theme';
import { StyledToast } from 'styles/components/StyledToast';
import Icon from 'components/Icon';

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
  const iconName = {
    [ToastType.INFO]: 'circle_info',
    [ToastType.SUCCESS]: 'circle_check',
    [ToastType.WARNING]: 'circle_info',
    [ToastType.ERROR]: 'circle_info',
  }[type];

  return (
    <StyledToast theme={theme} type={type}>
      <Icon name={iconName} size="large" />
      <span>{text}</span>
    </StyledToast>
  );
};

StyledToast.displayName = 'StyledToast';

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;
