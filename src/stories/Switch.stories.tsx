import { Grid, Row, Cell, Paragraph, Switch, SwitchProps } from '@components';

export default {
    title: 'Switch',
    component: Switch,
    tags: ['autodocs'],
};

export const DefaultSwitch = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A simple switch that changes value on click.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Switch defaultChecked ariaLabel='On/Off' />
            </Cell>
        </Row>
    </Grid>
);

export const Sizes = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Switch size='small' ariaLabel='On/Off' />
            </Cell>
            <Cell xs={12}>
                <Switch />
            </Cell>
        </Row>
    </Grid>
);

export const Disabled = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Switch defaultChecked={false} disabled ariaLabel='Yes/No' />
            </Cell>
            <Cell xs={12}>
                <Switch defaultChecked disabled ariaLabel='Yes/No' />
            </Cell>
        </Row>
    </Grid>
);

export const Playground = (args: SwitchProps) => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Switch.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Switch {...args} />
            </Cell>
        </Row>
    </Grid>
);
