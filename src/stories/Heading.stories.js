import React from 'react';
import { storiesOf } from '@storybook/react';

import Title from 'components/Title';
import Heading from 'components/Heading';
import Grid from 'components/Grid';
import Cell from 'components/Cell';

storiesOf('Heading', module)
  .addParameters({
    jest: ['Heading'],
  })
  .add('basic', () => (
    <Grid type="vertical" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic Headings:" line />
      </Cell>
      <Cell size="full">
        <Heading type="h1" text="Some Heading" line={false} />
        <br />
        <Heading type="h2" text="Some Heading" line={false} />
        <br />
        <Heading type="h3" text="Some Heading" line={false} />
        <br />
        <Heading type="h4" text="Some Heading" line={false} />
        <br />
        <Heading type="h5" text="Some Heading" line={false} />
        <br />
        <Heading type="h6" text="Some Heading" line={false} />
      </Cell>
    </Grid>
  ))
  .add('with line', () => (
    <Grid type="vertical" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic Headings:" line />
      </Cell>
      <Cell size="full">
        <Heading type="h1" text="Some Heading" line />
        <br />
        <Heading type="h2" text="Some Heading" line />
        <br />
        <Heading type="h3" text="Some Heading" line />
        <br />
        <Heading type="h4" text="Some Heading" line />
        <br />
        <Heading type="h5" text="Some Heading" line />
        <br />
        <Heading type="h6" text="Some Heading" line />
      </Cell>
    </Grid>
  ));
