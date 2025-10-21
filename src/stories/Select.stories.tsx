import { Grid, Row, Cell, Paragraph, Select } from '@components';
import { useState } from 'react';

export default {
    title: 'Select',
    component: Select,
    tags: ['autodocs'],
};

const singleSelectOptions = [
    {
        label: 'manager',
        options: [
            { label: 'Jack', value: 1 },
            { label: 'Lucy', value: 2 },
        ],
    },
    {
        label: 'engineer',
        options: [
            { label: 'Chloe', value: 3 },
            { label: 'Lucas', value: 4 },
        ],
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
                    open
                    mode='multiple'
                    style={{ width: '100%' }}
                    pageSize={6}
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
                            color: 'red',
                            disabled: true,
                        },
                        {
                            value: '5',
                            color: 'blue',
                            label: '1st Floor [05. Luxemburg Building]',
                        },
                        {
                            value: '6',
                            color: 'gray',
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
                            color: 'black',
                        },
                        {
                            value: '5',
                            color: 'gray',
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

const SingleSelectComponent = (props: any) => <Select {...props} />;

const optionRender = (option: any, info: { index: number }) => {
    if (info.index % 2) {
        return <span data-label={option.label}>{option.label}</span>;
    }
    return <strong data-label={option.label}>{option.label}</strong>;
};
export const SingleSelect = () => {
    const [selectedValues, setSelectedValues] = useState([singleSelectOptions[0].options[1].value]);
    return (
        <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>Based on the mode prop, the select can be single or multiple.</Paragraph>
                </Cell>
                <Cell xs={12}>
                    <SingleSelectComponent defaultValues={selectedValues} options={singleSelectOptions} optionFilterProp='label' optionRender={optionRender} />
                </Cell>
            </Row>
        </Grid>
    );
};

export const SingleSelectAllowClear = () => {
    const [selectedValues, setSelectedValue] = useState<number | null>(singleSelectOptions[0].options[1].value);
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
                        defaultValues={[selectedValues]}
                        handleClearAll={() => {
                            console.log('clear all');
                            setSelectedValue(null);
                        }}
                        onChange={handleChange}
                        options={singleSelectOptions}
                    />
                </Cell>
            </Row>
        </Grid>
    );
};
