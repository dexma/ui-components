/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Dropdown as DropdownAntd } from 'antd';
import Button, { BUTTON_VARIANT } from './Button';
import theme from '../styles/theme';
import {
  StyledGlobalDropdown,
  StyledDropdownButton,
} from '../styles/components/StyledDropdown';

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
   * Tooltip trigger mode. MUST be pased in an array of either "hover or "click".
   */
  trigger: PropTypes.oneOf([['hover'], ['click']]),
  /**
   * Array of objects, which have the same contract as the Button contract for example `{text: 'Edit',
    iconBefore: 'edit'}`. Please check the <a href="https://dexma.github.io/ui-components/?path=/docs/button--buttons">buttons</a> 
    for further reference.
   */
  content: PropTypes.arrayOf(PropTypes.shape({})),
  /**
   * Set the text of the dropdown button
   */
  text: PropTypes.string,
  /**
   * Set the variant of the dropdown button
   */
  variant: PropTypes.oneOf(BUTTON_VARIANT),
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  placement: 'bottomRight',
  trigger: ['hover'],
  text: null,
  theme: theme,
};

const getContent = content => {
  return content.map((props, i) => {
    const { icon, onClick, variant, ...rest } = props;
    return {
      label: (
        <StyledDropdownButton
          key={i}
          className="dropdown-button-item"
          variant={variant ?? 'icon'}
          iconBefore={icon}
          onClick={onClick}
          {...rest}
        />
      ),
    };
  });
};

export const Dropdown = props => {
  const { trigger, text, placement, content, icon, variant } = props;
  const renderContent = content ? getContent(content) : null;

  return (
    <>
      <StyledGlobalDropdown {...props} />
      <DropdownAntd
        menu={{ items: renderContent }}
        placement={placement}
        trigger={trigger}
      >
        {text ? (
          <Button
            data-testid="dropdown-button-text"
            className="dropdown-button"
            variant={variant ?? 'icon'}
            iconBefore={icon}
            text={text}
          ></Button>
        ) : (
          <Button
            data-testid="dropdown-button-icon"
            className="dropdown-button"
            variant={variant ?? 'icon-secondary'}
            iconBefore={icon}
            text={null}
            isCircle
          ></Button>
        )}
      </DropdownAntd>
    </>
  );
};

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;

export default withTheme(Dropdown);
