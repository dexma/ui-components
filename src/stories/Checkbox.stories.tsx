import React, { useState } from 'react';

import { Checkbox, Grid, Row, Cell, Paragraph, CheckboxProps } from '@components';

export default {
    title: 'Checkbox',
    component: Checkbox,
    tags: ['autodocs'],
};

const CheckboxBasic = ({ text }: { text?: string }) => {
    const [checked, setChecked] = useState(false);
    const handleChange = () => {
        setChecked(!checked);
    };
    const handleBlur = () => {
        console.log('blur');
    }
    return (
        <Checkbox checked={checked} onChange={handleChange} onBlur={handleBlur}>
            {text && text}
        </Checkbox>
    );
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    Checkboxes are used for a list of options where the user may select multiple options, including all or none. They can be grouped vertically or horizontally.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <CheckboxBasic />
                <br />
                <CheckboxBasic text='Basic checkbox' />
                <br />
                <Checkbox disabled>Checkbox disabled</Checkbox>
                <br />
                <Checkbox disabled checked>
                    Checkbox checked disabled
                </Checkbox>
                <br />
            </Cell>
        </Row>
    </Grid>
);

export const Playground = (args: CheckboxProps) => (
    <Grid fluid>
        <Row style={{ marginBottom: '10px' }}>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Checkbox.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Checkbox {...args}>Checkbox</Checkbox>
            </Cell>
        </Row>
    </Grid>
);
