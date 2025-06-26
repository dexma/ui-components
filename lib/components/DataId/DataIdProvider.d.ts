import { default as React } from '../../../../node_modules/react';
export declare const DataIdContext: React.Context<string>;
export declare const DataIdProvider: {
    (props: {
        children: React.ReactNode;
        dataId: string;
    }): import("react/jsx-runtime").JSX.Element;
    context: React.Context<string>;
};
