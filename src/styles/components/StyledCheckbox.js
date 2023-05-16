import styled, { css } from 'styled-components';
import {
  primaryColor,
  gray50,
  gray200,
  gray300,
  gray700,
  fontSize,
  white,
} from '../selectors';

export const getStyledCheckBox = () => css`
    color: ${gray700};
    align-items: center;
    .ant-checkbox {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-size: ${fontSize};
        font-variant: tabular-nums;
        line-height: 1.5;
        list-style: none;
        font-feature-settings: 'tnum';
        position: relative;
        top: -0.09em;
        display: inline-block;
        white-space: nowrap;
        vertical-align: middle;
        outline: none;
        cursor: pointer;
    }

    .ant-checkbox-wrapper:hover .ant-checkbox-inner,
    .ant-checkbox:hover .ant-checkbox-inner,
    input:focus + .ant-checkbox-inner {
        border-color: ${primaryColor};
    }

    .ant-checkbox:hover::after,
    .ant-checkbox-wrapper:hover .ant-checkbox::after {
        visibility: visible;
    }

    .ant-checkbox-inner {
        position: relative;
        top: 0;
        left: 0;
        display: block;
        width: 16px;
        height: 16px;
        background-color: ${white};
        border: 1px solid ${gray300};
        border-radius: 4px;
        border-collapse: separate;
    }

    input {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        width: 100%;
        height: 100%;
        cursor: pointer;
        opacity: 0;
    }


    .ant-checkbox-checked .ant-checkbox-inner {
        background-repeat: no-repeat;
        background-position: center center;
        background-color: ${primaryColor};;
        border-color: ${primaryColor};;
        background-image: url("data:image/svg+xml,%3Csvg width='12' height='9' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.57248 5.83244L2.03644 2.85145L0.5 4.13182L4.53662 8.85146L11.5366 1.35145L10.0623 0L4.57248 5.83244Z' fill='white'/%3E%3C/svg%3E%0A");
    }
    .ant-checkbox-disabled {
        cursor: not-allowed;
    }
    .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner::after {
        border-color: ${gray200};
        -webkit-animation-name: none;
        animation-name: none;
    }
    .ant-checkbox-disabled input {
        cursor: not-allowed;
    }
    .ant-checkbox-disabled .ant-checkbox-inner {
        background-color: ${gray50};
        border-color: ${gray200} !important;
    }
    
    .ant-checkbox-disabled.ant-checkbox-checked .ant-checkbox-inner{
      background-image: url("data:image/svg+xml,%3Csvg width='12' height='9' viewBox='0 0 12 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.57248 5.83244L2.03644 2.85145L0.5 4.13182L4.53662 8.85146L11.5366 1.35145L10.0623 0L4.57248 5.83244Z' fill='%23${props =>
        gray300(props).replace('#', '')}'/%3E%3C/svg%3E%0A");
      }
    .ant-checkbox-disabled .ant-checkbox-inner::after {
        border-color: ${gray200};
        border-collapse: separate;
        -webkit-animation-name: none;
        animation-name: none;
    }
    .ant-checkbox-disabled + span {
        color: ${gray200};
        cursor: not-allowed;
    }
    .ant-checkbox-disabled:hover::after,
    .ant-checkbox-wrapper:hover .ant-checkbox-disabled::after {
        visibility: hidden;
    }
    .ant-checkbox-wrapper {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: ${gray700};
        font-size: 14px;
        font-variant: tabular-nums;
        list-style: none;
        -webkit-font-feature-settings: 'tnum';
        font-feature-settings: 'tnum';
        display: inline-block;
        line-height: unset;
        cursor: pointer;
    }
    .ant-checkbox-wrapper.ant-checkbox-wrapper-disabled {
        cursor: not-allowed;
    }
    .ant-checkbox-wrapper + .ant-checkbox-wrapper {
        margin-left: 8px;
    }
    .ant-checkbox + span {
        padding-right: 8px;
        padding-left: 8px;
    }
`;

const StyledCheckbox = styled.label`
  ${getStyledCheckBox}
`;

export { StyledCheckbox };
