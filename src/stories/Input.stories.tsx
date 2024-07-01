import React from 'react';
import { Input, Grid, Row, Cell, Paragraph } from '@components';

export default {
    title: 'Input',
    component: Input,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic input text</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Input type='text' placeholder='Input text' />
            </Cell>
        </Row>
    </Grid>
);

export const Search = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Input search in two cell</Paragraph>
            </Cell>
            <Cell xs={6}>
                <Input type='text' placeholder='Search text' icon='search' />
            </Cell>
            <Cell xs={6}>
                <Input type='text' placeholder='Insert date' icon='calendar_range' />
            </Cell>
        </Row>
    </Grid>
);

export const Loading = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Input search with loading prop</Paragraph>
            </Cell>
            <Cell xs={8} xsOffset={2}>
                <Input type='text' placeholder='Search text' icon='search' isLoading />
            </Cell>
        </Row>
    </Grid>
);

export const Disabled = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Disabled input, both placeholders and values</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Input type='text' value='Value Text' disabled />
            </Cell>

            <Cell xs={12}>
                <Input type='text' placeholder='Placeholder text' disabled />
            </Cell>
        </Row>
    </Grid>
);
