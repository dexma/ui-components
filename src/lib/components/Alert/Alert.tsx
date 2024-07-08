import React, { type CSSProperties, type ReactNode, useContext, useState } from 'react';
import { ThemeContext } from 'styled-components';
import get from 'lodash/get';

import defaultTheme from '@utils/theme';
import { StyledAlert } from '@styles/Alert/StyledAlert';
import { Icon, IconSize } from '@components/Icon';

export type AlertProps = {
    message?: ReactNode;
    type: 'basic' | 'outline' | 'warning' | 'info' | 'success' | 'error';
    onClose?: (e: any) => void;
    description?: ReactNode;
    showIcon?: boolean;
    closable?: boolean;
    className?: string;
    style?: CSSProperties;
};

export const Alert = ({ type = 'warning', closable = false, message, description, showIcon = false, onClose, ...props }: AlertProps) => {
    const th = useContext(ThemeContext) || defaultTheme;
    const [closed, setClosed] = useState(false);
    let renderIcon = null;
    switch (type) {
        case 'outline':
            renderIcon = 'alert_sign';
            break;
        case 'warning':
            renderIcon = 'alert_sign';
            break;
        case 'info':
            renderIcon = 'circle_info_outline';
            break;
        case 'success':
            renderIcon = 'circle_check_outline';
            break;
        case 'error':
            renderIcon = 'circle_delete_outline';
            break;
        case 'basic':
        default:
            renderIcon = 'alert_sign';
            break;
    }
    const handleClose = (e: any) => {
        setClosed(true);
        if (onClose) onClose(e);
    };
    const getDescription = (_description: ReactNode) => (
        <span data-testid='alert-description' className='description'>
            {_description}
        </span>
    );

    return closed ? null : (
        <StyledAlert data-testid='alert' role='alert' $showIcon={showIcon} $type={type} $description={description} $message={message} theme={th} {...props}>
            <span data-testid='alert-message' className='message'>
                {showIcon && <Icon color={get(th.color, 'color')} name={renderIcon} size={IconSize.MEDIUM} className='icon' data-testid={`alert-icon-${type}`} />}
                {message}
                {!message && description && getDescription(description)}
            </span>
            {message && description && getDescription(description)}
            {closable ? (
                <Icon color={get(th.color, 'color')} onClick={handleClose} name='close' size={IconSize.MEDIUM} className='icon-close' data-testid='alert-icon-close' />
            ) : null}
        </StyledAlert>
    );
};
