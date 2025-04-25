import { HTMLAttributes, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { StyledGrid } from '@styles/Grid/StyledGrid';

export const Grid = ({ fluid, children, ...props }: { fluid?: boolean } & HTMLAttributes<HTMLDivElement>) => {
    const th = useContext(ThemeContext) || defaultTheme;
    return (
        <StyledGrid data-testid='grid' $fluid={fluid} theme={th} {...props}>
            {children}
        </StyledGrid>
    );
};
