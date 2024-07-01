import React, { HTMLAttributes, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { StyledRow } from '@styles/Row/StyledRow';

export type RowhProps = { reverse?: boolean; alignItems?: string } & HTMLAttributes<HTMLDivElement>;

export const Row = ({ alignItems = 'center', reverse, children, ...props }: RowhProps) => {
    const th = useContext(ThemeContext) || defaultTheme;
    return (
        <StyledRow $alignItems={alignItems} $reverse={reverse} theme={th} {...props}>
            {children}
        </StyledRow>
    );
};

StyledRow.displayName = 'StyledRow';

export default Row;
