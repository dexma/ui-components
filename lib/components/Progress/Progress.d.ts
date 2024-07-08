export type ProgressProps = {
    percent: number;
    marks?: Array<{
        value: number;
        color: string;
    }>;
    text?: string;
    isTransparent?: boolean;
    color: string;
};
export declare const Progress: ({ text, marks, percent, color, isTransparent, ...props }: ProgressProps) => import("react/jsx-runtime").JSX.Element;
export default Progress;
