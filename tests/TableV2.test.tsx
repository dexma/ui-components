import { useState } from 'react';
import { afterEach, beforeAll, beforeEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import { ConfigProvider as AntdConfigProvider } from 'antd';
import type { ColumnType } from 'antd/es/table';

import { TableV2, Result, ResultVariants, buildTableV2WithDataId, type TableV2Column } from '@components';
import { ellipsisScrollX, getLeafColumns } from '@components/TableV2/columns';
import { tablePrefixCls as p } from '@styles/TableV2/StyledTableV2';

type User = {
    key: string;
    name: string;
    age: number;
    address: string;
};
const dataSource: User[] = [
    {
        key: '1',
        name: 'Mike',
        age: 32,
        address: '10 Downing Street',
    },
    {
        key: '2',
        name: 'John',
        age: 42,
        address: '10 Downing Street',
    },
];

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a: User, b: User) => a.name.length - b.name.length,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
];

describe('<TableV2>', () => {
    beforeAll(() => {
        const { getComputedStyle } = window;
        window.getComputedStyle = (elt) => getComputedStyle(elt);
    });

    it('Should render table component', () => {
        render(<TableV2 dataSource={dataSource} columns={columns} />);
        expect(screen.getByTestId('table')).toBeTruthy();
    });
    it('Should render loading component', () => {
        render(<TableV2 dataSource={dataSource} columns={columns} isLoading />);
        expect(screen.getByTestId('table-loading')).toBeTruthy();
    });
    it('Should render loading component', () => {
        render(
            <TableV2 dataSource={dataSource} columns={columns} showError errorContent={<Result variant={ResultVariants.ERROR} title='Error table' info='Test info table error' />} />
        );
        expect(screen.getByTestId('table-error')).toBeTruthy();
        expect(screen.getByText('Error table')).toBeTruthy();
        expect(screen.getByText('Test info table error')).toBeTruthy();
    });
    // Apps restyle the old Table through `styled(Table)` and `.ant-table…` rules; none of that may reach this one.
    it('keeps app styles out: no antd table classes, and className and style are not applied', () => {
        const appStyling = { className: 'app-override', style: { color: 'red' } } as object;
        const { container } = render(<TableV2 dataSource={dataSource} columns={columns} {...appStyling} />);
        expect(container.querySelector('[class*="ant-table"]')).toBeNull();
        expect(container.querySelector('.app-override')).toBeNull();
        expect(container.querySelector('[style*="red"]')).toBeNull();
    });

    it('Should toggle the expand chevron', () => {
        render(
            <TableV2
                dataSource={dataSource.map((row) => ({ ...row, expandable: true }))}
                columns={columns}
                expandable={{ expandedRowRender: (row) => <p>Details of {row.name}</p> }}
                isPaginated={false}
            />
        );
        const [button] = within(screen.getByTestId('table').querySelector('tbody') as HTMLElement).getAllByRole('button', { name: 'Expand row' });
        fireEvent.click(button);
        expect(button.getAttribute('aria-label')).toBe('Collapse row');
        expect(screen.getByText('Details of Mike')).toBeTruthy();
    });

    const rowLabels = (root: HTMLElement) =>
        Array.from(root.querySelectorAll(`.${p}-tbody .ant-checkbox-input`), (box) => box.getAttribute('aria-label'));

    it('drops the card but keeps the footer with showCard={false}', () => {
        const { rerender } = render(<TableV2 dataSource={dataSource} columns={columns} />);
        expect(screen.getByTestId('table').querySelector('.table-card')).not.toBeNull();
        rerender(<TableV2 dataSource={dataSource} columns={columns} showCard={false} />);
        expect(screen.getByTestId('table').querySelector('.table-card')).toBeNull();
        expect(screen.getByTestId('table').querySelector('.table-footer')).not.toBeNull();
    });

    it("leaves the caller's expandable and rowSelection objects untouched", () => {
        const expandable = { expandedRowRender: (row: User) => <p>{row.name}</p> };
        const rowSelection = { hideSelectAll: true };
        render(<TableV2 dataSource={dataSource} columns={columns} expandable={expandable} rowSelection={rowSelection} />);
        expect(Object.keys(expandable)).toEqual(['expandedRowRender']);
        expect(Object.keys(rowSelection)).toEqual(['hideSelectAll']);
    });

    it('labels only its own checkboxes when two tables share a page', () => {
        render(
            <>
                <TableV2 dataSource={dataSource} columns={columns} rowSelection={{}} rowsCanBeSelectAriaLabel='Select user' isPaginated={false} />
                <TableV2 dataSource={dataSource} columns={columns} rowSelection={{}} rowsCanBeSelectAriaLabel='Select address' isPaginated={false} />
            </>
        );
        const [first, second] = screen.getAllByTestId('table');
        expect(rowLabels(first)).toEqual(['Select user', 'Select user']);
        expect(rowLabels(second)).toEqual(['Select address', 'Select address']);
    });

    it('labels the checkboxes of rows that arrive after the first render', () => {
        const props = { columns, rowSelection: {}, rowsCanBeSelectAriaLabel: 'Select user', isPaginated: false };
        const { rerender } = render(<TableV2 dataSource={dataSource.slice(0, 1)} {...props} />);
        rerender(<TableV2 dataSource={dataSource} {...props} />);
        expect(rowLabels(screen.getByTestId('table'))).toEqual(['Select user', 'Select user']);
    });

    it('keys leaf columns the way antd keys filters: key, then dataIndex, then position', () => {
        const keys = getLeafColumns<User>([
            { title: 'A', key: 'a', dataIndex: 'name' },
            { title: 'B', dataIndex: ['address', 'city'] },
            { title: 'Group', children: [{ title: 'C' }, { title: 'D', dataIndex: 'age' }] },
        ]).map(({ key }) => key);
        expect(keys).toEqual(['a', 'address.city', '2-0', 'age']);
    });

    it('takes info as plain text only', () => {
        // @ts-expect-error A tooltip can't hold links or buttons, and the text also names the info button.
        const column: TableV2Column<User> = { title: 'Age', dataIndex: 'age', info: <a href='/help'>Help</a> };
        expect(column.title).toBe('Age');
    });

    it('shows the info content in a tooltip when its icon gets focus', async () => {
        render(<TableV2 dataSource={dataSource} columns={[{ title: 'Age', dataIndex: 'age', info: 'Age in years' }]} isPaginated={false} />);
        fireEvent.focus(screen.getByRole('button', { name: 'Age in years' }));
        expect((await screen.findByRole('tooltip')).textContent).toBe('Age in years');
    });

    // The table's popup layer hides the sort tooltip while an info icon is hovered, so it must render there.
    it('renders the sort tooltip in the table popup layer, where the info hover can hide it', async () => {
        render(<TableV2 dataSource={dataSource} columns={[{ title: 'Age', dataIndex: 'age', info: 'Age in years', sorter: (a: User, b: User) => a.age - b.age }]} isPaginated={false} />);
        fireEvent.mouseEnter(document.querySelector(`.${p}-column-sorters`)!);
        // hidden: jsdom can keep an earlier test's :hover, which trips the hide rule.
        const sortTip = await screen.findByRole('tooltip', { hidden: true });
        expect(sortTip.textContent).toBe('Click to sort ascending');
        expect(sortTip.closest('.table-popups')).not.toBeNull();
    });

    it('does not sort when the info icon is clicked', () => {
        const onChange = vi.fn();
        render(
            <TableV2
                dataSource={dataSource}
                columns={[{ title: 'Age', dataIndex: 'age', info: 'Age in years', sorter: (a: User, b: User) => a.age - b.age }]}
                onChange={onChange}
                isPaginated={false}
            />
        );
        fireEvent.click(screen.getByRole('button', { name: 'Age in years' }));
        expect(onChange).not.toHaveBeenCalled();
    });

    it('does not sort when Enter is pressed on the info icon', () => {
        const onChange = vi.fn();
        render(
            <TableV2
                dataSource={dataSource}
                columns={[{ title: 'Age', dataIndex: 'age', info: 'Age in years', sorter: (a: User, b: User) => a.age - b.age }]}
                onChange={onChange}
                isPaginated={false}
            />
        );
        fireEvent.keyDown(screen.getByRole('button', { name: 'Age in years' }), { key: 'Enter', keyCode: 13 });
        expect(onChange).not.toHaveBeenCalled();
    });

    const searchColumns: TableV2Column<User>[] = [{ title: 'Name', dataIndex: 'name', key: 'name', search: { placeholder: 'Search name' } }];
    const openFilter = () => fireEvent.click(screen.getByRole('button', { name: 'Filter menu' }));
    const typeSearch = (text: string) => fireEvent.change(screen.getByPlaceholderText('Search name'), { target: { value: text } });
    const filterCall = (filters: object) => [{}, filters, expect.anything(), expect.objectContaining({ action: 'filter' })];

    it('filters by the typed search text and reports it through onChange', () => {
        const onChange = vi.fn();
        render(<TableV2 dataSource={dataSource} columns={searchColumns} onChange={onChange} isPaginated={false} />);
        openFilter();
        typeSearch('Mik');
        fireEvent.click(screen.getByRole('button', { name: 'OK' }));
        expect(onChange).toHaveBeenLastCalledWith(...filterCall({ name: ['Mik'] }));
    });

    it('clears the search with Reset or with an empty confirm', () => {
        const onChange = vi.fn();
        render(<TableV2 dataSource={dataSource} columns={searchColumns} onChange={onChange} isPaginated={false} />);
        openFilter();
        typeSearch('Mik');
        fireEvent.click(screen.getByRole('button', { name: 'OK' }));
        openFilter();
        fireEvent.click(screen.getByRole('button', { name: 'Reset' }));
        expect(onChange).toHaveBeenLastCalledWith(...filterCall({ name: null }));
        openFilter();
        typeSearch('Jo');
        fireEvent.click(screen.getByRole('button', { name: 'OK' }));
        openFilter();
        typeSearch('');
        fireEvent.click(screen.getByRole('button', { name: 'OK' }));
        expect(onChange).toHaveBeenLastCalledWith(...filterCall({ name: null }));
    });

    it('gives filter columns the Dexma icon unless the app sets filterIcon', () => {
        render(
            <TableV2
                dataSource={dataSource}
                isPaginated={false}
                columns={[
                    { title: 'Age', dataIndex: 'age', key: 'age', filters: [{ text: '32', value: 32 }] },
                    { title: 'Address', dataIndex: 'address', key: 'address', filters: [{ text: 'Downing', value: '10 Downing Street' }], filterIcon: <span data-testid='app-filter-icon' /> },
                ]}
            />
        );
        const [age, address] = Array.from(screen.getByTestId('table').querySelectorAll(`.${p}-filter-trigger`));
        expect(age.querySelector('svg[aria-label="Filter menu"]')).not.toBeNull();
        expect(age.querySelector('.anticon-filter')).toBeNull();
        expect(address.querySelector('[data-testid="app-filter-icon"]')).not.toBeNull();
    });

    describe('ellipsisScrollX', () => {
        const name = { title: 'Name', dataIndex: 'name', ellipsis: true };
        const age = { title: 'Age', dataIndex: 'age', width: 80 };
        const address = { title: 'Address', dataIndex: 'address' };
        const none = { hasSelection: false, hasExpandColumn: false };

        it('adds 60px per unsized column and 40px per selection or expand column', () => {
            expect(ellipsisScrollX([name, age, address], none)).toBe(200);
            expect(ellipsisScrollX([name, age, address], { hasSelection: true, hasExpandColumn: true })).toBe(280);
            expect(ellipsisScrollX([{ title: 'Person', children: [name, address] }, age], none)).toBe(200);
        });

        it("leaves scroll.x alone without truncation, with the app's scroll.x, a string width, or every width set", () => {
            expect(ellipsisScrollX([age, address], none)).toBeUndefined();
            expect(ellipsisScrollX([name, age, address], { ...none, scrollX: 900 })).toBeUndefined();
            expect(ellipsisScrollX([name, { ...address, width: '25%' }], none)).toBeUndefined();
            expect(ellipsisScrollX([{ ...name, width: 120 }, age], none)).toBeUndefined();
        });
    });

    it('truncates only the columns that set ellipsis', () => {
        render(<TableV2 dataSource={dataSource} columns={[{ title: 'Name', dataIndex: 'name', ellipsis: true }, { title: 'Address', dataIndex: 'address' }]} isPaginated={false} />);
        const [nameCell, addressCell] = Array.from(screen.getByTestId('table').querySelectorAll('tr[data-row-key="1"] > td'));
        expect(nameCell.classList.contains(`${p}-cell-ellipsis`)).toBe(true);
        expect(addressCell.classList.contains(`${p}-cell-ellipsis`)).toBe(false);
    });

    it('sizes a truncating table to the 60px floor', () => {
        render(
            <TableV2
                dataSource={dataSource}
                rowSelection={{}}
                columns={[{ title: 'Name', dataIndex: 'name', ellipsis: true }, { title: 'Age', dataIndex: 'age', width: 80 }, { title: 'Address', dataIndex: 'address' }]}
                isPaginated={false}
            />
        );
        expect(screen.getByTestId('table').querySelector('table')?.style.width).toBe('240px');
    });

    describe('filter bar', () => {
        // These columns leave out `key` on purpose: they pin antd's own column keys (dataIndex, then position), which the
        // chips copy. The warning that asks apps for a `key` is expected here.
        const muteWarn = () => vi.spyOn(console, 'warn').mockImplementation(() => undefined);
        let warn: ReturnType<typeof muteWarn>;
        beforeEach(() => {
            warn = muteWarn();
        });
        afterEach(() => warn.mockRestore());

        type Person = { key: string; name: string; city: string; age: number };
        const people: Person[] = [
            { key: '1', name: 'Ann', city: 'London', age: 32 },
            { key: '2', name: 'Bob', city: 'Madrid', age: 41 },
        ];
        const withCity = (extra: Partial<ColumnType<Person>> = {}): TableV2Column<Person>[] => [
            { title: 'Name', dataIndex: 'name' },
            {
                title: 'City',
                dataIndex: 'city',
                filters: [
                    { text: 'London town', value: 'London' },
                    { text: 'Madrid', value: 'Madrid' },
                ],
                onFilter: (value, row) => row.city === value,
                ...extra,
            },
        ];
        const bar = () => within(screen.getByTestId('table-filter-bar'));
        const removeLondon = () => fireEvent.click(screen.getByRole('button', { name: 'Remove City: London town' }));

        it('shows the summary and one chip per filtered column', () => {
            render(<TableV2 dataSource={people} columns={withCity({ filteredValue: ['London'] })} filterSummary='Showing 1 of 2 items' isPaginated={false} />);
            expect(bar().getByText('Showing 1 of 2 items')).toBeTruthy();
            expect(bar().getByText('City: London town')).toBeTruthy();
        });

        it('shows no bar while nothing is filtered', () => {
            render(<TableV2 dataSource={people} columns={withCity()} filterSummary='Showing 2 of 2 items' isPaginated={false} />);
            expect(screen.queryByTestId('table-filter-bar')).toBeNull();
        });

        it('asks the app to clear a controlled filter when its chip is removed', () => {
            const onChange = vi.fn();
            render(<TableV2 dataSource={people} columns={withCity({ filteredValue: ['London'] })} onChange={onChange} isPaginated={false} />);
            removeLondon();
            expect(onChange).toHaveBeenCalledWith({}, { city: null }, {}, { action: 'filter', currentDataSource: people });
        });

        it('clears an uncontrolled filter when its chip is removed', () => {
            const onChange = vi.fn();
            render(<TableV2 dataSource={people} columns={withCity({ defaultFilteredValue: ['London'] })} onChange={onChange} isPaginated={false} />);
            expect(screen.queryByText('Bob')).toBeNull();
            removeLondon();
            expect(screen.getByText('Bob')).toBeTruthy();
            expect(screen.queryByTestId('table-filter-bar')).toBeNull();
            expect(onChange).toHaveBeenCalledWith({}, { city: null }, {}, { action: 'filter', currentDataSource: people });
        });

        it('reports the rows the remaining filters keep as currentDataSource', () => {
            const onChange = vi.fn();
            render(
                <TableV2
                    dataSource={people}
                    onChange={onChange}
                    isPaginated={false}
                    columns={[
                        ...withCity({ defaultFilteredValue: ['London'] }),
                        { title: 'Age', dataIndex: 'age', filters: [{ text: 'Forty-one', value: 41 }], onFilter: (value, row) => row.age === value, defaultFilteredValue: [41] },
                    ]}
                />
            );
            removeLondon();
            expect(onChange).toHaveBeenLastCalledWith({}, { city: null, age: [41] }, {}, { action: 'filter', currentDataSource: [people[1]] });
        });

        it('reports the current sort when a chip is removed', () => {
            const onChange = vi.fn();
            render(
                <TableV2
                    dataSource={people}
                    onChange={onChange}
                    isPaginated={false}
                    columns={[{ title: 'Name', dataIndex: 'name', key: 'name', sorter: true, sortOrder: 'descend' }, ...withCity({ filteredValue: ['London'] }).slice(1)]}
                />
            );
            removeLondon();
            expect(onChange).toHaveBeenCalledWith({}, { city: null }, expect.objectContaining({ columnKey: 'name', field: 'name', order: 'descend' }), expect.objectContaining({ action: 'filter' }));
        });

        it('turns a confirmed search into a chip', () => {
            render(<TableV2 dataSource={people} columns={[{ title: 'Name', dataIndex: 'name', search: { placeholder: 'Search name' } }]} isPaginated={false} />);
            fireEvent.click(screen.getByRole('button', { name: 'Filter menu' }));
            fireEvent.change(screen.getByPlaceholderText('Search name'), { target: { value: 'An' } });
            fireEvent.click(screen.getByRole('button', { name: 'OK' }));
            expect(bar().getByText('Name: An')).toBeTruthy();
        });

        it('names a numeric value picked in the dropdown by its filters text', () => {
            render(<TableV2 dataSource={people} columns={[{ title: 'Age', dataIndex: 'age', filters: [{ text: 'Thirty-two', value: 32 }] }]} isPaginated={false} />);
            fireEvent.click(screen.getByRole('button', { name: 'Filter menu' }));
            fireEvent.click(screen.getByText('Thirty-two'));
            fireEvent.click(screen.getByRole('button', { name: 'OK' }));
            expect(bar().getByText('Age: Thirty-two')).toBeTruthy();
        });

        it('finds a filtered column inside a group and clears it by its antd key', () => {
            const onChange = vi.fn();
            render(<TableV2 dataSource={people} columns={[{ title: 'Person', children: withCity({ filteredValue: ['London'] }) }]} onChange={onChange} isPaginated={false} />);
            removeLondon();
            expect(onChange).toHaveBeenCalledWith({}, { city: null }, {}, expect.objectContaining({ action: 'filter' }));
        });

        it('shows only the values when the title is not text, and filterLabel when given', () => {
            render(
                <TableV2
                    dataSource={people}
                    isPaginated={false}
                    columns={[
                        { title: <b>City</b>, dataIndex: 'city', filters: [{ text: 'London town', value: 'London' }], filteredValue: ['London'] },
                        { title: 'Age', dataIndex: 'age', onFilter: () => true, filteredValue: [30, 40], filterLabel: (values) => `Age ${values.join('–')}` },
                    ]}
                />
            );
            expect(bar().getByText('London town')).toBeTruthy();
            expect(bar().getByText('Age 30–40')).toBeTruthy();
        });
    });

    describe('expand-all', () => {
        type Category = { key: string; name: string; children?: Category[] };
        const tree: Category[] = [
            { key: '1', name: 'Electricity', children: [{ key: '1-1', name: 'Consumption', children: [{ key: '1-1-1', name: 'HVAC' }] }] },
            { key: '2', name: 'Gas' },
        ];
        const categoryColumn = { title: 'Category', dataIndex: 'name' };
        const expandAll = () => screen.getByRole('button', { name: 'Expand all rows' });

        it('opens every level of a tree and closes it again', () => {
            render(<TableV2 dataSource={tree} columns={[categoryColumn]} isPaginated={false} />);
            fireEvent.click(expandAll());
            expect(screen.getByText('HVAC')).toBeTruthy();
            fireEvent.click(screen.getByRole('button', { name: 'Collapse all rows' }));
            expect(screen.queryByText('Consumption')).toBeNull();
        });

        it('sits in the expand column header and opens only expandable rows', () => {
            const rows = [{ ...dataSource[0], expandable: true }, dataSource[1]];
            render(<TableV2 dataSource={rows} columns={columns} expandable={{ expandedRowRender: (row) => <p>Details of {row.name}</p> }} isPaginated={false} />);
            expect(expandAll().closest('th')?.classList.contains(`${p}-row-expand-icon-cell`)).toBe(true);
            fireEvent.click(expandAll());
            expect(screen.getByText('Details of Mike')).toBeTruthy();
            expect(screen.queryByText('Details of John')).toBeNull();
            expect(screen.getByRole('button', { name: 'Collapse all rows' })).toBeTruthy();
        });

        it('hands the keys to the app when it controls expandedRowKeys', () => {
            const onExpandedRowsChange = vi.fn();
            render(<TableV2 dataSource={tree} columns={[categoryColumn]} expandable={{ expandedRowKeys: [], onExpandedRowsChange }} isPaginated={false} />);
            fireEvent.click(expandAll());
            expect(onExpandedRowsChange).toHaveBeenCalledWith(['1', '1-1']);
            expect(screen.queryByText('Consumption')).toBeNull();
        });

        it('adds no expand placeholder or indent to tables without expandable rows', () => {
            render(<TableV2 dataSource={dataSource} columns={columns} isPaginated={false} />);
            const firstCell = screen.getByTestId('table').querySelector('tr[data-row-key="1"] > td');
            expect(firstCell?.querySelector(`.table-expand-placeholder, .${p}-row-indent`)).toBeNull();
        });

        it('gives rows that pass rowExpandable their own arrow', () => {
            render(
                <TableV2
                    dataSource={dataSource}
                    columns={columns}
                    expandable={{ expandedRowRender: (row) => <p>Details of {row.name}</p>, rowExpandable: (row) => row.name === 'John' }}
                    isPaginated={false}
                />
            );
            const johnRow = screen.getByTestId('table').querySelector('tr[data-row-key="2"]') as HTMLElement;
            fireEvent.click(within(johnRow).getByRole('button', { name: 'Expand row' }));
            expect(screen.getByText('Details of John')).toBeTruthy();
            expect(within(screen.getByTestId('table').querySelector('tr[data-row-key="1"]') as HTMLElement).queryByRole('button')).toBeNull();
        });

        it('stays out when the app sets expandable.columnTitle', () => {
            render(<TableV2 dataSource={tree} columns={[categoryColumn]} expandable={{ columnTitle: 'Open' }} isPaginated={false} />);
            expect(screen.queryByRole('button', { name: 'Expand all rows' })).toBeNull();
        });

        it('does not sort when clicked in a sortable first column', () => {
            const onChange = vi.fn();
            render(
                <TableV2
                    dataSource={tree}
                    columns={[{ ...categoryColumn, sorter: (a: Category, b: Category) => a.name.localeCompare(b.name) }]}
                    onChange={onChange}
                    isPaginated={false}
                />
            );
            fireEvent.click(expandAll());
            expect(onChange).not.toHaveBeenCalled();
        });

        it('does not sort when Enter is pressed on expand-all in a sortable first column', () => {
            const onChange = vi.fn();
            render(
                <TableV2
                    dataSource={tree}
                    columns={[{ ...categoryColumn, sorter: (a: Category, b: Category) => a.name.localeCompare(b.name) }]}
                    onChange={onChange}
                    isPaginated={false}
                />
            );
            fireEvent.keyDown(expandAll(), { key: 'Enter', keyCode: 13 });
            expect(onChange).not.toHaveBeenCalled();
        });

        it('names the row arrows', () => {
            render(
                <TableV2
                    dataSource={dataSource.map((row) => ({ ...row, expandable: true }))}
                    columns={columns}
                    expandable={{ expandedRowRender: (row) => <p>Details of {row.name}</p> }}
                    isPaginated={false}
                />
            );
            fireEvent.click(screen.getAllByRole('button', { name: 'Expand row' })[0]);
            expect(screen.getByRole('button', { name: 'Collapse row' })).toBeTruthy();
        });

        it('applies defaultExpandAllRows once loading finishes', () => {
            const expandable = { defaultExpandAllRows: true };
            const { rerender } = render(<TableV2 dataSource={[] as Category[]} columns={[categoryColumn]} expandable={expandable} isLoading isPaginated={false} />);
            rerender(<TableV2 dataSource={tree} columns={[categoryColumn]} expandable={expandable} isPaginated={false} />);
            expect(screen.getByText('HVAC')).toBeTruthy();
        });
    });

    describe('state, keyboard and popups', () => {
        type Category = { key: string; name: string; children?: Category[]; subRows?: Category[] };
        const tree: Category[] = [{ key: '1', name: 'Electricity', children: [{ key: '1-1', name: 'Consumption' }] }];
        const categoryColumn = { title: 'Category', dataIndex: 'name', key: 'name' };
        const pager = { dataSource, columns, totalRegisters: 50, pageSize: 10 };
        const activePage = () => document.querySelector('.ant-pagination-item-active')?.getAttribute('title');
        const searchColumn = { title: 'Name', dataIndex: 'name', key: 'name', search: { placeholder: 'Search name' } };

        it('moves the footer to the page the app sets after the first render', () => {
            const { rerender } = render(<TableV2 {...pager} currentPage={3} />);
            rerender(<TableV2 {...pager} currentPage={1} />);
            expect(activePage()).toBe('1');
        });

        it('keeps a page size picked in the footer when the app does not update pageSize', () => {
            const { container } = render(<TableV2 {...pager} showSizeChanger pageSizeOptions={['10', '25']} />);
            fireEvent.mouseDown(container.querySelector('.ant-select-selector')!);
            fireEvent.click(screen.getByTitle('25 / page'));
            expect(container.querySelectorAll('.ant-pagination-item')).toHaveLength(2);
        });

        it('shows the footer total from showTotal', () => {
            render(<TableV2 {...pager} showTotal={(total) => `Total ${total} items`} />);
            expect(screen.getByText('Total 50 items')).toBeTruthy();
        });

        it('opens a filter from the keyboard without sorting the column', () => {
            const onChange = vi.fn();
            render(<TableV2 dataSource={dataSource} columns={[{ ...searchColumn, sorter: (a: User, b: User) => a.age - b.age }]} onChange={onChange} isPaginated={false} />);
            const trigger = screen.getByRole('button', { name: 'Filter menu' });
            expect(trigger.tabIndex).toBe(0);
            fireEvent.keyDown(trigger, { key: 'Enter', keyCode: 13 });
            expect(screen.getByPlaceholderText('Search name')).toBeTruthy();
            expect(onChange).not.toHaveBeenCalled();
        });

        it('focuses the search box when its dropdown opens', async () => {
            render(<TableV2 dataSource={dataSource} columns={[searchColumn]} isPaginated={false} />);
            fireEvent.click(screen.getByRole('button', { name: 'Filter menu' }));
            await waitFor(() => expect(document.activeElement).toBe(screen.getByPlaceholderText('Search name')));
        });

        it('treats a search of only spaces as no search', () => {
            render(<TableV2 dataSource={dataSource} columns={[searchColumn]} isPaginated={false} />);
            fireEvent.click(screen.getByRole('button', { name: 'Filter menu' }));
            fireEvent.change(screen.getByPlaceholderText('Search name'), { target: { value: '   ' } });
            fireEvent.click(screen.getByRole('button', { name: 'OK' }));
            expect(screen.queryByTestId('table-filter-bar')).toBeNull();
        });

        it('keeps its state when a parent calls buildTableV2WithDataId while rendering', () => {
            const Parent = () => {
                const [renders, setRenders] = useState(0);
                const TableWithDataId = buildTableV2WithDataId<Category>();
                return (
                    <>
                        <button type='button' onClick={() => setRenders(renders + 1)}>
                            Re-render
                        </button>
                        <TableWithDataId dataSource={tree} columns={[categoryColumn]} isPaginated={false} />
                    </>
                );
            };
            render(<Parent />);
            fireEvent.click(screen.getByRole('button', { name: 'Expand all rows' }));
            fireEvent.click(screen.getByRole('button', { name: 'Re-render' }));
            expect(screen.getByText('Consumption')).toBeTruthy();
        });

        const popupSlot = () => document.body.appendChild(document.createElement('div'));
        const inTableLayerOf = (slot: HTMLElement) => screen.getByPlaceholderText('Search name').closest('.table-popups')?.parentElement === slot;

        it("renders filter dropdowns in the app's ConfigProvider popup container", () => {
            const slot = popupSlot();
            render(
                <AntdConfigProvider getPopupContainer={() => slot}>
                    <TableV2 dataSource={dataSource} columns={[searchColumn]} isPaginated={false} />
                </AntdConfigProvider>
            );
            fireEvent.click(screen.getByRole('button', { name: 'Filter menu' }));
            expect(inTableLayerOf(slot)).toBe(true);
        });

        it('renders filter dropdowns in the getPopupContainer the table is given', () => {
            const slot = popupSlot();
            render(<TableV2 dataSource={dataSource} columns={[searchColumn]} getPopupContainer={() => slot} isPaginated={false} />);
            fireEvent.click(screen.getByRole('button', { name: 'Filter menu' }));
            expect(inTableLayerOf(slot)).toBe(true);
        });

        it('hides the sort tooltip while the info icon is hovered', async () => {
            render(<TableV2 dataSource={dataSource} columns={[{ title: 'Age', dataIndex: 'age', info: 'Age in years', sorter: (a: User, b: User) => a.age - b.age }]} isPaginated={false} />);
            fireEvent.mouseEnter(document.querySelector(`.${p}-column-sorters`)!);
            await screen.findByRole('tooltip', { name: 'Click to sort ascending' });
            fireEvent.mouseEnter(screen.getByRole('button', { name: 'Age in years' }));
            expect(screen.queryByRole('tooltip', { name: 'Click to sort ascending' })).toBeNull();
        });

        it('gives the full chip text as its title, for chips cut short', () => {
            render(<TableV2 dataSource={dataSource} columns={[{ title: 'Name', dataIndex: 'name', key: 'name', filters: [{ text: 'Mike', value: 'Mike' }], filteredValue: ['Mike'] }]} isPaginated={false} />);
            expect(within(screen.getByTestId('table-filter-bar')).getByTitle('Name: Mike')).toBeTruthy();
        });

        it('translates its own labels and antd strings with lang', () => {
            render(<TableV2 lang='es' dataSource={tree} columns={[categoryColumn]} isPaginated={false} />);
            expect(screen.getByRole('button', { name: 'Expandir todas las filas' })).toBeTruthy();
            expect(screen.getByRole('button', { name: 'Expandir fila' })).toBeTruthy();
        });

        it('translates the chip remove label with lang', () => {
            render(<TableV2 lang='de' dataSource={dataSource} columns={[{ title: 'Name', dataIndex: 'name', key: 'name', filters: [{ text: 'Mike', value: 'Mike' }], filteredValue: ['Mike'] }]} isPaginated={false} />);
            expect(screen.getByRole('button', { name: 'Name: Mike entfernen' })).toBeTruthy();
        });

        it('lets the aria-label props override the lang labels', () => {
            render(<TableV2 lang='es' expandAllAriaLabel='Open everything' dataSource={tree} columns={[categoryColumn]} isPaginated={false} />);
            expect(screen.getByRole('button', { name: 'Open everything' })).toBeTruthy();
        });

        it('names the row arrows by their action, without a separate expanded state', () => {
            render(<TableV2 dataSource={tree} columns={[categoryColumn]} isPaginated={false} />);
            const arrow = screen.getByRole('button', { name: 'Expand row' });
            expect(arrow.hasAttribute('aria-expanded')).toBe(false);
            expect(screen.getByRole('button', { name: 'Expand all rows' }).hasAttribute('aria-expanded')).toBe(false);
            fireEvent.click(arrow);
            expect(screen.getByRole('button', { name: 'Collapse row' })).toBeTruthy();
        });

        it('gives rows under a custom childrenColumnName their arrow', () => {
            render(<TableV2 dataSource={[{ key: '1', name: 'Gas', subRows: [{ key: '1-1', name: 'Boiler' }] }]} columns={[categoryColumn]} expandable={{ childrenColumnName: 'subRows' }} isPaginated={false} />);
            fireEvent.click(screen.getByRole('button', { name: 'Expand row' }));
            expect(screen.getByText('Boiler')).toBeTruthy();
        });

        it('gives no arrow to a row whose children list is empty', () => {
            render(<TableV2 dataSource={[{ key: '2', name: 'Gas', children: [] }, ...tree]} columns={[categoryColumn]} isPaginated={false} />);
            expect(screen.getAllByRole('button', { name: 'Expand row' })).toHaveLength(1);
        });

        it('opens rows keyed by a rowKey function with expand-all', () => {
            const rows = [{ id: 'a', name: 'Electricity', children: [{ id: 'a-1', name: 'Consumption' }] }];
            render(<TableV2 rowKey={(row) => row.id} dataSource={rows} columns={[categoryColumn]} isPaginated={false} />);
            fireEvent.click(screen.getByRole('button', { name: 'Expand all rows' }));
            expect(screen.getByText('Consumption')).toBeTruthy();
        });

        it('marks the last detail row as the last one shown once it closes again', () => {
            const rows = dataSource.map((row) => ({ ...row, expandable: true }));
            render(<TableV2 dataSource={rows} columns={columns} expandable={{ expandedRowRender: (row) => <p>Details of {row.name}</p> }} isPaginated={false} />);
            const lastRow = () => screen.getByTestId('table').querySelector('tr[data-row-key="2"]')!;
            fireEvent.click(within(lastRow() as HTMLElement).getByRole('button', { name: 'Expand row' }));
            expect(lastRow().classList.contains('table-row-last-shown')).toBe(false);
            fireEvent.click(within(lastRow() as HTMLElement).getByRole('button', { name: 'Collapse row' }));
            expect(lastRow().classList.contains('table-row-last-shown')).toBe(true);
        });

        it("keeps the app's className on the first column of an isExpanded table", () => {
            render(<TableV2 isExpanded dataSource={dataSource} columns={[{ ...columns[0], className: 'app-first' }, ...columns.slice(1)]} isPaginated={false} />);
            const firstCell = screen.getByTestId('table').querySelector('tr[data-row-key="1"] > td')!;
            expect(firstCell.classList.contains('app-first')).toBe(true);
            expect(firstCell.classList.contains('expanded-first-column')).toBe(true);
        });

        it('gives each loading placeholder its own SVG ids', () => {
            render(
                <>
                    <TableV2 dataSource={dataSource} columns={columns} isLoading />
                    <TableV2 dataSource={dataSource} columns={columns} isLoading />
                </>
            );
            const ids = Array.from(document.querySelectorAll('[data-testid="table-loading"] [id]'), (node) => node.id);
            expect(new Set(ids).size).toBe(ids.length);
        });
    });

    describe('row selection, expand callbacks, pager and column keys', () => {
        const nestedTable = () => <TableV2 dataSource={dataSource} columns={columns} rowSelection={{}} rowsCanBeSelectAriaLabel='Select address' isPaginated={false} />;

        it("doesn't relabel the checkboxes of a table nested in an expanded row", () => {
            render(
                <TableV2
                    dataSource={[{ ...dataSource[0], expandable: true }]}
                    columns={columns}
                    rowSelection={{}}
                    rowsCanBeSelectAriaLabel='Select user'
                    expandable={{ defaultExpandAllRows: true, expandedRowRender: nestedTable }}
                    isPaginated={false}
                />
            );
            expect(screen.getAllByRole('checkbox', { name: 'Select address' })).toHaveLength(2);
            expect(screen.getAllByRole('checkbox', { name: 'Select user' })).toHaveLength(1);
        });

        it("keeps the app's getCheckboxProps while naming the row checkboxes", () => {
            render(
                <TableV2
                    dataSource={dataSource}
                    columns={columns}
                    rowSelection={{ getCheckboxProps: (row) => ({ disabled: row.name === 'John' }) }}
                    rowsCanBeSelectAriaLabel='Select user'
                    isPaginated={false}
                />
            );
            const [mike, john] = screen.getAllByRole('checkbox', { name: 'Select user' });
            expect([(mike as HTMLInputElement).disabled, (john as HTMLInputElement).disabled]).toEqual([false, true]);
        });

        it('names the select-all checkbox with selectAllRowsAriaLabel', () => {
            render(<TableV2 dataSource={dataSource} columns={columns} rowSelection={{}} selectAllRowsAriaLabel='Select every user' isPaginated={false} />);
            expect(screen.getByRole('checkbox', { name: 'Select every user' })).toBeTruthy();
        });

        it('tells onExpand about each row expand-all opens or closes, as a click on its arrow does', () => {
            const onExpand = vi.fn();
            const rows = dataSource.map((row) => ({ ...row, expandable: true }));
            render(<TableV2 dataSource={rows} columns={columns} expandable={{ expandedRowRender: (row) => <p>Details of {row.name}</p>, onExpand }} isPaginated={false} />);
            fireEvent.click(screen.getAllByRole('button', { name: 'Expand row' })[0]);
            onExpand.mockClear();
            fireEvent.click(screen.getByRole('button', { name: 'Expand all rows' }));
            expect(onExpand.mock.calls).toEqual([[true, rows[1]]]);
            onExpand.mockClear();
            fireEvent.click(screen.getByRole('button', { name: 'Collapse all rows' }));
            expect(onExpand.mock.calls).toEqual([
                [false, rows[0]],
                [false, rows[1]],
            ]);
        });

        it('keeps the footer as its only pager', () => {
            // @ts-expect-error The footer is the table's pager: use currentPage, pageSize and onPageChange.
            render(<TableV2 dataSource={dataSource} columns={columns} totalRegisters={20} pagination={{ pageSize: 1 }} />);
            expect(document.querySelectorAll('.ant-pagination')).toHaveLength(1);
        });

        it('warns once when a filterable column has no key, naming it', () => {
            const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined);
            const { rerender } = render(<TableV2 dataSource={dataSource} columns={[{ title: 'Name', dataIndex: 'name', search: {} }, { title: 'Age', dataIndex: 'age', key: 'age', filters: [] }]} isPaginated={false} />);
            rerender(<TableV2 dataSource={dataSource} columns={[{ title: 'Name', dataIndex: 'name', search: {} }, { title: 'Age', dataIndex: 'age', key: 'age', filters: [] }]} isPaginated={false} />);
            expect(warn).toHaveBeenCalledTimes(1);
            expect(warn.mock.calls[0][0]).toContain('Name');
            expect(warn.mock.calls[0][0]).not.toContain('Age');
            warn.mockRestore();
        });
    });
});
