import React, { ComponentType, forwardRef, useContext } from 'react';
import { DataIdContext } from '@components/DataId/DataIdProvider';

type WithDataIdProps = {
    dataId?: string;
};

export const withDataId = <P extends object>(Component: ComponentType<P & WithDataIdProps>, defaultValue: string) => {
    const WrappedComponent = forwardRef<unknown, Omit<P, keyof WithDataIdProps> & Partial<WithDataIdProps>>(({ dataId, ...props }, ref) => {
        const namespace = useContext(DataIdContext);

        let composedDataId = defaultValue;

        if (namespace && dataId) {
            composedDataId = `${namespace}.${dataId}`;
        } else if (namespace) {
            composedDataId = `${namespace}.${composedDataId}`;
        } else if (dataId) {
            composedDataId = dataId;
        }

        return <Component {...(props as P)} dataId={composedDataId} ref={ref} />;
    });

    return WrappedComponent;
};
