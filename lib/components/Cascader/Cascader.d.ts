import { ReactNode } from '../../../../node_modules/react';
import { CascaderProps as CascaderAntdProps } from 'antd';
import { DefaultOptionType } from 'antd/es/cascader';
import { DefaultTheme } from 'styled-components';
type Value = Array<string | number>;
type CascaderProps = CascaderAntdProps & {
    open?: boolean;
    options?: OptionProps[];
    iconAriaLabel?: string;
    onChange?: (value: Value | Value[]) => void;
};
type OptionProps = DefaultOptionType & {
    selectedItemAriaLabel?: string;
};
export declare const tagRender: (theme: DefaultTheme, iconAriaLabel?: string) => (props: {
    label: ReactNode;
    value: string;
    closable: boolean;
    onClose: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export declare const Cascader: ({ multiple, options, maxTagCount, onChange, open, changeOnSelect, iconAriaLabel, ...props }: CascaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
