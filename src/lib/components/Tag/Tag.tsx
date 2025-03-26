import React, { HTMLAttributes, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { Icon } from '@components';
import { withDataId } from '@components/DataId/withDataId';
import { StyledTag } from '@styles/Tag/StyledTag';

export type TagProps = {
    dataId?: string;
    color?: string;
    icon?: string;
    closable?: boolean;
    onClose?: () => void;
    type?: 'normal' | 'rounded';
    variant?: 'primary' | 'outline';
    iconAriaLabel?: string;
} & HTMLAttributes<HTMLDivElement>;

export const Tag = withDataId(({ icon, color, closable, children, type = 'normal', onClose, variant = 'primary', dataId, iconAriaLabel, ...props }: TagProps) => {
    const th = useContext(ThemeContext) || defaultTheme;
    return (
        <StyledTag
            data-testid='tag'
            data-id={dataId}
            $variant={variant || 'primary'}
            $type={type || 'normal'}
            $icon={icon}
            $color={color ?? th.primary}
            $closable={closable}
            theme={th}
            {...props}
        >
            {icon && <Icon className='icon' name={icon} size='small' ariaLabel={!iconAriaLabel ? `${icon} icon` : iconAriaLabel} />}
            {children && children}
            {closable && <Icon className='icon-close' name='close' size='small' onClick={onClose} ariaLabel='Close tag' />}
        </StyledTag>
    );
}, 'tag');
