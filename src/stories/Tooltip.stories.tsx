import { Grid, Row, Cell, Paragraph, Tooltip, Button, TooltipPropsExtended } from '@components';
import { useState } from 'react';

export default {
    title: 'Tooltip',
    component: Tooltip,
    tags: ['autodocs'],
};



const TooltipComponent = (props: any) => {
    const [open, setOpen] = useState(false);
    const {tooltipTitle, buttonText, buttonIcon, position} = props;

    const handleKeyDown = (e: any) => {
        if (e.key === "Enter") {
            setOpen(true);
            setTimeout(() => setOpen(false), 2000); // Hide after 2 seconds
        }
    };
    return (
        <Tooltip title={tooltipTitle} open={open} position={position}>
            <Button text={buttonText} iconBefore={buttonIcon} onKeyDown={handleKeyDown} />
        </Tooltip>
    )
}

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    A simple text popup tip, wrapping ant design tooltip. For further details and documentation visit Ant Design site. Remember that the Tooltip needs to wrap
                    further children in order to operate.
                </Paragraph>
            </Cell>
            <Cell>                
                <Tooltip title='Tooltip' trigger='click'>
                    <Button text='Click me' />
                </Tooltip>
                <TooltipComponent tooltipTitle="Tooltip" buttonText="Test" buttonIcon="vader" />
                <TooltipComponent tooltipTitle="Tooltip top" buttonText="Test top" buttonIcon="vader" />
                <TooltipComponent tooltipTitle="Tooltip right" buttonIcon="help" position='right' />
            </Cell>
        </Row>
    </Grid>
);

export const Playground = (args: TooltipPropsExtended) => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Tooltip.</Paragraph>
            </Cell>
            <Cell>
                <Tooltip {...args}>
                    <span>Test</span>
                </Tooltip>
            </Cell>
        </Row>
    </Grid>
);
