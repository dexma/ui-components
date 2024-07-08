import { default as React, ComponentType } from '../../../../node_modules/react';

type WithDataIdProps = {
    dataId?: string;
};
export declare const withDataId: <P extends object>(Component: ComponentType<P & WithDataIdProps>, defaultValue: string) => React.ForwardRefExoticComponent<React.PropsWithoutRef<Omit<P, "dataId"> & Partial<WithDataIdProps>> & React.RefAttributes<unknown>>;
export {};
