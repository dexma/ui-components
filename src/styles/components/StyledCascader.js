import styled, { createGlobalStyle, css } from 'styled-components';
import { getSelectOptionStyle } from './StyledAntdSelect';
import { gray, white } from '../selectors';
import { StyledIcon } from './StyledIcon';

export const StyledTagSelected = styled.span`
  display: flex;
  align-items: center;
  padding: 2px 4px;
  font-weight: 400;
  white-space: nowrap;
  cursor: pointer;
  opacity: 1;
  border-radius: 4px;
  margin: 0px;
  font-size: 14px;
  line-height: 14px;
  background: ${gray};
  color: ${white};
  ${StyledIcon} {
    ${props =>
      props.icon &&
      css`
        &.icon {
          margin-right: 3px;
          margin-left: -2px;
        }
      `};
    ${props =>
      props.closable &&
      css`
        &.icon-close {
          cursor: pointer;
          margin-right: -2px;
          margin-left: 3px;
          fill: ${white};
        }
      `};
  }
`;

export const getCascaderStyle = css`
  .ant-cascader-dropdown .ant-cascader-menu {
    max-width: 280px;
  }

  .ant-cascader-dropdown .ant-cascader-menu-item {
    max-width: 210px;
  }
  .ant-cascader-dropdown .ant-cascader-menu-item-content {
    max-width: 170px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`;
export const CascaderOptionStyle = createGlobalStyle`
  ${getSelectOptionStyle};
  ${getCascaderStyle}
`;
