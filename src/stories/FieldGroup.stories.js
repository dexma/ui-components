import React, { useState } from 'react';
import {
  mockRadioGroup,
  mockCheckboxGroup,
  mockSelectedRadioItem,
  mockSelectedCheckboxItem,
} from '../../test/mock/FieldGroup';

import FieldGroup from '../components/FieldGroup';
import Cell from '../components/Cell';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';

export default {
  title: 'FieldGroup',
  component: FieldGroup,
};

const RadioGroup = props => {
  const [selectedValues, setSelectedValue] = useState(mockSelectedRadioItem);
  const handleChange = ({ value }) => {
    setSelectedValue(value);
  };
  return (
    <FieldGroup
      values={mockRadioGroup}
      selectedValues={selectedValues}
      type="radio"
      onChange={handleChange}
      {...props}
    />
  );
};

const CheckboxGroup = props => {
  const [selectedValues, setSelectedValue] = useState(mockSelectedCheckboxItem);
  const handleChange = ({ value }) => {
    const cloneValues = selectedValues;
    const indexValue = cloneValues.indexOf(value);
    if (indexValue >= 0) {
      delete cloneValues[indexValue];
    } else {
      cloneValues.push(value);
    }
    setSelectedValue([...cloneValues]);
  };
  return (
    <FieldGroup
      values={mockCheckboxGroup}
      selectedValues={selectedValues}
      type="checkbox"
      onChange={handleChange}
      {...props}
    />
  );
};

export const fieldGroupRadio = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Create group of input with type radio
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <RadioGroup />
      </Cell>
    </Row>
  </Grid>
);

export const fieldGroupCheckbox = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Create group of input with type checkbox and vertically
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <CheckboxGroup vertical />
      </Cell>
    </Row>
  </Grid>
);
