import { GlobalTreeStyles } from "@styles/Tree/StyledTree";
import { Tree as TreeAntD, TreeProps } from "antd";

export type TreePropsExtended = TreeProps;

export const Tree = ({ checkable, treeData, ...props }: TreePropsExtended) => (
  <>
    <GlobalTreeStyles />
    <TreeAntD data-testid='tree' checkable={checkable} treeData={treeData} {...props} />
  </>
);

export default Tree;