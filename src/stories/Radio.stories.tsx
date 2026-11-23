import React, { useState } from 'react';
import type { RadioChangeEvent } from 'antd';

import { Radio, RadioGroup, Grid, Row, Cell, Paragraph, RadioProps } from '@components';

export default {
    title: 'Radio',
    component: Radio,
    tags: ['autodocs'],
};

const RadioGroupBasic = ({ vertical = false }: { vertical?: boolean }) => {
    const [value, setValue] = useState('first');
    const handleChange = (event: RadioChangeEvent) => {
        setValue(event.target.value);
    };
    return (
        <RadioGroup value={value} onChange={handleChange} style={vertical ? { display: 'flex', flexDirection: 'column', gap: '8px' } : undefined}>
            <Radio value='first'>First option</Radio>
            <Radio value='second'>Second option</Radio>
            <Radio value='third' disabled>
                Third option disabled
            </Radio>
        </RadioGroup>
    );
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Radio buttons are used for a list of options where the user must select exactly one option. Group them with RadioGroup to manage the selected value.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <Radio>Radio</Radio>
                <br />
                <Radio checked>Radio checked</Radio>
                <br />
                <Radio disabled>Radio disabled</Radio>
                <br />
                <Radio disabled checked>
                    Radio checked disabled
                </Radio>
            </Cell>
        </Row>
    </Grid>
);

export const Group = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Horizontal group</Paragraph>
                <RadioGroupBasic />
            </Cell>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>Vertical group</Paragraph>
                <RadioGroupBasic vertical />
            </Cell>
        </Row>
    </Grid>
);

export const Playground = (args: RadioProps) => (
    <Grid fluid>
        <Row style={{ marginBottom: '10px' }}>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Radio.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Radio {...args}>Radio</Radio>
            </Cell>
        </Row>
    </Grid>
);
