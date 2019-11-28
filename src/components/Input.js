import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Icon from 'components/Icon';

import { StyledInput } from 'styles/components/StyledInput';
import theme from 'styles/theme';
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
   * Input initial value
   */
  defaultValue: PropTypes.string,
  /**
   * Input value
   */
  value: PropTypes.string,
  /**
   * Add "valid" validation styles to the input
   */
  isValid: PropTypes.bool,
  /**
   * Add "error" validation styles to the input
   */
  hasError: PropTypes.bool,
  /**
   * Disabled input
   */
  isDisabled: PropTypes.bool,
  /**
   * Custom success message
   */
  success: PropTypes.string,
  /**
   * Custom error message
   */
  error: PropTypes.string,
  /**
   * Override type="text"
   */
  type: PropTypes.string,
  /**
   * Override name="text"
   */
  name: PropTypes.string,
  /**
   * Callback onChange
   */
  onChange: PropTypes.func,
  /**
   * Helper text
   */
  helper: PropTypes.string,
  /**
   * Component class
   */
  className: PropTypes.string,
  /**
   * The cypress identifier
   */
  dataCy: PropTypes.string,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
  /**
   * Children node
   */
  children: PropTypes.node,
};

const defaultProps = {
  theme: theme,
};

export const Input = props => {
  const { icon, isLoading, theme, children } = props;
  return (
    <StyledInput icon={icon} isLoading={isLoading} theme={theme}>
      {icon && (
        <div className="icon-container">
          <Icon name={icon} size={20} color="gray500" />
        </div>
      )}
      <input {...props} />
      {isLoading && <Spinner size={20} />}
      {children && children}
    </StyledInput>
  );
};

StyledInput.displayName = 'StyledInput';

Input.propTypes = propTypes;
Input.defaultProps = defaultProps;

export default memo(withTheme(Input));
