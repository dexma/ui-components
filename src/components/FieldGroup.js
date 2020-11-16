import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import find from 'lodash/find';
import set from 'lodash/set';
import { withTheme } from 'styled-components';

import omit from 'lodash/omit';
import Icon from './Icon';
import { BUTTON_SIZE } from './Button';
import { StyledFieldGroup } from '../styles/components/StyledFieldGroup';
import theme from '../styles/theme';

const propTypes = {
  /**
   * Set the type of input
   */
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  /**
   * Set values
   */
  values: PropTypes.arrayOf(PropTypes.object),
  /**
   * Set selected values default
   */
  selectedValues: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  /**
   * The size of buttons, check the button documentation
   */
  size: PropTypes.oneOf(BUTTON_SIZE),
  /**
   * The name related with the input
   */
  name: PropTypes.string,
  /**
   * Set vertical position of items
   */
  vertical: PropTypes.bool,
  /**
   * Invoked once the field change.
   */
  onChange: PropTypes.func,
  /**
   * Invoked once the field has been clicked.
   */
  onFieldClick: PropTypes.func,
};

const defaultProps = {
  type: 'radio',
  vertical: false,
  size: 'medium',
  theme: theme,
};

const getSelectedField = (type, values, selectedValues, selectedProp) => {
  let selectedItem = false;
  if (type === 'radio') {
    const objectToSelect = set({}, selectedProp, selectedValues);
    selectedItem = find(values, objectToSelect) || false;
  }
  if (type === 'checkbox') {
    selectedItem = selectedValues.map(item => {
      const objectToSelect = set({}, selectedProp, item);
      return find(values, objectToSelect) || false;
    });
  }
  return selectedItem;
};

const isFieldSelected = (type, item, selectedField) => {
  let isEqual = false;
  if (type === 'radio') {
    isEqual = !!(item === selectedField);
  }
  if (type === 'checkbox') {
    isEqual = !!find(selectedField, item);
  }
  return isEqual;
};

export const FieldGroup = props => {
  const {
    type,
    values,
    selectedValues,
    size,
    name,
    vertical,
    onChange,
    onFieldClick,
    theme,
  } = props;
  const selectedField = getSelectedField(type, values, selectedValues, 'value');
  const fieldGroupProps = omit(props, [
    'type',
    'values',
    'selectedValues',
    'name',
    'onChange',
    'onFieldClick',
  ]);
  return (
    <StyledFieldGroup
      theme={theme}
      size={size}
      data-testid="field-group"
      vertical={vertical}
      {...fieldGroupProps}
    >
      {values.map(item => {
        const { id, value, label, icon, tooltip } = item;
        const isSelected = isFieldSelected(type, item, selectedField);
        const classesItem = classNames(
          'item',
          `item-${label}`,
          isSelected && 'active'
        );
        return (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <label
            className={classesItem}
            data-tooltip={tooltip}
            htmlFor={id}
            key={id}
            onClick={() => onFieldClick && onFieldClick(item)}
          >
            {!icon && label ? label : null}
            {icon ? <Icon name={icon} size={size} color="white" /> : null}
            <input
              id={id}
              onChange={() => onChange && onChange(item)}
              type={type}
              name={name}
              value={value}
              checked={isSelected}
            />
          </label>
        );
      })}
    </StyledFieldGroup>
  );
};

StyledFieldGroup.displayName = 'StyledFieldGroup';

FieldGroup.propTypes = propTypes;
FieldGroup.defaultProps = defaultProps;

export default withTheme(FieldGroup);
