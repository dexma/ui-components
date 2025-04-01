import { Dropdown, type DropdownProps, Row, Grid, Cell, Paragraph } from '@components';

const innerContent = [
    {
        text: 'Edit',
        parentName: 'dropdown-button',
        icon: 'edit',
        onClick: (e: any) => {
            console.log('click edit', e);
        },
    },
    {
        text: 'Delete',
        parentName: 'dropdown-button',
        icon: 'delete',
        onClick: (e: any) => {
            console.log('click delete', e);
        },
    },
    {
        text: '',
        parentName: 'dropdown-button',
        icon: 'add',
        onClick: (e: any) => {
            console.log('click edit', e);
        },
        ariaLabel: 'Add',
    },
];

export default {
    title: 'Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A simple dropdown that provides action elements like links and buttons.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Dropdown icon='more_horiz' content={innerContent} ariaLabel='More actions' />
                <Dropdown icon='add' content={innerContent} ariaLabel='Add' />
            </Cell>
        </Row>
    </Grid>
);

export const DropdownWithText = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>The text prop allows the dropdown to be more descriptive.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Dropdown icon='add' content={innerContent} text='Dropdown' trigger={['click']} />
            </Cell>
        </Row>
    </Grid>
);

export const DropdownWithPlacement = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>You can use the placement prop to adjust the dropdown position.</Paragraph>
                <br />
            </Cell>
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={innerContent} text='Bottom' placement='bottom' />
            </Cell>
            <br />
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={innerContent} text='Top' placement='top' />
            </Cell>
            <br />
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={innerContent} text='Left' placement='bottomLeft' />
            </Cell>
            <br />
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={innerContent} text='Right' placement='bottomRight' />
            </Cell>
        </Row>
    </Grid>
);

export const Playground = ({ content, ...props }: DropdownProps) => {
    if (typeof content === 'object' && !Array.isArray(content)) {
        // eslint-disable-next-line
        content = [];
    }
    return (
        <Grid fluid>
            <Row>
                <Cell xs={12}>
                    <Paragraph margin='1rem 0 1rem 0'>Use the Controls on the section below to add your own props to this Dropdown.</Paragraph>
                </Cell>
                <Cell xs={12}>
                    <Dropdown {...props} />
                </Cell>
            </Row>
        </Grid>
    );
};
