/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Switch as SwitchAntDesign } from 'antd';

import theme from '../styles/theme';
import { StyledSwitch } from '../styles/components/StyledSwitch';
import withDataId from '../components/DataId/withDataId';

const propTypes = {
  /**
   * Set default value
   */
  defaultChecked: PropTypes.bool,
  /**
   * Set the switch to disabled
   */
  disabled: PropTypes.bool,
  /**
   * Set the size of switch
   */
  size: PropTypes.oneOf(['default', 'small']),
  /**
   * Callback onChange
   */
  onChange: PropTypes.func,
  /**
   * Callback onClick
   */
  onClick: PropTypes.func,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
  /**
   * data-id attribute to identfy the element in DOM
   */
  dataId: PropTypes.string,
};

const defaultProps = {
  defaultChecked: false,
  disabled: false,
  size: 'default',
  theme: theme,
  dataId: 'switch',
};

export const Switch = props => {
  const { defaultChecked, disabled, size, onChange, onClick, dataId } = props;
  return (
    <StyledSwitch {...props}>
      <SwitchAntDesign
        data-testid="switch"
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
        onClick={onClick}
        size={size}
        data-id={dataId}
      />
    </StyledSwitch>
  );
};

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;

export default withTheme(withDataId(Switch));
