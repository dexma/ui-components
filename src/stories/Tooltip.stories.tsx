import React from 'react';
import { Grid, Row, Cell, Paragraph, Tooltip, Button, TooltipPropsExtended } from '@components';

export default {
    title: 'Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    A simple text popup tip, wrapping ant design tooltip. For further details and documentation visit Ant Design site. Remember that the Tooltip needs to wrap
                    further children in order to operate.
                </Paragraph>
            </Cell>
            <Cell>
                <Tooltip title='Tooltip' trigger='click'>
                    <Button text='Click me' />
                </Tooltip>
                <Tooltip title='Tooltip'>
                    <Button text='Test' iconBefore='vader' />
                </Tooltip>
                <Tooltip title='Tooltip top' position='top'>
                    <Button text='Test top' iconBefore='vader' variant='secondary' />
                </Tooltip>
                <Tooltip title='Tooltip right' position='right'>
                    <Button iconBefore='help' isCircle />
                </Tooltip>
            </Cell>
        </Row>
    </Grid>
);

export const Playground = (args: TooltipPropsExtended) => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Tooltip.</Paragraph>
            </Cell>
            <Cell>
                <Tooltip {...args}>
                    <span>Test</span>
                </Tooltip>
            </Cell>
        </Row>
    </Grid>
);
