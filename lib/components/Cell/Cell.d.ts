import { HTMLAttributes } from '../../../../node_modules/react';
type CellProps = {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xsOffset?: number;
    smOffset?: number;
    mdOffset?: number;
    lgOffset?: number;
    direction?: string;
    onClick?: () => void;
    ['data-testid']?: string;
} & HTMLAttributes<HTMLDivElement>;
export declare const Cell: ({ xs, sm, md, lg, xsOffset, smOffset, mdOffset, lgOffset, direction, children, onClick, ...props }: CellProps) => import("react/jsx-runtime").JSX.Element;
export {};
