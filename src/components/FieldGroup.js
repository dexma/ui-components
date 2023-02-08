import classNames from 'classnames';
import { uniqueId } from 'lodash';
import find from 'lodash/find';
import omit from 'lodash/omit';
import set from 'lodash/set';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'styled-components';
import withDataId from '../components/DataId/withDataId';
import { StyledFieldGroup } from '../styles/components/StyledFieldGroup';
import theme from '../styles/theme';
import { BUTTON_SIZE } from './Button';
import Icon from './Icon';
import { Tooltip } from './Tooltip';

const propTypes = {
  /**
   * Set the type of input
   */
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  /**
   * Set the style variant of the field group
   */
  variant: PropTypes.oneOf(['joined', 'split', 'custom']).isRequired,
  /**
   * Set values
   */
  values: PropTypes.arrayOf(PropTypes.shape({})),
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
  variant: 'joined',
  type: 'radio',
  vertical: false,
  size: 'medium',
  theme: theme,
  dataId: 'field-group',
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
    variant,
    values,
    selectedValues,
    size,
    name,
    vertical,
    onChange,
    onFieldClick,
    theme,
    dataId,
  } = props;
  const uniqueValues =
    values.length > 0
      ? [
          ...values.map(value => ({
            ...value,
            uniqueId: uniqueId(value.id),
          })),
        ]
      : [];
  const selectedField = getSelectedField(
    type,
    uniqueValues,
    selectedValues,
    'value'
  );
  const fieldGroupProps = omit(props, [
    'values',
    'selectedValues',
    'name',
    'onChange',
    'onFieldClick',
    'dataId',
  ]);
  const handleOnFieldClick = item => {
    const { uniqueId, ...itemRest } = item;
    onFieldClick(itemRest);
  };

  const handleOnChange = item => {
    const { uniqueId, ...itemRest } = item;
    onChange(itemRest);
  };

  return (
    <StyledFieldGroup
      theme={theme}
      size={size}
      data-testid="field-group"
      vertical={vertical}
      variant={variant}
      {...fieldGroupProps}
      data-id={dataId}
    >
      {uniqueValues.map(item => {
        const { uniqueId, value, label, icon, tooltip, isDisabled } = item;
        const isSelected = isFieldSelected(type, item, selectedField);
        const classesItem = classNames(
          'item',
          `item-${label}`,
          isSelected && 'active',
          isDisabled && 'disabled'
        );
        const getLabel = () => (
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          <label
            className={classesItem}
            data-tooltip={tooltip}
            htmlFor={`${uniqueId}_${value}`}
            key={`${uniqueId}_${value}`}
            onClick={() => onFieldClick && handleOnFieldClick(item)}
            data-testid="field-group-label"
          >
            {!icon && label ? label : null}
            {icon ? (
              <Icon
                name={icon}
                size={
                  variant === 'custom' && size === 'large' ? 'xlarge' : size
                }
                color="white"
              />
            ) : null}
            <input
              id={`${uniqueId}_${value}`}
              onChange={() => onChange && handleOnChange(item)}
              type={type}
              name={name}
              value={value}
              checked={isSelected}
              data-testid="field-group-input"
              disabled={isDisabled}
            />
          </label>
        );
        return tooltip ? (
          <Tooltip title={tooltip} key={`tooltip_${uniqueId}`}>
            {getLabel()}
          </Tooltip>
        ) : (
          getLabel()
        );
      })}
    </StyledFieldGroup>
  );
};

StyledFieldGroup.displayName = 'StyledFieldGroup';

FieldGroup.propTypes = propTypes;
FieldGroup.defaultProps = defaultProps;

export default withTheme(withDataId(FieldGroup));
