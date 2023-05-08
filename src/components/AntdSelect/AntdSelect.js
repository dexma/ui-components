import { Select } from 'antd';
import PropTypes from 'prop-types';
import React, { forwardRef, useCallback, useRef, useState } from 'react';
import { withTheme } from 'styled-components';
import { get, omit } from 'lodash';
import theme from '../../styles/theme';
import Icon from '../Icon';
import {
  SelectOptionStyle,
  StyledAntdSelectDropdown,
  StyledSelectOption,
  StyledSpanOption,
  StyledTagOption,
} from '../../styles/components/StyledAntdSelect';
import { filterOption, getOptionsBySearch } from './selectUtils';
import ButtonPaginationSelector from './ButtonPaginationSelector';

export const tagRenderButtonPagination = (props, options) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <StyledTagOption
      color={options.filter(element => element.value === value)[0].color}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 4, padding: '0px 4px' }}
      data-testid={`tag-option-selected-${value}`}
    >
      {label}
    </StyledTagOption>
  );
};

export const dropdownRenderSelectAntd = (
  menu,
  pageSize,
  currentPage,
  options,
  handleChangePage,
  handleSelectAll,
  text,
  searchValue,
  showDropdown,
  mode
) => {
  return (
    <>
      <StyledAntdSelectDropdown data-testid="select-dropdown">
        {menu}
        {pageSize !== undefined && ['multiple', 'tags'].includes(mode) && (
          <ButtonPaginationSelector
            pageSize={pageSize}
            currentPage={currentPage}
            handleSelectAll={handleSelectAll}
            onPageChange={handleChangePage}
            options={options}
            text={text}
            searchValue={searchValue}
            showDropdown={showDropdown}
          />
        )}
      </StyledAntdSelectDropdown>
    </>
  );
};

export const renderSpanBoldMatchOption = (option, searchValue) => {
  if (searchValue === '') {
    return (
      <StyledSpanOption data-testid={`option-span-${option}`}>
        {option}
      </StyledSpanOption>
    );
  }
  const parsedSearchValue = searchValue.includes('*')
    ? searchValue.split('*')[0]
    : searchValue;
  const matchIndex = option
    .toLowerCase()
    .indexOf(parsedSearchValue.toLowerCase());
  if (matchIndex === -1) {
    return (
      <StyledSpanOption data-testid={`option-span-${option}`}>
        {option}
      </StyledSpanOption>
    );
  }

  const beforeMatch = option.substring(0, matchIndex);
  const match = option.substring(
    matchIndex,
    matchIndex + parsedSearchValue.length
  );
  const afterMatch = option.substring(matchIndex + parsedSearchValue.length);

  return (
    <StyledSpanOption data-testid={`option-span-${option}-bold`}>
      {beforeMatch}
      <strong>{match}</strong>
      {afterMatch}
    </StyledSpanOption>
  );
};

export const optionsRenderer = (
  options,
  selectedValues,
  searchValue,
  pageSize
) => {
  const optionsToRender =
    searchValue !== '' ? options : getOptionsBySearch(options, searchValue);
  return (
    <>
      {optionsToRender.map(option => {
        const backgroundColor = selectedValues.includes(option.value)
          ? get(theme.color, option.color)
          : '#FFFFFF';
        return (
          <StyledSelectOption
            key={option.value}
            disabled={
              selectedValues.length >= pageSize &&
              !selectedValues.includes(option.value)
            }
            value={option.value}
            theme={theme}
            color={option.color}
            style={{
              backgroundColor,
              borderRadius: '4px',
            }}
            data-testid={`select-option-${option.value}`}
          >
            {selectedValues.includes(option.value) ? (
              <StyledTagOption color={option.color}>
                {option.label}
              </StyledTagOption>
            ) : (
              renderSpanBoldMatchOption(option.label, searchValue)
            )}
          </StyledSelectOption>
        );
      })}
    </>
  );
};

const AntdSelect = forwardRef((props, ref) => {
  const { dataId, defaultValues, mode, options, pageSize, text } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValues, setSelectedValues] = useState(defaultValues);
  const antdSelectProps = omit(props, [
    'dataId',
    'defaultValues',
    'mode',
    'options',
    'pageSize',
    'text',
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const sValue = useRef('');

  const handleChangePage = useCallback(page => {
    setCurrentPage(page);
  }, []);

  const handleSelectAll = () => {
    const actualPage = currentPage;
    const parsedSearchValue = searchValue.includes('*')
      ? searchValue.split('*')[0]
      : searchValue;
    const selectedOptions =
      searchValue !== ''
        ? getOptionsBySearch(options, parsedSearchValue)
        : options;
    const startIndex = (actualPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const slicedOptions = selectedOptions.slice(startIndex, endIndex);
    const allValues = slicedOptions.map(option => option.value);

    setSelectedValues(prevSelected => {
      const selected = allValues
        .filter(value => !prevSelected.includes(value))
        .splice(0, pageSize - prevSelected.length);
      const values = [...prevSelected, ...selected];
      return values;
    });
  };

  return (
    <>
      <SelectOptionStyle />
      <Select
        allowClear
        autoClearSearchValue={false}
        clearIcon={<Icon color="gray" name="close" size="small" />}
        data-testid={`${dataId}`}
        defaultValue={selectedValues}
        dropdownRender={menu =>
          dropdownRenderSelectAntd(
            menu,
            pageSize,
            currentPage,
            options,
            handleChangePage,
            handleSelectAll,
            text,
            searchValue,
            showDropdown,
            mode
          )
        }
        optionFilterProp="label"
        filterOption={filterOption}
        maxTagCount="responsive"
        menuItemSelectedIcon={<Icon color="white" name="close" size="small" />}
        mode={mode}
        searchValue={sValue.current}
        showArrow
        showSearch
        open={showDropdown}
        ref={ref}
        tagRender={props => tagRenderButtonPagination(props, options)}
        value={selectedValues}
        onChange={values => {
          setSelectedValues(values);
        }}
        onFocus={() => {
          setShowDropdown(true);
        }}
        onSearch={searchText => {
          setSearchValue(searchText);
          sValue.current = searchText;
          return searchText;
        }}
        onInputKeyDown={e => {
          if (e.key === 'Enter' && sValue.current.includes('*')) {
            handleSelectAll(currentPage, options);
            e.stopPropagation();
          }
        }}
        {...antdSelectProps}
      >
        {optionsRenderer(options, selectedValues, searchValue, pageSize)}
      </Select>
      {showDropdown && (
        <div
          className="ant-modal-mask"
          style={{
            background: 'transparent',
          }}
          onClick={() => {
            setCurrentPage(1);
            setSearchValue('');
            setShowDropdown(false);
          }}
        />
      )}
    </>
  );
});

// StyledSelect.displayName = 'StyledSelect';
const propTypes = {
  dataId: PropTypes.string,
  defaultValues: PropTypes.arrayOf(PropTypes.shape({})),
  mode: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({})),
  pageSize: PropTypes.number,
  theme: PropTypes.shape({}),
  text: PropTypes.shape({
    select: PropTypes.string,
    content: PropTypes.string,
    search: PropTypes.string,
  }),
};
const defaultProps = {
  dataId: 'select',
  defaultValues: [],
  options: [],
  mode: 'multiple',
  text: {
    select: 'Select',
    all: 'all',
    connector: 'of',
    content: '"All items"',
  },
  theme: theme,
};

AntdSelect.propTypes = propTypes;
AntdSelect.defaultProps = defaultProps;

export default withTheme(AntdSelect);
