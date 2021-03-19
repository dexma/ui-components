import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import SectionData from '../../src/components/Section/SectionData';

import { mockBasicArea } from '../mock/Chart';

describe('<SectionData>', () => {
  it('Should render a chart', () => {
    render(<SectionData type="chart" options={mockBasicArea} />);
    expect(screen.getByTestId('section-data-chart')).toBeTruthy();
  });
  it('Should render a table', () => {
    render(<SectionData type="table" options={mockBasicArea} />);
    expect(screen.getByTestId('section-data-table')).toBeTruthy();
  });
  it('Should render the title passed as a prop', () => {
    const mockTitle = 'Test';
    render(
      <SectionData type="table" options={mockBasicArea} title={mockTitle} />
    );
    expect(screen.getByText(mockTitle)).toBeInTheDocument();
  });
  it('Should call the event onAddReport, onExportExcel, onExportImage passed as a prop', () => {
    const mockOnAddReport = jest.fn();
    const mockOnExportExcel = jest.fn();
    const mockOnExportImage = jest.fn();
    render(
      <SectionData
        type="table"
        options={mockBasicArea}
        onAddReport={mockOnAddReport}
        onExportExcel={mockOnExportExcel}
        onExportImage={mockOnExportImage}
      />
    );
    fireEvent.click(screen.getByTestId('report'));
    expect(mockOnAddReport).toBeCalled();

    fireEvent.click(screen.getByTestId('excel'));
    expect(mockOnExportExcel).toBeCalled();

    fireEvent.click(screen.getByTestId('image'));
    expect(mockOnExportImage).toBeCalled();
  });
});
