import React from 'react';
import PropTypes from 'prop-types';
import ReactSelect, { components } from 'react-select';
import omit from 'lodash/omit';
import { withTheme } from 'styled-components';
import theme from '../styles/theme';
import { StyledSelect } from '../styles/components/StyledSelect';
import Icon from './Icon';

const propTypes = {
  theme: PropTypes.shape({}),
  children: PropTypes.node,
};

const defaultProps = {
  theme: theme,
};

const DropdownIndicator = props => {
  const iconName = props.selectProps.menuIsOpen ? 'chevron_up' : 'chevron_down';
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <Icon
          name={iconName}
          size="medium"
          data-testid="select-dropdown-icon"
        />
      </components.DropdownIndicator>
    )
  );
};

const ClearIndicator = props => {
  return (
    components.ClearIndicator && (
      <components.ClearIndicator {...props}>
        <Icon name="close" size={17} data-testid="select-clear-icon" />
      </components.ClearIndicator>
    )
  );
};

const SelectInput = ({ children, ...props }) => {
  return <components.Input data-testid="select-input" {...props} />;
};

const Option = props => {
  return (
    <div data-testid="select-option" title={props.label}>
      <components.Option {...props}>{props.label}</components.Option>
    </div>
  );
};

export const Select = props => {
  const { theme, isMulti } = props;
  const selectProps = omit(props, ['theme']);
  const defaultValueSelect = props.defaultValue
    ? props.defaultValue.label
    : null;
  const titleSelect =
    !defaultValueSelect && props.value ? props.value.label : null;
  return (
    <StyledSelect
      theme={theme}
      isMulti={isMulti}
      title={titleSelect}
      data-testid="select"
    >
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
        maxMenuHeight={192}
        {...selectProps}
      />
    </StyledSelect>
  );
};

StyledSelect.displayName = 'StyledSelect';

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default withTheme(Select);
