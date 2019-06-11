import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ReactSelect, { components } from 'react-select';
import { GeneralPropTypes } from 'utils/propTypes';
import capitalize from 'lodash/capitalize';

import Icon from 'components/Icon';

const propTypes = {
  ...GeneralPropTypes,
  icon: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  classNamePrefix: 'dexma-select',
  icon: 'menu',
};

const DropdownIndicator = props => {
  const { icon } = props;
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <Icon name={icon} />
      </components.DropdownIndicator>
    )
  );
};

const SelectInput = ({ children, ...props }) => {
  return (
    <components.Input
      data-cy={`SelectInput-${capitalize(props.name)}`}
      {...props}
    />
  );
};

const Option = props => {
  return (
    <div data-cy={`SelectOption-${capitalize(props.name)}`}>
      <components.Option {...props}>{props.label}</components.Option>
    </div>
  );
};

const Select = ({ className, classNamePrefix, dataCy, ...props }) => {
  const classes = classNames(className, classNamePrefix);

  return (
    <ReactSelect
      className={classes}
      optionClassName="select-option"
      classNamePrefix={classNamePrefix}
      components={{
        DropdownIndicator: selectProps =>
          DropdownIndicator({ ...selectProps, icon: props.icon }),
        Input: selectProps => SelectInput({ ...selectProps, name: props.name }),
        Option: selectProps => Option({ ...selectProps, name: props.name }),
      }}
      isClearable={false}
      blurInputOnSelect={false}
      dataCy={dataCy}
      {...props}
    />
  );
};

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default memo(Select);
