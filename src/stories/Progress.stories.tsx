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
                <Progress percent={20} text='20%' color='green' isTransparent />
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
                <Progress percent={40} text='40%' color='blue' marks={twoMark} />
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
                <Progress percent={20} color='red' />
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
