import React from 'react';
import { storiesOf } from '@storybook/react';

import Title from 'components/Title';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Theme from 'components/Theme';

storiesOf('Title', module)
  .addParameters({
    jest: ['Title'],
  })
  .add('basic', () => (
    <Theme>
      <Grid type="vertical" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Basic Titles:" />
        </Cell>
        <Cell size="full">
          <Title type="h1" text="Some Title" />
          <br />
          <Title type="h2" text="Some Title" />
          <br />
          <Title type="h3" text="Some Title" />
          <br />
          <Title type="h4" text="Some Title" />
          <br />
          <Title type="h5" text="Some Title" />
          <br />
          <Title type="h6" text="Some Title" />
        </Cell>
      </Grid>
    </Theme>
  ));
