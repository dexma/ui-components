/* eslint-disable react/button-has-type */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Popover } from 'antd';

import theme from '../styles/theme';
import Button from './Button';
import { StyledGlobalDropdown } from '../styles/components/StyledDropdown';

const propTypes = {
  placement: PropTypes.string,
  trigger: PropTypes.string,
  content: PropTypes.func,
  children: PropTypes.node,
  text: PropTypes.string,
  theme: PropTypes.shape({}),
};

const defaultProps = {
  placement: 'bottomRight',
  trigger: 'hover',
  variant: 'primary',
  text: null,
  theme: theme,
};

const getContent = content => {
  return content.map(itemContent => {
    const { icon, text, onClick } = itemContent;
    return (
      <Button
        className="dropdown-button-item"
        variant="icon"
        onClick={onClick}
        iconBefore={icon}
        text={text}
      />
    );
  });
};

export const Dropdown = props => {
  const { trigger, text, placement, content, icon } = props;
  const renderContent = content ? getContent(content) : null;
  return (
    <Popover
      content={renderContent}
      title={null}
      trigger={trigger}
      placement={placement}
    >
      <StyledGlobalDropdown {...props} />
      {text && (
        <Button
          className="dropdown-button"
          variant="icon"
          iconBefore={icon}
          text={text}
        ></Button>
      )}
      {!text && (
        <Button
          className="dropdown-button"
          variant="icon-secondary"
          iconBefore={icon}
          text={null}
          isCircle
        ></Button>
      )}
    </Popover>
  );
};

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default memo(withTheme(Dropdown));
