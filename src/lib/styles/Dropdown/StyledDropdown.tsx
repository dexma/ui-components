import { Button } from '@components';
import { color } from '@utils/theme';
import styled, { createGlobalStyle, css } from 'styled-components';

const getDropdownStyle = css`
    .ant-dropdown {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
        font-variant: tabular-nums;
        line-height: 1.5;
        list-style: none;
        -webkit-font-feature-settings: 'tnum';
        font-feature-settings: 'tnum';
        position: absolute;
        top: 0;
        left: 0;
        z-index: 1030;
        font-weight: normal;
        white-space: normal;
        text-align: left;
        cursor: auto;
        user-select: text;
    }
    .ant-dropdown-menu-item {
        padding: 0px !important;
    }
    .ant-dropdown-menu-item:focus {
        border: ${color.gray300} 3px solid;
    }
    .ant-dropdown::after {
        position: absolute;
        background: rgba(255, 255, 255, 0.01);
        content: '';
    }
    .ant-dropdown-hidden {
        display: none;
    }

    .dropdown-button-item:hover {
        text-decoration: none !important;
    }

    .ant-dropdown-inner {
        background-color: #fff;
        background-clip: padding-box;
        border-radius: 4px;
        padding: 0 !important;
        -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.15) \\9;
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.15) \\9;
    }
    @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
        .ant-dropdown {
            /* IE10+ */
        }
        .ant-dropdown-inner {
            -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
        }
    }
    .ant-dropdown-title {
        min-width: 177px;
        min-height: 32px;
        margin: 0;
        padding: 5px 16px 4px;
        color: rgba(0, 0, 0, 0.85);
        font-weight: 500;
        border-bottom: 1px solid #e8e8e8;
    }
    .ant-dropdown-inner-content {
        padding: 0.5rem 0;
        color: rgba(0, 0, 0, 0.65);
        button {
            display: flex;
            margin: 0;
            width: 100%;
            border-radius: 0;
            padding: 0 1.5rem 0 1rem;
            &:hover {
                background: #f1f2f3;
                text-decoration: none;
            }
            svg {
                margin-right: 3px;
            }
        }
    }
    .ant-dropdown-open {
        button {
            margin: 0;
        }
    }
    .ant-dropdown-message {
        position: relative;
        padding: 4px 0 12px;
        color: rgba(0, 0, 0, 0.65);
        font-size: 14px;
    }
    .ant-dropdown-message > .anticon {
        position: absolute;
        top: 8px;
        color: #faad14;
        font-size: 14px;
    }
    .ant-dropdown-message-title {
        padding-left: 22px;
    }
    .ant-dropdown-buttons {
        margin-bottom: 4px;
        text-align: right;
    }
    .ant-dropdown-buttons button {
        margin-left: 8px;
    }
    .ant-dropdown-arrow {
        display: none;
    }
    .ant-dropdown-placement-top > .ant-dropdown-content > .ant-dropdown-arrow,
    .ant-dropdown-placement-topLeft > .ant-dropdown-content > .ant-dropdown-arrow,
    .ant-dropdown-placement-topRight > .ant-dropdown-content > .ant-dropdown-arrow {
        bottom: 6.2px;
        border-top-color: transparent;
        border-right-color: #fff;
        border-bottom-color: #fff;
        border-left-color: transparent;
        -webkit-box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
        box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
    }
    .ant-dropdown-placement-top > .ant-dropdown-content > .ant-dropdown-arrow {
        left: 50%;
        -webkit-transform: translateX(-50%) rotate(45deg);
        -ms-transform: translateX(-50%) rotate(45deg);
        transform: translateX(-50%) rotate(45deg);
    }
    .ant-dropdown-placement-topLeft > .ant-dropdown-content > .ant-dropdown-arrow {
        left: 16px;
    }
    .ant-dropdown-placement-topRight > .ant-dropdown-content > .ant-dropdown-arrow {
        right: 16px;
    }
    .ant-dropdown-placement-right > .ant-dropdown-content > .ant-dropdown-arrow,
    .ant-dropdown-placement-rightTop > .ant-dropdown-content > .ant-dropdown-arrow,
    .ant-dropdown-placement-rightBottom > .ant-dropdown-content > .ant-dropdown-arrow {
        left: 6px;
        border-top-color: transparent;
        border-right-color: transparent;
        border-bottom-color: #fff;
        border-left-color: #fff;
        -webkit-box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
        box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
    }
    .ant-dropdown-placement-right > .ant-dropdown-content > .ant-dropdown-arrow {
        top: 50%;
        -webkit-transform: translateY(-50%) rotate(45deg);
        -ms-transform: translateY(-50%) rotate(45deg);
        transform: translateY(-50%) rotate(45deg);
    }
    .ant-dropdown-placement-rightTop > .ant-dropdown-content > .ant-dropdown-arrow {
        top: 12px;
    }
    .ant-dropdown-placement-rightBottom > .ant-dropdown-content > .ant-dropdown-arrow {
        bottom: 12px;
    }
    .ant-dropdown-placement-bottom > .ant-dropdown-content > .ant-dropdown-arrow,
    .ant-dropdown-placement-bottomLeft > .ant-dropdown-content > .ant-dropdown-arrow,
    .ant-dropdown-placement-bottomRight > .ant-dropdown-content > .ant-dropdown-arrow {
        top: 6px;
        border-top-color: #fff;
        border-right-color: transparent;
        border-bottom-color: transparent;
        border-left-color: #fff;
        -webkit-box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
        box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
    }
    .ant-dropdown-placement-bottom > .ant-dropdown-content > .ant-dropdown-arrow {
        left: 50%;
        -webkit-transform: translateX(-50%) rotate(45deg);
        -ms-transform: translateX(-50%) rotate(45deg);
        transform: translateX(-50%) rotate(45deg);
    }
    .ant-dropdown-placement-bottomLeft > .ant-dropdown-content > .ant-dropdown-arrow {
        left: 16px;
    }
    .ant-dropdown-placement-bottomRight > .ant-dropdown-content > .ant-dropdown-arrow {
        right: 16px;
    }
    .ant-dropdown-placement-left > .ant-dropdown-content > .ant-dropdown-arrow,
    .ant-dropdown-placement-leftTop > .ant-dropdown-content > .ant-dropdown-arrow,
    .ant-dropdown-placement-leftBottom > .ant-dropdown-content > .ant-dropdown-arrow {
        right: 6px;
        border-top-color: #fff;
        border-right-color: #fff;
        border-bottom-color: transparent;
        border-left-color: transparent;
        -webkit-box-shadow: 3px -3px 7px rgba(0, 0, 0, 0.07);
        box-shadow: 3px -3px 7px rgba(0, 0, 0, 0.07);
    }
    .ant-dropdown-placement-left > .ant-dropdown-content > .ant-dropdown-arrow {
        top: 50%;
        -webkit-transform: translateY(-50%) rotate(45deg);
        -ms-transform: translateY(-50%) rotate(45deg);
        transform: translateY(-50%) rotate(45deg);
    }
    .ant-dropdown-placement-leftTop > .ant-dropdown-content > .ant-dropdown-arrow {
        top: 12px;
    }
    .ant-dropdown-placement-leftBottom > .ant-dropdown-content > .ant-dropdown-arrow {
        bottom: 12px;
    }
`;

const StyledGlobalDropdown = createGlobalStyle`${getDropdownStyle}`;

export const StyledDropdownInnerButton = styled(Button)`
    width: 100%;
`;

export const StyledDropdownButton = styled(Button)`
    ${(props) => ((!props.variant && props.variant !== '') || props.variant === 'icon' || props.variant === 'icon-secondary' ? 'padding: 0; margin: 0;' : '')}
`;

export { StyledGlobalDropdown };
