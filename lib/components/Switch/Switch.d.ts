import { SwitchChangeEventHandler, SwitchClickEventHandler, SwitchProps as AntdSwitchProps, SwitchSize } from 'antd/es/switch';
export type SwitchProps = {
    disabled?: boolean;
    size?: SwitchSize;
    dataId?: string;
    ariaLabel?: string;
    onChange?: SwitchChangeEventHandler;
    onClick?: SwitchClickEventHandler;
} & AntdSwitchProps;
export declare const Switch: import('../../../../node_modules/react').ForwardRefExoticComponent<{
    disabled?: boolean;
    size?: SwitchSize;
    dataId?: string;
    ariaLabel?: string;
    onChange?: SwitchChangeEventHandler;
    onClick?: SwitchClickEventHandler;
} & AntdSwitchProps & {
    dataId?: string;
} & import('../../../../node_modules/react').RefAttributes<unknown>>;
