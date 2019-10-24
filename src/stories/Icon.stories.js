import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import icon from 'config/icon';

import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Icon from 'components/Icon';

const getIcons = (color, size) => {
  return icon.map(iconItem => (
    <Cell medium={3}>
      <Icon name={iconItem.name} size={size} color={color} />
      {iconItem.name}
    </Cell>
  ));
};

storiesOf('Icon', module)
  .addParameters({
    jest: ['Icon'],
  })
  .add('basic', () => (
    <Fragment>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Icons" line={false} type="h4" />
          <Paragraph>
            Buttons communicate and trigger actions a user can take in the
            application. A button should represent an action a user can take,
            like submitting a form, cancelling a process, or creating a new
            object. When the user clicks a button, the associated action should
            be triggered or performed immediately.
          </Paragraph>
        </Cell>
        <Grid type="horizontal">
          <Cell medium={10} mediumOffset={1}>
            <Grid type="horizontal">{getIcons('gray500', 'large')}</Grid>
          </Cell>
        </Grid>
      </Grid>
    </Fragment>
  ));
