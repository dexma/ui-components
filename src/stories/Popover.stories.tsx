import { useState } from 'react';
import { type JSX } from 'react/jsx-runtime';

import { Grid, Row, Cell, Button, Paragraph, Popover } from '@components';

export default {
    title: 'Popover',
    component: Popover,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    A simple text popup tip, wrapping ant design tooltip. For further details and documentation visit Ant Design site. Remember that the Popover needs to wrap
                    further children in order to operate.
                </Paragraph>
            </Cell>
            <Cell>
                <Popover title='Popover' trigger='click'>
                    <Button text='Click me' aria-label='Click to open popover' />
                </Popover>
                <Popover title='Popover' content={<Paragraph margin='1rem 0 1rem 0'>A popover content may be a simple text or a more complex component.</Paragraph>}>
                    <Button text='Test' iconBefore='vader' aria-label='Hover it to open popover' />
                </Popover>
                <Popover placement='top' content={<Paragraph margin='1rem 0 1rem 0'>A popover may not have a title, but only content to be displayed.</Paragraph>}>
                    <Button text='Test top' iconBefore='vader' variant='secondary' aria-label='Hover it to open popover on the top' />
                </Popover>
                <Popover title='Popover right' placement='right'>
                    <Button iconBefore='help' isCircle aria-label='Hover it to open popover on the right' />
                </Popover>
            </Cell>
        </Row>
    </Grid>
);

export const PopoverClickHover = () => {
    const [clicked, setClicked] = useState(false);
    const [hovered, setHovered] = useState(false);

    const hide = () => {
        setClicked(false);
        setHovered(false);
    };

    const handleHoverChange = (open: boolean) => {
        setHovered(open);
        setClicked(false);
    };

    const handleClickChange = (open: boolean) => {
        setHovered(false);
        setClicked(open);
    };

    const hoverContent = <div>This is hover content.</div>;
    const clickContent = <div>This is click content.</div>;
    return (
        <Popover style={{ width: 500 }} content={hoverContent} title='Hover title' trigger='hover' open={hovered} onOpenChange={handleHoverChange}>
            <Popover
                content={
                    <div>
                        {clickContent}
                        <button type='button' onClick={hide}>
                            Close
                        </button>
                    </div>
                }
                title='Click title'
                trigger='click'
                open={clicked}
                onOpenChange={handleClickChange}
            >
                <Button variant='primary' aria-label='Click or hover it to open popover'>
                    Hover and click
                </Button>
            </Popover>
        </Popover>
    );
};

export const Playground = (args: JSX.IntrinsicAttributes) => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Popover.</Paragraph>
            </Cell>
            <Cell>
                <Popover {...args}>
                    <span>Test</span>
                </Popover>
            </Cell>
        </Row>
    </Grid>
);
