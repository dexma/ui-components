import React from 'react';
import { Progress, Grid, Row, Cell, Paragraph, ProgressProps } from '@components';

export default {
    title: 'Progress',
    component: Progress,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A progress bar component communicates to the user the progress of a particular process</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Progress percent={20} text='20%' color='gray' />
                <Progress percent={40} text='40%' color='red' />
                <Progress percent={60} text='60%' color='amber' />
                <Progress percent={80} text='80%' color='green' />
            </Cell>
        </Row>
    </Grid>
);

export const ProgressTransparent = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Display the current progress of an operation flow.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Progress percent={20} text='20%' color='gray' isTransparent />
                <Progress percent={40} text='40%' color='red' isTransparent />
                <Progress percent={60} text='60%' color='amber' isTransparent />
                <Progress percent={80} text='80%' color='green' isTransparent />
            </Cell>
        </Row>
    </Grid>
);

const oneMark = [{ value: 30, color: 'black' }];
const twoMark = [
    { value: 20, color: 'blue' },
    { value: 50, color: 'black' },
];

export const Marks = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Display the current progress of an operation flow.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Progress percent={10} text='10%' color='red' marks={oneMark} />
                <Progress percent={40} text='40%' color='green' marks={twoMark} />
            </Cell>
        </Row>
    </Grid>
);

export const NoText = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Display the current progress without text</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Progress percent={20} color='gray' />
                <Progress percent={40} color='red' />
                <Progress percent={60} color='amber' />
                <Progress percent={80} color='green' />
            </Cell>
        </Row>
    </Grid>
);

export const Playground = (args: ProgressProps) => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Progress.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Progress {...args} />
            </Cell>
        </Row>
    </Grid>
);
