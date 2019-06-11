import React from 'react';
import { storiesOf } from '@storybook/react';

import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Table from 'components/Table';

import Theme from 'components/Theme';

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
  {
    key: '3',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '4',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '5',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '6',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '7',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '8',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '10',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '21',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '221',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '2111',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
  {
    key: '13',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street',
  },
  {
    key: '24',
    name: 'John',
    age: 42,
    address: '10 Downing Street',
  },
];

/* const dexmaThemeOptions = {
  primaryBrandColor: "blue",
  primaryColor: "blue"
}; */

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

storiesOf('Table', module)
  .addParameters({
    jest: ['Table'],
  })
  .add('with text', () => (
    <Theme>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Table dataSource={dataSource} columns={columns} />
        </Cell>
      </Grid>
    </Theme>
  ));
