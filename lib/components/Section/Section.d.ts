import { default as React } from '../../../../node_modules/react';

type SectionProps = {
    dataId?: string;
    children: JSX.Element;
    title?: string;
    isLoading?: boolean;
    onExportExcel?: () => void;
    onExportImage?: () => void;
    onAddReport?: () => void;
};
export declare const Section: React.ForwardRefExoticComponent<Omit<SectionProps, "dataId"> & Partial<{
    dataId?: string;
}> & React.RefAttributes<unknown>>;
export {};
