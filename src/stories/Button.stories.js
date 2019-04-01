import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Sizes } from 'config/foundation';

import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Button from 'components/Button';
import Title from 'components/Title';

const getButtons = (
  isActive = false,
  isExpanded = false,
  withIcon = false,
  withText = true,
  withTooltip = false,
  title
) => (
  <Fragment>
    <Cell size="full">
      <Title text={title} line />
    </Cell>
    {Sizes.map(size => (
      <Cell medium={2}>
        <Button
          size={size}
          text={withText ? 'Button text' : null}
          iconBefore={withIcon ? 'photo-camera' : null}
          tooltip={withTooltip ? 'Some text' : null}
          isActive={isActive}
          isExpanded={isExpanded}
        />
      </Cell>
    ))}
  </Fragment>
);

storiesOf('Button', module)
  .addParameters({
    jest: ['Button'],
  })
  .add('with text', () => (
    <Grid type="vertical" horizontalPadding verticalPadding>
      {getButtons(false, false, false, true, false, 'Basic buttons:')}
      {getButtons(true, false, false, true, false, 'Basic buttons activated:')}
      {getButtons(false, true, false, true, false, 'Basic buttons expanded:')}
      {getButtons(
        true,
        true,
        false,
        true,
        false,
        'Basic buttons expanded activated:'
      )}
    </Grid>
  ))
  .add('with icon', () => (
    <Grid type="vertical" horizontalPadding verticalPadding>
      {getButtons(false, false, true, false, false, 'Buttons icons:')}
      {getButtons(true, false, true, false, false, 'Buttons icons activated:')}
    </Grid>
  ))
  .add('with text and icon', () => (
    <Grid type="vertical" horizontalPadding verticalPadding>
      {getButtons(false, false, true, true, false, 'Buttons with icons:')}
      {getButtons(true, false, true, true, false, 'Buttons icons activated:')}
    </Grid>
  ))
  .add('with icon and tooltip', () => (
    <Grid type="vertical" horizontalPadding verticalPadding>
      {getButtons(
        false,
        false,
        true,
        false,
        true,
        'Buttons with icons and tooltip:'
      )}
      {getButtons(
        true,
        false,
        true,
        false,
        true,
        'Buttons with icons and tooltip activated:'
      )}
    </Grid>
  ));
