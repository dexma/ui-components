import { ComponentType } from '../../../../node_modules/react';
type WithDataIdProps = {
    dataId?: string;
};
export declare const withDataId: <P extends object>(Component: ComponentType<P & WithDataIdProps>, defaultValue: string) => import('../../../../node_modules/react').ForwardRefExoticComponent<import('../../../../node_modules/react').PropsWithoutRef<P & WithDataIdProps> & import('../../../../node_modules/react').RefAttributes<unknown>>;
export {};
