import { useState, type Key } from 'react';
import type { TableProps as AntDTableProps } from 'antd';
import type { ExpandableConfig } from 'antd/es/table/interface';
import type { AnyObject } from 'antd/lib/_util/type';

import { Icon } from '@components';
import { stopSorting, stopSortingKey } from './header';

type ExpandType = 'row' | 'nest' | false;
type RowKey<T> = AntDTableProps<T>['rowKey'];

export const getRowKey = <T extends AnyObject>(record: T, rowKey: RowKey<T> = 'key'): Key => (typeof rowKey === 'function' ? rowKey(record) : record[rowKey]);

// antd's own rule: a detail panel when expandedRowRender is set, else a tree when any row has children.
const expandTypeOf = <T extends AnyObject>(data: readonly T[], expandable?: ExpandableConfig<T>): ExpandType => {
    if (expandable?.expandedRowRender) return 'row';
    const childrenColumnName = expandable?.childrenColumnName ?? 'children';
    return data.some((record) => record?.[childrenColumnName]) ? 'nest' : false;
};

type RowOptions<T> = { type: ExpandType; childrenColumnName?: string; rowExpandable?: (record: T) => boolean };

/** One rule for the row arrow and for expand-all: detail rows that pass `rowExpandable` (or have `expandable: true`), or tree rows with children. */
const canExpandRow = <T extends AnyObject>(record: T, { type, childrenColumnName = 'children', rowExpandable }: RowOptions<T>): boolean => {
    if (type === 'row') return rowExpandable ? rowExpandable(record) : record.expandable === true;
    const children = record[childrenColumnName];
    return type === 'nest' && Array.isArray(children) && children.length > 0;
};

/** Rows expand-all opens, parents first, with their keys. */
const collectExpandableRows = <T extends AnyObject>(data: readonly T[], options: RowOptions<T> & { rowKey?: RowKey<T> }): { key: Key; record: T }[] =>
    data.flatMap((record) => {
        if (!canExpandRow(record, options)) return [];
        const row = { key: getRowKey(record, options.rowKey), record };
        return options.type === 'nest' ? [row, ...collectExpandableRows(record[options.childrenColumnName ?? 'children'], options)] : [row];
    });

type UseExpandAllArgs<T> = { dataSource: readonly T[]; expandable?: ExpandableConfig<T>; rowKey?: RowKey<T> };

/** Which rows are open. The app's `expandedRowKeys` wins; otherwise the table keeps them, from `defaultExpandAllRows` or `defaultExpandedRowKeys`. */
export const useExpandAll = <T extends AnyObject>({ dataSource, expandable, rowKey }: UseExpandAllArgs<T>) => {
    const rowOptions: RowOptions<T> = { type: expandTypeOf(dataSource, expandable), childrenColumnName: expandable?.childrenColumnName, rowExpandable: expandable?.rowExpandable };
    const expandableRows = collectExpandableRows(dataSource, { ...rowOptions, rowKey });
    const expandableKeys = expandableRows.map(({ key }) => key);
    const [ownKeys, setOwnKeys] = useState<readonly Key[]>(() => (expandable?.defaultExpandAllRows ? expandableKeys : expandable?.defaultExpandedRowKeys ?? []));
    const openKeys = expandable?.expandedRowKeys ?? ownKeys;
    const open = new Set(openKeys);

    const setOpenKeys = (keys: readonly Key[]) => {
        if (expandable?.expandedRowKeys === undefined) setOwnKeys(keys);
        expandable?.onExpandedRowsChange?.(keys);
    };
    const allOpen = expandableKeys.length > 0 && expandableKeys.every((key) => open.has(key));
    // As a click on each arrow would: onExpand for every row that opens or closes, then the new keys.
    const toggleAll = () => {
        const opening = !allOpen;
        expandableRows.filter(({ key }) => open.has(key) !== opening).forEach(({ record }) => expandable?.onExpand?.(opening, record));
        setOpenKeys(opening ? expandableKeys : []);
    };
    const canExpand = (record: T) => canExpandRow(record, rowOptions);
    const isOpen = (key: Key) => open.has(key);

    return { type: rowOptions.type, expandableKeys, openKeys, setOpenKeys, allOpen, toggleAll, canExpand, isOpen };
};

type ExpandAllButtonProps = { allOpen: boolean; onToggle: () => void; expandLabel: string; collapseLabel: string };

/** Opens every expandable row, or closes them all once they're all open (Figma 6956:46386). Its name says which. */
export const ExpandAllButton = ({ allOpen, onToggle, expandLabel, collapseLabel }: ExpandAllButtonProps) => (
    <button
        type='button'
        className='table-expand-all'
        aria-label={allOpen ? collapseLabel : expandLabel}
        onClick={(event) => {
            stopSorting(event);
            onToggle();
        }}
        onKeyDown={stopSortingKey}
    >
        <Icon name='chevron_collapse_rows' size={12} color='gray400' ariaLabel='' aria-hidden />
    </button>
);
