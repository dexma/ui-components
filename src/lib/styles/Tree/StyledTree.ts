import styled from "styled-components";

const StyledTree = styled.div`
  .ant-tree-checkbox-checked .ant-tree-checkbox-inner {
    background-color: ${(props) => props.theme.primary};
    border-color: ${(props) => props.theme.primary};
  }

  .ant-tree-node-content-wrapper {
    font-size: 16px;
  }

  .ant-tree-title {
    font-weight: 400;
    line-height: 16px;
  }
`;

export { StyledTree };