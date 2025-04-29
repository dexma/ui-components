import { ReactNode, useMemo, useState } from 'react';

import { Toast, ToastType } from '@components/Toaster/Toast';
import { ToasterContext } from '@components/Toaster/ToasterContext';

type ToasterProps = {
    children: ReactNode;
};

type ToastConfig = {
    text: string;
    type: ToastType;
};

export const Toaster = ({ children, ...props }: ToasterProps) => {
    const [visible, setVisible] = useState<boolean>();
    const [toastConfig, setToastConfig] = useState<ToastConfig>({ text: '', type: ToastType.INFO });
    const [timeoutState, setTimeoutState] = useState<NodeJS.Timeout>();

    const showToast = useMemo(
        () => ({
            toast: ({ text, type }: ToastConfig) => {
                if (timeoutState) clearTimeout(timeoutState);
                setVisible(true);
                setToastConfig({ text, type });
                setTimeoutState(
                    setTimeout(() => {
                        setVisible(false);
                    }, 5000)
                );
            },
        }),
        [timeoutState]
    );

    return (
        <ToasterContext.Provider value={showToast}>
            <>
                <div>{children}</div>
                {visible && <Toast {...props} {...toastConfig} />}
            </>
        </ToasterContext.Provider>
    );
};

export default Toaster;
