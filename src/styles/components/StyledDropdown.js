import { createGlobalStyle, css } from 'styled-components';

const StyledGlobalDropdown = createGlobalStyle(css`
  .dropdown-button {
    padding: 0;
    margin: 0;
  }
  .ant-popover {
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
  .ant-popover::after {
    position: absolute;
    background: rgba(255, 255, 255, 0.01);
    content: '';
  }
  .ant-popover-hidden {
    display: none;
  }
  .ant-popover-placement-top,
  .ant-popover-placement-topLeft,
  .ant-popover-placement-topRight {
    padding-bottom: 10px;
  }
  .ant-popover-placement-right,
  .ant-popover-placement-rightTop,
  .ant-popover-placement-rightBottom {
    padding-left: 10px;
  }
  .ant-popover-placement-bottom,
  .ant-popover-placement-bottomLeft,
  .ant-popover-placement-bottomRight {
    padding-top: 10px;
  }
  .ant-popover-placement-left,
  .ant-popover-placement-leftTop,
  .ant-popover-placement-leftBottom {
    padding-right: 10px;
  }
  .ant-popover-inner {
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0 0 8px rgba(0, 0, 0, 0.15) \\9;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.15) \\9;
  }
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .ant-popover {
      /* IE10+ */
    }
    .ant-popover-inner {
      -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    }
  }
  .ant-popover-title {
    min-width: 177px;
    min-height: 32px;
    margin: 0;
    padding: 5px 16px 4px;
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
    border-bottom: 1px solid #e8e8e8;
  }
  .ant-popover-inner-content {
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
  .ant-popover-open {
    button {
      margin: 0;
    }
  }
  .ant-popover-message {
    position: relative;
    padding: 4px 0 12px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }
  .ant-popover-message > .anticon {
    position: absolute;
    top: 8px;
    color: #faad14;
    font-size: 14px;
  }
  .ant-popover-message-title {
    padding-left: 22px;
  }
  .ant-popover-buttons {
    margin-bottom: 4px;
    text-align: right;
  }
  .ant-popover-buttons button {
    margin-left: 8px;
  }
  .ant-popover-arrow {
    display: none;
  }
  .ant-popover-placement-top > .ant-popover-content > .ant-popover-arrow,
  .ant-popover-placement-topLeft > .ant-popover-content > .ant-popover-arrow,
  .ant-popover-placement-topRight > .ant-popover-content > .ant-popover-arrow {
    bottom: 6.2px;
    border-top-color: transparent;
    border-right-color: #fff;
    border-bottom-color: #fff;
    border-left-color: transparent;
    -webkit-box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
  }
  .ant-popover-placement-top > .ant-popover-content > .ant-popover-arrow {
    left: 50%;
    -webkit-transform: translateX(-50%) rotate(45deg);
    -ms-transform: translateX(-50%) rotate(45deg);
    transform: translateX(-50%) rotate(45deg);
  }
  .ant-popover-placement-topLeft > .ant-popover-content > .ant-popover-arrow {
    left: 16px;
  }
  .ant-popover-placement-topRight > .ant-popover-content > .ant-popover-arrow {
    right: 16px;
  }
  .ant-popover-placement-right > .ant-popover-content > .ant-popover-arrow,
  .ant-popover-placement-rightTop > .ant-popover-content > .ant-popover-arrow,
  .ant-popover-placement-rightBottom
    > .ant-popover-content
    > .ant-popover-arrow {
    left: 6px;
    border-top-color: transparent;
    border-right-color: transparent;
    border-bottom-color: #fff;
    border-left-color: #fff;
    -webkit-box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
    box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
  }
  .ant-popover-placement-right > .ant-popover-content > .ant-popover-arrow {
    top: 50%;
    -webkit-transform: translateY(-50%) rotate(45deg);
    -ms-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
  }
  .ant-popover-placement-rightTop > .ant-popover-content > .ant-popover-arrow {
    top: 12px;
  }
  .ant-popover-placement-rightBottom
    > .ant-popover-content
    > .ant-popover-arrow {
    bottom: 12px;
  }
  .ant-popover-placement-bottom > .ant-popover-content > .ant-popover-arrow,
  .ant-popover-placement-bottomLeft > .ant-popover-content > .ant-popover-arrow,
  .ant-popover-placement-bottomRight
    > .ant-popover-content
    > .ant-popover-arrow {
    top: 6px;
    border-top-color: #fff;
    border-right-color: transparent;
    border-bottom-color: transparent;
    border-left-color: #fff;
    -webkit-box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
    box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);
  }
  .ant-popover-placement-bottom > .ant-popover-content > .ant-popover-arrow {
    left: 50%;
    -webkit-transform: translateX(-50%) rotate(45deg);
    -ms-transform: translateX(-50%) rotate(45deg);
    transform: translateX(-50%) rotate(45deg);
  }
  .ant-popover-placement-bottomLeft
    > .ant-popover-content
    > .ant-popover-arrow {
    left: 16px;
  }
  .ant-popover-placement-bottomRight
    > .ant-popover-content
    > .ant-popover-arrow {
    right: 16px;
  }
  .ant-popover-placement-left > .ant-popover-content > .ant-popover-arrow,
  .ant-popover-placement-leftTop > .ant-popover-content > .ant-popover-arrow,
  .ant-popover-placement-leftBottom
    > .ant-popover-content
    > .ant-popover-arrow {
    right: 6px;
    border-top-color: #fff;
    border-right-color: #fff;
    border-bottom-color: transparent;
    border-left-color: transparent;
    -webkit-box-shadow: 3px -3px 7px rgba(0, 0, 0, 0.07);
    box-shadow: 3px -3px 7px rgba(0, 0, 0, 0.07);
  }
  .ant-popover-placement-left > .ant-popover-content > .ant-popover-arrow {
    top: 50%;
    -webkit-transform: translateY(-50%) rotate(45deg);
    -ms-transform: translateY(-50%) rotate(45deg);
    transform: translateY(-50%) rotate(45deg);
  }
  .ant-popover-placement-leftTop > .ant-popover-content > .ant-popover-arrow {
    top: 12px;
  }
  .ant-popover-placement-leftBottom
    > .ant-popover-content
    > .ant-popover-arrow {
    bottom: 12px;
  }
`);

export { StyledGlobalDropdown };