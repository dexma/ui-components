import { Theme } from '../../utils/theme';
import { SelectTextProps } from './Select';
export declare const getButtonText: (text: SelectTextProps, currentPage: number, pageSize: number, options: any[], searchValue: string, numElements: number) => import("react/jsx-runtime").JSX.Element;
export declare const getTotalPages: (pageSize: number, searchValue: string, options: any[]) => number;
type ButtonPaginationSelectorProps = {
    handleSelectAll: () => void;
    pageSize: number;
    currentPage: number;
    options: any[];
    onPageChange: (newPage: number) => void;
    text: SelectTextProps;
    theme?: Theme;
    searchValue: string;
};
export declare const ButtonPaginationSelector: ({ handleSelectAll, pageSize, currentPage, options, onPageChange, text, theme, searchValue }: ButtonPaginationSelectorProps) => import("react/jsx-runtime").JSX.Element;
export {};
