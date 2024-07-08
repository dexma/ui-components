import { default as React } from '../../../../node_modules/react';
import { SwitchChangeEventHandler, SwitchClickEventHandler, SwitchProps as AntdSwitchProps, SwitchSize } from 'antd/es/switch';

export type SwitchProps = {
    disabled?: boolean;
    size?: SwitchSize;
    dataId?: string;
    onChange?: SwitchChangeEventHandler;
    onClick?: SwitchClickEventHandler;
} & AntdSwitchProps;
export declare const Switch: React.ForwardRefExoticComponent<Omit<{
    disabled?: boolean;
    size?: SwitchSize;
    dataId?: string;
    onChange?: SwitchChangeEventHandler;
    onClick?: SwitchClickEventHandler;
} & AntdSwitchProps, "dataId"> & Partial<{
    dataId?: string;
}> & React.RefAttributes<unknown>>;
