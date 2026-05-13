type SectionProps = {
    dataId?: string;
    children: JSX.Element;
    title?: string;
    isLoading?: boolean;
    onExportExcel?: () => void;
    onExportImage?: () => void;
    onAddReport?: () => void;
    iconExportExcelAriaLabel?: string;
    iconExportImageAriaLabel?: string;
    iconAddReportAriaLabel?: string;
};
export declare const Section: import('../../../../node_modules/react').ForwardRefExoticComponent<SectionProps & {
    dataId?: string;
} & import('../../../../node_modules/react').RefAttributes<unknown>>;
export {};
