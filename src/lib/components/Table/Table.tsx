import React, { useContext, useEffect, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import omit from 'lodash/omit';
import { Table as TableAntDesign, ConfigProvider, type TableProps as AntDTableProps } from 'antd';

import defaultTheme from '@utils/theme';
import { Button, Pagination } from '@components';
import { withDataId } from '@components/DataId/withDataId';
import { StyledResult } from '@styles/Result/StyledResult';
import { StyledTable } from '@styles/Table/StyledTable';
import { AnyObject } from 'antd/lib/_util/type';

const StyledTableLoading = styled.div`
    display: flex;
    margin: 0 auto;
    text-align: center;
    height: 400px;
    align-items: center;
    justify-content: center;
`;

const TableLoading = () => (
    <StyledTableLoading data-testid='table-loading'>
        <svg width='210' height='210' aria-labelledby='loading-aria' preserveAspectRatio='none' viewBox='0 0 210 210'>
            <rect width='100%' height='100%' fill='url("#fill")' clipPath='url(#clip-path-table)' />
            <defs>
                <clipPath id='clip-path-table'>
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
                <linearGradient id='fill'>
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

const StyledButtonExpanded = styled.label`
    .expand-button {
        width: 16px;
        height: 16px;
        border-color: transparent;
        &:hover &:focus {
            background-color: rgba(64, 65, 69, 0.05) !important;
        }
    }

    .button-expanded {
        transform: rotate(-90deg);
        border-color: transparent;
    }
`;

type ExpandedIconProps<T> = {
    expanded: boolean;
    onExpand: (record: T, event: React.MouseEvent<HTMLElement>) => void;
    record: T;
};

const getExpandedIcon = <T extends { children?: object; expandable?: boolean }>(props: ExpandedIconProps<T>) => {
    const { expanded, onExpand, record } = props;
    return record.children || record.expandable ? (
        <StyledButtonExpanded>
            <Button
                className={`expand-button ${expanded ? 'button-no-expanded' : 'button-expanded'}`}
                iconAfter='chevron_down'
                isCircle
                variant='icon-secondary'
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                    e.stopPropagation();
                    onExpand(record, e);
                }}
            />
        </StyledButtonExpanded>
    ) : (
        <span style={{ height: '16px', width: '16px', display: 'inline-block' }} />
    );
};

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

export const Table = <RecordType extends AnyObject>(props: TableProps<RecordType>) => {
    const {
        isExpanded,
        expandable,
        columns,
        dataSource,
        isLoading,
        showError,
        errorContent,
        dataId,
        rowsCanBeSelectAriaLabel,
        selectAllRowsAriaLabel,
        currentPage = 1,
        pageSize = 10,
        showSizeChanger,
        pageSizeOptions = ['5', '10', '20'],
    } = props;
    useEffect(() => {
        const checkboxes = document.querySelectorAll('.ant-checkbox-inner');
        checkboxes.forEach((li) => li.setAttribute('aria-label', rowsCanBeSelectAriaLabel || ''));
        const thead = document.querySelector('.ant-table-thead');
        const checkSelectAll = thead?.querySelector('.ant-checkbox-inner');
        if (checkSelectAll && selectAllRowsAriaLabel) checkSelectAll.setAttribute('aria-label', selectAllRowsAriaLabel);
    }, [rowsCanBeSelectAriaLabel, selectAllRowsAriaLabel]);
    const [actualPage, setActualPage] = useState(currentPage);
    const [pageWidth, setPageWidth] = useState(pageSize);
    const data = dataSource ?? [];
    const paginatedData = data.slice((actualPage - 1) * pageWidth, actualPage * pageWidth);

    const tableProps = omit(props, ['theme', 'columns', 'dataId', 'expandable', 'dataSource']);
    const th = useContext(ThemeContext) || defaultTheme;
    const getColumnsExpanded = () => {
        if (columns) {
            const newFirstColumn = {
                className: 'expanded-first-column',
                ...columns[0],
            };
            return [newFirstColumn, ...columns.slice(1)];
        }
        return [];
    };

    const loading = isLoading && !showError;
    const error = !isLoading && showError && errorContent;
    const showTable = !loading && !error && columns && dataSource;
    if (expandable && !expandable.expandIcon) expandable.expandIcon = getExpandedIcon;
    const expandIcon = expandable ? expandable.expandIcon : undefined;
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: th.primary,
                },
            }}
        >
            <StyledTable data-testid='table' theme={th} data-id={dataId}>
                {loading && <TableLoading />}
                {error && <TableError> {errorContent} </TableError>}
                {showTable && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <TableAntDesign
                            expandable={{
                                expandedRowRender: expandable?.expandedRowRender,
                                expandIcon,
                            }}
                            pagination={false}
                            columns={isExpanded ? getColumnsExpanded() : columns}
                            dataSource={paginatedData}
                            {...tableProps}
                        />
                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Pagination
                                total={data.length}
                                pageSize={pageSize}
                                current={actualPage}
                                previosPageAriaLabel='Previous page'
                                nextPageAriaLabel='Next page'
                                prevDotsPageAriaLabel='Jumpt previous 5 pages'
                                nextDotsPageAriaLabel='Jumpt next 5 pages'
                                showSizeChanger={showSizeChanger}
                                pageSizeOptions={pageSizeOptions}
                                onChange={(page, size) => {
                                    setActualPage(page);
                                    setPageWidth(size);
                                }}
                            />
                        </div>
                    </div>
                )}
            </StyledTable>
        </ConfigProvider>
    );
};

export const buildTableWithDataId = <RecordType extends AnyObject>() => withDataId(Table<RecordType>, 'table');
