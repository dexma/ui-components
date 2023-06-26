import { Select } from 'antd';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { withTheme } from 'styled-components';
import { get, omit } from 'lodash';
import theme from '../../styles/theme';
import Icon from '../Icon';
import {
  SelectOptionStyle,
  StyledAntdSelectDropdown,
  StyledSpanOption,
  StyledSpanOptionSelected,
} from '../../styles/components/StyledAntdSelect';
import {
  filterOption,
  findSubstringIndices,
  getOptionsBySearch,
  getRegExpBasedOnInput,
  singleOptionFilter,
} from './selectUtils';
import ButtonPaginationSelector from './ButtonPaginationSelector';

const ALL_CHARACTER = '*';
const ENTER_CHARACTER = 'Enter';

export const tagRenderButtonPagination = (props, options, theme) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <StyledSpanOptionSelected
      className="tag-select-option-selected"
      color={options.filter(element => element.value === value)[0].color}
      onMouseDown={onPreventMouseDown}
      onClose={onClose}
      style={{ marginRight: 4 }}
      data-testid={`tag-option-selected-${value}`}
      theme={theme}
    >
      {label}
      {closable && (
        <Icon
          className="icon-close"
          name="close"
          size="small"
          onClick={onClose}
          fillColor={theme.color.white}
        />
      )}
    </StyledSpanOptionSelected>
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
  mode,
  theme
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
            theme={theme}
            searchValue={searchValue}
            showDropdown={showDropdown}
          />
        )}
      </StyledAntdSelectDropdown>
    </>
  );
};

export const renderUnselectedOption = (option, searchValue) => {
  if (
    searchValue !== '' &&
    (![...searchValue].every(char => char === '*' || char === ' ') ||
      !searchValue.includes(ALL_CHARACTER))
  ) {
    const regex = getRegExpBasedOnInput(searchValue);
    if (regex === false) {
      return (
        <StyledSpanOption data-testid={`option-span-${option}`}>
          {option}
        </StyledSpanOption>
      );
    }
    const indices = findSubstringIndices(option, regex);
    if (indices.start !== undefined || indices.end !== undefined) {
      return (
        <StyledSpanOption
          data-testid={`option-span-${option}-bold`}
          value={option}
        >
          {[...option].map((letter, index) => {
            const isBold = searchValue.includes(ALL_CHARACTER)
              ? index === indices.start || index === indices.end
              : index >= indices.start && index <= indices.end;
            return isBold ? <b key={index}>{letter}</b> : letter;
          })}
        </StyledSpanOption>
      );
    }
  }
  return (
    <StyledSpanOption data-testid={`option-span-${option}`}>
      {option}
    </StyledSpanOption>
  );
};

export const optionsRenderer = (
  options,
  selectedValues,
  searchValue,
  pageSize,
  theme
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
          <Select.Option
            className="option-select"
            key={option.value}
            disabled={
              selectedValues.length >= pageSize &&
              !selectedValues.includes(option.value)
            }
            value={option.value}
            theme={theme}
            color={option.color}
            style={{
              backgroundColor: backgroundColor,
            }}
            selected={selectedValues.includes(option.value)}
            data-testid={`select-option-${option.value}`}
          >
            {selectedValues.includes(option.value) ? (
              <StyledSpanOptionSelected value={option.label} theme={theme}>
                {option.label}
              </StyledSpanOptionSelected>
            ) : (
              renderUnselectedOption(option.label, searchValue)
            )}
          </Select.Option>
        );
      })}
    </>
  );
};

const AntdSelect = props => {
  const {
    dataId,
    defaultValues,
    mode,
    options,
    pageSize,
    text,
    placeholder,
    theme,
    isLoading,
    onChange,
    handleButtonSelectAll,
    handleClearAll,
  } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const antdSelectProps = omit(props, [
    'dataId',
    'defaultValues',
    'mode',
    'options',
    'pageSize',
    'text',
    'isLoading',
    'onChange',
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const ref = useRef(null);
  const sValue = useRef('');

  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue]);

  useEffect(() => {
    setSelectedValues(defaultValues);
  }, [defaultValues]);

  const handleChangePage = useCallback(page => {
    setCurrentPage(page);
  }, []);

  const handleSelectAll = () => {
    const actualPage = currentPage;
    const selectedOptions =
      searchValue !== '' ? getOptionsBySearch(options, searchValue) : options;
    const startIndex = (actualPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const slicedOptions = selectedOptions.slice(startIndex, endIndex);
    const allValues = slicedOptions.map(option => option.value);

    setSelectedValues(() => allValues);
    handleButtonSelectAll && handleButtonSelectAll(allValues);
  };

  const closeDropdown = () => {
    setCurrentPage(1);
    sValue.current = '';
    setSearchValue('');
    if (ref !== null && ref.current !== null) ref.current.blur();
    setShowDropdown(false);
  };

  const reset = () => {
    handleClearAll && handleClearAll();
    setCurrentPage(1);
    sValue.current = '';
    setSearchValue('');
    setSelectedValues([]);
    if (ref !== null && ref.current !== null) ref.current.blur();
    setShowDropdown(false);
  };

  return (
    <>
      <SelectOptionStyle theme={theme} />
      {mode === 'single' ? (
        <Select
          autoClearSearchValue
          clearIcon={<Icon color="gray" name="close" size="small" />}
          data-testid={`${dataId}`}
          defaultValues={defaultValues}
          optionFilterProp="children"
          filterOption={singleOptionFilter}
          loading={isLoading}
          placeholder={placeholder}
          open={showDropdown}
          ref={r => {
            ref.current = r;
          }}
          searchValue={sValue.current}
          showArrow
          showSearch
          style={{ width: '100%' }}
          suffixIcon={
            showDropdown ? (
              <>
                {(searchValue !== '' || selectedValues.length > 0) && (
                  <Icon
                    color="gray"
                    name="close"
                    size="small"
                    onClick={e => {
                      reset();
                      e.stopPropagation();
                    }}
                  />
                )}
                <Icon
                  color="gray"
                  name="chevron_up"
                  size="small"
                  onClick={e => {
                    closeDropdown();
                    e.stopPropagation();
                  }}
                />
              </>
            ) : (
              <Icon
                className="selectable-icon"
                color="gray"
                name="chevron_down"
                size="small"
                onClick={() => {
                  setShowDropdown(true);
                }}
              />
            )
          }
          onSelect={value => {
            onChange !== undefined && onChange(value);
            setSelectedValues(value);
            closeDropdown();
          }}
          onDropdownVisibleChange={e => {
            if (e !== showDropdown) {
              setShowDropdown(e);
            }
          }}
          onFocus={() => {
            setShowDropdown(true);
          }}
          onSearch={searchText => {
            setSearchValue(searchText);
            sValue.current = searchText;
            return searchText;
          }}
          options={options}
          {...antdSelectProps}
        />
      ) : (
        <Select
          autoClearSearchValue={false}
          clearIcon={<Icon color="gray" name="close" size="small" />}
          data-testid={`${dataId}`}
          defaultValues={defaultValues}
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
              mode,
              theme
            )}
          optionFilterProp="children"
          filterOption={filterOption}
          maxTagCount="responsive"
          maxTagPlaceholder={values => `+${values.length}`}
          menuItemSelectedIcon={
            <Icon color="white" name="close" size="small" />
          }
          mode={mode}
          open={showDropdown}
          placeholder={placeholder}
          searchValue={sValue.current}
          style={{ width: '100%' }}
          showArrow
          showSearch
          suffixIcon={
            showDropdown ? (
              <>
                {(searchValue !== '' || selectedValues.length > 0) && (
                  <Icon
                    className="selectable-icon"
                    color="gray"
                    name="close"
                    size="small"
                    onClick={() => {
                      reset();
                    }}
                  />
                )}
                <Icon
                  className="selectable-icon"
                  color="gray"
                  name="chevron_up"
                  size="small"
                  onClick={e => {
                    closeDropdown();
                    e.stopPropagation();
                  }}
                />
              </>
            ) : (
              <Icon
                className="selectable-icon"
                color="gray"
                name="chevron_down"
                size="small"
                onClick={() => {
                  setShowDropdown(true);
                }}
              />
            )
          }
          ref={r => {
            ref.current = r;
          }}
          onDropdownVisibleChange={e => {
            if (e !== showDropdown) {
              setShowDropdown(e);
              if (e === false) {
                setCurrentPage(1);
                setSearchValue('');
              }
            }
          }}
          tagRender={props => tagRenderButtonPagination(props, options, theme)}
          value={selectedValues}
          dropdownAlign={{ offset: [0, 3] }}
          onChange={values => {
            onChange !== undefined && onChange(values);
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
            if (
              ['multiple', 'tags'].includes(mode) &&
              e.key === ENTER_CHARACTER &&
              sValue.current.includes(ALL_CHARACTER)
            ) {
              handleSelectAll(currentPage, options);
              e.stopPropagation();
            }
          }}
          {...antdSelectProps}
        >
          {optionsRenderer(
            options,
            selectedValues,
            searchValue,
            pageSize,
            theme
          )}
        </Select>
      )}
    </>
  );
};

const propTypes = {
  dataId: PropTypes.string,
  defaultValues: PropTypes.arrayOf(PropTypes.shape({})),
  isLoading: PropTypes.bool,
  mode: PropTypes.oneOf(['single', 'multiple', 'tags']),
  options: PropTypes.arrayOf(PropTypes.shape({})),
  onChange: PropTypes.func,
  handleButtonSelectAll: PropTypes.func,
  handleClearAll: PropTypes.func,
  pageSize: PropTypes.number,
  placeholder: PropTypes.string,
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
  placeholder: 'Select',
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
