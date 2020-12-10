import React from 'react';
import { withTheme } from 'styled-components';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

import { StyledCheckbox } from '../styles/components/StyledCheckbox';
import theme from '../styles/theme';

const propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

const defaultProps = {
  theme: theme,
};

export const Checkbox = props => {
  const { checked, disabled, className, children, theme } = props;
  const inputProps = omit(props, ['children']);
  const classString = classNames(className, {
    'ant-checkbox': true,
    'ant-checkbox-checked': checked,
    'ant-checkbox-disabled': disabled,
  });
  return (
    <StyledCheckbox className="ant-checkbox-wrapper" theme={theme}>
      <span className={classString}>
        <input type="checkbox" {...inputProps} />
        <span className="ant-checkbox-inner" />
      </span>
      {children && <span>{children}</span>}
    </StyledCheckbox>
  );
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default withTheme(Checkbox);
