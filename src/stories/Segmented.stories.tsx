import { Cell, Grid, Paragraph, Row, Segmented, SegmentedProps } from '@components';
import { useState } from 'react';

export default {
    title: 'Segmented',
    component: Segmented,
    tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic = (args: SegmentedProps) => {
    const [value, setValue] = useState<string>('all');
    return (
        <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>
                        Segmented control to switch between a set of options. Component is a 1:1 port from AntD Component.
                    </Paragraph>
                </Cell>
                <Cell xs={12}>
                    <Segmented
                        {...args}
                        block
                        options={[
                            { label: 'All', value: 'all' },
                            { label: 'Critical', value: 'critical' },
                            { label: 'Warning', value: 'warning' },
                        ]}
                        value={value}
                        onChange={(next) => {
                            setValue(next as string);
                        }}
                    />
                </Cell>
            </Row>
        </Grid>
    );
};
