import React, { Component } from 'react';
import {
  mockRadioGroup,
  mockCheckboxGroup,
  mockSelectedRadioItem,
  mockSelectedCheckboxItem,
} from '../../test/mock/FieldGroup';

import { FieldGroup } from '../components/FieldGroup';
import Cell from '../components/Cell';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Paragraph from '../components/Paragraph';

class RadioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: mockSelectedRadioItem,
    };
  }

  handleChange = ({ value }) => {
    this.setState({
      value,
    });
  };

  render() {
    return (
      <FieldGroup
        values={mockRadioGroup}
        selectedValues={this.state.value}
        type="radio"
        onChange={this.handleChange}
      />
    );
  }
}

class CheckboxGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: mockSelectedCheckboxItem,
    };
  }

  handleChange = ({ value }) => {
    this.setState(state => {
      const cloneValues = state.value;
      const indexValue = cloneValues.indexOf(value);
      if (indexValue >= 0) {
        delete cloneValues[indexValue];
      } else {
        cloneValues.push(value);
      }
      return { cloneValues };
    });
  };

  render() {
    return (
      <FieldGroup
        values={mockCheckboxGroup}
        selectedValues={this.state.value}
        type="checkbox"
        onChange={this.handleChange}
      />
    );
  }
}

export default {
  title: 'FieldGroup',
  component: FieldGroup,
};

export const fieldGroupRadio = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph m="1rem 0 1rem 0">
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
        <Paragraph m="1rem 0 1rem 0">
          Create group of input with type checkbox
        </Paragraph>
      </Cell>
      <Cell xs={12}>
        <CheckboxGroup />
      </Cell>
    </Row>
  </Grid>
);
