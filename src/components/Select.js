import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import ReactSelect, { components } from 'react-select';
import omit from 'lodash/omit';
import { withTheme } from 'styled-components';
import get from 'lodash/get';

import { StyledSelect } from '../styles/components/StyledSelect';
import theme from '../styles/theme';
import withDataId from '../components/DataId/withDataId';

import Icon from './Icon';
import {
  fontWeightSemiBold,
  tagFontSize,
  tagLineHeight,
} from '../styles/selectors';

const propTypes = {
  /**
   * Is the select disabled
   */
  isDisabled: PropTypes.bool,
  /**
   * Is the select in a state of loading (async)
   */
  isLoading: PropTypes.bool,
  /**
   * Whether to enable search functionality
   */
  isSearchable: PropTypes.bool,
  /**
   * Is the select value clearable
   */
  isClearable: PropTypes.bool,
  /**
   * Support multiple selected options
   */
  isMulti: PropTypes.bool,
  /**
   * Remove focus from the input when the user selects an option (handy for dismissing the keyboard on touch devices)
   */
  blurInputOnSelect: PropTypes.bool,
  /**
   * Maximum height of the menu before scrolling
   */
  maxMenuHeight: PropTypes.number,
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
  isMulti: false,
  blurInputOnSelect: false,
  maxMenuHeight: 192,
  theme: theme,
  dataId: 'select',
};

const styles = {
  multiValue: (styles, state) => {
    return {
      ...styles,
      backgroundColor: get(theme.color, state.data.background || 'gray400'),
      borderRadius: '4px',
    };
  },
  multiValueLabel: (styles, state) => {
    return {
      ...styles,
      color: get(theme.color, state.data.color || 'white'),
      margin: '4px',
      fontSize: tagFontSize,
      fontWeight: fontWeightSemiBold,
      lineHeight: tagLineHeight,
    };
  },
  multiValueRemove: (styles, state) => {
    return {
      ...omit(styles, [':hover', 'backgroundColor']),
      color: get(theme.color, state.data.color || 'white'),
      cursor: 'pointer',
    };
  },
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

const MultiValueRemove = selectProps => {
  const color = selectProps.data.color || 'white';
  return (
    <components.MultiValueRemove {...selectProps}>
      <Icon
        className="icon-close"
        name="close"
        size="small"
        data-testid="select-clear-icon"
        color={color}
      />
    </components.MultiValueRemove>
  );
};

export const Select = forwardRef((props, ref) => {
  const { theme, isMulti, dataId } = props;
  const defaultValueSelect = props.defaultValue
    ? props.defaultValue.label
    : null;
  const titleSelect =
    !defaultValueSelect && props.value ? props.value.label : null;
  const selectProps = omit(props, ['theme', 'dataId']);
  return (
    <StyledSelect
      theme={theme}
      isMulti={isMulti}
      title={titleSelect}
      data-testid="select"
      data-id={dataId}
    >
      <ReactSelect
        ref={ref}
        classNamePrefix="select-styled"
        optionClassName="select-option"
        components={{
          DropdownIndicator: selectProps =>
            DropdownIndicator({ ...selectProps }),
          ClearIndicator: selectProps => ClearIndicator({ ...selectProps }),
          Input: selectProps =>
            SelectInput({ ...selectProps, name: props.name }),
          Option: selectProps => Option({ ...selectProps, name: props.name }),
          MultiValueRemove: selectProps => MultiValueRemove(selectProps),
        }}
        {...selectProps}
        styles={styles}
      />
    </StyledSelect>
  );
});

StyledSelect.displayName = 'StyledSelect';

Select.propTypes = propTypes;
Select.defaultProps = defaultProps;

export default withTheme(withDataId(Select));
