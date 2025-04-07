import { GlobalTreeSelectStyles } from '@styles/TreeSelect/StyledTreeSelect';
import { TreeSelect as TreeSelectAntD, TreeSelectProps } from 'antd';

export type TreeSelectPropsExtended = TreeSelectProps;

export const TreeSelect = ({ treeData, ...props }: TreeSelectPropsExtended) => (
    <>
        <GlobalTreeSelectStyles />
        <TreeSelectAntD data-testid='tree-select' style={{ width: '100%' }} treeData={treeData} {...props} />
    </>
);

export default TreeSelect;
