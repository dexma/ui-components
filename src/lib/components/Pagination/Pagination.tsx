import React, { useContext, useEffect, useState } from 'react';
import { Pagination as PaginationAntDesign, type PaginationProps as PaginationAntProps } from 'antd';
import { ThemeContext } from 'styled-components';
import { Icon } from '@components';
import { StyledPagination } from '@styles/Pagination/StyledPagination';
import defaultTheme from '@utils/theme';

export const itemRender = (current: number) => (page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', element: React.ReactNode) => {
    if (type === 'prev') {
        return <Icon name='chevron_left_l' color='gray900' size={12} ariaLabel='' />;
    }
    if (type === 'next') {
        return <Icon name='chevron_right_l' color='gray900' size={12} ariaLabel='' />;
    }
    if (type === 'page') return <span aria-current={current === page ? 'page' : undefined}>{page}</span>;
    return element;
};

export type PaginationProps = {
    previosPageAriaLabel?: string;
    nextPageAriaLabel?: string;
    prevDotsPageAriaLabel?: string;
    nextDotsPageAriaLabel?: string;
} & PaginationAntProps;

export const Pagination = (props: PaginationProps) => {
    const th = useContext(ThemeContext) || defaultTheme;
    const { previosPageAriaLabel, nextPageAriaLabel, disabled, prevDotsPageAriaLabel, nextDotsPageAriaLabel, defaultCurrent } = props;
    useEffect(() => {
        const ulElem = document.querySelector('.ant-pagination');
        if (ulElem) {
            ulElem.setAttribute('role', 'list');
            const liElements = ulElem.querySelectorAll<HTMLLIElement>('li');
            liElements.forEach((li) => li.setAttribute('role', 'listitem'));
            const prevPageElem = ulElem.querySelector('.ant-pagination-prev');
            if (prevPageElem && previosPageAriaLabel) prevPageElem.setAttribute('aria-label', previosPageAriaLabel);
            const nextPageElem = ulElem.querySelector('.ant-pagination-next');
            if (nextPageElem && nextPageAriaLabel) nextPageElem.setAttribute('aria-label', nextPageAriaLabel);
            const jumpPrevPages = ulElem.querySelector('.ant-pagination-jump-prev');
            if (jumpPrevPages && prevDotsPageAriaLabel) jumpPrevPages.setAttribute('aria-label', prevDotsPageAriaLabel);
            const jumpNextPages = ulElem.querySelector('.ant-pagination-jump-next');
            if (jumpNextPages && nextDotsPageAriaLabel) jumpNextPages.setAttribute('aria-label', nextDotsPageAriaLabel);
        }
    }, [previosPageAriaLabel, nextPageAriaLabel, prevDotsPageAriaLabel, nextDotsPageAriaLabel]);

    const [current, setCurrent] = useState(defaultCurrent ?? 1);
    const onChange: PaginationProps['onChange'] = (page) => {
        setCurrent(page);
    };

    return (
        <StyledPagination data-testid='pagination' theme={th}>
            <PaginationAntDesign itemRender={itemRender(current)} onChange={onChange} disabled={disabled} aria-disabled={disabled} {...props} />
        </StyledPagination>
    );
};
