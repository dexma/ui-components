import React, { useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import omit from 'lodash/omit';

import { StyledInput } from '../styles/components/StyledInput';
import theme from '../styles/theme';
import Icon from './Icon';
import Spinner from './Spinner';

const propTypes = {
  /**
   * Placeholder input
   */
  placeholder: PropTypes.string,
  /**
   * Id
   */
  id: PropTypes.string,
  /**
   * Prefix name of a the icon
   */
  icon: PropTypes.string,
  /**
   * Label text
   */
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Input value
   */
  value: PropTypes.string,
  /**
   * Add loader spinner to the input
   */
  isLoading: PropTypes.bool,
  /**
   * Override type="text"
   */
  type: PropTypes.string,
  /**
   * Override name="text"
   */
  name: PropTypes.string,
  /**
   * Callback onFocus
   */
  onFocus: PropTypes.func,
  /**
   * Callback onChange
   */
  onChange: PropTypes.func,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  theme: theme,
};

export const Input = forwardRef((props, ref) => {
  const [focused, setFocused] = useState(false);
  const { icon, isLoading, onFocus, onBlur, children } = props;
  const newProps = omit(props, [
    'placeholder',
    'id',
    'label',
    'value',
    'type',
    'name',
    'onChange',
    'onFocus',
    'onBlur',
  ]);
  const inputProps = omit(props, [
    'icon',
    'isLoading',
    'theme',
    'children',
    'onFocus',
    'onBlur',
  ]);
  const handleOnFocus = e => {
    setFocused(true);
    onFocus && onFocus(e);
  };
  const handleOnBlur = e => {
    setFocused(false);
    onBlur && onBlur(e);
  };
  return (
    <StyledInput data-testid="input" focused={focused} {...newProps}>
      {icon && (
        <div className="icon-container">
          <Icon name={icon} size={20} color="gray500" />
        </div>
      )}
      <input
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        {...inputProps}
        ref={ref}
        data-testid="input-element"
      />
      {isLoading && <Spinner size={20} />}
      {children && children}
    </StyledInput>
  );
});

StyledInput.displayName = 'StyledInput';

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default withTheme(Input);
