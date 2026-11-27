import { useRef, useState, type ReactNode } from 'react';
import type { TableProps as AntDTableProps } from 'antd';
import type { FilterValue, SorterResult, SortOrder } from 'antd/es/table/interface';
import type { AnyObject } from 'antd/lib/_util/type';

import { Icon } from '@components';
import { getLeafColumns, isFilterable, type TableV2Column, type LeafColumn } from './columns';

export type FilterChip = { key: string; text: string };
type Filters = Record<string, FilterValue | null>;

/** "Title: v1, v2", each value named by its `filters` text; only the values when the title isn't text; `filterLabel` wins. */
export const chipText = <T,>(column: LeafColumn<T>, values: FilterValue): string => {
    if (column.filterLabel) return column.filterLabel(values);
    const names = values
        .map((value) => {
            const text = column.filters?.find((item) => String(item.value) === String(value))?.text;
            return typeof text === 'string' ? text : String(value);
        })
        .join(', ');
    return typeof column.title === 'string' && column.title ? `${column.title}: ${names}` : names;
};

// The rows antd would show under these filters: each value goes through its column's onFilter, matched back to the
// original `filters` value as antd does. ponytail: not re-sorted, and tree children aren't filtered; antd does both.
const keptRows = <T,>(rows: readonly T[], leaves: { column: LeafColumn<T>; key: string }[], filters: Filters): T[] =>
    rows.filter((row) =>
        leaves.every(({ column: { onFilter, filters: options }, key }) => {
            const values = filters[key];
            if (!values?.length || !onFilter) return true;
            return values.some((value) => onFilter(options?.find((item) => String(item.value) === String(value))?.value ?? value, row));
        })
    );

type Sorter<T> = SorterResult<T> | SorterResult<T>[];

// antd's sorter shape: one object, an array when several columns sort, or {} when none does.
const sorterOf = <T,>(sorted: { column: LeafColumn<T>; order: SortOrder }[]): Sorter<T> => {
    const infos = sorted.map(({ column, order }) => ({ column, columnKey: column.key, field: column.dataIndex, order }));
    return infos.length > 1 ? infos : infos[0] ?? {};
};

type UseColumnFiltersArgs<T> = { columns?: TableV2Column<T>[]; dataSource: readonly T[]; onChange?: AntDTableProps<T>['onChange'] };

/**
 * Tracks every filterable column's values, so a chip can clear one. The app's `filteredValue` wins; columns it
 * leaves uncontrolled are kept here, starting from `defaultFilteredValue`.
 */
export const useColumnFilters = <T extends AnyObject>({ columns, dataSource, onChange }: UseColumnFiltersArgs<T>) => {
    const leaves = getLeafColumns(columns).filter(({ column }) => isFilterable(column));
    const [own, setOwn] = useState<Filters>(() => Object.fromEntries(leaves.map(({ column, key }) => [key, column.defaultFilteredValue ?? null])));
    const lastSorter = useRef<Sorter<T>>();

    // The sort in force when a chip is removed: the app's controlled sortOrder, else the last sort antd reported,
    // else defaultSortOrder. Apps that rebuild a server query from `sorter` would otherwise lose their sort.
    const currentSorter = (): Sorter<T> => {
        const all = getLeafColumns(columns).map(({ column }) => column);
        const sortedBy = (orderOf: (column: LeafColumn<T>) => SortOrder | undefined) =>
            sorterOf(
                all.flatMap((column) => {
                    const order = orderOf(column);
                    return order ? [{ column, order }] : [];
                })
            );
        if (all.some((column) => column.sortOrder !== undefined)) return sortedBy((column) => column.sortOrder);
        return lastSorter.current ?? sortedBy((column) => column.defaultSortOrder);
    };

    const valueFor = (column: LeafColumn<T>, key: string): FilterValue | null => (column.filteredValue !== undefined ? column.filteredValue : own[key] ?? null);

    const chips: FilterChip[] = leaves.flatMap(({ column, key }) => {
        const values = valueFor(column, key);
        return values?.length ? [{ key, text: chipText(column, values) }] : [];
    });

    const handleChange: NonNullable<AntDTableProps<T>['onChange']> = (pagination, filters, sorter, extra) => {
        setOwn(filters);
        lastSorter.current = sorter;
        onChange?.(pagination, filters, sorter, extra);
    };

    const remove = (key: string) => {
        const next: Filters = Object.fromEntries(leaves.map(({ column, key: leafKey }) => [leafKey, leafKey === key ? null : valueFor(column, leafKey)]));
        setOwn(next);
        onChange?.({}, next, currentSorter(), { action: 'filter', currentDataSource: keptRows(dataSource, leaves, next) });
    };

    return { valueFor, chips, handleChange, remove };
};

type FilterBarProps = { summary?: ReactNode; chips: FilterChip[]; removeAriaLabel: (chipText: string) => string; onRemove: (key: string) => void };

/** The summary, then one removable chip per filtered column. Hidden while nothing is filtered. */
export const FilterBar = ({ summary, chips, removeAriaLabel, onRemove }: FilterBarProps) =>
    chips.length === 0 ? null : (
        <div className='table-filter-bar' data-testid='table-filter-bar'>
            {summary && <span className='table-filter-summary'>{summary}</span>}
            <div className='table-filter-chips'>
                {chips.map(({ key, text }) => (
                    // A long chip is cut short with an ellipsis; its title keeps the whole text on hover.
                    <span key={key} className='table-filter-chip' title={text}>
                        <span className='table-filter-chip-text'>{text}</span>
                        <button type='button' aria-label={removeAriaLabel(text)} onClick={() => onRemove(key)}>
                            <Icon name='close' size={14} ariaLabel='' aria-hidden />
                        </button>
                    </span>
                ))}
            </div>
        </div>
    );
