import { default as React } from '../../../../node_modules/react';
import { PaginationProps as PaginationAntProps } from 'antd';
export declare const itemRender: (current: number) => (page: number, type: "page" | "prev" | "next" | "jump-prev" | "jump-next", element: React.ReactNode) => string | number | boolean | Iterable<React.ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
export type PaginationProps = {
    previousPageAriaLabel?: string;
    nextPageAriaLabel?: string;
    prevDotsPageAriaLabel?: string;
    nextDotsPageAriaLabel?: string;
} & PaginationAntProps;
export declare const Pagination: (props: PaginationProps) => import("react/jsx-runtime").JSX.Element;
