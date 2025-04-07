import { Cell, Grid, Paragraph, Row } from '@components';
import { TreeSelect } from '@components/TreeSelect';

const treeData = [
    {
        value: 'parent 1',
        title: 'parent 1',
        children: [
            {
                value: 'parent 1-0',
                title: 'parent 1-0',
                children: [
                    {
                        value: 'leaf1',
                        title: 'leaf1',
                    },
                    {
                        value: 'leaf2',
                        title: 'leaf2',
                    },
                    {
                        value: 'leaf3',
                        title: 'leaf3',
                    },
                    {
                        value: 'leaf4',
                        title: 'leaf4',
                    },
                    {
                        value: 'leaf5',
                        title: 'leaf5',
                    },
                    {
                        value: 'leaf6',
                        title: 'leaf6',
                    },
                ],
            },
            {
                value: 'parent 1-1',
                title: 'parent 1-1',
                children: [
                    {
                        value: 'leaf11',
                        title: 'leaf11',
                    },
                ],
            },
        ],
    },
];

export default {
    title: 'TreeSelect',
    component: TreeSelect,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A simple tree select allow to select a single item.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <TreeSelect treeData={treeData} treeDefaultExpandAll />
            </Cell>
        </Row>
    </Grid>
);

export const Multiple = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A tree multiple selection allow to select multiple items.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <TreeSelect multiple treeData={treeData} treeDefaultExpandAll />
            </Cell>
        </Row>
    </Grid>
);

export const Checkable = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>A tree checkable allow to check multiple items.</Paragraph>
            </Cell>
            <Cell xs={12}>
                <TreeSelect treeCheckable treeData={treeData} treeDefaultExpandAll />
            </Cell>
        </Row>
    </Grid>
);
