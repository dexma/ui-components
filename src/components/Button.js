/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import { GeneralPropTypes } from 'utils/propTypes';

import Icon from 'components/Icon';

const propTypes = {
  ...GeneralPropTypes,
  id: PropTypes.string,
  buttonRef: PropTypes.func,
  text: PropTypes.string,
  type: PropTypes.oneOf(['button', 'reset', 'submit', null]),
  iconBefore: PropTypes.string,
  iconAfter: PropTypes.string,
  tooltip: PropTypes.string,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  isActive: PropTypes.bool,
  isDisabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  isExpanded: PropTypes.bool,
  isLoading: PropTypes.bool,
  debounceTime: PropTypes.number,
  children: PropTypes.node,
};

const defaultProps = {
  classNamePrefix: 'button',
  type: 'button',
  isActive: false,
  isDisabled: false,
  isLoading: false,
  size: 'small',
};

const Button = ({
  id,
  buttonRef,
  text,
  type,
  className,
  classNamePrefix,
  iconBefore,
  iconAfter,
  tooltip,
  onClick,
  onFocus,
  isActive,
  isDisabled,
  isExpanded,
  isLoading,
  size,
  debounceTime,
  dataCy,
  children,
}) => {
  const classes = classNames(
    className,
    classNamePrefix,
    isActive && 'active',
    isExpanded && 'expanded',
    size && size
  );
  const handleClick =
    debounceTime > 0 ? debounce(onClick, debounceTime) : onClick;
  return (
    <button
      id={id}
      ref={buttonRef}
      type={type}
      data-tooltip={tooltip}
      onClick={handleClick}
      onFocus={onFocus}
      disabled={isDisabled}
      className={classes}
      data-cy={dataCy}
    >
      {isLoading ? (
        <Icon className="animate-spin" name="spin5" size={size} />
      ) : null}
      {!isLoading && iconBefore ? <Icon name={iconBefore} size={size} /> : null}
      {text || null}
      {children || null}
      {!isLoading && iconAfter ? <Icon name={iconAfter} size={size} /> : null}
    </button>
  );
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;

export default Button;
