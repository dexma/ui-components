import { SelectProps as AntdSelectProps } from 'antd';
import { Theme } from '../../utils/theme';
import { ReactElement } from '../../../../node_modules/react';
import { BaseOptionType } from 'rc-select/lib/Select';
type CustomTagProps = {
    label: React.ReactNode;
    value: any;
    disabled?: boolean;
    onClose: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    closable: boolean;
};
interface Option extends BaseOptionType {
    value: string | number;
    label: string;
    color?: string;
    disabled?: boolean;
    customSelectedLabel?: React.ReactNode;
}
export declare const tagRenderButtonPagination: (props: CustomTagProps, options: Option[], maxTagLength: number, theme: Theme, deleteOptionAriaLabel: string) => ReactElement;
export declare const dropdownRenderSelect: (menu: React.ReactElement, currentPage: number, options: Option[], handleChangePage: (page: number) => void, handleSelectAll: () => void, text: SelectTextProps, searchValue: string, mode: string, theme: Theme, pageSize?: number) => import("react/jsx-runtime").JSX.Element;
export type SelectTextProps = {
    select: string;
    all: string;
    connector: string;
    content: string;
    overflow: string;
};
export type SelectProps = Omit<AntdSelectProps, 'options' | 'mode'> & {
    dataId?: string;
    defaultValues?: any[];
    pageSize?: number;
    text?: SelectTextProps;
    options?: Array<Option>;
    theme?: Theme;
    isLoading?: boolean;
    maxTagLength?: number;
    maxTagCount?: number | string;
    overflowLength?: number;
    handleButtonSelectAll?: (values: any[]) => void;
    handleClearAll?: () => void;
    selectedOptionRender?: (option: Option) => React.ReactNode;
    mode?: 'multiple' | 'single';
    showOptionsAriaLabel: string;
    hideOptionsAriaLabel: string;
    clearAllOptionsAriaLabel?: string;
    deleteOptionSelectedAriaLabel?: string;
};
export declare const Select: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<AntdSelectProps<any, import('rc-select/lib/Select').DefaultOptionType>, "mode" | "options"> & {
    dataId?: string;
    defaultValues?: any[];
    pageSize?: number;
    text?: SelectTextProps;
    options?: Array<Option>;
    theme?: Theme;
    isLoading?: boolean;
    maxTagLength?: number;
    maxTagCount?: number | string;
    overflowLength?: number;
    handleButtonSelectAll?: (values: any[]) => void;
    handleClearAll?: () => void;
    selectedOptionRender?: (option: Option) => React.ReactNode;
    mode?: "multiple" | "single";
    showOptionsAriaLabel: string;
    hideOptionsAriaLabel: string;
    clearAllOptionsAriaLabel?: string;
    deleteOptionSelectedAriaLabel?: string;
} & {
    dataId?: string;
} & import('../../../../node_modules/react').RefAttributes<unknown>>;
export {};
