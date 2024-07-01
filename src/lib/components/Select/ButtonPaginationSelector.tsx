import React, { useEffect, useRef, useState } from 'react';
import { StyledButtonSelectAll, StyledIconButtonPagination, StyledPaginationPageWrapper, StyledRowButtonPagination } from '@styles/Select/StyledSelect';
import { type Theme } from '@utils/theme';
import { getOptionsBySearch } from './selectUtils';
import { Cell } from '../Cell';
import { type SelectTextProps } from './Select';

export const getButtonText = (text: SelectTextProps, currentPage: number, pageSize: number, options: any[], searchValue: string, numElements: number) => {
    const textValue = `${text.select}`;
    const boldText =
        pageSize <= numElements ? ` ${1 + (currentPage - 1) * pageSize} - ${pageSize * currentPage > options.length ? options.length : pageSize * currentPage}` : ` ${text.all}`;
    const lastValue = `${
        // eslint-disable-next-line no-nested-ternary
        searchValue !== '' ? ` "${searchValue}"` : pageSize <= numElements ? ` ${text.connector} ${text.content}` : ``
    } (${numElements})`;
    return (
        <span data-testid='text-pagination-selector'>
            {textValue}
            <strong>{boldText}</strong>
            {lastValue}
        </span>
    );
};

export const getTotalPages = (pageSize: number, searchValue: string, options: any[]) => {
    if (pageSize === undefined) return 1;
    if (searchValue !== '') {
        return Math.ceil(getOptionsBySearch(options, searchValue).length / pageSize);
    }
    return Math.ceil(options.length / pageSize);
};

type ButtonPaginationSelectorProps = {
    handleSelectAll: () => void;
    pageSize: number;
    currentPage: number;
    options: any[];
    onPageChange: (newPage: number) => void;
    text: SelectTextProps;
    theme?: Theme;
    searchValue: string;
    showDropdown: boolean;
};

export const ButtonPaginationSelector = ({
    handleSelectAll,
    pageSize,
    currentPage,
    options,
    onPageChange,
    text,
    theme,
    searchValue,
    showDropdown,
}: ButtonPaginationSelectorProps) => {
    const ref = useRef(null);
    const [showPagination, setShowPagination] = useState(pageSize !== undefined && pageSize < options.length);
    const totalPages = getTotalPages(pageSize, searchValue, options);
    const [showButton, setShowButton] = useState(options.length > 0);
    const [isPrevDisabled, setIsPrevDisabled] = useState(currentPage === 1);
    const [isNextDisabled, setIsNextDisabled] = useState(currentPage === totalPages);

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
    }, [showDropdown, currentPage, totalPages]);

    useEffect(() => {
        if (pageSize !== undefined) {
            if ((searchValue !== '' && getOptionsBySearch(options, searchValue).length > pageSize) || (searchValue === '' && pageSize !== undefined && pageSize < options.length)) {
                setShowPagination(true);
            } else {
                setShowPagination(false);
            }
        }
    }, [pageSize, options, searchValue]);

    useEffect(() => {
        if ((searchValue !== '' && getOptionsBySearch(options, searchValue).length > 0) || (searchValue === '' && options.length > 0)) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    }, [options, searchValue]);

    useEffect(() => {
        setIsPrevDisabled(true);
        setIsNextDisabled(false);
    }, [searchValue]);

    const numOptionsAvailable = searchValue !== '' ? getOptionsBySearch(options, searchValue).length : options.length;
    const optionsAvailable = searchValue !== '' ? getOptionsBySearch(options, searchValue) : options;

    return (
        <StyledRowButtonPagination>
            {showPagination && (
                <StyledPaginationPageWrapper data-testid='button-prev' xs={1} $disabled={isPrevDisabled} onClick={handlePrevClick} theme={theme}>
                    <StyledIconButtonPagination name='chevron_left_l' color={isPrevDisabled ? 'gray300' : 'gray900'} size={12} />
                </StyledPaginationPageWrapper>
            )}
            {showButton && (
                <Cell>
                    <StyledButtonSelectAll
                        variant='outline'
                        data-testid='button-select-all'
                        onClick={() => {
                            handleSelectAll();
                            if (ref !== null && ref.current !== null) (ref.current as HTMLElement).blur();
                        }}
                        theme={theme}
                        ref={(r: any) => {
                            ref.current = r;
                        }}
                    >
                        {getButtonText(text, currentPage, pageSize, optionsAvailable, searchValue, numOptionsAvailable)}
                    </StyledButtonSelectAll>
                </Cell>
            )}
            {showPagination && (
                <StyledPaginationPageWrapper data-testid='button-next' xs={1} $disabled={isNextDisabled} onClick={handleNextClick} theme={theme}>
                    <StyledIconButtonPagination name='chevron_right_l' color={isNextDisabled ? 'gray300' : 'gray900'} size={12} />
                </StyledPaginationPageWrapper>
            )}
        </StyledRowButtonPagination>
    );
};
