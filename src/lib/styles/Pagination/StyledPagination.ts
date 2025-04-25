import styled, { css } from 'styled-components';
import { gray300, backgroundColor, primaryColor, fontColor, borderRadius, paginationHeight, paginationFontSize } from '@utils/selectors';

import { type Theme } from '@utils/theme';
import { StyledIcon } from '@styles/Icon/StyledIcon';

export const getStyledPagination = (theme: Theme) => css`
    .ant-pagination {
        box-sizing: border-box;
        color: ${fontColor(theme)};
        font-size: ${paginationFontSize(theme)};
        font-variant: tabular-nums;
    }
    .ant-pagination,
    .ant-pagination ol,
    .ant-pagination ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    .ant-pagination:after {
        display: block;
        clear: both;
        height: 0;
        overflow: hidden;
        visibility: hidden;
        content: ' ';
    }
    .ant-pagination-item,
    .ant-pagination-total-text {
        display: inline-block;
        height: ${paginationHeight(theme)};
        margin-right: 0px;
        line-height: ${paginationHeight(theme)};
        vertical-align: middle;
    }
    .ant-pagination-item {
        min-width: ${paginationHeight(theme)};
        text-align: center;
        list-style: none;
        background-color: #fff;
        border: 1px solid transparent;
        border-radius: ${borderRadius(theme)};
        outline: 0;
        cursor: pointer;
        user-select: none;
    }
    .ant-pagination-item span {
        display: block;
        padding: 0;
        color: ${fontColor(theme)};
        transition: none;
    }
    .ant-pagination-item span:hover {
        text-decoration: none;
    }
    .ant-pagination-item:focus,
    .ant-pagination-item:hover {
        border-color: transparent;
        transition: all 0.3s;
    }
    .ant-pagination-item:focus span,
    .ant-pagination-item:hover span {
        color: ${primaryColor(theme)};
    }
    .ant-pagination-item-active {
        font-weight: 500;
        background: ${backgroundColor(theme)};
        border-color: ${primaryColor(theme)};
    }
    .ant-pagination-item-active span {
        color: ${primaryColor(theme)};
    }
    .ant-pagination-item-active:focus,
    .ant-pagination-item-active:hover {
        border-color: ${primaryColor(theme)};
    }
    .ant-pagination-item-active:focus span,
    .ant-pagination-item-active:hover span {
        color: ${primaryColor(theme)};
    }
    .ant-pagination-jump-next,
    .ant-pagination-jump-prev {
        outline: 0;
    }
    .ant-pagination-jump-next .ant-pagination-item-container,
    .ant-pagination-jump-prev .ant-pagination-item-container {
        position: relative;
    }
    .ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-link-icon,
    .ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-link-icon {
        display: inline-block;
        font-size: ${paginationFontSize(theme)};
        margin-top: 2.5px;
        transform: scale(1) rotate(0deg);
        color: ${primaryColor(theme)};
        letter-spacing: -1px;
        opacity: 0;
        transition: all 0.2s;
    }
    :root .ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-link-icon,
    :root .ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-link-icon {
        font-size: 12px;
    }
    .ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-link-icon-svg,
    .ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-link-icon-svg {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
    }
    .ant-pagination-jump-next .ant-pagination-item-container .ant-pagination-item-ellipsis,
    .ant-pagination-jump-prev .ant-pagination-item-container .ant-pagination-item-ellipsis {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: block;
        margin: auto;
        color: ${fontColor(theme)};
        letter-spacing: 2px;
        text-align: center;
        text-indent: 0.13em;
        opacity: 1;
        transition: all 0.2s;
    }
    .ant-pagination-jump-next:focus .ant-pagination-item-link-icon,
    .ant-pagination-jump-next:hover .ant-pagination-item-link-icon,
    .ant-pagination-jump-prev:focus .ant-pagination-item-link-icon,
    .ant-pagination-jump-prev:hover .ant-pagination-item-link-icon {
        opacity: 1;
    }
    .ant-pagination-jump-next:focus .ant-pagination-item-ellipsis,
    .ant-pagination-jump-next:hover .ant-pagination-item-ellipsis,
    .ant-pagination-jump-prev:focus .ant-pagination-item-ellipsis,
    .ant-pagination-jump-prev:hover .ant-pagination-item-ellipsis {
        opacity: 0;
    }
    .ant-pagination-jump-next,
    .ant-pagination-jump-prev,
    .ant-pagination-prev {
        margin-right: 0px;
    }
    .ant-pagination-jump-next,
    .ant-pagination-jump-prev,
    .ant-pagination-next,
    .ant-pagination-prev {
        display: inline-block;
        min-width: ${paginationHeight(theme)};
        height: ${paginationHeight(theme)};
        color: ${fontColor(theme)};
        line-height: ${paginationHeight(theme)};
        text-align: center;
        vertical-align: middle;
        list-style: none;
        border-radius: ${borderRadius(theme)};
        cursor: pointer;
        transition: all 0.3s;
    }
    .ant-pagination-next,
    .ant-pagination-prev {
        outline: 0;
        ${StyledIcon} {
            margin-top: 0.7rem;
        }
        &:hover {
            ${StyledIcon} {
                fill: ${primaryColor(theme)};
            }
        }
    }
    .ant-pagination-next span,
    .ant-pagination-prev span {
        color: ${fontColor(theme)};
        user-select: none;
    }
    .ant-pagination-next:hover span,
    .ant-pagination-prev:hover span {
        border-color: ${primaryColor(theme)};
    }
    .ant-pagination-next .ant-pagination-item-link,
    .ant-pagination-prev .ant-pagination-item-link {
        display: block;
        height: 100%;
        font-size: ${paginationFontSize(theme)};
        text-align: center;
        background-color: ${backgroundColor(theme)};
        border-radius: ${borderRadius(theme)};
        outline: none;
        transition: all 0.3s;
    }
    .ant-pagination-next:focus .ant-pagination-item-link,
    .ant-pagination-next:hover .ant-pagination-item-link,
    .ant-pagination-prev:focus .ant-pagination-item-link,
    .ant-pagination-prev:hover .ant-pagination-item-link {
        color: ${primaryColor(theme)};
        border-color: ${primaryColor(theme)};
    }
    .ant-pagination-disabled,
    .ant-pagination-disabled:focus,
    .ant-pagination-disabled:hover {
        cursor: not-allowed;
    }
    .ant-pagination-disabled .ant-pagination-item-link,
    .ant-pagination-disabled:focus .ant-pagination-item-link,
    .ant-pagination-disabled:focus span,
    .ant-pagination-disabled:hover .ant-pagination-item-link,
    .ant-pagination-disabled:hover span,
    .ant-pagination-disabled span {
        color: ${gray300(theme)};
        cursor: not-allowed;
    }

    .ant-pagination-disabled,
    .ant-pagination-disabled:focus,
    .ant-pagination-disabled:hover {
        ${StyledIcon} {
            fill: ${gray300(theme)};
        }
    }

    .ant-pagination-slash {
        margin: 0 10px 0 5px;
    }

    .ant-pagination.ant-pagination-disabled {
        cursor: not-allowed;
    }
    .ant-pagination.ant-pagination-disabled .ant-pagination-item {
        background: ${backgroundColor(theme)};
        cursor: not-allowed;
    }
    .ant-pagination.ant-pagination-disabled .ant-pagination-item span {
        color: ${gray300(theme)};
        background: transparent;
        border: none;
        cursor: not-allowed;
    }
    .ant-pagination.ant-pagination-disabled .ant-pagination-item-active {
        background: ${backgroundColor(theme)};
        border-color: transparent;
    }
    .ant-pagination.ant-pagination-disabled .ant-pagination-item-active span {
        color: #fff;
    }
    .ant-pagination.ant-pagination-disabled .ant-pagination-item-link,
    .ant-pagination.ant-pagination-disabled .ant-pagination-item-link:focus,
    .ant-pagination.ant-pagination-disabled .ant-pagination-item-link:hover {
        color: ${gray300(theme)};
        background: ${backgroundColor(theme)};
        cursor: not-allowed;
    }
    .ant-pagination.ant-pagination-disabled .ant-pagination-jump-next:focus .ant-pagination-item-link-icon,
    .ant-pagination.ant-pagination-disabled .ant-pagination-jump-next:hover .ant-pagination-item-link-icon,
    .ant-pagination.ant-pagination-disabled .ant-pagination-jump-prev:focus .ant-pagination-item-link-icon,
    .ant-pagination.ant-pagination-disabled .ant-pagination-jump-prev:hover .ant-pagination-item-link-icon {
        opacity: 0;
    }
    .ant-pagination.ant-pagination-disabled .ant-pagination-jump-next:focus .ant-pagination-item-ellipsis,
    .ant-pagination.ant-pagination-disabled .ant-pagination-jump-next:hover .ant-pagination-item-ellipsis,
    .ant-pagination.ant-pagination-disabled .ant-pagination-jump-prev:focus .ant-pagination-item-ellipsis,
    .ant-pagination.ant-pagination-disabled .ant-pagination-jump-prev:hover .ant-pagination-item-ellipsis {
        opacity: 1;
    }
    @media only screen and (max-width: 992px) {
        .ant-pagination-item-after-jump-prev,
        .ant-pagination-item-before-jump-next {
            display: none;
        }
    }
    @media only screen and (max-width: 576px) {
        .ant-pagination-options {
            display: none;
        }
    }
`;

const StyledPagination = styled.div<{ theme: Theme }>`
    ${(props) => getStyledPagination(props.theme)}
`;

export { StyledPagination };
