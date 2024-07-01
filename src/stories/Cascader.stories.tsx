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
                    multiple
                    options={[
                        {
                            label: 'Light',
                            value: 'light',
                            children: new Array(20).fill(null).map((_, index) => ({
                                label: `Number ${index}`,
                                value: index,
                            })),
                        },
                        {
                            label: 'Bamboo',
                            value: 'bamboo',
                            children: [
                                {
                                    label: 'Little',
                                    value: 'little',
                                    children: [
                                        {
                                            label: 'Toy Fish',
                                            value: 'fish',
                                            disabled: true,
                                            disableCheckbox: true,
                                        },
                                        {
                                            label: 'Toy Cards',
                                            value: 'cards',
                                        },
                                        {
                                            label: 'Toy Bird',
                                            value: 'bird',
                                        },
                                    ],
                                },
                            ],
                        },
                    ]}
                    onChange={(value) => {
                        console.log(value);
                    }}
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
                    options={[
                        {
                            label: 'Light',
                            value: 'light',
                            children: new Array(20).fill(null).map((_, index) => ({
                                label: `Number ${index}`,
                                value: index,
                            })),
                        },
                        {
                            label: 'Bamboo',
                            value: 'bamboo',
                            children: [
                                {
                                    label: 'Little',
                                    value: 'little',
                                    children: [
                                        {
                                            label: 'Toy Fish',
                                            value: 'fish',
                                            disabled: true,
                                            disableCheckbox: true,
                                        },
                                        {
                                            label: 'Toy Cards',
                                            value: 'cards',
                                        },
                                        {
                                            label: 'Toy Bird',
                                            value: 'bird',
                                        },
                                    ],
                                },
                            ],
                        },
                    ]}
                    onChange={(value) => {
                        console.log(value);
                    }}
                />
            </Cell>
        </Row>
    </Grid>
);
