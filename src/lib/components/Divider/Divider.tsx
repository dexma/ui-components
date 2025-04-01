import { type HTMLAttributes, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { StyledDivider } from '@styles/Divider/StyledDivider';

export type DividerProps = { vertical?: boolean } & HTMLAttributes<HTMLHRElement>;

export const Divider = ({ vertical, ...props }: DividerProps) => {
    const th = useContext(ThemeContext) || defaultTheme;
    return <StyledDivider data-testid='divider' $vertical={vertical} theme={th} {...props} />;
};
