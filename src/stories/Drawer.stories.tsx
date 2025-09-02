import { Button, Cell, Drawer, DrawerProps, Grid, Paragraph, Row } from '@components';
import { useState } from 'react';

export default {
    title: 'Drawer',
    component: Drawer,
    tags: ['autodocs'],
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic = (args: DrawerProps) => {
    const [open, setOpen] = useState(false);
    return (
        <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>Drawer component to have a side panel. Component is a 1:1 port from AntD Component.</Paragraph>
                </Cell>
                <Cell xs={12} style={{ height: '50px' }}>
                    <Button
                        onClick={() => {
                            setOpen(!open);
                        }}
                        kind='button'
                        text='Try me'
                    />
                    <Drawer
                        {...args}
                        open={open}
                        title='Basic Drawer'
                        onClose={() => {
                            setOpen(false);
                        }}
                    >
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Drawer>
                </Cell>
            </Row>
        </Grid>
    );
};
