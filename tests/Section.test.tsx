import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Chart, Section } from '@components';
import { mockBasicArea } from './mock/Chart';

describe('<SectionData>', () => {
    it('Should render a chart', () => {
        render(
            <Section>
                <Chart options={mockBasicArea} data-testid='chart' />
            </Section>
        );
        expect(screen.getByTestId('chart')).toBeTruthy();
    });

    it('Should render the title passed as a prop', () => {
        const mockTitle = 'Test';
        render(
            <Section title={mockTitle}>
                <div>test</div>
            </Section>
        );
        expect(screen.getByText(mockTitle)).toBeInTheDocument();
    });
    it('Should render multiple children', () => {
        const mockTitle = 'Test';
        render(
            <Section title={mockTitle}>
                <>
                    <div>test1</div>
                    <div>test2</div>
                </>
            </Section>
        );
        expect(screen.getByText('test1')).toBeInTheDocument();
        expect(screen.getByText('test2')).toBeInTheDocument();
    });
    it('Should call the event onAddReport, onExportExcel, onExportImage passed as a prop', () => {
        const mockOnAddReport = vi.fn();
        const mockOnExportExcel = vi.fn();
        const mockOnExportImage = vi.fn();

        render(
            <Section onAddReport={mockOnAddReport} onExportExcel={mockOnExportExcel} onExportImage={mockOnExportImage}>
                <div>test</div>
            </Section>
        );

        fireEvent.click(screen.getByTestId('report'));
        expect(mockOnAddReport).toBeCalled();

        fireEvent.click(screen.getByTestId('excel'));
        expect(mockOnExportExcel).toBeCalled();

        fireEvent.click(screen.getByTestId('image'));
        expect(mockOnExportImage).toBeCalled();
    });
});
