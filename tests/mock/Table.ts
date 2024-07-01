import type { ColumnsType } from 'antd/es/table';

export type User = {
    key: number;
    name: string;
    age: number;
    address: string;
};

export const columnsTable: ColumnsType<User> = [
    {
        title: 'Name',
        dataIndex: 'name',
        sortDirections: ['ascend', 'descend'],
        sorter: true,
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

export const dataTable: User[] = [
    {
        key: 0,
        name: 'Edward King 0',
        age: 32,
        address: 'London, Park Lane no. 0',
    },
    {
        key: 1,
        name: 'Edward King 1',
        age: 32,
        address: 'London, Park Lane no. 1',
    },
    {
        key: 2,
        name: 'Edward King 2',
        age: 32,
        address: 'London, Park Lane no. 2',
    },
    {
        key: 3,
        name: 'Edward King 3',
        age: 32,
        address: 'London, Park Lane no. 3',
    },
    {
        key: 4,
        name: 'Edward King 4',
        age: 32,
        address: 'London, Park Lane no. 4',
    },
    {
        key: 5,
        name: 'Edward King 5',
        age: 32,
        address: 'London, Park Lane no. 5',
    },
    {
        key: 6,
        name: 'Edward King 6',
        age: 32,
        address: 'London, Park Lane no. 6',
    },
    {
        key: 7,
        name: 'Edward King 7',
        age: 32,
        address: 'London, Park Lane no. 7',
    },
    {
        key: 8,
        name: 'Edward King 8',
        age: 32,
        address: 'London, Park Lane no. 8',
    },
    {
        key: 9,
        name: 'Edward King 9',
        age: 32,
        address: 'London, Park Lane no. 9',
    },
    {
        key: 10,
        name: 'Edward King 10',
        age: 32,
        address: 'London, Park Lane no. 10',
    },
    {
        key: 11,
        name: 'Edward King 11',
        age: 32,
        address: 'London, Park Lane no. 11',
    },
    {
        key: 12,
        name: 'Edward King 12',
        age: 32,
        address: 'London, Park Lane no. 12',
    },
    {
        key: 13,
        name: 'Edward King 13',
        age: 32,
        address: 'London, Park Lane no. 13',
    },
    {
        key: 14,
        name: 'Edward King 14',
        age: 32,
        address: 'London, Park Lane no. 14',
    },
    {
        key: 15,
        name: 'Edward King 15',
        age: 32,
        address: 'London, Park Lane no. 15',
    },
    {
        key: 16,
        name: 'Edward King 16',
        age: 32,
        address: 'London, Park Lane no. 16',
    },
    {
        key: 17,
        name: 'Edward King 17',
        age: 32,
        address: 'London, Park Lane no. 17',
    },
    {
        key: 18,
        name: 'Edward King 18',
        age: 32,
        address: 'London, Park Lane no. 18',
    },
    {
        key: 19,
        name: 'Edward King 19',
        age: 32,
        address: 'London, Park Lane no. 19',
    },
    {
        key: 20,
        name: 'Edward King 20',
        age: 32,
        address: 'London, Park Lane no. 20',
    },
    {
        key: 21,
        name: 'Edward King 21',
        age: 32,
        address: 'London, Park Lane no. 21',
    },
    {
        key: 22,
        name: 'Edward King 22',
        age: 32,
        address: 'London, Park Lane no. 22',
    },
    {
        key: 23,
        name: 'Edward King 23',
        age: 32,
        address: 'London, Park Lane no. 23',
    },
    {
        key: 24,
        name: 'Edward King 24',
        age: 32,
        address: 'London, Park Lane no. 24',
    },
    {
        key: 25,
        name: 'Edward King 25',
        age: 32,
        address: 'London, Park Lane no. 25',
    },
    {
        key: 26,
        name: 'Edward King 26',
        age: 32,
        address: 'London, Park Lane no. 26',
    },
    {
        key: 27,
        name: 'Edward King 27',
        age: 32,
        address: 'London, Park Lane no. 27',
    },
    {
        key: 28,
        name: 'Edward King 28',
        age: 32,
        address: 'London, Park Lane no. 28',
    },
    {
        key: 29,
        name: 'Edward King 29',
        age: 32,
        address: 'London, Park Lane no. 29',
    },
    {
        key: 30,
        name: 'Edward King 30',
        age: 32,
        address: 'London, Park Lane no. 30',
    },
    {
        key: 31,
        name: 'Edward King 31',
        age: 32,
        address: 'London, Park Lane no. 31',
    },
    {
        key: 32,
        name: 'Edward King 32',
        age: 32,
        address: 'London, Park Lane no. 32',
    },
    {
        key: 33,
        name: 'Edward King 33',
        age: 32,
        address: 'London, Park Lane no. 33',
    },
    {
        key: 34,
        name: 'Edward King 34',
        age: 32,
        address: 'London, Park Lane no. 34',
    },
    {
        key: 35,
        name: 'Edward King 35',
        age: 32,
        address: 'London, Park Lane no. 35',
    },
    {
        key: 36,
        name: 'Edward King 36',
        age: 32,
        address: 'London, Park Lane no. 36',
    },
    {
        key: 37,
        name: 'Edward King 37',
        age: 32,
        address: 'London, Park Lane no. 37',
    },
    {
        key: 38,
        name: 'Edward King 38',
        age: 32,
        address: 'London, Park Lane no. 38',
    },
    {
        key: 39,
        name: 'Edward King 39',
        age: 32,
        address: 'London, Park Lane no. 39',
    },
    {
        key: 40,
        name: 'Edward King 40',
        age: 32,
        address: 'London, Park Lane no. 40',
    },
    {
        key: 41,
        name: 'Edward King 41',
        age: 32,
        address: 'London, Park Lane no. 41',
    },
    {
        key: 42,
        name: 'Edward King 42',
        age: 32,
        address: 'London, Park Lane no. 42',
    },
    {
        key: 43,
        name: 'Edward King 43',
        age: 32,
        address: 'London, Park Lane no. 43',
    },
    {
        key: 44,
        name: 'Edward King 44',
        age: 32,
        address: 'London, Park Lane no. 44',
    },
    {
        key: 45,
        name: 'Edward King 45',
        age: 32,
        address: 'London, Park Lane no. 45',
    },
];
