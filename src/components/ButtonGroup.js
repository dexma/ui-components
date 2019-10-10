import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';
import { withTheme } from 'styled-components';

import { StyledButtonGroup } from 'styles/components/StyledButtonGroup';

const propTypes = {
  ...GeneralPropTypes,
  vertical: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  vertical: false,
};

const ButtonGroup = ({ vertical, dataCy, theme, children, ...props }) => {
  const classes = classNames(vertical ? 'vertical' : 'horizontal');
  return (
    <StyledButtonGroup
      data-cy={dataCy}
      className={classes}
      role="group"
      theme={theme}
      {...props}
    >
      {children || null}
    </StyledButtonGroup>
  );
};

StyledButtonGroup.displayName = 'StyledButtonGroup';

ButtonGroup.propTypes = propTypes;
ButtonGroup.defaultProps = defaultProps;

export default memo(withTheme(ButtonGroup));
