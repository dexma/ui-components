import React from 'react';

import { Cascader, Grid, Row, Cell, Paragraph } from '@components';

export default {
    title: 'Cascader',
    component: Cascader,
    tags: ['autodocs'],
    argTypes: {
        options: {
            description: 'Options for cascader',
            control: {
                type: 'object',
            },
        },
        multiple: {
            description: 'Whether support multiple or not.',
            control: {
                type: 'boolean',
            },
        },
        maxTagCount: {
            description: 'Max tag count',
            control: {
                type: 'number',
            },
        },
        open: {
            description: 'Starts the cascader with the dropdown opened.',
            control: {
                type: 'boolean',
            },
        },
        onChange: {
            description: 'Change event',
            action: 'changed',
        },
    },
};

const options = [
    {
        label: 'Light',
        value: 'light',
        selectedItemAriaLabel: 'Ligth item selected',
        children: new Array(20).fill(null).map((_, index) => ({
            label: `Number ${index}`,
            value: index,
            selectedItemAriaLabel: `Number ${index} item selected`
        })),
    },
    {
        label: 'Bamboo',
        value: 'bamboo',
        selectedItemAriaLabel: 'Bamboo item selected',
        children: [
            {
                label: 'Little',
                value: 'little',
                selectedItemAriaLabel: 'Little item selected',
                children: [
                    {
                        label: 'Toy Fish',
                        value: 'fish',
                        disabled: true,
                        disableCheckbox: true,
                        selectedItemAriaLabel: 'Toy Fish item selected'
                    },
                    {
                        label: 'Toy Cards',
                        value: 'cards',
                        selectedItemAriaLabel: 'Toy Cards item selected'
                    },
                    {
                        label: 'Toy Bird',
                        value: 'bird',
                        selectedItemAriaLabel: 'Toy Bird item selected'
                    },
                ],
            },
        ],
    },
];

export const Single = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.
                </Paragraph>
                <Paragraph margin='1rem 0 1rem 0'>When selecting from a large data set, with multi-stage classification separated for easy selection.</Paragraph>
                <Paragraph margin='1rem 0 1rem 0'>Chooses cascade items in one float layer for better user experience.</Paragraph>
                <Cascader
                    options={options}
                    onChange={(value) => {
                        console.log(value);
                    }}
                />
            </Cell>
        </Row>
    </Grid>
);

export const SingleParent = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.
                </Paragraph>
                <Paragraph margin='1rem 0 1rem 0'>When selecting from a large data set, with multi-stage classification separated for easy selection.</Paragraph>
                <Paragraph margin='1rem 0 1rem 0'>Chooses cascade items in one float layer for better user experience.</Paragraph>
                <Cascader
                    options={options}
                    onChange={(value) => {
                        console.log(value);
                    }}
                    changeOnSelect
                />
            </Cell>
        </Row>
    </Grid>
);

export const Multiple = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>The cascader allows to make a single or multiple selection from a set of associated data set.</Paragraph>
                <Cascader
                    style={{ width: '100%' }}
                    multiple
                    maxTagCount='responsive'
                    options={options}
                    onChange={(value) => {
                        console.log(value);
                    }}
                />
            </Cell>
        </Row>
    </Grid>
);
