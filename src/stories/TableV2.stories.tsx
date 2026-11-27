import { Key, useState } from 'react';
import type { ColumnsType } from 'antd/es/table';
import type { FilterValue } from 'antd/es/table/interface';

import { Result, ResultVariants, Grid, Row, Cell, Paragraph, TableV2, buildTableV2WithDataId, type TableV2Column, Icon, TableCell } from '@components';
import { color } from '@utils/theme';
import { type User, columnsTable, dataTable } from '../../tests/mock/Table';

export default {
    title: 'TableV2',
    component: TableV2,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component:
                    'In progress: the new Dexma table. To move a screen to it, change its import from `Table` to `TableV2`; `Table` itself is unchanged. Its look is fixed: `className`, `style` and app CSS written for `.ant-table…` don\'t reach it (its classes start with `dexma-table`). Pass `lang` (the DatePicker codes) to translate its labels.',
            },
        },
    },
};

// Built once, outside render: the usual pattern (building it inside a render also works; it returns the same component).
const TableWithDataId = buildTableV2WithDataId<User>();

const Selection = () => {
    const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>([]);
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataSource, setDataSource] = useState(dataTable.slice((currentPage - 1) * pageSize, currentPage * pageSize));

    const onSelectChange = (newSelectedRowKeys: Key[]) => {
        setSelectedRowKeys(newSelectedRowKeys);
    };

    const rowSelection = {
        selectedRowKeys,
        onChange: onSelectChange,
    };

    const onPageChange = (page: number, size: number) => {
        setPageSize(size);
        setCurrentPage(page);
        setDataSource(dataTable.slice((page - 1) * size, page * size));
    }

    return (
        <div>
            <TableWithDataId
                rowSelection={rowSelection}
                columns={columnsTable}
                dataSource={dataSource}
                currentPage={currentPage}
                totalRegisters={dataTable.length}
                pageSize={pageSize}
                onPageChange={onPageChange}
                showSizeChanger
                showTotal={(total) => `Total ${total} items`}
                rowsCanBeSelectAriaLabel='Check to select row'
                selectAllRowsAriaLabel='Select all'
            />
        </div>
    );
};

export const Basic = () => {
    const [pageSize, setPageSize] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);
    const [dataSource, setDataSource] = useState(dataTable.slice((currentPage - 1) * pageSize, currentPage * pageSize));
    const onPageChange = (page: number, size: number) => {
        setPageSize(size);
        setCurrentPage(page);
        setDataSource(dataTable.slice((page - 1) * size, page * size));
    }
    return (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Tables allow arranging and organising data into rows and columns. A wrapper for Ant Design Table so check their documentation for further information.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <TableV2
                    dataSource={dataSource}
                    columns={columnsTable}
                    totalRegisters={dataTable.length}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    showSizeChanger
                    showTotal={(total) => `Total ${total} items`}
                    onPageChange={onPageChange}
                    prevPageAriaLabel='Previous page'
                    nextPageAriaLabel='Next page'
                    prevDotsPageAriaLabel='Jump to previous 5 pages'
                    nextDotsPageAriaLabel='Jump to next 5 pages' />
            </Cell>
        </Row>
    </Grid>
);
}

export const Loading = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Table loading</Paragraph>
            </Cell>
            <Cell xs={12}>
                <TableV2 dataSource={dataTable} columns={columnsTable} isLoading isPaginated={false} />
            </Cell>
        </Row>
    </Grid>
);

export const ErrorState = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Table error</Paragraph>
            </Cell>
            <Cell xs={12}>
                <TableV2
                    dataSource={dataTable}
                    columns={columnsTable}
                    isPaginated={false}
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

export const ExpandableTable = () => {
    const columns = [
        {
            title: 'Component categorisation',
            dataIndex: 'categorisation',
            key: 'categorisation',
        },
        { title: 'Devices', dataIndex: 'devices', key: 'devices' },
        {
            title: 'Configuration',
            dataIndex: 'configuration',
            key: 'configuration',
        },
    ];

    const dataSources = [
        {
            key: 1,
            categorisation: 'Electricity',
            description: 'Electricity',
            children: [
                {
                    key: 11,
                    categorisation: 'Consumption',
                    devices: 'Device name',
                    configuration: 'Measured',
                    children: [
                        {
                            key: 111,
                            categorisation: 'HVAC',
                            configuration: 'Unmeasured',
                            children: [
                                {
                                    key: 1111,
                                    categorisation: 'Subtotals',
                                    devices: 'device name, device name',
                                    configuration: 'Partially measured',
                                },
                            ],
                        },
                        {
                            key: 112,
                            categorisation: 'Heating system',
                            configuration: 'Calculated',
                            children: [
                                {
                                    key: 1121,
                                    categorisation: 'Subtotals',
                                    devices: 'device name, device name',
                                    configuration: 'Measured',
                                },
                            ],
                        },
                        {
                            key: 113,
                            categorisation: 'Lighting',
                            configuration: 'Measured',
                            children: [
                                {
                                    key: 1131,
                                    categorisation: 'Subtotals',
                                    devices: 'device name, device name',
                                    configuration: 'Measured',
                                },
                            ],
                        },
                        {
                            key: 114,
                            categorisation: 'Example',
                            configuration: 'Measured',
                            children: [
                                {
                                    key: 1141,
                                    categorisation: 'Subtotals',
                                    devices: 'device name, device name',
                                    configuration: 'Partially measured',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            key: 2,
            categorisation: 'Gas',
            description: 'Gas',
            children: [
                {
                    key: 21,
                    categorisation: 'Consumption',
                    devices: 'device name',
                    configuration: 'Measured',
                },
            ],
        },
        {
            key: 3,
            categorisation: 'Water',
            description: 'Water',
            children: [
                {
                    key: 31,
                    categorisation: 'Consumption',
                    devices: 'device name',
                    configuration: 'Measured',
                },
            ],
        },
    ];

    return <TableV2 columns={columns} dataSource={dataSources} expandable={{}} isPaginated={false} />;
};

export const NestedTable = () => {
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
                type: 'Standard',
                target: `${(i + Math.random() * 100).toFixed(1)}%`,
                saved: `${(i * 2 + Math.random() * 100).toFixed(2)}%`,
                saved_total: (i * 1000 + Math.random() * 1000).toFixed(2),
            });
        }
        return <TableV2 isExpanded columns={columns} dataSource={data} isPaginated={false} bordered={false} />;
    };

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
            expandable: true,
        });
    }
    return (
        <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <TableV2 isExpanded columns={columns} expandable={{ expandedRowRender }} dataSource={data} isPaginated={false} />
                </Cell>
            </Row>
        </Grid>
    );
};

const sizes = [
    { size: 'large', label: 'Large (default): 16px vertical padding, 54px rows' },
    { size: 'middle', label: 'Medium: 12px vertical padding, 46px rows' },
    { size: 'small', label: 'Small: 8px vertical padding, 38px rows' },
] as const;

export const Sizes = () => (
    <Grid fluid>
        {sizes.map(({ size, label }) => (
            <Row key={size}>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>{label}</Paragraph>
                </Cell>
                <Cell xs={12}>
                    <TableV2 size={size} dataSource={dataTable.slice(0, 3)} columns={columnsTable} isPaginated={false} />
                </Cell>
            </Row>
        ))}
    </Grid>
);

const ages = [32, 45, 27, 51, 38];
const sortableData = dataTable.slice(0, 5).map((row, i) => ({ ...row, age: ages[i] }));
const sortableColumns: ColumnsType<User> = [
    { title: 'Name', dataIndex: 'name', sorter: (a, b) => a.name.localeCompare(b.name), defaultSortOrder: 'descend' },
    { title: 'Age', dataIndex: 'age', sorter: (a, b) => a.age - b.age },
    { title: 'Address', dataIndex: 'address' },
];

export const Sorting = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Sorting: antd default. Click Name or Age to sort.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <TableV2 dataSource={sortableData} columns={sortableColumns} isPaginated={false} />
            </Cell>
        </Row>
    </Grid>
);

export const Empty = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Empty: no rows to show.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <TableV2 dataSource={[]} columns={columnsTable} isPaginated={false} />
            </Cell>
        </Row>
    </Grid>
);

export const InsideABox = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Inside a box: showCard=false drops the card for tables that already sit in one. The footer stays.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <div style={{ background: color.gray50, padding: 16 }}>
                    <TableV2
                        dataSource={dataTable.slice(0, 5)}
                        columns={columnsTable}
                        totalRegisters={dataTable.length}
                        pageSize={5}
                        showTotal={(total) => `Total ${total} items`}
                        showCard={false}
                    />
                </div>
            </Cell>
        </Row>
    </Grid>
);

const headerIconColumns: TableV2Column<User>[] = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        info: 'Full name, as registered',
        search: { placeholder: 'Search name' },
        sorter: (a, b) => a.name.localeCompare(b.name),
        onFilter: (value, record) => record.name.toLowerCase().includes(String(value).toLowerCase()),
    },
    { title: 'Age', dataIndex: 'age', sorter: (a, b) => a.age - b.age },
    {
        title: 'Age group',
        dataIndex: 'age',
        key: 'ageGroup',
        filters: [
            { text: 'Under 40', value: 'under' },
            { text: '40 and over', value: 'over' },
        ],
        onFilter: (value, record) => (value === 'under' ? record.age < 40 : record.age >= 40),
    },
    { title: 'Address', dataIndex: 'address', info: 'Postal address' },
];

export const HeaderIcons = () => (
    <Grid fluid>
        {sizes.map(({ size, label }) => (
            <Row key={size}>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>
                        {label}. Name has info, search and sorting; Age sorts; Age group filters; Address has info.
                    </Paragraph>
                </Cell>
                <Cell xs={12}>
                    <TableV2 size={size} dataSource={sortableData} columns={headerIconColumns} isPaginated={false} />
                </Cell>
            </Row>
        ))}
    </Grid>
);

const truncatingColumns: TableV2Column<User>[] = [
    { title: 'Name', dataIndex: 'name', ellipsis: true },
    { title: 'Age', dataIndex: 'age', width: 80 },
    { title: 'Address', dataIndex: 'address', ellipsis: true },
];
const contentSizedColumns: TableV2Column<User>[] = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age', dataIndex: 'age', width: 80 },
    { title: 'Address', dataIndex: 'address' },
];

export const EllipsisAndMinimumWidth = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Truncation is opt-in: Name and Address set ellipsis: true. Unsized columns keep at least 60px (here 60 + 80 + 60 + 40 for the checkboxes = 240px), so this 220px box scrolls sideways instead of squeezing them.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <div style={{ maxWidth: 220 }}>
                    <TableV2 dataSource={sortableData} columns={truncatingColumns} rowSelection={{}} isPaginated={false} />
                </div>
            </Cell>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>The same columns without ellipsis size to their content.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <div style={{ maxWidth: 220 }}>
                    <TableV2 dataSource={sortableData} columns={contentSizedColumns} rowSelection={{}} isPaginated={false} />
                </div>
            </Cell>
        </Row>
    </Grid>
);

const joinedDates = ['2024-01-15', '2025-03-02', '2024-07-21', '2025-11-30', '2024-05-08'];
const memberData = sortableData.map((row, i) => ({ ...row, joined: joinedDates[i] }));
type Member = (typeof memberData)[number];

export const FilterBar = () => {
    const [joined, setJoined] = useState<FilterValue | null>(['2024']);
    const [visible, setVisible] = useState(memberData.filter((row) => row.joined.startsWith('2024')).length);
    const columns: TableV2Column<Member>[] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            search: { placeholder: 'Search name' },
            onFilter: (value, row) => row.name.toLowerCase().includes(String(value).toLowerCase()),
        },
        {
            title: 'Age group',
            dataIndex: 'age',
            key: 'ageGroup',
            filters: [
                { text: 'Under 40', value: 'under' },
                { text: '40 and over', value: 'over' },
            ],
            onFilter: (value, row) => (value === 'under' ? row.age < 40 : row.age >= 40),
        },
        {
            title: 'Joined',
            dataIndex: 'joined',
            key: 'joined',
            filters: [
                { text: 'In 2024', value: '2024' },
                { text: 'In 2025', value: '2025' },
            ],
            filteredValue: joined,
            onFilter: (value, row) => row.joined.startsWith(String(value)),
            filterLabel: (values) => `Joined in ${values.join(' or ')}`,
        },
        { title: 'Address', dataIndex: 'address' },
    ];
    return (
        <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>
                        Filter bar: one chip per filtered column. Joined is controlled by the story and labelled with filterLabel; Name (search) and Age group are left to the table. Removing a chip clears that filter.
                    </Paragraph>
                </Cell>
                <Cell xs={12}>
                    <TableV2
                        dataSource={memberData}
                        columns={columns}
                        filterSummary={`Showing ${visible} of ${memberData.length} items`}
                        onChange={(_pagination, filters, _sorter, extra) => {
                            setJoined(filters.joined ?? null);
                            setVisible(extra.currentDataSource.length);
                        }}
                        isPaginated={false}
                    />
                </Cell>
            </Row>
        </Grid>
    );
};

export const ExpandAll = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Tree data: expand-all sits before the first column&apos;s title and opens every level.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <ExpandableTable />
            </Cell>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Detail rows: expand-all sits in the expand column&apos;s header and opens every row marked expandable.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <NestedTable />
            </Cell>
        </Row>
    </Grid>
);

const FavoriteExample = () => {
    const [isFavorite, setIsFavorite] = useState(true);
    return <TableCell.Favorite isFavorite={isFavorite} onChange={setIsFavorite} ariaLabel='Favourite' />;
};

type CellTypeRow = { key: string; type: string; example: React.ReactNode };

const cellTypeRows: CellTypeRow[] = [
    {
        key: 'text',
        type: 'Text',
        example: (
            <TableCell.Text secondLine='Barcelona' leading={<Icon name='star' size={24} ariaLabel='' aria-hidden />}>
                Main office
            </TableCell.Text>
        ),
    },
    { key: 'tags', type: 'Tags', example: <TableCell.Tags tags={['Gas', 'Water']} /> },
    { key: 'numeric', type: 'Numeric', example: <TableCell.Numeric value='1,204 kWh' comparison={{ value: '+12%', direction: 'up', tone: 'bad' }} secondLine='vs last month' /> },
    { key: 'badge', type: 'Badge', example: <TableCell.Badge color='irisBlue' ariaLabel='Online' /> },
    {
        key: 'mv',
        type: 'M&V',
        example: (
            <TableCell.MV
                rows={[
                    { percent: 50, tone: 'neutral', label: <><strong>618</strong> / 7 30 days</> },
                    { percent: 66, target: 63, tone: 'positive', label: <><strong>-40.9%</strong> / 70,0 %</> },
                ]}
            />
        ),
    },
    { key: 'feedback', type: 'Feedback', example: <TableCell.Feedback status='warning'>Feedback</TableCell.Feedback> },
    { key: 'action', type: 'Action', example: <TableCell.Action onClick={() => undefined}>View report</TableCell.Action> },
    { key: 'boolean', type: 'Boolean', example: <TableCell.Boolean value trueLabel='Yes' falseLabel='No' /> },
    { key: 'code', type: 'Code', example: <TableCell.Code>DEV-0042</TableCell.Code> },
    { key: 'actions', type: 'Actions', example: <TableCell.Actions ariaLabel='Row actions' items={[{ text: 'Edit' }, { text: 'Delete' }]} /> },
    { key: 'favorite', type: 'Favorite', example: <FavoriteExample /> },
    { key: 'check', type: 'Check', example: 'The checkbox column (rowSelection)' },
    { key: 'expand', type: 'Expand', example: 'The arrow column (expandable); open this row' },
    { key: 'empty', type: 'Empty', example: null },
    { key: 'free', type: 'Free', example: <Paragraph margin='0'>Any content, through render</Paragraph> },
];

const renderCellTypeDetails = () => <Paragraph margin='0'>Expanded row content</Paragraph>;
const cellTypeExpandable = { expandedRowRender: renderCellTypeDetails, rowExpandable: (row: CellTypeRow) => row.key === 'expand' };

const cellTypeColumns: TableV2Column<CellTypeRow>[] = [
    { title: 'Type', dataIndex: 'type', width: 140 },
    { title: 'Example', dataIndex: 'example', render: (example: React.ReactNode) => example },
];

export const CellTypes = () => (
    <Grid fluid>
        {sizes.map(({ size, label }) => (
            <Row key={size}>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>{label}. All 15 Figma cell types: the 11 TableCell components, then Check, Expand, Empty and Free.</Paragraph>
                </Cell>
                <Cell xs={12}>
                    <TableV2
                        size={size}
                        dataSource={cellTypeRows}
                        columns={cellTypeColumns}
                        rowSelection={{}}
                        expandable={cellTypeExpandable}
                        isPaginated={false}
                    />
                </Cell>
            </Row>
        ))}
    </Grid>
);
