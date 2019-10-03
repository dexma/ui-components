import React from 'react';
import { mountWithTheme } from '../utils/wrapperThemeProvider';

import Table from 'components/Table';

const dataSource = [
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
    sorter: (a, b) => a.name.length - b.name.length,
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
  it('Should render the correct component', () => {
    const table = mountWithTheme(<Table dataSource={dataSource} columns={columns}/>);
    expect(table.find('StyledTable').length).toEqual(1);
  });
});
