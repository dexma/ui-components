import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ReactSelect, { components } from 'react-select';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';
import capitalize from 'lodash/capitalize';

import Icon from 'components/Icon';

import { StyledSelect } from 'styles/components/StyledSelect';

const propTypes = {
  ...GeneralPropTypes,
  icon: PropTypes.string,
  children: PropTypes.node,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
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

const Select = ({ dataCy, theme, ...props }) => {
  return (
    <StyledSelect theme={theme}>
      <ReactSelect
        classNamePrefix="select-styled"
        optionClassName="select-option"
        components={{
          DropdownIndicator: selectProps =>
            DropdownIndicator({ ...selectProps, icon: props.icon }),
          Input: selectProps =>
            SelectInput({ ...selectProps, name: props.name }),
          Option: selectProps => Option({ ...selectProps, name: props.name }),
        }}
        isClearable={false}
        blurInputOnSelect={false}
        dataCy={dataCy}
        {...props}
      />
    </StyledSelect>
  );
};

StyledSelect.displayName = 'StyledSelect';

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default memo(Select);
