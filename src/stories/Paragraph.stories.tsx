import React from 'react';
import { Grid, Row, Cell, Paragraph } from '@components';

export default {
    title: 'Paragraph',
    component: Paragraph,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Basic small paragraph: 12px / line-height 16px (0.8571rem / 1.143rem)</Paragraph>
                <Paragraph margin='1rem 0 1rem 0' size='medium'>
                    Size medium paragraph: 14px / line-height 20px (1rem / 1.429rem)
                </Paragraph>
                <Paragraph margin='1rem 0 1rem 0' size='large'>
                    Size large paragraph: 16px / line-height 24px (1.143rem / 1.714rem)
                </Paragraph>
                <Paragraph margin='1rem 0 1rem 0' size='xlarge'>
                    Size xlarge paragraph: 20px / line-height 32px (1.429rem / 1.429rem)
                </Paragraph>
            </Cell>
        </Row>
    </Grid>
);
