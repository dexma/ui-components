import React from 'react';
import { withTheme } from 'styled-components';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { Checkbox as CheckboxAntd, ConfigProvider } from 'antd';
import theme from '../styles/theme';

const propTypes = {
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  theme: theme,
};

export const Checkbox = props => {
  const { checked, disabled, className, theme, children } = props;
  const checkboxProps = omit(props, [
    'children',
    'disabled',
    'checked',
    'className',
  ]);

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: theme.primary,
        },
      }}
    >
      <CheckboxAntd
        disabled={disabled}
        checked={checked}
        className={className}
        {...checkboxProps}
      >
        {children && <span>{children}</span>}
      </CheckboxAntd>
    </ConfigProvider>
  );
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default withTheme(Checkbox);
