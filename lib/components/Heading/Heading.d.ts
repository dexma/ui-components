import { HTMLAttributes, ReactNode } from '../../../../node_modules/react';
type HeadingProps = {
    text: string;
    color?: string;
    type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    children?: ReactNode;
} & HTMLAttributes<HTMLDivElement>;
export declare const Heading: ({ color, type, text, children, ...props }: HeadingProps) => import("react/jsx-runtime").JSX.Element;
export default Heading;
