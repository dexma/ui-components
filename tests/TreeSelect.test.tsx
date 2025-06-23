import { TreeSelect } from "@components/TreeSelect";
import { render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from "vitest";

describe('<TreeSelect>', () => {
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
  it('Should render the tree select component', () => {
    const tree = render(<TreeSelect treeData={treeData} />);

    expect(tree.getAllByTestId('tree-select').length).toEqual(1);
    expect(tree.container.querySelector('input')).toBeTruthy();
  });
  it('Should render the tree select component expanded', async () => {
    const tree = render(<TreeSelect treeData={treeData} treeDefaultExpandAll />);
    const input = tree.container.querySelector('input');
    await userEvent.click(input!);

    expect(tree.getAllByTestId('tree-select').length).toEqual(1);
    expect(document.querySelectorAll('.ant-select-tree-treenode-switcher-open').length).toEqual(10);
  });
  it('Should render the tree select component checkable', async () => {
    const tree = render(<TreeSelect treeData={treeData} treeCheckable treeDefaultExpandAll />);
    const input = tree.container.querySelector('input');
    await userEvent.click(input!);
    const treeNodes = document.querySelectorAll('.ant-select-tree-treenode-switcher-open');

    expect(tree.getAllByTestId('tree-select').length).toEqual(1);
    expect(treeNodes.length).toEqual(10);
    treeNodes.forEach(node => {
      expect(node.querySelector('.ant-select-tree-checkbox')).toBeTruthy();
    })
  });
});