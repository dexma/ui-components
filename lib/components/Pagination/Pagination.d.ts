import { default as React } from '../../../../node_modules/react';
import { PaginationProps as PaginationAntProps } from 'antd';

export declare const itemRender: (page: number, type: "page" | "prev" | "next" | "jump-prev" | "jump-next", element: React.ReactNode) => string | number | boolean | Iterable<React.ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
export type PaginationProps = PaginationAntProps;
export declare const Pagination: (props: PaginationProps) => import("react/jsx-runtime").JSX.Element;
