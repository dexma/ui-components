import { primaryColor } from '@utils/selectors';
import { transparentize } from 'polished';
import { createGlobalStyle } from 'styled-components';

const GlobalTreeSelectStyles = createGlobalStyle`
  .ant-tree-select-dropdown .ant-select-tree-checkbox-checked .ant-select-tree-checkbox-inner {
    background-color: ${(props) => primaryColor(props.theme)};
    border-color: ${(props) => primaryColor(props.theme)};
  }

  .ant-tree-select-dropdown .ant-select-tree-checkbox-checked:not(ant-select-tree-checkbox-disabled):hover .ant-select-tree-checkbox-inner {
    background-color: ${(props) => transparentize(0.3, primaryColor(props.theme))} !important;
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
