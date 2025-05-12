import { Grid, Row, Cell, Paragraph, Select } from '@components';
import { useState } from 'react';

export default {
    title: 'Select',
    component: Select,
    tags: ['autodocs'],
};

const singleSelectOptions = [
    { value: '1', label: '1st Floor' },
    {
        value: '2',
        label: '1st Floor [02. Luxemburg Building]'
    },
    { value: '3', label: '3rd Floor' },
    {
        value: '4',
        label: '45th Floor [04. Luxemburg Building]'
    },
    {
        value: '5',
        label: '1st Floor [05. Luxemburg Building]',
    },
    {
        value: '6',
        label: '1st Floor [06. Luxemburg Building]',
    },
    { value: '7', label: '2nd Floor' },
    {
        value: '8',
        label: '2nd Floor [03. Malaga Building]'
    },
    {
        value: '9',
        label: '2nd Floor [04. New York Building]'
    },
    {
        value: '10',
        label: '1st Floor [12. Hong Kong Building]'
    },
    {
        value: '11',
        label: '3rd Floor [02. Singapur Building]',
        disabled: true
    },
    {
        value: '12',
        label: '2nd Floor [16.  Building]'
    },
];

export const Multiple = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Select is a form control for selecting a value from a set of options.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Select
                    allowClear
                    mode='multiple'
                    style={{ width: '100%' }}
                    pageSize={2}
                    defaultValues={['3']}
                    maxTagLength={20}
                    options={[
                        { value: '1', label: '1st Floor' },
                        {
                            value: '2',
                            label: '1st Floor [02. Luxemburg Building]',
                            color: 'green',
                        },
                        { value: '3', label: '3rd Floor', color: 'orange' },
                        {
                            value: '4',
                            label: '45th Floor [04. Luxemburg Building]',
                            color: 'green',
                            disabled: true
                        },
                        {
                            value: '5',
                            color: 'blue',
                            label: '1st Floor [05. Luxemburg Building]',
                        },
                        {
                            value: '6',
                            color: 'green',
                            label: '1st Floor [06. Luxemburg Building]',
                        },
                        { value: '7', label: '2nd Floor', color: 'blue' },
                        {
                            value: '8',
                            label: '2nd Floor [03. Malaga Building]',
                            color: 'red',
                        },
                        {
                            value: '9',
                            label: '2nd Floor [04. New York Building]',
                            color: 'green',
                        },
                        {
                            value: '10',
                            label: '1st Floor [12. Hong Kong Building]',
                            color: 'blue',
                        },
                        {
                            value: '11',
                            label: '3rd Floor [02. Singapur Building]',
                            color: 'orange',
                        },
                        {
                            value: '12',
                            label: '2nd Floor [16.  Building]',
                            color: 'orange'
                        },
                    ]}
                    showOptionsAriaLabel='Show options'
                    hideOptionsAriaLabel='Hide options'
                    clearAllOptionsAriaLabel='Clear all options'
                    deleteOptionSelectedAriaLabel='Delete option'
                />
            </Cell>
        </Row>
    </Grid>
);

export const SelectNoButton = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>When pageSize prop is not set, the select will not have a button to select all options.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Select
                    mode='multiple'
                    style={{ width: '100%' }}
                    options={[
                        { value: '1', label: '1st Floor', color: 'blue' },
                        {
                            value: '2',
                            label: '1st Floor [02. Luxemburg Building]',
                            color: 'green',
                        },
                        { value: '3', label: '3rd Floor', color: 'orange' },
                        {
                            value: '4',
                            label: '45th Floor [04. Luxemburg Building]',
                            color: 'green',
                        },
                        {
                            value: '5',
                            color: 'blue',
                            label: '1st Floor [05. Luxemburg Building]',
                        },
                        {
                            value: '6',
                            color: 'green',
                            label: '1st Floor [06. Luxemburg Building]',
                        },
                        { value: '7', label: '2nd Floor', color: 'blue' },
                        {
                            value: '8',
                            label: '2nd Floor [03. Malaga Building]',
                            color: 'red',
                        },
                        {
                            value: '9',
                            label: '2nd Floor [04. New York Building]',
                            color: 'green',
                        },
                        {
                            value: '10',
                            label: '1st Floor [12. Hong Kong Building]',
                            color: 'blue',
                        },
                        {
                            value: '11',
                            label: '3rd Floor [02. Singapur Building]',
                            color: 'orange',
                        },
                        {
                            value: '12',
                            label: '2nd Floor [16.  Building]',
                            color: 'orange',
                        },
                    ]}
                    showOptionsAriaLabel='Show options'
                    hideOptionsAriaLabel='Hide options'
                    clearAllOptionsAriaLabel='Clear option'
                />
            </Cell>
        </Row>
    </Grid>
);

const SingleSelectComponent = (props: any) => {

    return (
        <Select

            {...props}
        />
    );
};

export const SingleSelect = () => {
    const [selectedValues, setSelectedValue] = useState(['4']);
    return (
        <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>Based on the mode prop, the select can be single or multiple.</Paragraph>
                </Cell>
                <Cell xs={12}>
                    <SingleSelectComponent
                        defaultValues={selectedValues}
                        options={singleSelectOptions}
                    />
                </Cell>
            </Row>
        </Grid>
    )
};

export const SingleSelectAllowClear = () => {
    const [selectedValues, setSelectedValue] = useState(['2']);
    const handleChange = (value: any) => setSelectedValue(value);
    return (
        <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>Based on the mode prop, the select can be single or multiple.</Paragraph>
                </Cell>
                <Cell xs={12}>
                    <SingleSelectComponent
                        allowClear
                        defaultValues={selectedValues}
                        handleClearAll={() => {
                            console.log('clear all');
                            setSelectedValue([]);
                        }}
                        onChange={handleChange}
                        options={singleSelectOptions}
                    />
                </Cell>
            </Row>
        </Grid>
    )
};
