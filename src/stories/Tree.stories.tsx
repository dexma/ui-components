import { Grid, Row, Cell, Paragraph, Tree } from "@components";
import { TreeDataNode } from "antd";

const treeData: TreeDataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: "sss", key: '0-0-1-0' }],
      },
    ],
  },
];

export default {
  title: 'Tree',
  component: Tree,
  tags: ['autodocs'],
};

export const Basic = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin='1rem 0 1rem 0'>A simple tree that provides information about parents and your children.</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Tree treeData={treeData} defaultExpandedKeys={['0-0-0', '0-0-1']} />
      </Cell>
    </Row>
  </Grid>
);

export const Checkable = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin='1rem 0 1rem 0'>A checkable tree that allows you to select any item you want.</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Tree checkable treeData={treeData} defaultExpandedKeys={['0-0-0', '0-0-1']} />
      </Cell>
    </Row>
  </Grid>
);

export const Disabled = () => (
  <Grid fluid>
    <Row>
      <Cell xs={12}>
        <Paragraph margin='1rem 0 1rem 0'>A checkable tree that allows you to select any item you want.</Paragraph>
      </Cell>
      <Cell xs={12}>
        <Tree checkable treeData={[
          {
            title: 'parent 1',
            key: '0-0',            
            children: [
              {
                title: 'parent 1-0',
                key: '0-0-0',
                disabled: true,
                children: [
                  {
                    title: 'leaf',
                    key: '0-0-0-0',
                  },
                  {
                    title: 'leaf',
                    key: '0-0-0-1',
                    disableCheckbox: true
                  },
                ],
              },
              {
                title: 'parent 1-1',
                key: '0-0-1',
                children: [{ title: "sss", key: '0-0-1-0' }],
              },
            ],
          },
        ]} defaultExpandedKeys={['0-0-0', '0-0-1']} defaultCheckedKeys={['0-0-1']} />
      </Cell>
    </Row>
  </Grid>
);