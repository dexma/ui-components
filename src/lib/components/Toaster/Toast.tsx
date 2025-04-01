import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { Alert } from '@components';
import { StyledToast } from '@styles/Toast/StyledToast';

export enum ToastType {
    INFO = 'info',
    SUCCESS = 'success',
    WARNING = 'warning',
    ERROR = 'error',
}

const alertType: { [key in ToastType]: 'info' | 'success' | 'error' | 'warning' } = {
    [ToastType.INFO]: 'info',
    [ToastType.SUCCESS]: 'success',
    [ToastType.WARNING]: 'warning',
    [ToastType.ERROR]: 'error',
};

type ToastProps = {
    text: string;
    type: ToastType;
};

export const Toast = ({ text, type }: ToastProps) => {
    const alertTypeValue = alertType[type];
    const th = useContext(ThemeContext) || defaultTheme;

    return (
        <StyledToast theme={th}>
            <Alert type={alertTypeValue} message='' description={text} showIcon />
        </StyledToast>
    );
};

StyledToast.displayName = 'StyledToast';
