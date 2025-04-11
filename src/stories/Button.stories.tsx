import { Button, ButtonGroup, Cell, Grid, Row, Paragraph, ButtonProps } from '@components';

export default {
    title: 'Button',
    component: Button,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>Use different button variant to build hierarchy in the application layout</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Button text='Primary' />
                <Button text='Secondary' variant='secondary' />
                <Button text='Outline' variant='outline' />
                <Button text='Destructive' variant='destructive' />
                <Button text='Link' variant='link' />
                <Button text='Primary Disabled' isDisabled />
                <Button text='Secondary Disabled' variant='secondary' isDisabled />
                <Button text='Outline Disabled' variant='outline' isDisabled />
                <Button text='Destructive Disabled' variant='destructive' isDisabled />
                <Button text='Link Disabled' variant='link' isDisabled />
            </Cell>
        </Row>
    </Grid>
);

export const Sizes = () => (
    <Grid fluid>
        <Row style={{ marginBottom: '10px' }}>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>We have 4 different sizes for our buttons</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Button size='small' text='Small' />
                <Button size='medium' text='Medium' />
                <Button size='large' text='Large' />
                <Button size='xlarge' text='XLarge' />
            </Cell>
        </Row>
        <Row>
            <Cell xs={6}>
                <Button isExpanded text='Expanded' />
            </Cell>
            <Cell xs={6}>
                <Button isExpanded text='Expanded' />
            </Cell>
        </Row>
    </Grid>
);

export const Icons = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>We can add icon before and after by setting the iconBefore or iconAfter property and isCircle to set a circle button</Paragraph>
            </Cell>
            <Cell xs={12} style={{ marginBottom: '10px' }}>
                <Button kind='iconTextButton' text='Primary' iconBefore='add' aria-label='Add image' />
                <Button kind='iconTextButton' text='Secondary' variant='secondary' iconBefore='image' aria-label='Select image' />
                <Button kind='iconTextButton' text='Outline' variant='outline' iconAfter='gas' aria-label='Select gas provider' />
                <Button kind='iconTextButton' text='Destructive' variant='destructive' iconBefore='delete' aria-label='Delete image' />
                <Button kind='iconTextButton' text='Link' variant='link' iconBefore='world' aria-label='View world map' />
            </Cell>
            <Cell xs={12}>
                <Button kind='iconButton' iconBefore='add' isCircle iconAriaLabel='Add image icon' />
                <Button kind='iconButton' variant='secondary' iconBefore='image' isCircle iconAriaLabel='Select image icon' />
                <Button kind='iconButton' variant='outline' iconBefore='gas' isCircle iconAriaLabel='Add image icon' />
                <Button kind='iconButton' variant='destructive' iconBefore='delete' isCircle iconAriaLabel='Delete image icon' />
                <Button kind='iconButton' variant='link' iconBefore='world' isCircle iconAriaLabel='View map icon' />
                <Button kind='iconButton' iconAfter='circle_add' variant='icon' isCircle iconAriaLabel='Add image icon' />
                <Button kind='iconButton' iconAfter='vader' variant='icon-secondary' isCircle iconAriaLabel='Vader icon' />
                <Button kind='iconButton' iconAfter='search' variant='icon-outline' isCircle iconAriaLabel='Search icon' />
                <Button kind='iconButton' iconAfter='star' iconColor='amber' variant='icon-secondary' isCircle size='large' iconAriaLabel='Mark favourite icon' />
            </Cell>
        </Row>
    </Grid>
);

export const Loading = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>A loading indicator can be added to a button by setting the isLoading property on the Button</Paragraph>
            </Cell>
            <Cell xs={12} style={{ marginBottom: '10px' }}>
                <Button kind='iconTextButton' text='Primary' iconBefore='add' isLoading aria-label='Loading, please wait' />
                <Button kind='iconTextButton' text='Secondary' variant='secondary' iconBefore='image' isLoading aria-label='Loading, please wait' />
                <Button kind='iconTextButton' text='Outline' variant='outline' iconAfter='gas' isLoading aria-label='Loading, please wait' />
                <Button kind='iconTextButton' text='Destructive' variant='destructive' iconBefore='delete' isLoading aria-label='Loading, please wait' />
                <Button kind='iconTextButton' text='Link' variant='link' iconBefore='world' isLoading aria-label='Loading, please wait' />
            </Cell>
            <Cell xs={12} style={{ marginBottom: '10px' }}>
                <Button kind='iconButton' iconBefore='add' isCircle isLoading iconAriaLabel='Loading, please wait' />
                <Button kind='iconButton' variant='secondary' iconBefore='image' isCircle isLoading iconAriaLabel='Loading, please wait' />
                <Button kind='iconButton' variant='outline' iconBefore='gas' isCircle isLoading iconAriaLabel='Loading, please wait' />
                <Button kind='iconButton' variant='destructive' iconBefore='delete' isCircle isLoading iconAriaLabel='Loading, please wait' />
                <Button kind='iconButton' variant='link' iconBefore='world' isCircle isLoading iconAriaLabel='Loading, please wait' />
            </Cell>
        </Row>
    </Grid>
);

export const Group = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>A group of buttons you can customize as you want</Paragraph>
            </Cell>
            <Cell xs={12}>
                <ButtonGroup>
                    <Button text='Button 1' />
                    <Button text='Button 2' variant='secondary' />
                    <Button text='Button 3' variant='secondary' />
                    <Button text='Button 4' variant='secondary' />
                    <Button text='Button 5' variant='secondary' />
                    <Button text='Button 6' variant='secondary' />
                </ButtonGroup>
            </Cell>
        </Row>
    </Grid>
);

export const WithTooltips = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>A group of buttons you can customize as you want</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Button tooltip='Button 1' text='Button 1' />
                <Button tooltip='Button 2' text='Button 2' variant='secondary' />
                <Button kind='iconButton' tooltip='Primary' iconBefore='add' iconAriaLabel='Add image' />
            </Cell>
        </Row>
    </Grid>
);

export const Playground = (args: ButtonProps) => (
    <Grid fluid>
        <Row style={{ marginBottom: '10px' }}>
            <Cell xs={12}>
                <Paragraph margin='1.5rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Button.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Button {...args} />
            </Cell>
        </Row>
    </Grid>
);
