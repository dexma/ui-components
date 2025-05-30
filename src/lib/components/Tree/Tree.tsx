import { StyledTree } from "@styles/Tree/StyledTree";
import { Tree as TreeAntD, TreeProps } from "antd";

export type TreePropsExtended = TreeProps;

export const Tree = ({ checkable, treeData, ...props }: TreePropsExtended) => (
  <StyledTree data-testid='tree'>
    <TreeAntD checkable={checkable} treeData={treeData} {...props} />
  </StyledTree>
);

export default Tree;