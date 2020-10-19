import React from 'react';
import Grid from '../components/Grid';
import Cell from '../components/Cell';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';
import { Table } from '../components/Table';
import { columnsTable, dataTable } from '../../test/mock/Table';

export default {
  title: 'Table',
  component: Table,
};

class Selection extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
  };

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
        <Paragraph m="1rem 0 1rem 0">
          Here we have dots for show loading part of the UI you can customize
          with 2, 3 or 4 dot
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <Table dataSource={dataTable} columns={columnsTable} />
      </Cell>
    </Row>
  </Grid>
);

export const selection = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
          Here we have dots for show loading part of the UI you can customize
          with 2, 3 or 4 dot
        </Paragraph>
      </Cell>
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
    },
    { title: 'Type', dataIndex: 'type', key: 'type' },
    { title: 'Target', dataIndex: 'target', key: 'target' },
    { title: 'Saved %', dataIndex: 'saved', key: 'saved' },
    { title: 'Saved Total', dataIndex: 'saved_total', key: 'saved_total' },
    { title: '', dataIndex: 'time_savings', key: 'time_savings' },
  ];

  const data = [];
  for (let i = 0; i < 4; ++i) {
    data.push({
      project_details: i,
      type: 'Screem',
      saved: 'iOS',
      saved_total: '10.3.4.5654',
      time_savings: 500,
    });
  }
  return (
    <Table
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
    { title: '', dataIndex: 'time_savings', key: 'time_savings' },
  ];

  const data = [];
  for (let i = 0; i < 3; ++i) {
    data.push({
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
          <Paragraph m="1rem 0 1rem 0">
            Here we have dots for show loading part of the UI you can customize
            with 2, 3 or 4 dot
          </Paragraph>
        </Cell>
        <Cell xs={12}>
          <Table
            className="../components-table-demo-nested"
            columns={columns}
            expandedRowRender={expandedRowRender}
            dataSource={data}
            pagination={false}
            size="middle"
          />
        </Cell>
      </Row>
    </Grid>
  );
};
