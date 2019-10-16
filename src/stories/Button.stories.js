import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Grid from 'components/Grid';
import Cell from 'components/Cell';
import Title from 'components/Title';
import Paragraph from 'components/Paragraph';
import Button from 'components/Button';

storiesOf('Button', module)
  .addParameters({
    jest: ['Button'],
  })
  .add('with text', () => (
    <Fragment>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Button" line={false} type="h4" />
          <Paragraph>
            Buttons communicate and trigger actions a user can take in the
            application. A button should represent an action a user can take,
            like submitting a form, cancelling a process, or creating a new
            object. When the user clicks a button, the associated action should
            be triggered or performed immediately.
          </Paragraph>
        </Cell>
        <Cell size="full">
          <Title text="Button variants" line={false} type="h4" />
          <Paragraph>
            Use different button types to build hierarchy in the application
            layout.
          </Paragraph>
        </Cell>
        <Cell size="full">
          <Button
            size="small"
            text="Primary"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
          <Button
            size="small"
            text="Secondary"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="secondary"
          />
          <Button
            size="small"
            text="Outline"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="outline"
          />
          <Button
            size="small"
            text="Destructive"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="destructive"
          />
          <Button
            size="small"
            text="Link"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="link"
          />
        </Cell>
      </Grid>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Button variants" line={false} type="h4" />
          <Paragraph>
            Use different button types to build hierarchy in the application
            layout.
          </Paragraph>
        </Cell>
        <Cell size="full">
          <Button
            size="small"
            text="Small"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
        </Cell>
        <Cell size="full">
          <Button
            size="medium"
            text="Medium"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
        </Cell>
        <Cell size="full">
          <Button
            size="large"
            text="Large"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
        </Cell>
        <Cell size="full">
          <Button
            size="xlarge"
            text="X Large"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
        </Cell>
      </Grid>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Button variants" line={false} type="h4" />
          <Paragraph>
            Use different button types to build hierarchy in the application
            layout.
          </Paragraph>
        </Cell>
        <Cell size="full">
          <Button
            size="small"
            text="Small"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
        </Cell>
        <Cell size="full">
          <Button
            size="medium"
            text="Medium"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
        </Cell>
        <Cell size="full">
          <Button
            size="large"
            text="Large"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
        </Cell>
        <Cell size="full">
          <Button
            size="xlarge"
            text="X Large"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
        </Cell>
      </Grid>
    </Fragment>
  ));
