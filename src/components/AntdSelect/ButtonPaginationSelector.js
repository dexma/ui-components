import React, { useEffect, useState } from 'react';
import Row from '../Row';
import { getOptionsBySearch } from './selectUtils';
import Cell from '../Cell';
import {
  StyledButtonSelectAll,
  StyledPaginationPageWrapper,
} from '../../styles/components/StyledAntdSelect';
import Icon from '../Icon';

const getButtonText = (
  text,
  currentPage,
  pageSize,
  options,
  searchValue,
  numElements
) => {
  const textValue = `${text.select}`;
  const boldText =
    pageSize <= numElements
      ? ` ${1 + (currentPage - 1) * pageSize} - ${
          pageSize * currentPage > options.length
            ? options.length
            : pageSize * currentPage
        }`
      : ` ${text.all}`;
  const lastValue = `${
    // eslint-disable-next-line no-nested-ternary
    searchValue !== ''
      ? ` "${searchValue}"`
      : pageSize <= numElements
      ? ` ${text.connector} ${text.content}`
      : ``
  } (${numElements})`;
  return (
    <span>
      {textValue}
      <strong>{boldText}</strong>
      {lastValue}
    </span>
  );
};

const ButtonPaginationSelector = ({
  handleSelectAll,
  pageSize,
  currentPage,
  options,
  totalPages,
  onPageChange,
  text,
  searchValue,
  showDropdown,
}) => {
  const [showPagination, setShowPagination] = useState(
    pageSize !== undefined && pageSize < options.length
  );
  const [showButton, setShowButton] = useState(options.length > 0);
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

  useEffect(() => {
    if (!showDropdown) {
      setIsPrevDisabled(currentPage === 1);
      setIsNextDisabled(currentPage === totalPages);
    }
  }, [showDropdown]);

  useEffect(() => {
    if (pageSize !== undefined) {
      if (
        (searchValue !== '' &&
          getOptionsBySearch(options, searchValue).length > pageSize) ||
        (searchValue === '' &&
          pageSize !== undefined &&
          pageSize < options.length)
      ) {
        setShowPagination(true);
      } else {
        setShowPagination(false);
      }
    }
  }, [pageSize, options, searchValue]);

  useEffect(() => {
    if (
      (searchValue !== '' &&
        getOptionsBySearch(options, searchValue).length > 0) ||
      (searchValue === '' && options.length > 0)
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }, [options, searchValue]);

  const numOptionsAvailable =
    searchValue !== ''
      ? getOptionsBySearch(options, searchValue).length
      : options.length;

  return (
    <Row
      style={{
        marginRight: '0.5rem',
        marginLeft: '0.5rem',
        marginTop: '0.5rem',
      }}
    >
      {showPagination && (
        <StyledPaginationPageWrapper
          data-testid="button-prev"
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
      )}
      {showButton && (
        <Cell>
          <StyledButtonSelectAll
            variant="outline"
            style={{ width: '100%' }}
            data-testid="button-select-all"
            onClick={() => {
              handleSelectAll(currentPage, options);
            }}
          >
            {getButtonText(
              text,
              currentPage,
              pageSize,
              options,
              searchValue,
              numOptionsAvailable
            )}
          </StyledButtonSelectAll>
        </Cell>
      )}
      {showPagination && (
        <StyledPaginationPageWrapper
          data-testid="button-next"
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
      )}
    </Row>
  );
};

export default ButtonPaginationSelector;
