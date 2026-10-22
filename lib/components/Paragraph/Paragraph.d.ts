import { HTMLAttributes } from '../../../../node_modules/react';
export type ParagraphProps = {
    margin?: string;
    color?: string;
    size?: 'small' | 'medium' | 'large' | 'xlarge';
} & HTMLAttributes<HTMLDivElement>;
export declare const Paragraph: ({ margin, color, size, children, ...props }: ParagraphProps) => import("react/jsx-runtime").JSX.Element;
export default Paragraph;
