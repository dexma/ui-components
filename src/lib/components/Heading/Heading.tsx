import React, { type ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { StyledHeading } from '@styles/Heading/StyledHeading';

type HeadingProps = {
    text: string;
    color?: string;
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children?: ReactNode;
};

export const Heading = ({ color = 'gray900', type = 'h3', text, children, ...props }: HeadingProps) => {
    const th = useContext(ThemeContext) || defaultTheme;
    return (
        <StyledHeading data-testid='heading' as={type} $color={color} theme={th} {...props}>
            {text}
            {children && children}
        </StyledHeading>
    );
};
export default Heading;
