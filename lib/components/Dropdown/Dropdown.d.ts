import { DropDownProps, MenuProps } from 'antd';
export type DropdownContent = {
    text?: string;
    key?: string;
    icon?: string;
    dataId?: string;
    variant?: string;
    ariaLabel?: string;
    disabled?: boolean;
    onClick?: (e: any) => void;
    iconAriaLabel?: string;
    onKeyDown?: (e: any) => void;
};
export type DropdownProps = DropDownProps & {
    dataId?: string;
    text?: string;
    icon?: string;
    variant?: string;
    content?: DropdownContent[];
    iconAriaLabel?: string;
    onMenuClick?: MenuProps['onClick'];
    onItemSelected: (key: number) => void;
};
export declare const Dropdown: ({ dataId, trigger, text, placement, menu, icon, content, variant, open, disabled, iconAriaLabel, onMenuClick, onItemSelected, }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export default Dropdown;
