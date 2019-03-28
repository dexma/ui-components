import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { Sizes } from 'config/foundation';

import Button from 'components/Button';

const getButtons = (
  isActive = false,
  isExpanded = false,
  withIcon = false,
  withText = true,
  withTooltip = false
) => (
  <Fragment>
    {Sizes.map(size => (
      <Button
        size={size}
        text={withText ? 'Button text' : null}
        iconBefore={withIcon ? 'photo-camera' : null}
        tooltip={withTooltip ? 'Some text' : null}
        isActive={isActive}
        isExpanded={isExpanded}
      />
    ))}
  </Fragment>
);

storiesOf('Button', module)
  .addParameters({
    jest: ['Button'],
  })
  .add('with text', () => (
    <div>
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
    </div>
  ))
  .add('with icon', () => (
    <div>
      {getButtons(false, false, true, false, false, 'Buttons icons:')}
      {getButtons(true, false, true, false, false, 'Buttons icons activated:')}
    </div>
  ))
  .add('with text and icon', () => (
    <div>
      {getButtons(false, false, true, true, false, 'Buttons with icons:')}
      {getButtons(true, false, true, true, false, 'Buttons icons activated:')}
    </div>
  ));
