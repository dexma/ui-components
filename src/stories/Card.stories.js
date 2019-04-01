import React from 'react';
import { storiesOf } from '@storybook/react';

import Card from 'components/Card';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';

storiesOf('Card', module)
  .addParameters({
    jest: ['Card'],
  })
  .add('with text', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic cards with text:" line />
      </Cell>
      <Cell size="auto" medium={2}>
        <Card icon="advancedanalytics" title="Test card" isActive />
      </Cell>
      <Cell size="auto" medium={2}>
        <Card icon="advancedanalytics" title="Test card" />
      </Cell>
      <Cell size="auto" medium={2}>
        <Card icon="advancedanalytics" title="Test card" />
      </Cell>
      <Cell size="auto" medium={2}>
        <Card icon="advancedanalytics" title="Test card" />
      </Cell>
      <Cell size="auto" medium={2}>
        <Card icon="advancedanalytics" title="Test card" />
      </Cell>
    </Grid>
  ))
  .add('no text', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic cards with not text activated:" line />
      </Cell>
      <Cell size="auto" medium={2}>
        <Card icon="advancedanalytics" isActive />
      </Cell>
      <Cell size="auto" medium={2}>
        <Card icon="advancedanalytics" />
      </Cell>
      <Cell size="auto" medium={2}>
        <Card icon="advancedanalytics" />
      </Cell>
      <Cell size="auto" medium={2}>
        <Card icon="advancedanalytics" />
      </Cell>
      <Cell size="auto" medium={2}>
        <Card icon="advancedanalytics" />
      </Cell>
    </Grid>
  ));
