import { Grid, Row, Cell, Paragraph, Select } from '@components';
import { useState } from 'react';

export default {
    title: 'Select',
    component: Select,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Select is a form control for selecting a value from a set of options.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Select
                    mode='multiple'
                    style={{ width: '100%' }}
                    pageSize={10}
                    defaultValues={['3']}
                    maxTagLength={20}
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
                />
            </Cell>
        </Row>
    </Grid>
);

const SingleSelectComponent = (props: any) => {
    const [selectedValues, setSelectedValue] = useState([]);
    const handleChange = (value: any) => {
        setSelectedValue(value);
    };
    return (
        <Select
            onChange={handleChange}
            value={selectedValues}
            handleClearAll={() => {
                setSelectedValue([]);
            }}
            {...props}
        />
    );
};

export const SingleSelect = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Based on the mode prop, the select can be single or multiple.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <SingleSelectComponent
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
                />
            </Cell>
        </Row>
    </Grid>
);
