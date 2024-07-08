import { DropDownProps } from 'antd';

type DropdownContent = {
    text: string;
    key?: string;
    icon?: string;
    dataId?: string;
    variant?: string;
    onClick?: (e: any) => void;
};
export type DropdownProps = DropDownProps & {
    dataId?: string;
    text?: string;
    icon?: string;
    variant?: string;
    content?: DropdownContent[];
};
export declare const Dropdown: ({ dataId, trigger, text, placement, menu, icon, content, variant }: DropdownProps) => import("react/jsx-runtime").JSX.Element;
export default Dropdown;
