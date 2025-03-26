import React, { useContext, useState } from 'react';
import { Pagination as PaginationAntDesign, type PaginationProps as PaginationAntProps } from 'antd';
import { ThemeContext } from 'styled-components';
import { Icon } from '@components';
import { StyledPagination } from '@styles/Pagination/StyledPagination';
import defaultTheme from '@utils/theme';

export const itemRender = (page: number, type: 'page' | 'prev' | 'next' | 'jump-prev' | 'jump-next', element: React.ReactNode, current: number, prevAriaLabel?: string, nextAriaLabel?: string) => {
    if (type === 'prev') {
        return <Icon name='chevron_left_l' color='gray900' size={12} ariaLabel={prevAriaLabel || ''} />;
    }
    if (type === 'next') {
        return <Icon name='chevron_right_l' color='gray900' size={12} ariaLabel={nextAriaLabel || ''} />;
    }
    if (type === 'page')
        return <a role='listitem' aria-current={current === page ? 'page' : undefined}>{page}</a>
    return element;
};

export type PaginationProps = {
    previosPageAriaLabel?: string;
    nextPageAriaLabel?: string;
} & PaginationAntProps;

export const Pagination = (props: PaginationProps) => {
    const th = useContext(ThemeContext) || defaultTheme;

    const [current, setCurrent] = useState(props.defaultCurrent ? props.defaultCurrent : 1);
    const onChange: PaginationProps['onChange'] = (page) => {
        setCurrent(page);
    };
    
    return (
        <StyledPagination data-testid='pagination' role='list' theme={th}>
            <PaginationAntDesign itemRender={(page, type, originalElement) => itemRender(page, type, originalElement, current, props.previosPageAriaLabel, props.nextPageAriaLabel )} onChange={onChange} {...props} />
        </StyledPagination>
    );
};
