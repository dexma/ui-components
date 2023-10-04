import styled from 'styled-components';
import { darken } from 'polished';

const StyledSwitch = styled.div`
  display: inline-block;

  .ant-switch-loading-icon,
  .ant-switch::after {
    width: 18px;
    height: 24px;
    background-color: #fff;
    border-radius: 18px;
    cursor: pointer;
    -webkit-transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    transition: all 0.36s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    content: ' ';
  }
  .ant-switch::after {
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
  }
  .ant-switch:not(.ant-switch-disabled):active::before,
  .ant-switch:not(.ant-switch-disabled):active::after {
    width: 24px;
  }
  .ant-switch-loading-icon {
    z-index: 1;
    display: none;
    font-size: 12px;
    background: transparent;
  }
  .ant-switch-loading-icon svg {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
  }
  .ant-switch-loading .ant-switch-loading-icon {
    display: inline-block;
    color: rgba(0, 0, 0, 0.65);
  }
  .ant-switch-checked.ant-switch-loading .ant-switch-loading-icon {
    color: ${props => props.theme.primary};
    width: 44px;
  }
  .ant-switch:focus {
    outline: 0;
    -webkit-box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
  }
  .ant-switch:focus:hover {
    -webkit-box-shadow: none;
    box-shadow: none;
  }

  .ant-switch-checked {
    background-color: ${props => props.theme.primary};
  }

  .ant-switch-checked::after {
    left: 100%;
    margin-left: -1px;
    -webkit-transform: translateX(-100%);
    -ms-transform: translateX(-100%);
    transform: translateX(-100%);
  }
  .ant-switch-checked .ant-switch-loading-icon {
    left: 100%;
    margin-left: -19px;
  }
  .ant-switch-loading,
  .ant-switch-disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
  .ant-switch-loading *,
  .ant-switch-disabled * {
    cursor: not-allowed;
  }
  .ant-switch-loading::before,
  .ant-switch-disabled::before,
  .ant-switch-loading::after,
  .ant-switch-disabled::after {
    cursor: not-allowed;
  }
  @-webkit-keyframes AntSwitchSmallLoadingCircle {
    0% {
      -webkit-transform: rotate(0deg) scale(0.66667);
      transform: rotate(0deg) scale(0.66667);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
    100% {
      -webkit-transform: rotate(360deg) scale(0.66667);
      transform: rotate(360deg) scale(0.66667);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
  }

  // Checked
  .ant-switch.ant-switch-checked {
    background-color: ${props => props.theme.primary};
  }

  // On hover ad checked
  .ant-switch.ant-switch-checked:hover:not(.ant-switch-disabled) {
    background-color: ${props => darken(0.1, props.theme.primary)};
  }

  @keyframes AntSwitchSmallLoadingCircle {
    0% {
      -webkit-transform: rotate(0deg) scale(0.66667);
      transform: rotate(0deg) scale(0.66667);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
    100% {
      -webkit-transform: rotate(360deg) scale(0.66667);
      transform: rotate(360deg) scale(0.66667);
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
    }
  }
`;

export { StyledSwitch };
