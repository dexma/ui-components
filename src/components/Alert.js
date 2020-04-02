import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Icon from 'components/Icon';
import { Alert as AlertAntDesign } from 'antd';
import omit from 'lodash/omit';

import theme from 'styles/theme';
import { StyledAlert } from 'styles/components/StyledAlert';

const propTypes = {
  theme: PropTypes.shape({}),
  type: PropTypes.string,
};

const defaultProps = {
  theme: theme,
  type: 'warning',
};

export const Alert = props => {
  const { theme, type, closable } = props;
  let renderIcon = null;
  if (type === 'warning') {
    renderIcon = 'circle_info_outline';
  }
  if (type === 'info') {
    renderIcon = 'alert_sign';
  }
  if (type === 'success') {
    renderIcon = 'circle_check_outline';
  }
  if (type === 'error') {
    renderIcon = 'circle_delete_outline';
  }
  const alertProps = omit(props, ['theme']);
  return (
    <StyledAlert theme={theme}>
      <AlertAntDesign
        {...alertProps}
        icon={
          <Icon
            name={renderIcon}
            size="medium"
            className="alert-icon"
            data-testid="alert-icon"
          />
        }
        closeText={
          closable ? (
            <Icon
              name="close"
              size="medium"
              className="close-icon"
              data-testid="alert-close-icon"
            />
          ) : null
        }
        data-testid="alert"
      />
    </StyledAlert>
  );
};

StyledAlert.displayName = 'StyledAlert';

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;

export default withTheme(Alert);
