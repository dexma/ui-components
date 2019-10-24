import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Button from 'components/Button';
import ButtonGroup from 'components/ButtonGroup';
import Cell from 'components/Cell';
import Title from 'components/Title';
import Grid from 'components/Grid';

const buttonGroup = [
  'chart_bar',
  'chart_line',
  'chart_pie',
  'chart_table',
  'chart_custom',
  'chart',
];

const getButtonsGroup = (
  title,
  isActive = false,
  isVertical = false,
  withText = false,
  withTooltip = false
) => (
  <Fragment>
    <Cell size="full">
      <Title text={title} line />
    </Cell>
    <Cell medium={6}>
      <ButtonGroup vertical={isVertical}>
        {buttonGroup.map((button, index) => (
          <Button
            key={index}
            size="medium"
            text={withText ? 'Button text' : null}
            iconBefore={button}
            tooltip={withTooltip ? 'Some text' : null}
            isActive={isActive}
          />
        ))}
      </ButtonGroup>
    </Cell>
  </Fragment>
);

storiesOf('ButtonGroup', module)
  .addParameters({
    jest: ['ButtonGroup'],
  })
  .add('horizontal', () => (
    <Grid type="vertical" horizontalPadding verticalPadding>
      {getButtonsGroup('Basic button group', false, false)}
      {getButtonsGroup('Basic button group activated', true, false)}
    </Grid>
  ))
  .add('vertical', () => (
    <Grid type="vertical" horizontalPadding verticalPadding>
      {getButtonsGroup('Basic button group', false, true)}
      {getButtonsGroup('Basic button group activated', true, true)}
    </Grid>
  ));
