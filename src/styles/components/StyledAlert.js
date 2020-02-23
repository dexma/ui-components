import styled from 'styled-components';
import { StyledIcon } from 'styles/components/StyledIcon';

import {
  fontSize,
  white,
  successColor,
  warningColor,
  errorColor,
  infoColor,
  fontWeightSemiBold,
  borderRadius,
} from 'styles/selectors';

const StyledAlert = styled.div`
  .ant-alert {
    box-sizing: border-box;
    margin: 0;
    font-size: ${fontSize};
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    padding: 10px;
    word-wrap: break-word;
    border-radius: ${borderRadius};
    display: flex;
    align-content: center;
    align-items: center;
  }

  ${StyledIcon} {
    fill: ${white};
  }

  .alert-icon {
    left: 0px;
    margin-right: 8px;
  }

  .ant-alert.ant-alert-no-icon {
    padding: 8px 15px;
  }
  .ant-alert.ant-alert-closable {
    padding-right: 30px;
  }
  .ant-alert-description {
    display: none;
    line-height: 22px;
  }

  .ant-alert-success {
    background-color: ${successColor};
  }
  .ant-alert-success .ant-alert-icon {
    color: ${white};
  }

  .ant-alert-info {
    background-color: ${infoColor};
  }
  .ant-alert-info .ant-alert-icon {
    color: ${white};
  }

  .ant-alert-warning {
    background-color: ${warningColor};
  }
  .ant-alert-warning .ant-alert-icon {
    color: ${white};
  }

  .ant-alert-error {
    background-color: ${errorColor};
  }
  .ant-alert-error .ant-alert-icon {
    color: ${white};
  }

  .ant-alert-close-icon {
    position: absolute;
    top: 0.5rem;
    right: 0;
    overflow: hidden;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  .ant-alert-close-icon .anticon-close {
    -webkit-transition: color 0.3s;
    transition: color 0.3s;
    color: ${white};
  }

  .ant-alert-with-description {
    position: relative;
    padding: 15px 15px 15px 40px;
    color: ${white};
    line-height: 1.5;
    border-radius: ${borderRadius};
    flex-direction: column;
    align-items: start;
  }

  .ant-alert-with-description.ant-alert-no-icon {
    padding: 15px;
  }
  .ant-alert-with-description .alert-icon {
    position: absolute;
    top: 16px;
    left: 10px;
  }
  .ant-alert-with-description .ant-alert-close-icon {
    position: absolute;
    right: 0;
    top: 0.5rem;
    font-size: ${fontSize};
    cursor: pointer;
    ${StyledIcon} {
      fill: ${white};
      margin-right: 8px;
    }
  }
  .ant-alert-with-description .ant-alert-message {
    display: block;
    color: ${white};
    margin-top: 2px;
  }
  .ant-alert-message {
    color: ${white};
    font-weight: ${fontWeightSemiBold};
  }
  .ant-alert-with-description .ant-alert-description {
    display: block;
    margin-top: 4px;
  }
  .ant-alert.ant-alert-closing {
    height: 0 !important;
    margin: 0;
    padding-top: 0;
    padding-bottom: 0;
    -webkit-transform-origin: 50% 0;
    -ms-transform-origin: 50% 0;
    transform-origin: 50% 0;
    -webkit-transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }
  .ant-alert-slide-up-leave {
    -webkit-animation: antAlertSlideUpOut 0.3s
      cubic-bezier(0.78, 0.14, 0.15, 0.86);
    animation: antAlertSlideUpOut 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }
  .ant-alert-banner {
    margin-bottom: 0;
    border: 0;
    border-radius: 0;
  }

  @-webkit-keyframes antAlertSlideUpIn {
    0% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 0;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
    }
  }
  @keyframes antAlertSlideUpIn {
    0% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 0;
    }
    100% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
    }
  }
  @-webkit-keyframes antAlertSlideUpOut {
    0% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 0;
    }
  }
  @keyframes antAlertSlideUpOut {
    0% {
      -webkit-transform: scaleY(1);
      transform: scaleY(1);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 1;
    }
    100% {
      -webkit-transform: scaleY(0);
      transform: scaleY(0);
      -webkit-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      opacity: 0;
    }
  }
`;

export { StyledAlert };
