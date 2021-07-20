import React, { useState } from 'react';
import {
  mockRadioGroup,
  mockRadioCustomGroup,
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

const RadioCustomGroup = props => {
  const [selectedValues, setSelectedValue] = useState(mockSelectedRadioItem);
  const handleChange = ({ value }) => {
    setSelectedValue(value);
  };
  return (
    <>
      <FieldGroup
        variant="custom"
        values={mockRadioCustomGroup}
        selectedValues={selectedValues}
        type="radio"
        onChange={handleChange}
        {...props}
      />
    </>
  );
};

const RadioSplitGroup = props => {
  const [selectedValues, setSelectedValue] = useState(mockSelectedRadioItem);
  const handleChange = ({ value }) => {
    setSelectedValue(value);
  };
  return (
    <>
      <FieldGroup
        variant="split"
        values={mockRadioGroup}
        selectedValues={selectedValues}
        type="radio"
        onChange={handleChange}
        {...props}
      />
    </>
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

export const fieldJoinedVariantGroupRadio = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Joined variant field group:
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <RadioGroup />
      </Cell>
    </Row>
  </Grid>
);

export const fieldCustomVariantGroupRadio = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12} style={{ marginBottom: '10px' }}>
        <Paragraph margin="1rem 0 1rem 0">
          Custom variant field group:
        </Paragraph>
      </Cell>
      <Cell xs={12} style={{ marginBottom: '10px' }}>
        <RadioCustomGroup size="small" />
      </Cell>
      <Cell xs={12} style={{ marginBottom: '10px' }}>
        <RadioCustomGroup size="medium" />
      </Cell>
      <Cell xs={12} style={{ marginBottom: '10px' }}>
        <RadioCustomGroup size="large" />
      </Cell>
      <Cell xs={12}>
        <RadioCustomGroup size="xlarge" />
      </Cell>
    </Row>
  </Grid>
);

export const fieldSplitVariantGroupRadio = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12} style={{ marginBottom: '10px' }}>
        <Paragraph margin="1rem 0 1rem 0">
          Custom variant field group:
        </Paragraph>
      </Cell>
      <Cell xs={12} style={{ marginBottom: '10px' }}>
        <RadioSplitGroup />
      </Cell>
    </Row>
  </Grid>
);

export const fieldGroupCheckboxVertical = () => (
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
