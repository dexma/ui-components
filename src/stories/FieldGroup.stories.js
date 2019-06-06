import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import {
  mockRadioGroup,
  mockCheckboxGroup,
  mockSelectedRadioItem,
  mockSelectedCheckboxItem,
  mockCheckboxGroupHtml,
} from 'test/mock/FieldGroup';

import FieldGroup from 'components/FieldGroup';
import Cell from 'components/Cell';
import Title from 'components/Title';
import Grid from 'components/Grid';

import Theme from 'components/Theme';

const eventsFromObject = actions({
  onFieldClick: 'onFieldClick',
});

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: mockSelectedRadioItem,
    };
  }

  handleChange = ({ value }) => {
    this.setState({
      value: value,
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

storiesOf('FieldGroup', module)
  .addParameters({
    jest: ['FieldGroup'],
  })
  .add('horizontal', () => (
    <Theme>
      <Grid type="vertical" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="FieldGroup type radio" line />
        </Cell>
        <Cell>
          <Test />
        </Cell>
        <Cell size="full">
          <Title text="FieldGroup type checkbox" line />
        </Cell>
        <Cell>
          <FieldGroup
            values={mockCheckboxGroup}
            selectedValues={mockSelectedCheckboxItem}
            type="checkbox"
            {...eventsFromObject}
            size="large"
          />
        </Cell>

        <Cell size="full">
          <Title text="FieldGroup with html" line />
        </Cell>
        <Cell>
          <FieldGroup
            values={mockCheckboxGroupHtml}
            selectedValues={mockSelectedCheckboxItem}
            type="checkbox"
            {...eventsFromObject}
            size="large"
          />
        </Cell>
      </Grid>
    </Theme>
  ))
  .add('vertical', () => (
    <Theme>
      <Grid type="vertical" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="FieldGroup type radio vertical" line />
        </Cell>
        <Cell>
          <FieldGroup
            values={mockRadioGroup}
            selectedValues={mockSelectedRadioItem}
            type="radio"
            {...eventsFromObject}
            vertical
          />
        </Cell>
        <Cell size="full">
          <Title text="FieldGroup type checkbox vertical" line />
        </Cell>
        <Cell>
          <FieldGroup
            values={mockCheckboxGroup}
            selectedValues={mockSelectedCheckboxItem}
            type="checkbox"
            {...eventsFromObject}
            size="large"
            vertical
          />
        </Cell>
      </Grid>
    </Theme>
  ));
