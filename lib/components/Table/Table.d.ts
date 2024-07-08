import { default as React } from '../../../../node_modules/react';
import { TableProps as AntDTableProps } from 'antd';
import { AnyObject } from 'antd/lib/table/Table';

type TableProps = {
    isLoading?: boolean;
    isExpanded?: boolean;
    showError?: boolean;
    dataId?: string;
    errorContent?: React.ReactNode;
};
export declare const Table: <RecordType extends AnyObject>(props: AntDTableProps<RecordType> & TableProps) => import("react/jsx-runtime").JSX.Element;
export declare const buildTableWithDataId: <RecordType extends AnyObject>() => React.ForwardRefExoticComponent<Omit<AntDTableProps<RecordType> & TableProps, "dataId"> & Partial<{
    dataId?: string;
}> & React.RefAttributes<unknown>>;
export {};
