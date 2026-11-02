import { useContext, useLayoutEffect, useRef } from 'react';
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
    const toastRef = useRef<HTMLDivElement>(null);

    // The top layer renders above every z-index of the host page, so overlays such as banners cannot cover the toast.
    // Browsers without the Popover API keep the fixed positioning; the attribute alone would hide the toast there.
    useLayoutEffect(() => {
        const toast = toastRef.current;
        if (!toast || typeof toast.showPopover !== 'function') return;
        toast.setAttribute('popover', 'manual');
        toast.showPopover();
    }, []);

    return (
        <StyledToast ref={toastRef} theme={th}>
            <Alert type={alertTypeValue} message='' description={text} showIcon />
        </StyledToast>
    );
};

StyledToast.displayName = 'StyledToast';
