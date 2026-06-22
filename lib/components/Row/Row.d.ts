import { HTMLAttributes } from '../../../../node_modules/react';
export type RowhProps = {
    reverse?: boolean;
    alignItems?: string;
} & HTMLAttributes<HTMLDivElement>;
export declare const Row: ({ alignItems, reverse, children, ...props }: RowhProps) => import("react/jsx-runtime").JSX.Element;
export default Row;
