import { Grid, Row, Cell, Paragraph, Alert, AlertProps } from '@components';

export default {
    title: 'Alert',
    component: Alert,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Alerts visually highlight important content for the user.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>You can choose between basic, outline, success, info and warning for different icon an color options.</Paragraph>
                <Alert message='Basic' type='basic' showIcon />
                <br />
                <Alert message='Outline' type='outline' />
                <br />
                <Alert message='Success Tips' type='success' showIcon />
                <br />
                <Alert message='Informational Notes' type='info' showIcon />
                <br />
                <Alert message='Warning' type='warning' showIcon />
                <br />
                <Alert message='Error' type='error' showIcon />
            </Cell>
        </Row>
    </Grid>
);

export const Description = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>You can add description to the body of the alert.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Alert message='Basic alert' description='Detailed description and advice about successful copywriting.' type='basic' showIcon />
            </Cell>
        </Row>
    </Grid>
);

export const NoIcon = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A option without the icon on the title alert. The showIcon prop that allows to show or not the icon default to false.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Alert message='Success Tips' description='Detailed description and advice about successful copywriting.' type='success' />
                <br />
                <Alert message='Informational Notes' type='info' />
                <br />
                <Alert message='Warning' description='This is a warning notice about copywriting.' type='warning' />
                <br />
                <Alert message='Error' description='This is an error message about copywriting.' type='error' />
            </Cell>
        </Row>
    </Grid>
);

export const CustomAlert = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Alert component used when you need customs messages. You can pass html to the message prop to allow for it.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Alert
                    type='info'
                    message={
                        <span
                            style={{
                                fontWeight: '400',
                                fontSize: '14px',
                            }}
                        >
                            You have <strong>2</strong> Optimise datapoints left in your free trial.{' '}
                            <span
                                style={{
                                    color: '#0054a1',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                }}
                            >
                                How are these calculated?
                            </span>
                        </span>
                    }
                    showIcon
                />
                <br />
                <Alert
                    type='error'
                    message={
                        <span
                            style={{
                                fontWeight: '400',
                                fontSize: '14px',
                            }}
                        >
                            You have <strong>2</strong> Optimise datapoints left in your free trial.{' '}
                            <span
                                style={{
                                    color: '#ffffff',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                }}
                            >
                                How are these calculated?
                            </span>
                        </span>
                    }
                    showIcon
                />
                <br />
                <Alert
                    type='success'
                    message={
                        <span
                            style={{
                                fontWeight: '400',
                                fontSize: '14px',
                            }}
                        >
                            You have <strong>2</strong> Optimise datapoints left in your free trial.{' '}
                            <span
                                style={{
                                    color: '#ffffff',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                }}
                            >
                                How are these calculated?
                            </span>
                        </span>
                    }
                    showIcon
                />
                <br />
            </Cell>
        </Row>
    </Grid>
);

export const Playground = (args: AlertProps) => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Alert.</Paragraph>
                <Alert {...args} />
            </Cell>
        </Row>
    </Grid>
);
