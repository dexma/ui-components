import styled, { createGlobalStyle, css } from 'styled-components';

import { white, gray } from '@utils/selectors';
import { StyledIcon } from '@styles/Icon/StyledIcon';
import { type Theme } from '@utils/theme';

type StyledTagSelectedProps = {
    theme: Theme;
    $closable: boolean;
    icon?: string;
};

export const StyledTagSelected = styled.span<StyledTagSelectedProps>`
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
    background: ${(props) => gray(props.theme)};
    color: ${(props) => white(props.theme)};
    ${StyledIcon} {
        ${(props) =>
            props.icon &&
            css`
                &.icon {
                    margin-right: 3px;
                    margin-left: -2px;
                }
            `};
        ${(props) =>
            props.$closable &&
            css`
                &.icon-close {
                    cursor: pointer;
                    margin-right: -2px;
                    margin-left: 3px;
                    fill: ${white(props.theme)};
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
  ${getCascaderStyle}
`;
