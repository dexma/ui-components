import { beforeAll, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Table, Result, ResultVariants } from '@components';

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

describe('<Table>', () => {
    beforeAll(() => {
        const { getComputedStyle } = window;
        window.getComputedStyle = (elt) => getComputedStyle(elt);
    });

    it('Should render table component', () => {
        render(<Table dataSource={dataSource} columns={columns} />);
        expect(screen.getByTestId('table')).toBeTruthy();
    });
    it('Should render loading component', () => {
        render(<Table dataSource={dataSource} columns={columns} isLoading />);
        expect(screen.getByTestId('table-loading')).toBeTruthy();
    });
    it('Should render loading component', () => {
        render(
            <Table dataSource={dataSource} columns={columns} showError errorContent={<Result variant={ResultVariants.ERROR} title='Error table' info='Test info table error' />} />
        );
        expect(screen.getByTestId('table-error')).toBeTruthy();
        expect(screen.getByText('Error table')).toBeTruthy();
        expect(screen.getByText('Test info table error')).toBeTruthy();
    });
    it('Should paginate with 25 items per page by default', () => {
        const rows = Array.from({ length: 60 }, (_, i) => ({ key: String(i), name: `User ${i}`, age: 30, address: 'Street' }));
        const { container } = render(<Table dataSource={rows.slice(0, 25)} columns={columns} totalRegisters={rows.length} />);
        expect(container.querySelectorAll('.ant-pagination-item').length).toBe(3);
    });
    it('Should reflect the filtered total in the pagination', () => {
        const rows = Array.from({ length: 60 }, (_, i) => ({ key: String(i), name: `User ${i}`, age: 30, address: 'Street' }));
        const { container, rerender } = render(<Table dataSource={rows.slice(0, 25)} columns={columns} totalRegisters={60} />);
        expect(container.querySelectorAll('.ant-pagination-item').length).toBe(3);
        rerender(<Table dataSource={rows.slice(0, 10)} columns={columns} totalRegisters={10} />);
        expect(container.querySelectorAll('.ant-pagination-item').length).toBe(1);
    });
    it('Should follow currentPage when it changes externally', () => {
        const rows = Array.from({ length: 60 }, (_, i) => ({ key: String(i), name: `User ${i}`, age: 30, address: 'Street' }));
        const { container, rerender } = render(<Table dataSource={rows.slice(0, 25)} columns={columns} totalRegisters={60} currentPage={3} />);
        expect(container.querySelector('.ant-pagination-item-active')?.textContent).toBe('3');
        rerender(<Table dataSource={rows.slice(0, 25)} columns={columns} totalRegisters={60} currentPage={1} />);
        expect(container.querySelector('.ant-pagination-item-active')?.textContent).toBe('1');
    });
});
