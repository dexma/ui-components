import React from 'react';
import styled from 'styled-components';

import { Heading, Grid, Row, Cell, Paragraph, Divider, Button } from '@components';

export default {
    title: 'Heading',
    component: Heading,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>All HTML headings, h1 through h6, are available.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Heading type='h1' text='Heading' />
                <Heading type='h2' text='Heading' />
                <Heading type='h3' text='Heading' />
                <Heading type='h4' text='Heading' />
                <Heading type='h5' text='Heading' />
                <Heading type='h6' text='Heading' />
            </Cell>
        </Row>
    </Grid>
);

const StyledBox = styled.div`
    width: 100%;
    button {
        float: right;
    }
`;

export const Childrens = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>You can customize the heading sending children component.</Paragraph>
            </Cell>
            <StyledBox>
                <Cell xs={12}>
                    <Heading text='Heading'>
                        <Button size='small' iconAfter='add' isCircle />
                    </Heading>
                    <Divider />
                </Cell>
                <br />
                <Cell xs={12}>
                    <Heading text='Heading'>
                        <Button size='small' text='Settings' iconBefore='settings' />
                        <Button size='small' iconAfter='add' isCircle />
                    </Heading>
                    <Divider />
                </Cell>
            </StyledBox>
        </Row>
    </Grid>
);
