import { HTMLAttributes, ReactElement, ReactNode } from '../../../../node_modules/react';
import { default as defaultTheme } from '../../utils/theme';
export type LoadingProps = {
    size?: number;
    isLoading: boolean;
    color?: typeof defaultTheme.color;
} & HTMLAttributes<HTMLDivElement>;
export declare const Loading: ({ color, size, isLoading, children, ...props }: LoadingProps) => ReactElement | ReactNode;
export default Loading;
