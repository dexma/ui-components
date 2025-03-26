import React, { useContext } from 'react';
import { Pagination as PaginationAntDesign, type PaginationProps as PaginationAntProps } from 'antd';
import { ThemeContext } from 'styled-components';
import { Icon } from '@components';
import { StyledPagination } from '@styles/Pagination/StyledPagination';
import defaultTheme from '@utils/theme';

export const itemRender = (page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', element: React.ReactNode) => {
    if (type === 'prev') {
        return <Icon name='chevron_left_l' color='gray900' size={12} ariaLabel='Previos page' />;
    }
    if (type === 'next') {
        return <Icon name='chevron_right_l' color='gray900' size={12} ariaLabel='Next page' />;
    }
    return element;
};

export type PaginationProps = PaginationAntProps;

export const Pagination = (props: PaginationProps) => {
    const th = useContext(ThemeContext) || defaultTheme;
    return (
        <StyledPagination data-testid='pagination' theme={th}>
            <PaginationAntDesign itemRender={itemRender} {...props} />
        </StyledPagination>
    );
};
