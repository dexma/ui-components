import { primaryColor } from "@utils/selectors";
import { transparentize } from "polished";
import { createGlobalStyle } from "styled-components";

const GlobalTreeStyles = createGlobalStyle`
  .ant-tree .ant-tree-checkbox-checked .ant-tree-checkbox-inner {
    background-color: ${(props) => primaryColor(props.theme)};
    border-color: ${(props) => primaryColor(props.theme)};
  }

  .ant-tree .ant-tree-checkbox-checked:not(ant-tree-checkbox-disabled):hover .ant-tree-checkbox-inner {
    background-color: ${(props) => transparentize(0.3, primaryColor(props.theme))} !important;
  }

  .ant-tree-node-content-wrapper {
    font-size: 16px;
  }

  .ant-tree-title {
    font-weight: 400;
    line-height: 16px;
  }
`;

export { GlobalTreeStyles };