import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { DataIdProvider, Button, Chart, Input, Checkbox, Section, DatePicker, Select, buildTableWithDataId, Tag, Dropdown } from '@components';
import { withDataId } from '@components/DataId/withDataId';
import { User } from './mock/Table';

describe('Data Id', () => {
    it('withDataId should not build data-id', () => {
        const Example = ({ dataId }: { dataId?: string }) => <div data-id={dataId}>Example</div>;

        const ExampleWithId = withDataId(Example, '');

        const { container } = render(<ExampleWithId />);
        const example = container.querySelectorAll("[data-id='example']");
        expect(Array.from(example)).toHaveLength(0);
    });

    it('withDataId should build data-id as default value', () => {
        const Example = ({ dataId }: { dataId?: string }) => <div data-id={dataId}>Example</div>;

        const ExampleWithId = withDataId(Example, 'example');

        const { container } = render(<ExampleWithId />);
        const example = container.querySelectorAll("[data-id='example']");
        expect(Array.from(example)).toHaveLength(1);
    });

    it('withDataId should build data-id as specific value', () => {
        const Example = ({ dataId }: { dataId?: string }) => <div data-id={dataId}>Example</div>;

        const ExampleWithId = withDataId(Example, 'example');

        const { container } = render(<ExampleWithId dataId='example.test' />);
        const example = container.querySelectorAll("[data-id='example.test']");
        expect(Array.from(example)).toHaveLength(1);
    });

    it('withDataId should build data-id as context + default value', () => {
        const Example = ({ dataId }: { dataId?: string }) => <div data-id={dataId}>Example</div>;

        const ExampleWithId = withDataId(Example, 'example');

        const { container } = render(
            <DataIdProvider dataId='page.section'>
                <ExampleWithId />
            </DataIdProvider>
        );
        const example = container.querySelectorAll("[data-id='page.section.example']");
        expect(Array.from(example)).toHaveLength(1);
    });

    it('withDataId should build data-id as context + specific value', () => {
        const Example = ({ dataId }: { dataId?: string }) => <div data-id={dataId}>Example</div>;

        const ExampleWithId = withDataId(Example, 'example');

        const { container } = render(
            <DataIdProvider dataId='page.section'>
                <ExampleWithId dataId='example.test' />
            </DataIdProvider>
        );
        const example = container.querySelectorAll("[data-id='page.section.example.test']");
        expect(Array.from(example)).toHaveLength(1);
    });

    it('components should have data-id as default value', () => {
        const TableWithDataId = buildTableWithDataId<User>();
        const { container } = render(
            <Section>
                <>
                    <Button />
                    <Chart />
                    <DatePicker type='date' />
                    <Input />
                    <Select />
                    <TableWithDataId />
                    <Tag />
                    <Dropdown />
                </>
            </Section>
        );

        const sectionData = container.querySelectorAll("[data-id='section-data']");
        const button = container.querySelectorAll("[data-id='button']");
        const chart = container.querySelectorAll("[data-id='chart']");
        const datePicker = container.querySelectorAll("[data-id='datepicker']");
        const input = container.querySelectorAll("[data-id='input']");
        const select = container.querySelectorAll("[data-id='select']");
        const table = container.querySelectorAll("[data-id='table']");
        const tag = container.querySelectorAll("[data-id='tag']");
        const dropdown = container.querySelectorAll("[data-id='dropdown-button']");

        expect(Array.from(sectionData)).toHaveLength(1);
        expect(Array.from(button)).toHaveLength(1);
        expect(Array.from(chart)).toHaveLength(1);
        expect(Array.from(datePicker)).toHaveLength(1);
        expect(Array.from(input)).toHaveLength(1);
        expect(Array.from(select)).toHaveLength(1);
        expect(Array.from(table)).toHaveLength(1);
        expect(Array.from(tag)).toHaveLength(1);
        expect(Array.from(dropdown)).toHaveLength(1);
    });

    it('components should have data-id as specific value', () => {
        const TableWithDataId = buildTableWithDataId<User>();
        const { container } = render(
            <Section dataId='section-data.test'>
                <>
                    <Button dataId='button.test' />
                    <Chart dataId='chart.test' />
                    <DatePicker type='date' dataId='datepicker.test' />
                    <Input dataId='input.test' />
                    <Select dataId='select.test' />
                    <TableWithDataId dataId='table.test' />
                    <Tag dataId='tag.test' />
                    <Dropdown dataId='dropdown.test' />
                </>
            </Section>
        );

        const sectionData = container.querySelectorAll("[data-id='section-data.test']");
        const button = container.querySelectorAll("[data-id='button.test']");
        const chart = container.querySelectorAll("[data-id='chart.test']");
        const datePicker = container.querySelectorAll("[data-id='datepicker.test']");
        const input = container.querySelectorAll("[data-id='input.test']");
        const select = container.querySelectorAll("[data-id='select.test']");
        const table = container.querySelectorAll("[data-id='table.test']");
        const tag = container.querySelectorAll("[data-id='tag.test']");
        const dropdown = container.querySelectorAll("[data-id='dropdown.test']");

        expect(Array.from(sectionData)).toHaveLength(1);
        expect(Array.from(button)).toHaveLength(1);
        expect(Array.from(chart)).toHaveLength(1);
        expect(Array.from(datePicker)).toHaveLength(1);
        expect(Array.from(input)).toHaveLength(1);
        expect(Array.from(select)).toHaveLength(1);
        expect(Array.from(table)).toHaveLength(1);
        expect(Array.from(tag)).toHaveLength(1);
        expect(Array.from(dropdown)).toHaveLength(1);
    });

    it('components should have data-id as context + default value', () => {
        const TableWithDataId = buildTableWithDataId<User>();
        const { container } = render(
            <DataIdProvider dataId='page.section'>
                <Section>
                    <>
                        <Button />
                        <Chart />
                        <DatePicker type='date' />
                        <Input />
                        <Select />
                        <TableWithDataId />
                        <Tag />
                        <Dropdown />
                    </>
                </Section>
            </DataIdProvider>
        );

        const sectionData = container.querySelectorAll("[data-id='page.section.section-data']");
        const button = container.querySelectorAll("[data-id='page.section.button']");
        const chart = container.querySelectorAll("[data-id='page.section.chart']");
        const datePicker = container.querySelectorAll("[data-id='page.section.datepicker']");
        const input = container.querySelectorAll("[data-id='page.section.input']");
        const select = container.querySelectorAll("[data-id='page.section.select']");
        const table = container.querySelectorAll("[data-id='page.section.table']");
        const tag = container.querySelectorAll("[data-id='page.section.tag']");
        const dropdown = container.querySelectorAll("[data-id='page.section.dropdown-button']");

        expect(Array.from(sectionData)).toHaveLength(1);
        expect(Array.from(button)).toHaveLength(1);
        expect(Array.from(chart)).toHaveLength(1);
        expect(Array.from(datePicker)).toHaveLength(1);
        expect(Array.from(input)).toHaveLength(1);
        expect(Array.from(select)).toHaveLength(1);
        expect(Array.from(table)).toHaveLength(1);
        expect(Array.from(tag)).toHaveLength(1);
        expect(Array.from(dropdown)).toHaveLength(1);
    });

    it('components should have data-id as context + specific value', () => {
        const TableWithDataId = buildTableWithDataId<User>();
        const { container } = render(
            <DataIdProvider dataId='page.section'>
                <Section dataId='section-data.test'>
                    <>
                        <Button dataId='button.test' />
                        <Chart dataId='chart.test' />
                        <DatePicker type='date' dataId='datepicker.test' />
                        <Input dataId='input.test' />
                        <Select dataId='select.test' />
                        <TableWithDataId dataId='table.test' />
                        <Tag dataId='tag.test' />
                        <Dropdown dataId='dropdown.test' />
                    </>
                </Section>
            </DataIdProvider>
        );

        const sectionData = container.querySelectorAll("[data-id='page.section.section-data.test']");
        const button = container.querySelectorAll("[data-id='page.section.button.test']");
        const chart = container.querySelectorAll("[data-id='page.section.chart.test']");
        const datePicker = container.querySelectorAll("[data-id='page.section.datepicker.test']");
        const input = container.querySelectorAll("[data-id='page.section.input.test']");
        const select = container.querySelectorAll("[data-id='page.section.select.test']");
        const table = container.querySelectorAll("[data-id='page.section.table.test']");
        const tag = container.querySelectorAll("[data-id='page.section.tag.test']");
        const dropdown = container.querySelectorAll("[data-id='page.section.dropdown.test']");

        expect(Array.from(sectionData)).toHaveLength(1);
        expect(Array.from(button)).toHaveLength(1);
        expect(Array.from(chart)).toHaveLength(1);
        expect(Array.from(datePicker)).toHaveLength(1);
        expect(Array.from(input)).toHaveLength(1);
        expect(Array.from(select)).toHaveLength(1);
        expect(Array.from(table)).toHaveLength(1);
        expect(Array.from(tag)).toHaveLength(1);
        expect(Array.from(dropdown)).toHaveLength(1);
    });

    it('<Checkbox> should not have data-id', () => {
        const { container } = render(<Checkbox />);
        const checkbox = container.querySelectorAll("[data-id='checkbox']");
        expect(Array.from(checkbox)).toHaveLength(0);
    });
});
