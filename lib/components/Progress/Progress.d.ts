export type ProgressProps = {
    percent: number;
    marks?: Array<{
        value: number;
        color: string;
    }>;
    text?: string;
    isTransparent?: boolean;
    color: string;
    ariaLabel?: string;
};
export declare const Progress: ({ text, marks, percent, color, isTransparent, ariaLabel, ...props }: ProgressProps) => import("react/jsx-runtime").JSX.Element;
export default Progress;
