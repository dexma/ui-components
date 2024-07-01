import styled, { createGlobalStyle } from 'styled-components';
import { Modal as ModalAntDesign, type ModalProps as AntDModalProps } from 'antd';

import { type Theme, color } from '@utils/theme';
import { backgroundColor, borderRadius, boxShadow, fontColor, fontSize, fontWeightSemiBold } from '@utils/selectors';

type ModalProps = AntDModalProps & {
    theme: Theme;
};

const StyledModal = styled(ModalAntDesign)<ModalProps>`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${(props) => fontColor(props.theme)};
    font-size: ${(props) => fontSize(props.theme)};
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    top: 100px;
    width: auto;
    margin: 0 auto;
    padding-bottom: 24px;
    pointer-events: none;
    .ant-modal-title {
        margin: 0;
        color: ${color.gray900};
        font-weight: ${(props) => fontWeightSemiBold(props.theme)};
        font-size: 20px;
        line-height: 22px;
        word-wrap: break-word;
    }
    .ant-modal-content {
        position: relative;
        background-color: ${(props) => backgroundColor(props.theme)};
        background-clip: padding-box;
        border: 0;
        border-radius: ${(props) => borderRadius(props.theme)};
        box-shadow: ${(props) => boxShadow(props.theme)};
        pointer-events: auto;
    }
    .ant-modal-close {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
        padding: 0;
        color: ${(props) => fontColor(props.theme)};
        font-weight: 700;
        line-height: 1;
        text-decoration: none;
        background: transparent;
        border: 0;
        outline: 0;
        cursor: pointer;
        transition: color 0.3s;
    }
    .ant-modal-close-x {
        display: block;
        font-size: 16px;
        font-style: normal;
        text-align: center;
        text-transform: none;
        text-rendering: auto;
    }
    .ant-modal-close:focus,
    .ant-modal-close:hover {
        color: ${(props) => fontColor(props.theme)};
        text-decoration: none;
    }
    .ant-modal-header {
        color: ${(props) => fontColor(props.theme)};
        background: ${(props) => backgroundColor(props.theme)};
        border-radius: ${(props) => borderRadius(props.theme)} ${(props) => borderRadius(props.theme)} 0 0;
    }
    .ant-modal-body {
        font-size: 14px;
        line-height: 1.5;
        word-wrap: break-word;
        color: ${(props) => fontColor(props.theme)};
    }
    .ant-modal-footer {
        text-align: right;
        background: transparent;
        border-radius: 0 0 ${(props) => borderRadius(props.theme)} ${(props) => borderRadius(props.theme)};
    }
    .ant-modal-footer button + button {
        margin-bottom: 0;
        margin-left: 8px;
    }
    .ant-modal.zoom-enter,
    .ant-modal.zoom-appear {
        transform: none;
        opacity: 0;
        animation-duration: 0.3s;
        user-select: none;
    }
    .ant-modal-open {
        overflow: hidden;
    }
    .ant-modal-centered {
        text-align: center;
    }
    .ant-modal-centered::before {
        display: inline-block;
        width: 0;
        height: 100%;
        vertical-align: middle;
        content: '';
    }
    .ant-modal-centered .ant-modal {
        top: 0;
        display: inline-block;
        text-align: left;
        vertical-align: middle;
    }
`;

const StyledModalGlobal = createGlobalStyle`
  .ant-modal-mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.45);
    filter: alpha(opacity=50);
  }
  .ant-modal-mask-hidden {
    display: none;
  }
  .ant-modal-wrap {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    overflow: auto;
    outline: 0;
  }
`;

export { StyledModal, StyledModalGlobal };
