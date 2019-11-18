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
            size="medium"
            text="Primary"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
          <Button
            size="medium"
            text="Loading"
            iconBefore={null}
            tooltip={null}
            isLoading
            isExpanded={false}
            variant="secondary"
          />
          <Button
            size="medium"
            text="Secondary"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="secondary"
          />
          <Button
            size="medium"
            text="Outline"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="outline"
          />
          <Button
            size="medium"
            text="Destructive"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="destructive"
          />
          <Button
            size="medium"
            text="Link"
            iconBefore={null}
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="link"
          />
        </Cell>
        <Cell size="full">
          <Button
            size="medium"
            text="Primary"
            iconBefore="user_edit"
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
          <Button
            size="medium"
            text="Secondary"
            iconBefore="user_edit"
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="secondary"
          />
          <Button
            size="medium"
            text="Secondary"
            iconBefore="user_edit"
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="secondary"
          />
          <Button
            size="medium"
            text="Outline"
            iconBefore="user_edit"
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="outline"
          />
          <Button
            size="medium"
            text="Destructive"
            iconBefore="user_edit"
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="destructive"
          />
          <Button
            size="medium"
            text="Link"
            iconBefore="user_edit"
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
  ))
  .add('with icons', () => (
    <Fragment>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Button iconBefore variants" line={false} type="h4" />
          <Paragraph>Use different icon before</Paragraph>
        </Cell>
        <Cell size="full">
          <Button
            size="small"
            text="Small"
            iconBefore="edit"
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
            iconBefore="edit"
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
            iconBefore="edit"
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
            iconBefore="edit"
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
        </Cell>
      </Grid>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Button iconAfter variants" line={false} type="h4" />
          <Paragraph>Use different icon after</Paragraph>
        </Cell>
        <Cell size="full">
          <Button
            size="small"
            text="Small"
            iconAfter="edit"
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
            iconAfter="edit"
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
            iconAfter="edit"
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
            iconAfter="edit"
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
        </Cell>
      </Grid>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Button no text" line={false} type="h4" />
          <Paragraph>Use without text</Paragraph>
        </Cell>
        <Cell size="full">
          <Button
            size="small"
            iconAfter="edit"
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
        </Cell>
        <Cell size="full">
          <Button
            size="medium"
            iconAfter="edit"
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
        </Cell>
        <Cell size="full">
          <Button
            size="large"
            iconAfter="edit"
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
        </Cell>
        <Cell size="full">
          <Button
            size="xlarge"
            iconAfter="edit"
            tooltip={null}
            isActive={false}
            isExpanded={false}
            variant="primary"
          />
        </Cell>
      </Grid>
      <Grid type="horizontal" horizontalPadding verticalPadding>
        <Cell size="full">
          <Title text="Button circle with icon" line={false} type="h4" />
          <Paragraph>Use without text</Paragraph>
        </Cell>
        <Cell size="full">
          <Button
            size="small"
            iconAfter="edit"
            tooltip="Edit"
            isActive={false}
            isExpanded={false}
            variant="primary"
            isCircle
          />
        </Cell>
        <Cell size="full">
          <Button
            size="medium"
            iconAfter="edit"
            tooltip="Edit"
            isActive={false}
            isExpanded={false}
            variant="primary"
            isCircle
          />
        </Cell>
        <Cell size="full">
          <Button
            size="large"
            iconAfter="edit"
            tooltip="Edit"
            isActive={false}
            isExpanded={false}
            variant="primary"
            isCircle
          />
        </Cell>
        <Cell size="full">
          <Button
            size="xlarge"
            iconAfter="edit"
            tooltip="Edit"
            isActive={false}
            isExpanded={false}
            variant="primary"
            isCircle
          />
        </Cell>
      </Grid>
    </Fragment>
  ));
