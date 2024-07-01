import React, { Key, useState } from 'react';

import { Result, ResultVariants, Grid, Row, Cell, Paragraph, Table, buildTableWithDataId } from '@components';
import { type User, columnsTable, dataTable } from '../../tests/mock/Table';

export default {
    title: 'Table',
    component: Table,
    tags: ['autodocs'],
};

const Selection = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);

    const onSelectChange = (newSelectedRowKeys: Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const TableWithDataId = buildTableWithDataId<User>();
    return (
        <div>
            <TableWithDataId rowSelection={rowSelection} columns={columnsTable} dataSource={dataTable} />
        </div>
    );
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Tables allow arranging and organising data into rows and columns. A wrapper for Ant Design Table so check their documentation for further information.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataTable} columns={columnsTable} />
            </Cell>
        </Row>
    </Grid>
);

export const Loading = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Table loading</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table dataSource={dataTable} columns={columnsTable} isLoading />
            </Cell>
        </Row>
    </Grid>
);

export const Error = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Table error</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Table
                    dataSource={dataTable}
                    columns={columnsTable}
                    showError
                    errorContent={<Result variant={ResultVariants.ERROR} title='Error data' info='Please check and modify the following information before resubmitting.' />}
                />
            </Cell>
        </Row>
    </Grid>
);

export const TableSelection = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Selection />
            </Cell>
        </Row>
    </Grid>
);

const expandedRowRender = () => {
    const columns = [
        {
            title: 'Project details',
            dataIndex: 'project_details',
            key: 'project_details',
            width: '25%',
        },
        { title: 'Type', dataIndex: 'type', key: 'type', width: '20%' },
        { title: 'Target', dataIndex: 'target', key: 'target', width: '11%' },
        { title: 'Saved %', dataIndex: 'saved', key: 'saved', width: '14%' },
        {
            title: 'Saved Total',
            dataIndex: 'saved_total',
            key: 'saved_total',
            width: '30%',
        },
    ];

    const data = [];
    for (let i = 0; i < 6; i += 1) {
        data.push({
            key: i,
            project_details: i,
            type: 'Screem',
            target: 50,
            saved: 'iOS',
            saved_total: '10.3.4.5654',
        });
    }
    return <Table isExpanded columns={columns} dataSource={data} pagination={false} bordered={false} />;
};

export const NestedTable = () => {
    const columns = [
        {
            title: 'Group details',
            dataIndex: 'group_details',
            key: 'group_details',
        },
        { title: 'Projects', dataIndex: 'projects', key: 'projects' },
        { title: 'Target', dataIndex: 'target', key: 'target' },
        { title: 'Saved %', dataIndex: 'saved', key: 'saved' },
        { title: 'Saved Total', dataIndex: 'saved_total', key: 'saved_total' },
        { title: 'Time Savings', dataIndex: 'time_savings', key: 'time_savings' },
    ];

    const data = [];
    for (let i = 0; i < 3; i += 1) {
        data.push({
            key: i,
            group_details: 'School',
            projects: i,
            target: '5.0%',
            saved: '0.41%',
            saved_total: '10.3.4.5654',
            time_savings: 'asdasda',
        });
    }
    return (
        <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Table isExpanded className='components-table-demo-nested' columns={columns} expandable={{ expandedRowRender }} dataSource={data} pagination={false} />
                </Cell>
            </Row>
        </Grid>
    );
};
