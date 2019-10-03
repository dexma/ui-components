import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

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
  const classes = classNames('toast', type.toLowerCase());
  const iconName = {
    [ToastType.INFO]: 'info-button',
    [ToastType.SUCCESS]: 'ok-circled',
    [ToastType.WARNING]: 'attention',
    [ToastType.ERROR]: 'attention-circled',
  }[type];

  return (
    <StyledToast theme={theme}>
      <div className={classes}>
        <Icon name={iconName} size="medium" />
        <span>{text}</span>
      </div>
    </StyledToast>
  );
};

StyledToast.displayName = 'StyledToast';

Toast.propTypes = propTypes;
Toast.defaultProps = defaultProps;
