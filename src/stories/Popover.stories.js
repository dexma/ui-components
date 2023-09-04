import React, { useState } from 'react';
import Grid from '../components/Grid';
import Row from '../components/Row';
import Cell from '../components/Cell';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Popover from '../components/Popover';

export default {
  title: 'Popover',
  component: Popover,
  argTypes: {
    theme: {
      control: {
        disable: true,
      },
    },
  },
};

export const popover = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          A simple text popup tip, wrapping ant design tooltip. For further
          details and documentation visit Ant Design site. Remember that the
          Popover needs to wrap further children in order to operate.
        </Paragraph>
      </Cell>
      <Cell>
        <Popover title="Popover" trigger="click">
          <Button text="Click me"></Button>
        </Popover>
        <Popover
          title="Popover"
          content={
            <Paragraph margin="1rem 0 1rem 0">
              A popover content may be a simple text or a more complex
              component.
            </Paragraph>
          }
        >
          <Button text="Test" iconBefore="vader"></Button>
        </Popover>
        <Popover
          position="top"
          content={
            <Paragraph margin="1rem 0 1rem 0">
              A popover may not have a title, but only content to be displayed.
            </Paragraph>
          }
        >
          <Button
            text="Test top"
            iconBefore="vader"
            variant="secondary"
          ></Button>
        </Popover>
        <Popover title="Popover right" placement="right">
          <Button iconBefore="help" isCircle></Button>
        </Popover>
      </Cell>
    </Row>
  </Grid>
);

export const popoverClickHover = () => {
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  const hide = () => {
    setClicked(false);
    setHovered(false);
  };

  const handleHoverChange = open => {
    setHovered(open);
    setClicked(false);
  };

  const handleClickChange = open => {
    setHovered(false);
    setClicked(open);
  };

  const hoverContent = <div>This is hover content.</div>;
  const clickContent = <div>This is click content.</div>;
  return (
    <Popover
      style={{ width: 500 }}
      content={hoverContent}
      title="Hover title"
      trigger="hover"
      open={hovered}
      onOpenChange={handleHoverChange}
    >
      <Popover
        content={
          <div>
            {clickContent}
            <button onClick={hide}>Close</button>
          </div>
        }
        title="Click title"
        trigger="click"
        open={clicked}
        onOpenChange={handleClickChange}
      >
        <Button>Hover and click</Button>
      </Popover>
    </Popover>
  );
};

export const playground = args => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin="1rem 0 1rem 0">
          Use the Controls on the section below to add your own props to this
          Popover.
        </Paragraph>
      </Cell>
      <Cell>
        <Popover {...args}>
          <span>Test</span>
        </Popover>
      </Cell>
    </Row>
  </Grid>
);
