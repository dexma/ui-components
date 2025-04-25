import { Dropdown, type DropdownProps, Row, Grid, Cell, Paragraph, DropdownContent } from '@components';

const innerContent: DropdownContent[] = [
    {
        text: 'Edit',
        icon: 'edit'
    },
    {
        text: 'Delete',
        icon: 'delete'
    },
    {
        icon: 'add',
        iconAriaLabel: 'Add'
    },
];

export default {
    title: 'Dropdown',
    component: Dropdown,
    tags: ['autodocs'],
};

const onItemDropdownSelected = (key: number) => {
    const item = innerContent.find((_, index) => index == key);
    if (item)
        console.log(`Click in ${item.text} option`);
}

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A simple dropdown that provides action elements like links and buttons.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <Dropdown icon='more_horiz' content={innerContent} iconAriaLabel='More actions' onItemSelected={onItemDropdownSelected} />
                <Dropdown icon='add' content={innerContent} iconAriaLabel='Add' onItemSelected={onItemDropdownSelected} />
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
                <Dropdown icon='add' content={innerContent} text='Dropdown' trigger={['click']} onItemSelected={onItemDropdownSelected} />
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
                <Dropdown icon='settings' content={innerContent} text='Bottom' placement='bottom' onItemSelected={onItemDropdownSelected} />
            </Cell>
            <br />
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={innerContent} text='Top' placement='top' onItemSelected={onItemDropdownSelected} />
            </Cell>
            <br />
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={innerContent} text='Left' placement='bottomLeft' onItemSelected={onItemDropdownSelected} />
            </Cell>
            <br />
            <Cell xs={12} xsOffset={2}>
                <Dropdown icon='settings' content={innerContent} text='Right' placement='bottomRight' onItemSelected={onItemDropdownSelected} />
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
