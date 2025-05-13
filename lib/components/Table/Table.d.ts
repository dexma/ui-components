import { default as React } from '../../../../node_modules/react';
import { TableProps as AntDTableProps } from 'antd';
import { AnyObject } from 'antd/lib/_util/type';
export type TableProps<RecordType> = {
    isLoading?: boolean;
    isExpanded?: boolean;
    showError?: boolean;
    dataId?: string;
    errorContent?: React.ReactNode;
    rowsCanBeSelectAriaLabel?: string;
    selectAllRowsAriaLabel?: string;
    currentPage?: number;
    pageSize?: number;
    showSizeChanger?: boolean;
    pageSizeOptions?: string[];
} & AntDTableProps<RecordType>;
export declare const Table: <RecordType extends AnyObject>(props: TableProps<RecordType>) => import("react/jsx-runtime").JSX.Element;
export declare const buildTableWithDataId: <RecordType extends AnyObject>() => React.ForwardRefExoticComponent<{
    isLoading?: boolean;
    isExpanded?: boolean;
    showError?: boolean;
    dataId?: string;
    errorContent?: React.ReactNode;
    rowsCanBeSelectAriaLabel?: string;
    selectAllRowsAriaLabel?: string;
    currentPage?: number;
    pageSize?: number;
    showSizeChanger?: boolean;
    pageSizeOptions?: string[];
} & AntDTableProps<RecordType> & {
    dataId?: string;
} & React.RefAttributes<unknown>>;
