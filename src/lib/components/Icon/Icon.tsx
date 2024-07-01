import React, { forwardRef, LegacyRef, SVGProps, useContext } from 'react';
import { ThemeContext } from 'styled-components';
import isNumber from 'lodash/isNumber';
import { v4 as uuidv4 } from 'uuid';

import { icons } from '@config';
import defaultTheme, { type Theme } from '@utils/theme';
import { StyledIcon } from '@styles/Icon/StyledIcon';

export enum IconSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    XLARGE = 'xlarge',
}

export const getIconSize = (size?: number | string | IconSize) => {
    if (isNumber(size)) return size;
    if (size === IconSize.SMALL) return 16;
    if (size === IconSize.MEDIUM) return 20;
    if (size === IconSize.LARGE) return 24;
    if (size === IconSize.XLARGE) return 32;
    return 24;
};

const getIconPaths = (name?: string) => {
    let config: any = [];
    icons.forEach((item) => {
        if (item.name === name) {
            config = item.icon;
        }
    });
    return config.map((itemConfig: any) => {
        const { tag, transform } = itemConfig;
        const { d, opacity, clipRule, fillRule, cx, cy, r } = itemConfig;
        switch (tag) {
            case 'path':
                return <path key={uuidv4()} d={d} opacity={opacity} clipRule={clipRule} fillRule={fillRule} transform={transform} />;
            case 'circle':
                return <circle key={uuidv4()} cx={cx} cy={cy} r={r} transform={transform} />;
            default:
                return null;
        }
    });
};

const isHexColor = (hex?: string) => (hex ? /^#[0-9A-F]{6}$/i.test(hex) || /^#[0-9A-F]{3}$/i.test(hex) : false);

export type IconProps = {
    name?: string;
    color?: string | keyof typeof defaultTheme.color;
    size?: number | string | IconSize;
} & SVGProps<SVGSVGElement>;

const getColor = (th: Theme, color?: string | typeof defaultTheme.color) => {
    if (!color) return th.color.gray500;
    if (isHexColor(color)) return color;
    return th.color[color as keyof typeof th.color];
};

export const Icon = forwardRef(({ name = 'vader', color = 'gray500', size = IconSize.LARGE, onClick, ...props }: IconProps, ref: LegacyRef<SVGSVGElement>) => {
    const th = useContext(ThemeContext) || defaultTheme;
    const fillColor = getColor(th, color);
    const pathElements = getIconPaths(name);
    const iconSize = getIconSize(size);
    return (
        <StyledIcon
            ref={ref}
            width={iconSize}
            height={iconSize}
            viewBox='0 0 24 24'
            strokeWidth='0'
            fill='currentColor'
            preserveAspectRatio='xMidYMid meet'
            xmlns='http://www.w3.org/2000/svg'
            $fillColor={fillColor}
            data-testid='icon'
            onClick={onClick}
            {...props}
        >
            {pathElements}
        </StyledIcon>
    );
});

export default Icon;
