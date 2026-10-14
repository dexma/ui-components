export declare enum ToastType {
    INFO = "info",
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
}
type ToastProps = {
    text: string;
    type: ToastType;
};
export declare const Toast: ({ text, type }: ToastProps) => import("react/jsx-runtime").JSX.Element;
export {};
