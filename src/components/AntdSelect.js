import { Select } from 'antd';
import PropTypes from 'prop-types';
import React, { forwardRef, useCallback, useState } from 'react';
import { withTheme } from 'styled-components';
import { get } from 'lodash';
import theme from '../styles/theme';
import Icon from './Icon';
import {
  SelectOptionStyle,
  StyledAntdSelectDropdown,
  StyledButtonSelectAll,
  StyledPaginationPageWrapper,
  StyledSelectOption,
  StyledSpanOption,
  StyledTagOption,
} from '../styles/components/StyledAntdSelect';
import { Row } from './Row';
import Cell from './Cell';

const ButtonPaginationSelector = ({
  handleSelectAll,
  pageSize,
  currentPage,
  options,
  totalPages,
  onPageChange,
}) => {
  const [isPrevDisabled, setIsPrevDisabled] = useState(currentPage === 1);
  const [isNextDisabled, setIsNextDisabled] = useState(
    currentPage === totalPages
  );

  const handlePrevClick = () => {
    const newPage = currentPage - 1;
    if (newPage <= totalPages && newPage >= 1) {
      onPageChange(newPage);
      setIsPrevDisabled(newPage === 1);
      setIsNextDisabled(false);
    }
  };

  const handleNextClick = () => {
    const newPage = currentPage + 1;
    if (newPage <= totalPages && newPage >= 1) {
      onPageChange(newPage);
      setIsPrevDisabled(false);
      setIsNextDisabled(newPage === totalPages);
    }
  };
  return (
    <Row
      style={{
        marginRight: '0.5rem',
        marginLeft: '0.5rem',
        marginTop: '0.5rem',
      }}
    >
      <StyledPaginationPageWrapper
        xs={1}
        disabled={isPrevDisabled}
        onClick={handlePrevClick}
      >
        <Icon
          style={{
            display: 'block',
            margin: 'auto',
          }}
          name="chevron_left_l"
          color={isPrevDisabled ? 'gray300' : 'gray900'}
          size={12}
        />
      </StyledPaginationPageWrapper>
      <Cell>
        <StyledButtonSelectAll
          variant="outline"
          style={{ width: '100%' }}
          data-testid="button-select-all"
          onClick={() => handleSelectAll(currentPage, options)}
        >
          {`Select ${1 + (currentPage - 1) * pageSize} - ${
            pageSize * currentPage > options.length
              ? options.length
              : pageSize * currentPage
          } items ${options.length}`}
        </StyledButtonSelectAll>
      </Cell>
      <StyledPaginationPageWrapper
        xs={1}
        disabled={isNextDisabled}
        onClick={handleNextClick}
      >
        <Icon
          style={{
            display: 'block',
            margin: 'auto',
          }}
          name="chevron_right_l"
          color={isNextDisabled ? 'gray300' : 'gray900'}
          size={12}
        />
      </StyledPaginationPageWrapper>
    </Row>
  );
};

const tagRender = (props, options) => {
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
    >
      {label}
    </StyledTagOption>
  );
};

const dropdownRender = (
  menu,
  pageSize,
  totalPages,
  currentPage,
  options,
  handleChangePage,
  handleSelectAll
) => {
  return (
    <>
      <StyledAntdSelectDropdown>
        {menu}
        {
          <ButtonPaginationSelector
            pageSize={pageSize}
            totalPages={totalPages}
            currentPage={currentPage}
            handleSelectAll={handleSelectAll}
            onPageChange={handleChangePage}
            options={options}
          />
        }
      </StyledAntdSelectDropdown>
    </>
  );
};

const getBackgroundColor = (theme, color) => {
  return get(theme.color, color);
};

const optionsRenderer = (
  options,
  // theme,
  selectedValues
  // pageSize,
  // currentPage,
  // searchValue
) => {
  // const optionsToRender = getOptionsBySearch(options, searchValue);
  // const startIndex = (currentPage - 1) * pageSize;
  // const endIndex = startIndex + pageSize;
  // const slicedOptions =
  //   pageSize > 0
  //     ? optionsToRender.slice(startIndex, endIndex)
  //     : optionsToRender;
  return (
    <>
      {options.map(option => {
        const backgroundColor = selectedValues.includes(option.value)
          ? getBackgroundColor(theme, option.color)
          : '#FFFFFF';
        return (
          <StyledSelectOption
            key={option.value}
            value={option.value}
            theme={theme}
            color={option.color}
            style={{
              backgroundColor,
              borderRadius: '4px',
            }}
          >
            {selectedValues.includes(option.value) ? (
              <StyledTagOption color={option.color}>
                {option.label}
              </StyledTagOption>
            ) : (
              <StyledSpanOption>{option.label}</StyledSpanOption>
            )}
          </StyledSelectOption>
        );
      })}
    </>
  );
};

const AntdSelect = forwardRef((props, ref) => {
  const { dataId, defaultValues, mode, options, pageSize } = props;
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedValues, setSelectedValues] = useState(defaultValues);
  // const antdSelectProps = omit(props, []);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = pageSize ? Math.ceil(options.length / pageSize) : 1;

  const handleChangePage = useCallback(page => {
    setCurrentPage(page);
  }, []);

  const handleSelectAll = () => {
    const actualPage = currentPage;
    const selectedOptions = options;
    // pageSize > 0 ? getOptionsBySearch(options, searchValue) : options;
    const startIndex = (actualPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const slicedOptions = selectedOptions.slice(startIndex, endIndex);

    const allValues = slicedOptions.map(option => option.value);

    setSelectedValues(prevSelected => {
      const selected = allValues.filter(value => !prevSelected.includes(value));
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
          pageSize
            ? dropdownRender(
                menu,
                pageSize,
                totalPages,
                currentPage,
                options,
                handleChangePage,
                handleSelectAll
              )
            : menu
        }
        maxTagCount="responsive"
        menuItemSelectedIcon={<Icon color="white" name="close" size="small" />}
        mode={mode}
        showArrow
        onChange={values => {
          setSelectedValues(values);
        }}
        onFocus={() => {
          setShowDropdown(true);
        }}
        open={showDropdown}
        ref={ref}
        style={{ width: '100%', zIndex: 1001 }}
        tagRender={props => tagRender(props, options)}
        value={selectedValues}
      >
        {optionsRenderer(options, selectedValues)}
      </Select>
      {showDropdown && (
        <div
          className="ant-modal-mask"
          style={{
            background: 'transparent',
          }}
          onClick={() => {
            setShowDropdown(false);
            setCurrentPage(1);
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
};
const defaultProps = {
  defaultValues: [],
  options: [],
  theme: theme,
  dataId: 'select',
};

AntdSelect.propTypes = propTypes;
AntdSelect.defaultProps = defaultProps;

export default withTheme(AntdSelect);
