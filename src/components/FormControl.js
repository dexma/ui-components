import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import find from 'lodash/find';
import omit from 'lodash/omit';
import { withTheme } from 'styled-components';

import Input from './Input';
import Select from './Select';
import Checkbox from './Checkbox';
import DatePicker from './DatePicker';

import { StyledFormControl } from '../styles/components/StyledFormControl';
import theme from '../styles/theme';
import ColorPicker from './ColorPicker';

const propTypes = {
  /**
   * The component that you want to see, you can pass the props as a normal component
   */
  control: PropTypes.oneOf([
    'Input',
    'Checkbox',
    'Textarea',
    'Select',
    'ColorPicker',
    'DatePicker',
    'LegacyDatePicker',
  ]).isRequired,
  /**
   * Whether Alert can be closed
   */
  error: PropTypes.bool,
  /**
   * Show the icon of the type you passed: `success`, `info`, `warning`, `error`
   */
  success: PropTypes.bool,
  /**
   * Additional content description of Alert
   */
  message: PropTypes.string,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  error: false,
  success: false,
  theme: theme,
};

const FormControl = forwardRef((props, ref) => {
  const { control, value, error, success, message, options, theme } = props;
  const newProps = omit(props, ['control', 'error', 'success', 'helper']);
  return (
    <StyledFormControl theme={theme} error={error} success={success}>
      {control === 'Input' && (
        <Input
          type="text"
          className="form-control-input"
          title={value}
          ref={ref}
          {...newProps}
        />
      )}
      {control === 'Checkbox' && (
        <Checkbox className="form-control-checkbox" ref={ref} {...newProps} />
      )}
      {control === 'Textarea' && (
        <textarea
          rows="2"
          className="form-control-textarea"
          ref={ref}
          {...newProps}
        />
      )}
      {control === 'Select' && (
        <Select
          className="form-control-select"
          isSearchable
          ref={ref}
          {...newProps}
          value={find(options, { value })}
        />
      )}
      {control === 'LegacyDatePicker' && (
        <DatePicker
          variant="legacy"
          className="form-control-date-picker"
          initialStartDate={value && value.startDate}
          initialEndDate={value && value.startDate}
          firstDayOfWeek={1}
          ref={ref}
          {...newProps}
        />
      )}
      {control === 'DatePicker' && (
        <DatePicker
          className="form-control-date-picker"
          ref={ref}
          {...newProps}
        />
      )}
      {control === 'ColorPicker' && <ColorPicker ref={ref} {...newProps} />}
      {message && <span className="form-control-message">{message}</span>}
    </StyledFormControl>
  );
});

StyledFormControl.displayName = 'StyledFormControl';

FormControl.propTypes = propTypes;
FormControl.defaultProps = defaultProps;

export default withTheme(FormControl);
