import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import find from 'lodash/find';
import set from 'lodash/set';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';
import { withTheme } from 'styled-components';

import Icon from 'components/Icon';
import { BUTTON_SIZE } from 'components/Button';

import { StyledFieldGroup } from 'styles/components/StyledFieldGroup';

const propTypes = {
  ...GeneralPropTypes,
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  values: PropTypes.arrayOf(PropTypes.object),
  selectedValues: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  size: PropTypes.oneOf(BUTTON_SIZE),
  name: PropTypes.string,
  vertical: PropTypes.bool,
  onChange: PropTypes.func,
  onFieldClick: PropTypes.func,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  type: 'radio',
  vertical: false,
  size: 'small',
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

export const FieldGroup = ({
  type,
  values,
  selectedValues,
  size,
  name,
  vertical,
  onChange,
  onFieldClick,
  dataCy,
  theme,
}) => {
  const classes = classNames(vertical ? 'vertical' : 'horizontal');
  const selectedField = getSelectedField(type, values, selectedValues, 'value');
  return (
    <StyledFieldGroup theme={theme} size={size}>
      <div data-cy={dataCy} className={classes}>
        {values.map(item => {
          const { id, value, label, icon, tooltip } = item;
          const isSelected = isFieldSelected(type, item, selectedField);
          const classesItem = classNames(
            'item',
            `item-${label}`,
            isSelected && 'active'
          );
          return (
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
      </div>
    </StyledFieldGroup>
  );
};

StyledFieldGroup.displayName = 'StyledFieldGroup';

FieldGroup.propTypes = propTypes;
FieldGroup.defaultProps = defaultProps;

export default memo(withTheme(FieldGroup));
