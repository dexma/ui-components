import React from 'react';
import { Button, ButtonGroup, Cell, Grid, Row, Paragraph, ButtonProps } from '@components';

export default {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use different button variant to build hierarchy in the application layout</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Button text='Primary' />
                <Button text='Secondary' variant='secondary' />
                <Button text='Outline' variant='outline' />
                <Button text='Destructive' variant='destructive' />
                <Button text='Link' variant='link' />
                <Button text='Primary Disabled' isDisabled />
                <Button text='Secondary Disabled' variant='secondary' isDisabled />
                <Button text='Outline Disabled' variant='outline' isDisabled />
                <Button text='Destructive Disabled' variant='destructive' isDisabled />
                <Button text='Link Disabled' variant='link' isDisabled />
            </Cell>
        </Row>
    </Grid>
);

export const Sizes = () => (
    <Grid fluid>
        <Row style={{ marginBottom: '10px' }}>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>We have 4 different sizes for our buttons</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Button size='small' text='Small' />
                <Button size='medium' text='Medium' />
                <Button size='large' text='Large' />
                <Button size='xlarge' text='XLarge' />
            </Cell>
        </Row>
        <Row>
            <Cell xs={6}>
                <Button isExpanded text='Expanded' />
            </Cell>
            <Cell xs={6}>
                <Button isExpanded text='Expanded' />
            </Cell>
        </Row>
    </Grid>
);

export const Icons = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>We can add icon before and after by setting the iconBefore or iconAfter property and isCircle to set a circle button</Paragraph>
            </Cell>
            <Cell xs={12} style={{ marginBottom: '10px' }}>
                <Button text='Primary' iconBefore='add' />
                <Button text='Secondary' variant='secondary' iconBefore='image' />
                <Button text='Outline' variant='outline' iconAfter='gas' />
                <Button text='Destructive' variant='destructive' iconBefore='delete' />
                <Button text='Link' variant='link' iconBefore='world' />
            </Cell>
            <Cell xs={12}>
                <Button iconBefore='add' isCircle />
                <Button variant='secondary' iconBefore='image' isCircle />
                <Button variant='outline' iconBefore='gas' isCircle />
                <Button variant='destructive' iconBefore='delete' isCircle />
                <Button variant='link' iconBefore='world' isCircle />
                <Button iconAfter='circle_add' variant='icon' isCircle />
                <Button iconAfter='vader' variant='icon-secondary' isCircle />
                <Button iconAfter='search' variant='icon-outline' isCircle />
                <Button iconAfter='star' iconColor='amber' variant='icon-secondary' isCircle size='large' />
            </Cell>
        </Row>
    </Grid>
);

export const Loading = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>A loading indicator can be added to a button by setting the isLoading property on the Button</Paragraph>
            </Cell>
            <Cell xs={12} style={{ marginBottom: '10px' }}>
                <Button text='Primary' iconBefore='add' isLoading />
                <Button text='Secondary' variant='secondary' iconBefore='image' isLoading />
                <Button text='Outline' variant='outline' iconAfter='gas' isLoading />
                <Button text='Destructive' variant='destructive' iconBefore='delete' isLoading />
                <Button text='Link' variant='link' iconBefore='world' isLoading />
            </Cell>
            <Cell xs={12} style={{ marginBottom: '10px' }}>
                <Button iconBefore='add' isCircle isLoading />
                <Button variant='secondary' iconBefore='image' isCircle isLoading />
                <Button variant='outline' iconBefore='gas' isCircle isLoading />
                <Button variant='destructive' iconBefore='delete' isCircle isLoading />
                <Button variant='link' iconBefore='world' isCircle isLoading />
            </Cell>
        </Row>
    </Grid>
);

export const Group = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>A group of buttons you can customize as you want</Paragraph>
            </Cell>
            <Cell xs={12}>
                <ButtonGroup>
                    <Button text='Button 1' />
                    <Button text='Button 2' variant='secondary' />
                    <Button text='Button 3' variant='secondary' />
                    <Button text='Button 4' variant='secondary' />
                    <Button text='Button 5' variant='secondary' />
                    <Button text='Button 6' variant='secondary' />
                </ButtonGroup>
            </Cell>
        </Row>
    </Grid>
);

export const WithTooltips = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>A group of buttons you can customize as you want</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Button tooltip='Button 1' text='Button 1' />
                <Button tooltip='Button 2' text='Button 2' variant='secondary' />
                <Button tooltip='Primary' iconBefore='add' />
            </Cell>
        </Row>
    </Grid>
);

export const Playground = (args: ButtonProps) => (
    <Grid fluid>
        <Row style={{ marginBottom: '10px' }}>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Button.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Button {...args} />
            </Cell>
        </Row>
    </Grid>
);
