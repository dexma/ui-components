import { useState } from 'react';

import { RadioFieldGroup, CheckboxFieldGroup, Grid, Row, Cell, Paragraph, type FieldGroupItem, FieldGroupVariant, ButtonSize, RadioFieldGroupProps } from '@components';
import { mockRadioGroup, mockRadioCustomGroup, mockCheckboxGroup, mockSelectedRadioItem, mockSelectedCheckboxItem } from '../../tests/mock/FieldGroup';

export default {
    title: 'FieldGroup',
    component: RadioFieldGroup,
    tags: ['autodocs'],
};

const RadioGroup = () => {
    const [selectedValues, setSelectedValue] = useState(mockSelectedRadioItem);
    const handleChange = ({ value }: FieldGroupItem) => {
        setSelectedValue(value);
    };
    return <RadioFieldGroup values={mockRadioGroup} selectedValues={selectedValues} onChange={handleChange} />;
};

const RadioCustomGroup = (props: { size: ButtonSize }) => {
    const [selectedValues, setSelectedValue] = useState(mockSelectedRadioItem);
    const handleChange = ({ value }: FieldGroupItem) => {
        setSelectedValue(value);
    };
    return <RadioFieldGroup variant={FieldGroupVariant.CUSTOM} values={mockRadioCustomGroup} selectedValues={selectedValues} onChange={handleChange} {...props} />;
};

const RadioSplitGroup = (props: Partial<RadioFieldGroupProps>) => {
    const [selectedValues, setSelectedValue] = useState(mockSelectedRadioItem);
    const handleChange = ({ value }: FieldGroupItem) => {
        setSelectedValue(value);
    };
    return <RadioFieldGroup variant={FieldGroupVariant.SPLIT} {...props} values={mockRadioGroup} selectedValues={selectedValues} onChange={handleChange} />;
};

const CheckboxGroup = (props: { horizontal?: boolean; vertical?: boolean }) => {
    const [selectedValues, setSelectedValue] = useState(mockSelectedCheckboxItem);
    const handleChange = ({ value }: FieldGroupItem) => {
        const cloneValues = selectedValues;
        const indexValue = cloneValues.indexOf(value);
        if (indexValue >= 0) {
            delete cloneValues[indexValue];
        } else {
            cloneValues.push(value);
        }
        setSelectedValue([...cloneValues]);
    };
    return <CheckboxFieldGroup values={mockCheckboxGroup} selectedValues={selectedValues} onChange={handleChange} {...props} />;
};

export const FieldJoinedVariantGroupRadio = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Joined variant field group:</Paragraph>
            </Cell>
            <Cell xs={12}>
                <RadioGroup />
            </Cell>
        </Row>
    </Grid>
);

export const FieldCustomVariantGroupRadio = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <RadioCustomGroup size={ButtonSize.LARGE} />
            </Cell>
        </Row>
    </Grid>
);

export const FieldSplitVariantGroupRadio = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12} style={{ marginBottom: '10px' }}>
                <Paragraph margin='1rem 0 1rem 0'>Custom variant field group:</Paragraph>
            </Cell>
            <Cell xs={12} style={{ marginBottom: '10px' }}>
                <RadioSplitGroup />
            </Cell>
        </Row>
    </Grid>
);

export const FieldGroupCheckboxTooltips = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Create group of input with type checkbox and vertically</Paragraph>
            </Cell>
            <Cell xs={12} style={{ marginBottom: '10px' }}>
                <CheckboxGroup />
            </Cell>
            <Cell xs={12}>
                <CheckboxGroup vertical />
            </Cell>
        </Row>
    </Grid>
);
