import React from 'react';

import Grid from '../components/Grid';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';
import Cell from '../components/Cell';
import SectionData from '../components/Section/SectionData';

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
        <Paragraph margin="1rem 0 1rem 0">Section data for chart</Paragraph>
      </Cell>
      <Cell xs={12}>
        <SectionData
          type="chart"
          title="Chart layout title"
          onExportExcel={() => console.log('click onExportExcel')}
          onExportImage={() => console.log('click onExportImage')}
          onAddReport={() => console.log('click onAddReport')}
          options={mockBasicArea}
        />
      </Cell>
    </Row>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Section data for chart loading
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <SectionData
          title="Chart layout title"
          onExportExcel={() => console.log('click onExportExcel')}
          onExportImage={() => console.log('click onExportImage')}
          onAddReport={() => console.log('click onAddReport')}
          options={mockBasicArea}
          isLoading
        />
      </Cell>
    </Row>
  </Grid>
);

export const sectionDataTable = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">Section data for table</Paragraph>
      </Cell>
      <Cell xs={12}>
        <SectionData
          type="table"
          title="Table layout title"
          onExportExcel={() => console.log('click onExportExcel')}
          onExportImage={() => console.log('click onExportImage')}
          onAddReport={() => console.log('click onAddReport')}
          dataSource={dataTable}
          columns={columnsTable}
        />
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
          type="table"
          title="Table layout title"
          onExportExcel={() => console.log('click onExportExcel')}
          onExportImage={() => console.log('click onExportImage')}
          onAddReport={() => console.log('click onAddReport')}
          dataSource={dataTable}
          columns={columnsTable}
          isLoading
        />
      </Cell>
    </Row>
  </Grid>
);
