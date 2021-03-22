import React from 'react';

import Grid from '../components/Grid';
import Row from '../components/Row';
import Chart from '../components/Chart';
import Table from '../components/Table';
import Cell from '../components/Cell';
import SectionData from '../components/Section/SectionData';
import Paragraph from '../components/Paragraph';

import { mockBasicArea } from '../../test/mock/Chart';
import { columnsTable, dataTable } from '../../test/mock/Table';

export default {
  title: 'Section',
  component: null,
  subcomponents: {
    SectionData,
  },
};

export const sectionDataChart = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <SectionData
          title="Chart layout title"
          onExportExcel={() => console.log('click onExportExcel')}
          onExportImage={() => console.log('click onExportImage')}
          onAddReport={() => console.log('click onAddReport')}
        >
          <Chart options={mockBasicArea} />
        </SectionData>
      </Cell>
    </Row>
    <Row>
      <Cell xs={12}>
        <SectionData
          title="Chart layout title"
          onExportExcel={() => console.log('click onExportExcel')}
          onAddReport={() => console.log('click onAddReport')}
        >
          <Chart isLoading options={mockBasicArea} />
        </SectionData>
      </Cell>
    </Row>
  </Grid>
);

export const sectionDataTable = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Section data for table loading
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <SectionData
          title="Table layout title"
          onExportExcel={() => console.log('click onExportExcel')}
          onExportImage={() => console.log('click onExportImage')}
          onAddReport={() => console.log('click onAddReport')}
          isLoading
        >
          <Table dataSource={dataTable} columns={columnsTable} />
        </SectionData>
      </Cell>
    </Row>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Section data for table loading
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <SectionData
          title="Table layout title"
          onExportExcel={() => console.log('click onExportExcel')}
          onExportImage={() => console.log('click onExportImage')}
          onAddReport={() => console.log('click onAddReport')}
          isLoading
        >
          <Table isLoading dataSource={dataTable} columns={columnsTable} />
        </SectionData>
      </Cell>
    </Row>
  </Grid>
);
