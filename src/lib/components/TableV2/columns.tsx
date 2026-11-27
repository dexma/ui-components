import type { Key, ReactNode } from 'react';
import type { ColumnGroupType, ColumnsType, ColumnTitleProps, ColumnType, FilterValue } from 'antd/es/table/interface';

type DexmaColumnFields = {
    /** A 12px info icon after the title. Hover or keyboard focus shows this text in a tooltip; it also names the icon. */
    info?: string;
    /** Adds the built-in search dropdown and icon. The typed text becomes the column's filter value. */
    search?: { placeholder?: string };
    /** The filter chip's text for this column, for values that aren't readable as they are (dates, ids). */
    filterLabel?: (values: FilterValue) => string;
};

export type LeafColumn<T> = ColumnType<T> & DexmaColumnFields;

type GroupColumn<T> = Omit<ColumnGroupType<T>, 'children'> & { children: TableV2Column<T>[] };

/** antd's column type plus `info`, `search` and `filterLabel`. Groups pass through; the fields apply to leaf columns. */
export type TableV2Column<T> = LeafColumn<T> | GroupColumn<T>;

const isGroup = <T,>(column: TableV2Column<T>): column is GroupColumn<T> => 'children' in column && Array.isArray(column.children);

// antd's own filter key (getColumnKey and getColumnPos in antd/es/table/util.js), so these keys match the `filters` antd reports.
const columnKey = (column: { key?: Key; dataIndex?: unknown }, pos: string): string => {
    if (column.key !== undefined && column.key !== null) return String(column.key);
    if (column.dataIndex) return Array.isArray(column.dataIndex) ? column.dataIndex.join('.') : String(column.dataIndex);
    return pos;
};

const position = (index: number, parentPos?: string) => (parentPos ? `${parentPos}-${index}` : `${index}`);

/** Leaf columns in order, each with the key antd uses for its filter. */
export const getLeafColumns = <T,>(columns: TableV2Column<T>[] = [], parentPos?: string): { column: LeafColumn<T>; key: string }[] =>
    columns.flatMap((column, index) => {
        const pos = position(index, parentPos);
        return isGroup(column) ? getLeafColumns(column.children, pos) : [{ column, key: columnKey(column, pos) }];
    });

/** antd's own test for a filterable column, plus `search`. */
export const isFilterable = <T,>(column: LeafColumn<T>): boolean => !!column.filters || 'filterDropdown' in column || 'onFilter' in column || !!column.search;

const MIN_COLUMN_WIDTH = 60;
const UTILITY_COLUMN_WIDTH = 40;

/**
 * antd switches to fixed layout as soon as a column truncates, and unsized columns then split the space equally.
 * This gives the table a `scroll.x` that keeps each unsized column at least 60px wide, so it scrolls instead of
 * squeezing. Returns `undefined` (leave `scroll.x` alone) when nothing truncates, the app set `scroll.x`, a width
 * is a string such as '25%' (no reliable sum), or every column already has a width.
 */
export const ellipsisScrollX = <T,>(
    columns: TableV2Column<T>[] | undefined,
    { scrollX, hasSelection, hasExpandColumn }: { scrollX?: unknown; hasSelection: boolean; hasExpandColumn: boolean }
): number | undefined => {
    const leaves = getLeafColumns(columns).map(({ column }) => column);
    const unsized = leaves.filter((column) => typeof column.width !== 'number');
    if (!leaves.some((column) => column.ellipsis) || scrollX !== undefined || unsized.length === 0) return undefined;
    if (leaves.some((column) => typeof column.width === 'string')) return undefined;
    const sized = leaves.reduce((sum, column) => sum + (typeof column.width === 'number' ? column.width : 0), 0);
    return sized + unsized.length * MIN_COLUMN_WIDTH + (Number(hasSelection) + Number(hasExpandColumn)) * UTILITY_COLUMN_WIDTH;
};

/** Maps every leaf column, keeping groups and their order. */
export const mapLeafColumns = <T,>(columns: TableV2Column<T>[], fn: (column: LeafColumn<T>, key: string) => ColumnType<T>, parentPos?: string): ColumnsType<T> =>
    columns.map((column, index) => {
        const pos = position(index, parentPos);
        return isGroup(column) ? { ...column, children: mapLeafColumns(column.children, fn, pos) } : fn(column, columnKey(column, pos));
    });

/** Puts nodes before or after a column title, centred on one line with it, whether the title is a node or a function. */
export const extendTitle = <T,>(title: ColumnType<T>['title'], { before, after }: { before?: ReactNode; after?: ReactNode }): ColumnType<T>['title'] => {
    const line = (node: ReactNode) => (
        <span className='table-header-title'>
            {before}
            <span className='table-header-title-text'>{node}</span>
            {after}
        </span>
    );
    return typeof title === 'function' ? (props: ColumnTitleProps<T>) => line(title(props)) : line(title);
};
