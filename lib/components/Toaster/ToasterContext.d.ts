import { default as React } from '../../../../node_modules/react';
import { ToastType } from '../index.ts';
type ToasterContextType = {
    toast: ({ text, type }: {
        text: string;
        type: ToastType;
    }) => void;
};
export declare const ToasterContext: React.Context<ToasterContextType>;
export {};
