import { createGlobalStyle } from 'styled-components';

const GlobalTreeSelectStyles = createGlobalStyle`
  .ant-tree-select-dropdown .ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner {
    background-color: ${(props) => props.theme.primary};
    border-color: ${(props) => props.theme.primary};
  }

  .ant-select-tree-node-content-wrapper {
    font-size: 16px;
  }

  .ant-select-tree-title {
    font-weight: 400;
    line-height: 16px;
  }
`;

export { GlobalTreeSelectStyles };
