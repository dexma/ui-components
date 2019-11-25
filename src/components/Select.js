import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ReactSelect, { components } from 'react-select';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';
import capitalize from 'lodash/capitalize';

import Icon from 'components/Icon';

import { StyledSelect } from 'styles/components/StyledSelect';

const propTypes = {
  ...GeneralPropTypes,
  children: PropTypes.node,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
};

const DropdownIndicator = props => {
  const iconName = props.selectProps.menuIsOpen ? 'chevron_up' : 'chevron_down';
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <Icon name={iconName} size="medium" />
      </components.DropdownIndicator>
    )
  );
};

const ClearIndicator = props => {
  return (
    components.ClearIndicator && (
      <components.ClearIndicator {...props}>
        <Icon name="close" size={17} />
      </components.ClearIndicator>
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

export const Select = ({ dataCy, theme, ...props }) => {
  return (
    <StyledSelect theme={theme}>
      <ReactSelect
        classNamePrefix="select-styled"
        optionClassName="select-option"
        components={{
          DropdownIndicator: selectProps =>
            DropdownIndicator({ ...selectProps }),
          ClearIndicator: selectProps => ClearIndicator({ ...selectProps }),
          Input: selectProps =>
            SelectInput({ ...selectProps, name: props.name }),
          Option: selectProps => Option({ ...selectProps, name: props.name }),
        }}
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
