import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SectionData from '../../src/components/Section/SectionData';
import Chart from '../../src/components/Chart';
import Table from '../../src/components/Table';

import { mockBasicArea } from '../mock/Chart';
import { columnsTable, dataTable } from '../mock/Table';

describe('<SectionData>', () => {
  it('Should render a chart', () => {
    render(
      <SectionData>
        <Chart
          data-testid="section-data-chart"
          type="chart"
          options={mockBasicArea}
        />
      </SectionData>
    );
    expect(screen.getByTestId('section-data-chart')).toBeTruthy();
  });
  it('Should render a table', () => {
    render(
      <SectionData>
        <Table
          data-testid="section-data-table"
          dataSource={dataTable}
          columns={columnsTable}
        />
      </SectionData>
    );
    expect(screen.getByTestId('section-data-table')).toBeTruthy();
  });
  it('Should render the title passed as a prop', () => {
    const mockTitle = 'Test';
    render(
      <SectionData title={mockTitle}>
        <div>test</div>
      </SectionData>
    );
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });
  it('Should render multiple children', () => {
    const mockTitle = 'Test';
    render(
      <SectionData title={mockTitle}>
        <>
          <div>test1</div>
          <div>test2</div>
        </>
      </SectionData>
    );
    expect(screen.getByText('test1')).toBeInTheDocument();
    expect(screen.getByText('test2')).toBeInTheDocument();
  });
  it('Should call the event onAddReport, onExportExcel, onExportImage passed as a prop', () => {
    const mockOnAddReport = jest.fn();
    const mockOnExportExcel = jest.fn();
    const mockOnExportImage = jest.fn();

    render(
      <SectionData
        onAddReport={mockOnAddReport}
        onExportExcel={mockOnExportExcel}
        onExportImage={mockOnExportImage}
      >
        <div>test</div>
      </SectionData>
    );

    fireEvent.click(screen.getByTestId('report'));
    expect(mockOnAddReport).toBeCalled();

    fireEvent.click(screen.getByTestId('excel'));
    expect(mockOnExportExcel).toBeCalled();

    fireEvent.click(screen.getByTestId('image'));
    expect(mockOnExportImage).toBeCalled();
  });
});
