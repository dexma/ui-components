import React,{ useContext, useEffect, useId, useLayoutEffect, useRef, useState, type KeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import styled, { ThemeContext } from 'styled-components';
import omit from 'lodash/omit';
import classNames from 'classnames';
import { ConfigProvider as AntdConfigProvider, Table as TableAntDesign, type TableProps as AntDTableProps } from 'antd';
import { ConfigProvider } from '@components/ConfigProvider/ConfigProvider';
import { getLocale } from '@components/DatePicker/datePickerUtils';

import defaultTheme from '@utils/theme';
import { Icon, Pagination } from '@components';
import { withDataId } from '@components/DataId/withDataId';
import { StyledResult } from '@styles/Result/StyledResult';
import { StyledTableV2, StyledTablePopups, tablePrefixCls } from '@styles/TableV2/StyledTableV2';
import { AnyObject } from 'antd/lib/_util/type';
import type { ColumnsType } from 'antd/es/table/interface';
import { ellipsisScrollX, extendTitle, getLeafColumns, isFilterable, mapLeafColumns, type TableV2Column } from './columns';
import { FilterBar, useColumnFilters } from './filters';
import { ExpandAllButton, getRowKey, useExpandAll } from './expandAll';
import { decorateHeader } from './header';
import { useTableLabels, type TableLabels, type TableLang } from './labels';

export type { TableV2Column } from './columns';
export type { TableLang } from './labels';

const StyledTableLoading = styled.div`
    display: flex;
    margin: 0 auto;
    text-align: center;
    height: 400px;
    align-items: center;
    justify-content: center;
`;

const TableLoading = () => {
    // Its own ids, so two loading tables (or any other SVG on the page) don't share #fill and #clip-path.
    const id = useId().replace(/:/g, '');
    return (
        <StyledTableLoading data-testid='table-loading'>
            <svg width='210' height='210' aria-labelledby='loading-aria' preserveAspectRatio='none' viewBox='0 0 210 210'>
                <rect width='100%' height='100%' fill={`url("#${id}-fill")`} clipPath={`url(#${id}-clip)`} />
                <defs>
                    <clipPath id={`${id}-clip`}>
                        <rect width='9' height='158' x='10' y='26' rx='0' ry='0' />
                        <rect width='1' height='88' x='107' y='73' rx='0' ry='0' />
                        <rect width='190' height='9' x='10' y='26' rx='0' ry='0' />
                        <rect width='184' height='9' x='10' y='175' rx='0' ry='0' />
                        <rect width='9' height='158' x='191' y='26' rx='0' ry='0' />
                        <rect width='4' height='158' x='59' y='26' rx='0' ry='0' />
                        <rect width='4' height='158' x='103' y='26' rx='0' ry='0' />
                        <rect width='4' height='158' x='147' y='26' rx='0' ry='0' />
                        <rect width='184' height='4' x='10' y='68' rx='0' ry='0' />
                    </clipPath>
                    <linearGradient id={`${id}-fill`}>
                        <stop offset='0.6' stopColor='#f3f3f3'>
                            <animate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-2; -2; 1' />
                        </stop>
                        <stop offset='1.6' stopColor='#ecebeb'>
                            <animate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='-1; -1; 2' />
                        </stop>
                        <stop offset='2.6' stopColor='#f3f3f3'>
                            <animate attributeName='offset' dur='2s' keyTimes='0; 0.25; 1' repeatCount='indefinite' values='0; 0; 3' />
                        </stop>
                    </linearGradient>
                </defs>
            </svg>
        </StyledTableLoading>
    );
};

const StyledTableError = styled.div`
    display: flex;
    margin: 0 auto;
    text-align: center;
    height: 400px;
    align-items: center;
    justify-content: center;
    ${StyledResult} {
        margin: 0;
    }
`;

type TableErrorProps = {
    children: React.ReactNode;
};
const TableError = (props: TableErrorProps) => <StyledTableError data-testid='table-error' {...props} />;

type ExpandedIconProps<T> = {
    expanded: boolean;
    onExpand: (record: T, event: React.MouseEvent<HTMLElement>) => void;
    record: T;
};

// The Dexma arrow, on exactly the rows expand-all opens. Its name says what a click does ("Expand row" / "Collapse row").
const getExpandedIcon = <T,>({ expanded, onExpand, record }: ExpandedIconProps<T>, { labels, canExpand }: { labels: TableLabels; canExpand: (record: T) => boolean }) =>
    canExpand(record) ? (
        <button
            type='button'
            className='table-expand-button'
            data-open={expanded}
            aria-label={expanded ? labels.collapse : labels.expand}
            onClick={(e: React.MouseEvent<HTMLElement>) => {
                e.stopPropagation();
                onExpand(record, e);
            }}
        >
            <Icon name='chevron_down' size={16} ariaLabel='' aria-hidden />
        </button>
    ) : (
        <span className='table-expand-placeholder' />
    );

// The table's look is fixed: app class names and inline styles meant for the old Table are not applied.
type AppStylingProps = 'className' | 'style' | 'rootClassName' | 'prefixCls';
const appStylingProps: AppStylingProps[] = ['className', 'style', 'rootClassName', 'prefixCls'];

export type TableV2Props<RecordType> = {
    isLoading?: boolean;
    isExpanded?: boolean;
    isPaginated?: boolean;
    showError?: boolean;
    dataId?: string;
    errorContent?: React.ReactNode;
    rowsCanBeSelectAriaLabel?: string;
    selectAllRowsAriaLabel?: string;
    totalRegisters?: number;
    /** The page shown. The footer follows it whenever the app changes it, and the user's clicks in between. */
    currentPage?: number;
    /** Rows per page. Like `currentPage`, followed when the app changes it; a size picked in the footer stays meanwhile. */
    pageSize?: number;
    showSizeChanger?: boolean;
    /** Footer text left of the pages, e.g. `(total) => `Total ${total} items``. Hidden when omitted. */
    showTotal?: (total: number, range: [number, number]) => React.ReactNode;
    pageSizeOptions?: string[];
    onPageChange?: (page: number, pageSize: number) => void;
    prevPageAriaLabel?: string;
    nextPageAriaLabel?: string;
    prevDotsPageAriaLabel?: string;
    nextDotsPageAriaLabel?: string;
    /** `false` drops the card's border, radius and padding, for tables already in a box. The footer stays. */
    showCard?: boolean;
    columns?: TableV2Column<RecordType>[];
    /** Text at the start of the filter bar, such as "Showing 4 of 85 items". Translated by the app. */
    filterSummary?: React.ReactNode;
    /** The table's language, as DatePicker's `lang`: antd's strings (sorting, filters, pages) and the table's own labels. */
    lang?: TableLang;
    /** Accessible name of each chip's remove button. Defaults to the `lang` text. */
    removeFilterAriaLabel?: (chipText: string) => string;
    /** Accessible names of the expand-all button while some rows are closed, and once all are open. Default to the `lang` text. */
    expandAllAriaLabel?: string;
    collapseAllAriaLabel?: string;
} & Omit<AntDTableProps<RecordType>, 'columns' | 'pagination' | AppStylingProps>;

const NBSP = ' ';

const normalizeColumnTitles = <RecordType extends AnyObject>(cols?: ColumnsType<RecordType>) =>
    cols?.map((col) => (col.title == null || col.title === '' ? { ...col, title: NBSP } : col));

/** State the user changes, which also follows the prop whenever the app changes it (React's "adjust state on prop change"). */
const useFollowedState = <T,>(prop: T) => {
    const [state, setState] = useState(prop);
    const [lastProp, setLastProp] = useState(prop);
    if (prop !== lastProp) {
        setLastProp(prop);
        setState(prop);
    }
    return [state, setState] as const;
};

type TableV2BodyProps<RecordType> = TableV2Props<RecordType> & { popupHost: HTMLElement | null };

// Mounted only while the table shows, as antd's own table is, so default* props (defaultExpandAllRows,
// defaultExpandedRowKeys, defaultFilteredValue) apply to the rows that arrive once loading finishes.
const TableV2Body = <RecordType extends AnyObject>({ popupHost, ...allProps }: TableV2BodyProps<RecordType>) => {
    const {
        isExpanded,
        expandable,
        rowSelection,
        columns,
        dataSource,
        locale,
        lang,
        scroll,
        onChange,
        filterSummary,
        removeFilterAriaLabel,
        expandAllAriaLabel,
        collapseAllAriaLabel,
        rowKey,
        rowClassName,
        rowsCanBeSelectAriaLabel,
        showSorterTooltip = true,
    } = allProps;
    const labels = useTableLabels(locale, lang);
    const data = dataSource ?? [];
    const filters = useColumnFilters({ columns, dataSource: data, onChange });
    const expandAll = useExpandAll({ dataSource: data, expandable, rowKey });

    const tableProps = omit(allProps, [
        'theme',
        'columns',
        'dataId',
        'expandable',
        'rowSelection',
        'dataSource',
        'showCard',
        'scroll',
        'onChange',
        'filterSummary',
        'lang',
        'removeFilterAriaLabel',
        'expandAllAriaLabel',
        'collapseAllAriaLabel',
        'rowClassName',
        'showSorterTooltip',
        'getPopupContainer',
        'pagination',
        ...appStylingProps,
    ]);
    // antd keys a column's filter by its `key`, else its dataIndex or position, and the chips copy that private rule
    // (columnKey in columns.tsx). A `key` keeps a filterable column's chip independent of it, so ask for one, once.
    const unkeyedFilterColumns = getLeafColumns(columns)
        .filter(({ column }) => isFilterable(column) && column.key == null)
        .map(({ column, key }) => (typeof column.title === 'string' ? column.title : key))
        .join(', ');
    useEffect(() => {
        if (!unkeyedFilterColumns || process.env.NODE_ENV === 'production') return;
        // eslint-disable-next-line no-console
        console.warn(`TableV2: give these filterable columns a \`key\`: ${unkeyedFilterColumns}. Without one, their filter chips rely on antd's internal column keys.`);
    }, [unkeyedFilterColumns]);

    const minScrollX = ellipsisScrollX(columns, { scrollX: scroll?.x, hasSelection: !!rowSelection, hasExpandColumn: !!expandable?.expandedRowRender });
    const getColumnsExpanded = () => (columns ?? []).map((column, index) => (index === 0 ? { ...column, className: classNames('expanded-first-column', column.className) } : column));

    // antd 5.11 hangs the sort tooltip on the whole title, info icon included. While an info icon is hovered, a class on
    // the popup layer (where the sort tooltip renders) hides it, so only the info tooltip shows; no table re-render.
    const onInfoHover = (hovered: boolean) => popupHost?.classList.toggle('table-popups-info-hover', hovered);

    // A closed detail row stays in the DOM, hidden, so `tr:last-child` misses the last row shown: mark that row instead.
    const lastKey = expandAll.type === 'row' && data.length > 0 ? getRowKey(data[data.length - 1], rowKey) : undefined;
    const mergedRowClassName: AntDTableProps<RecordType>['rowClassName'] = (record, index, indent) =>
        classNames(typeof rowClassName === 'function' ? rowClassName(record, index, indent) : rowClassName, {
            'table-row-last-shown': lastKey !== undefined && !expandAll.isOpen(lastKey) && getRowKey(record, rowKey) === lastKey,
        });

    // Expand-all shows unless the app put its own content in the expand header. It goes in the expand column for
    // detail rows, and before the first column's title for tree data, where antd draws the arrows in that column.
    const expandAllButton =
        expandable?.columnTitle == null && expandAll.expandableKeys.length > 0 ? (
            <ExpandAllButton
                allOpen={expandAll.allOpen}
                onToggle={expandAll.toggleAll}
                expandLabel={expandAllAriaLabel ?? labels.expandAll}
                collapseLabel={collapseAllAriaLabel ?? labels.collapseAll}
            />
        ) : null;
    const firstLeafKey = getLeafColumns(columns)[0]?.key;
    // Only tables with expandable rows get the Dexma arrow and the open-row state: a custom expandIcon alone makes
    // antd draw an indent and an icon slot in every row of a flat table.
    const mergedExpandable = expandAll.type && {
        ...expandable,
        expandIcon: expandable?.expandIcon ?? ((iconProps: ExpandedIconProps<RecordType>) => getExpandedIcon(iconProps, { labels, canExpand: expandAll.canExpand })),
        columnTitle: expandable?.columnTitle || (expandAll.type === 'row' && expandAllButton) || NBSP,
        expandedRowKeys: expandAll.openKeys,
        onExpandedRowsChange: expandAll.setOpenKeys,
    };
    // Each row checkbox is named through antd's own prop, so a table never renames another's (one nested in an expanded row).
    const mergedRowSelection = rowSelection && {
        ...rowSelection,
        ...(rowSelection.hideSelectAll && !rowSelection.columnTitle ? { columnTitle: NBSP } : {}),
        getCheckboxProps: (record: RecordType) => ({ 'aria-label': rowsCanBeSelectAriaLabel, ...rowSelection.getCheckboxProps?.(record) }),
    };
    return (
        <>
            <FilterBar summary={filterSummary} chips={filters.chips} removeAriaLabel={removeFilterAriaLabel ?? labels.removeFilter} onRemove={filters.remove} />
            <TableAntDesign
                prefixCls={tablePrefixCls}
                expandable={mergedExpandable || expandable}
                rowSelection={mergedRowSelection}
                rowClassName={mergedRowClassName}
                pagination={false}
                columns={normalizeColumnTitles(
                    mapLeafColumns(isExpanded ? getColumnsExpanded() : columns ?? [], (column, key) => {
                        let next = decorateHeader(column, labels, onInfoHover);
                        if (isFilterable(column)) next = { ...next, filteredValue: filters.valueFor(column, key) };
                        if (expandAll.type === 'nest' && expandAllButton && key === firstLeafKey) next = { ...next, title: extendTitle(next.title, { before: expandAllButton }) };
                        return next;
                    })
                )}
                getPopupContainer={() => popupHost ?? document.body}
                showSorterTooltip={showSorterTooltip && { getPopupContainer: () => popupHost ?? document.body, ...(typeof showSorterTooltip === 'object' ? showSorterTooltip : {}) }}
                scroll={minScrollX === undefined ? scroll : { ...scroll, x: minScrollX }}
                onChange={filters.handleChange}
                dataSource={data}
                {...tableProps}
            />
        </>
    );
};

export const TableV2 = <RecordType extends AnyObject>(props: TableV2Props<RecordType>) => {
    const {
        isPaginated = true,
        columns,
        dataSource,
        isLoading,
        showError,
        errorContent,
        dataId,
        selectAllRowsAriaLabel,
        totalRegisters,
        currentPage = 1,
        pageSize = 10,
        showSizeChanger,
        showTotal,
        pageSizeOptions = ['5', '10', '20'],
        onPageChange,
        prevPageAriaLabel,
        nextPageAriaLabel,
        prevDotsPageAriaLabel,
        nextDotsPageAriaLabel,
        showCard = true,
        lang,
        getPopupContainer,
    } = props;
    const rootRef = useRef<HTMLDivElement>(null);
    const { getPopupContainer: appPopupContainer } = useContext(AntdConfigProvider.ConfigContext);
    const popupContainer = getPopupContainer ?? appPopupContainer;
    // The popup layer (filter dropdowns, sort tooltips) goes where the app keeps its popups: this table's
    // getPopupContainer, else its ConfigProvider's, else body. Found after mount, as antd does, since the app's
    // function may look up from a node in the table.
    const [popupParent, setPopupParent] = useState<HTMLElement | null>(null);
    const [popupHost, setPopupHost] = useState<HTMLDivElement | null>(null);
    useLayoutEffect(() => {
        setPopupParent(popupContainer ? popupContainer(rootRef.current as HTMLElement) : document.body);
    }, [popupContainer]);

    // Runs after every render, so a header that renders again keeps its label, and new filter triggers become a tab stop:
    // antd 5.11 renders the trigger with tabIndex -1, out of keyboard reach. antd names the select-all checkbox "Select
    // all" itself, with no prop to change it; the first header in the table is its own, before any nested table's.
    useEffect(() => {
        const root = rootRef.current;
        if (!root) return;
        const checkSelectAll = root.querySelector(`.${tablePrefixCls}-thead .ant-checkbox-input`);
        if (checkSelectAll && selectAllRowsAriaLabel) checkSelectAll.setAttribute('aria-label', selectAllRowsAriaLabel);
        root.querySelectorAll(`.${tablePrefixCls}-filter-trigger`).forEach((trigger) => trigger.setAttribute('tabindex', '0'));
    });
    // Enter or Space on a filter trigger opens it like a button. Caught on the way down, so the header doesn't also sort.
    const openFilterFromKeyboard = (event: KeyboardEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement;
        if ((event.key !== 'Enter' && event.key !== ' ') || !target.classList.contains(`${tablePrefixCls}-filter-trigger`)) return;
        event.preventDefault();
        event.stopPropagation();
        target.click();
    };

    const [actualPage, setActualPage] = useFollowedState(currentPage);
    const [actualPageSize, setActualPageSize] = useFollowedState(pageSize);
    const th = useContext(ThemeContext) || defaultTheme;

    const loading = isLoading && !showError;
    const error = !isLoading && showError && errorContent;
    const showTable = !loading && !error && columns && dataSource;
    return (
        <ConfigProvider
            locale={lang ? getLocale(lang) : undefined}
            theme={{
                token: {
                    colorPrimary: th.primary,
                },
                components: {
                    Table: {
                        colorText: th.color.gray900,
                        headerColor: th.color.gray900,
                        headerBg: th.color.gray50,
                        headerSplitColor: th.color.gray200,
                        headerBorderRadius: 4,
                        borderColor: th.color.gray200,
                        fontWeightStrong: th.fontWeightSemiBold,
                        // ponytail: #E6F6F6 from design, not in the colour library yet; move it there if it gets a name.
                        rowSelectedBg: '#E6F6F6',
                        footerBg: th.color.white,
                        cellFontSize: 14,
                        cellFontSizeMD: 14,
                        cellFontSizeSM: 14,
                        cellPaddingBlock: 16,
                        cellPaddingInline: 16,
                        cellPaddingBlockMD: 12,
                        cellPaddingInlineMD: 16,
                        cellPaddingBlockSM: 8,
                        cellPaddingInlineSM: 16,
                        selectionColumnWidth: 40,
                    },
                },
            }}
        >
            <StyledTableV2 ref={rootRef} data-testid='table' theme={th} data-id={dataId} onKeyDownCapture={openFilterFromKeyboard}>
                {popupParent && createPortal(<StyledTablePopups className='table-popups' ref={setPopupHost} />, popupParent)}
                <div className={showCard ? 'table-card' : undefined}>
                    {loading && <TableLoading />}
                    {error && <TableError> {errorContent} </TableError>}
                    {showTable && (
                        <>
                            <TableV2Body {...props} popupHost={popupHost} />
                            {isPaginated && (
                                <div className='table-footer'>
                                    <Pagination
                                        total={totalRegisters}
                                        pageSize={actualPageSize}
                                        current={actualPage}
                                        previousPageAriaLabel={prevPageAriaLabel || ''}
                                        nextPageAriaLabel={nextPageAriaLabel || ''}
                                        prevDotsPageAriaLabel={prevDotsPageAriaLabel || ''}
                                        nextDotsPageAriaLabel={nextDotsPageAriaLabel || ''}
                                        showSizeChanger={showSizeChanger}
                                        showTotal={showTotal}
                                        pageSizeOptions={pageSizeOptions}
                                        totalBoundaryShowSizeChanger={!showSizeChanger ? Infinity : 50}
                                        onChange={(page, size) => {
                                            const nextPage = size !== actualPageSize ? 1 : page;
                                            setActualPage(nextPage);
                                            setActualPageSize(size);
                                            onPageChange?.(nextPage, size);
                                        }}
                                    />
                                </div>
                            )}
                        </>
                    )}
                </div>
            </StyledTableV2>
        </ConfigProvider>
    );
};

// One component for every call, so a parent that builds it while rendering keeps the same component type: React then
// updates it instead of remounting it, which would drop its filters, chips, open rows and page on every parent render.
const TableV2WithDataId = withDataId(TableV2<AnyObject>, 'table');

export const buildTableV2WithDataId = <RecordType extends AnyObject>() =>
    TableV2WithDataId as unknown as ReturnType<typeof withDataId<TableV2Props<RecordType>>>;
