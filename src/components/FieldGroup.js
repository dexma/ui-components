import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import find from 'lodash/find';
import set from 'lodash/set';
import { GeneralPropTypes } from 'utils/propTypes';

import Icon from 'components/Icon';

const propTypes = {
  ...GeneralPropTypes,
  type: PropTypes.oneOf(['radio', 'checkbox']).isRequired,
  values: PropTypes.arrayOf(PropTypes.object),
  selectedValues: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  size: PropTypes.string,
  name: PropTypes.string,
  vertical: PropTypes.bool,
  onChange: PropTypes.func,
  onFieldClick: PropTypes.func,
};

const defaultProps = {
  type: 'radio',
  classNamePrefix: 'field-group',
  vertical: false,
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

const FieldGroup = ({
  className,
  classNamePrefix,
  dataCy,
  type,
  values,
  selectedValues,
  size,
  name,
  vertical,
  onChange,
  onFieldClick,
}) => {
  const classes = classNames(
    className,
    classNamePrefix,
    vertical ? 'vertical' : 'horizontal'
  );
  const selectedField = getSelectedField(type, values, selectedValues, 'value');
  return (
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
            key={id}
            data-tooltip={tooltip}
            htmlFor={id}
            onClick={() => onFieldClick && onFieldClick(item)}
          >
            {!icon && label ? <span>{label}</span> : null}
            {icon ? <Icon name={icon} size={size} /> : null}
            <input
              id={id}
              onChange={() => onChange && onChange(item)}
              type={type}
              name={name}
              defaultValue={value}
              defaultChecked={isSelected}
            />
          </label>
        );
      })}
    </div>
  );
};

FieldGroup.propTypes = propTypes;
FieldGroup.defaultProps = defaultProps;

export default memo(FieldGroup);
