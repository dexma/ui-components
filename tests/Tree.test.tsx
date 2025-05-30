import { Tree } from "@components/Tree";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe('<Tree>', () => {
  const treeData = [
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
  ]
  it('Should render the tree component', () => {
    const tree = render(<Tree treeData={treeData} />);
    expect(tree.getAllByTestId('tree').length).toEqual(1);
    expect(tree.container.querySelectorAll('.ant-tree-title').length).toEqual(1);
    expect(tree.container.querySelectorAll('.ant-tree-checkbox').length).toEqual(0);
  });
  it('Should render the tree component expanded', () => {
    const tree = render(<Tree treeData={treeData} defaultExpandedKeys={['0-0-0', '0-0-1']} />);
    expect(tree.getAllByTestId('tree').length).toEqual(1);
    expect(tree.container.querySelectorAll('.ant-tree-title').length).toEqual(6);
  });
  it('Should render the tree component checkable', () => {
    const tree = render(<Tree treeData={treeData} checkable />);
    expect(tree.getAllByTestId('tree').length).toEqual(1);
    expect(tree.container.querySelectorAll('.ant-tree-checkbox').length).toEqual(1);
  });
});