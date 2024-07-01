import React, { HTMLAttributes, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { StyledCell } from '@styles/Cell/StyledCell';

type CellProps = {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xsOffset?: number;
    smOffset?: number;
    mdOffset?: number;
    lgOffset?: number;
    direction?: string;
    onClick?: () => void;
    ['data-testid']?: string;
} & HTMLAttributes<HTMLDivElement>;

export const Cell = ({ xs, sm, md, lg, xsOffset, smOffset, mdOffset, lgOffset, direction, children, onClick, ...props }: CellProps) => {
    const th = useContext(ThemeContext) || defaultTheme;
    return (
        <StyledCell
            $xs={xs}
            $sm={sm}
            $md={md}
            $lg={lg}
            $xsOffset={xsOffset}
            $smOffset={smOffset}
            $mdOffset={mdOffset}
            $lgOffset={lgOffset}
            $direction={direction}
            theme={th}
            onClick={onClick}
            {...props}
            data-testid={props['data-testid'] ?? 'cell'}
        >
            {children}
        </StyledCell>
    );
};

StyledCell.displayName = 'StyledCell';
