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
  StyledSelectOption,
  StyledSpanOption,
  StyledSpanOptionSelected,
  StyledTagSelectedOption,
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

export const tagRenderButtonPagination = (props, options) => {
  const { label, value, closable, onClose } = props;
  const onPreventMouseDown = event => {
    event.preventDefault();
    event.stopPropagation();
  };

  return (
    <StyledTagSelectedOption
      color={options.filter(element => element.value === value)[0].color}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginRight: 4, padding: '0px 4px' }}
      data-testid={`tag-option-selected-${value}`}
    >
      {label}
    </StyledTagSelectedOption>
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
              <StyledSpanOptionSelected
                color={option.color}
                value={option.label}
                theme={theme}
              >
                {option.label}
              </StyledSpanOptionSelected>
            ) : (
              renderUnselectedOption(option.label, searchValue)
            )}
          </StyledSelectOption>
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
  } = props;
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
  const ref = useRef(null);
  const sValue = useRef('');

  useEffect(() => {
    setCurrentPage(1);
  }, [searchValue]);

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
  };

  const closeDropdown = () => {
    setCurrentPage(1);
    sValue.current = '';
    setSearchValue('');
    if (ref !== null) ref.current.blur();
    setShowDropdown(false);
  };

  const reset = () => {
    setCurrentPage(1);
    sValue.current = '';
    setSearchValue('');
    setSelectedValues([]);
    if (ref !== null) ref.current.blur();
    setShowDropdown(false);
  };

  return (
    <>
      {mode === 'single' ? (
        <Select
          allowClear
          autoClearSearchValue
          clearIcon={<Icon color="gray" name="close" size="small" />}
          data-testid={`${dataId}`}
          defaultValue={selectedValues}
          optionFilterProp="children"
          filterOption={singleOptionFilter}
          placeholder={placeholder} // Unneed, viene de antdSelectProps
          open={showDropdown}
          searchValue={sValue.current}
          showArrow
          showSearch
          style={{ width: '100%' }}
          suffixIcon={
            showDropdown ? (
              <Icon color="gray" name="chevron_up" size="small" />
            ) : (
              <Icon color="gray" name="chevron_down" size="small" />
            )
          }
          onChange={values => {
            setSelectedValues(values);
            setShowDropdown(false);
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
        />
      ) : (
        <>
          <SelectOptionStyle />
          <Select
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
                mode,
                theme
              )
            }
            optionFilterProp="children"
            filterOption={filterOption}
            maxTagCount="responsive"
            menuItemSelectedIcon={
              <Icon color="white" name="close" size="small" />
            }
            mode={mode}
            placeholder={placeholder}
            searchValue={sValue.current}
            showArrow
            showSearch
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
                  color="gray"
                  name="chevron_down"
                  size="small"
                  onClick={e => {
                    setShowDropdown(true);
                    e.stopPropagation();
                  }}
                />
              )
            }
            open={showDropdown}
            ref={r => {
              ref.current = r;
            }}
            tagRender={props => tagRenderButtonPagination(props, options)}
            value={selectedValues}
            dropdownAlign={{ offset: [0, 3] }}
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
        </>
      )}
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
};

// StyledSelect.displayName = 'StyledSelect';
const propTypes = {
  dataId: PropTypes.string,
  defaultValues: PropTypes.arrayOf(PropTypes.shape({})),
  mode: PropTypes.oneOf(['single', 'multiple', 'tags']),
  options: PropTypes.arrayOf(PropTypes.shape({})),
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
