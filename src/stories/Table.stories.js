import React from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Table from 'components/Table';

const theme = require('sass-extract-loader?{"plugins": ["sass-extract-js"]}!styles/_variables.scss');

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

storiesOf('Table', module)
  .addParameters({
    jest: ['Table'],
  })
  .add('with text', () => (
    <ThemeProvider theme={theme}>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Table dataSource={dataSource} columns={columns} />
        </Cell>
      </Grid>
    </ThemeProvider>
  ));
