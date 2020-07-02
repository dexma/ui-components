import React, { memo } from 'react';
import PropTypes from 'prop-types';
import ReactSelect, { components } from 'react-select';
import omit from 'lodash/omit';
import theme from 'styles/theme';

import Icon from 'components/Icon';

import { StyledSelect } from 'styles/components/StyledSelect';

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
  const titleSelect =
    props.defaultValue && props.defaultValue ? props.defaultValue.label : null;
  return (
    <StyledSelect theme={theme} isMulti={isMulti} title={titleSelect}>
      <ReactSelect
        data-testid="select"
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

export default memo(Select);
