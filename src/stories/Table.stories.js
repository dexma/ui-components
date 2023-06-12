import React from 'react';

import Grid from '../components/Grid';
import Cell from '../components/Cell';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';
import { Table } from '../components/Table';
import { columnsTable, dataTable } from '../../test/mock/Table';
import Result from '../components/Result';

export default {
  title: 'Table',
  component: Table,
};

class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRowKeys: [], // Check here to configure the default column
    };
  }

  onSelectChange = selectedRowKeys => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  };

  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    return (
      <div>
        <Table
          rowSelection={rowSelection}
          columns={columnsTable}
          dataSource={dataTable}
        />
      </div>
    );
  }
}

export const table = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Tables allow arranging and organising data into rows and columns. A
          wrapper for Ant Design Table so check their documentation for further
          information.
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Table dataSource={dataTable} columns={columnsTable} />
      </Cell>
    </Row>
  </Grid>
);

export const loading = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">Table loading</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Table dataSource={dataTable} columns={columnsTable} isLoading />
      </Cell>
    </Row>
  </Grid>
);

export const error = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">Table error</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Table
          dataSource={dataTable}
          columns={columnsTable}
          showError
          errorContent={
            <Result
              variant="error"
              title="Error data"
              info="Please check and modify the following information before resubmitting."
            />
          }
        />
      </Cell>
    </Row>
  </Grid>
);

export const selection = () => (
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
  for (let i = 0; i < 6; ++i) {
    data.push({
      key: i,
      project_details: i,
      type: 'Screem',
      target: 50,
      saved: 'iOS',
      saved_total: '10.3.4.5654',
    });
  }
  return (
    <Table
      isExpanded
      columns={columns}
      dataSource={data}
      pagination={false}
      bordered={false}
    />
  );
};

export const nestedTable = () => {
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
  for (let i = 0; i < 3; ++i) {
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
          <Table
            isExpanded
            className="components-table-demo-nested"
            columns={columns}
            expandedRowRender={expandedRowRender}
            dataSource={data}
            pagination={false}
          />
        </Cell>
      </Row>
    </Grid>
  );
};
