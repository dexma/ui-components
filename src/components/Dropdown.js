/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Popover } from 'antd';

import Button from './Button';

import theme from '../styles/theme';
import { StyledGlobalDropdown } from '../styles/components/StyledDropdown';

const propTypes = {
  /**
   * The position of the dropdown relative to the target
   */
  placement: PropTypes.oneOf([
    'top',
    'left',
    'right',
    'bottom',
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom',
  ]),
  /**
   * Tooltip trigger mode. Could be multiple by passing an array
   */
  trigger: PropTypes.oneOf(['hover', 'focus', 'click']),
  /**
   * Array of objects, each object represents the button contract for example `{text: 'Edit',
    iconBefore: 'edit'}` so please check the <a href="https://dexma.github.io/ui-components/?path=/docs/button--buttons">buttons</a>
   */
  content: PropTypes.arrayOf(PropTypes.object),
  /**
   * Set the text of the dropdown button
   */
  text: PropTypes.string,
  /**
   * Theme json based
   */
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
  return content.map((props, i) => {
    return (
      <Button
        key={i}
        className="dropdown-button-item"
        variant="icon"
        {...props}
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
      {text ? (
        <Button
          data-testid="dropdown-button-text"
          className="dropdown-button"
          variant="icon"
          iconBefore={icon}
          text={text}
        ></Button>
      ) : (
        <Button
          data-testid="dropdown-button-icon"
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

export default withTheme(Dropdown);
