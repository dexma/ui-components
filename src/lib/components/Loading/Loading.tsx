import React, { HTMLAttributes, ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { Spinner } from '@components';
import { StyledLoading } from '@styles/Loading/StyledLoading';

export type LoadingProps = {
    size?: number;
    isLoading: boolean;
    color?: typeof defaultTheme.color;
    ariaLabel?: string;
} & HTMLAttributes<HTMLDivElement>;

export const Loading = ({ color, size = 24, isLoading, children, ariaLabel, ...props }: LoadingProps): ReactNode => {
    const th = useContext(ThemeContext) || defaultTheme;
    return isLoading ? (
        <StyledLoading data-testid='loading' theme={th} aria-label={ariaLabel} aria-live='polite' {...props}>
            <Spinner color={color} size={size} />
        </StyledLoading>
    ) : (
        children
    );
};

export default Loading;
