import { ReactNode } from '../../../../node_modules/react';
import { CascaderProps as CascaderAntdProps } from 'antd';
import { DefaultOptionType } from 'antd/es/cascader';
import { DefaultTheme } from 'styled-components';

type Value = Array<string | number>;
type CascaderProps<OptionType extends DefaultOptionType> = CascaderAntdProps & {
    open?: boolean;
    options?: OptionType[];
    onChange?: (value: Value | Value[]) => void;
};
export declare const tagRender: (theme: DefaultTheme) => (props: {
    label: ReactNode;
    value: string;
    closable: boolean;
    onClose: () => void;
}) => import("react/jsx-runtime").JSX.Element;
export declare const Cascader: <OptionType extends DefaultOptionType>({ multiple, options, maxTagCount, onChange, open, ...props }: CascaderProps<OptionType>) => import("react/jsx-runtime").JSX.Element;
export {};
