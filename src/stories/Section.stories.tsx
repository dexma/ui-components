import React from 'react';

import { Section, Cell, Chart, Grid, Row, Paragraph, Table } from '@components';
import { mockBasicArea } from '../../tests/mock/Chart';
import { columnsTable, dataTable } from '../../tests/mock/Table';

export default {
    title: 'Section',
    component: Section,
    tags: ['autodocs'],
};

export const SectionDataChart = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Section
                    title='Chart layout title'
                    onExportExcel={() => {
                        console.log('click onExportExcel');
                    }}
                    onExportImage={() => {
                        console.log('click onExportImage');
                    }}
                    onAddReport={() => {
                        console.log('click onAddReport');
                    }}
                >
                    <Chart options={mockBasicArea} />
                </Section>
            </Cell>
        </Row>
        <Row>
            <Cell xs={12}>
                <Section
                    title='Chart layout title'
                    onExportExcel={() => {
                        console.log('click onExportExcel');
                    }}
                    onAddReport={() => {
                        console.log('click onAddReport');
                    }}
                >
                    <Chart isLoading options={mockBasicArea} />
                </Section>
            </Cell>
        </Row>
    </Grid>
);

export const SectionDataTable = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Section data for table loading</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Section
                    title='Table layout title'
                    onExportExcel={() => {
                        console.log('click onExportExcel');
                    }}
                    onExportImage={() => {
                        console.log('click onExportImage');
                    }}
                    onAddReport={() => {
                        console.log('click onAddReport');
                    }}
                    isLoading
                >
                    <Table dataSource={dataTable} columns={columnsTable} />
                </Section>
            </Cell>
        </Row>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Section data for table loading</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Section
                    title='Table layout title'
                    onExportExcel={() => {
                        console.log('click onExportExcel');
                    }}
                    onExportImage={() => {
                        console.log('click onExportImage');
                    }}
                    onAddReport={() => {
                        console.log('click onAddReport');
                    }}
                    isLoading
                >
                    <Table isLoading dataSource={dataTable} columns={columnsTable} />
                </Section>
            </Cell>
        </Row>
    </Grid>
);
