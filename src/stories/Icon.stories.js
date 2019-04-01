import React from 'react';
import { storiesOf } from '@storybook/react';
import config from 'config/icon';

import Icon from 'components/Icon';
import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';

storiesOf('Icon', module)
  .addParameters({
    jest: ['Icon'],
  })
  .add('basic', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic icons:" line />
      </Cell>
      {config.glyphs.map(({ css }) => (
        <Cell small={2} medium={1}>
          <Icon size="large" name={css} />
        </Cell>
      ))}
    </Grid>
  ))
  .add('with info', () => (
    <Grid type="horizontal" horizontalPadding verticalPadding>
      <Cell size="full">
        <Title text="Basic icon with info:" line />
      </Cell>
      {config.glyphs.map(({ css, code }) => (
        <Cell small={4} medium="shrink">
          <Icon size="large" name={css} />
          <p>{css}</p>
          <p>{code}</p>
        </Cell>
      ))}
    </Grid>
  ));
