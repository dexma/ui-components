/* eslint-disable import/no-cycle */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import { withTheme } from 'styled-components';
import omit from 'lodash/omit';

import theme from '../styles/theme';
import Icon, { getIconSize } from './Icon';
import Spinner from './Spinner';
import { Tooltip } from './Tooltip';

import { StyledButton } from '../styles/components/StyledButton';
import { StyledButtonGroup } from '../styles/components/StyledButtonGroup';

export const BUTTON_TYPE = ['button', 'reset', 'submit', null];
export const BUTTON_SIZE = ['small', 'medium', 'large', 'xlarge'];
export const BUTTON_VARIANT = [
  'primary',
  'secondary',
  'outline',
  'destructive',
  'link',
  'icon',
  'icon-secondary',
  'icon-outline',
];

const propTypes = {
  id: PropTypes.string,
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.oneOf(BUTTON_TYPE),
  size: PropTypes.oneOf(BUTTON_SIZE).isRequired,
  variant: PropTypes.oneOf(BUTTON_VARIANT).isRequired,
  iconBefore: PropTypes.string,
  iconAfter: PropTypes.string,
  tooltip: PropTypes.string,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isCircle: PropTypes.bool,
  isExpanded: PropTypes.bool,
  debounceTime: PropTypes.number,
  children: PropTypes.node,
  dataCy: PropTypes.string,
  theme: PropTypes.shape({}),
};

const defaultProps = {
  type: 'button',
  size: 'medium',
  variant: 'primary',
  isDisabled: false,
  isLoading: false,
  isExpanded: false,
  theme: theme,
};

const getButtonIconSize = size => {
  if (size === 'small') return 'small';
  if (size === 'medium') return 'medium';
  if (size === 'large') return 'large';
  if (size === 'xlarge') return 'large';
  return 'small';
};

export const ButtonGroup = props => {
  return <StyledButtonGroup {...props} />;
};

export const Button = forwardRef((props, ref) => {
  const {
    className,
    text,
    iconBefore,
    iconAfter,
    tooltip,
    onClick,
    isDisabled,
    isExpanded,
    isLoading,
    size,
    debounceTime,
    children,
  } = props;
  const classes = classNames(isExpanded && 'expanded', size && size, className);
  const handleClick =
    debounceTime > 0 ? debounce(onClick, debounceTime) : onClick;
  const spinnerSize = getIconSize(size);
  const iconSize = getButtonIconSize(size);
  const buttonProps = omit(props, [
    'buttonRef',
    'iconBefore',
    'iconAfter',
    'debounceTime',
    'text',
  ]);
  const getStyledButton = () => (
    <StyledButton
      ref={ref}
      onClick={handleClick}
      disabled={isDisabled}
      className={classes}
      data-testid="button"
      role="button"
      {...buttonProps}
    >
      {isLoading ? (
        <Spinner size={spinnerSize} data-testid="button-loading" />
      ) : null}
      {!isLoading && iconBefore ? (
        <Icon
          name={iconBefore}
          size={iconSize}
          color="white"
          data-testid="button-icon-before"
        />
      ) : null}
      {text || null}
      {children || null}
      {!isLoading && iconAfter ? (
        <Icon
          name={iconAfter}
          size={iconSize}
          color="white"
          data-testid="button-icon-after"
        />
      ) : null}
    </StyledButton>
  );
  return tooltip ? (
    <Tooltip content={tooltip}>{getStyledButton()}</Tooltip>
  ) : (
    getStyledButton()
  );
});

StyledButton.displayName = 'StyledButton';

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default withTheme(Button);
