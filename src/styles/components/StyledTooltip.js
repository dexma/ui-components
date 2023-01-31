import { css } from 'styled-components';

const StyledTooltip = css`
  .ant-tooltip {
    -webkit-box-sizing: border-box;
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
    z-index: 1060;
    display: block;
    max-width: 250px;
    visibility: visible;
  }
  .ant-tooltip-hidden {
    display: none;
  }
  .ant-tooltip-placement-top,
  .ant-tooltip-placement-topLeft,
  .ant-tooltip-placement-topRight {
    padding-bottom: 8px;
  }
  .ant-tooltip-placement-right,
  .ant-tooltip-placement-rightTop,
  .ant-tooltip-placement-rightBottom {
    padding-left: 8px;
  }
  .ant-tooltip-placement-bottom,
  .ant-tooltip-placement-bottomLeft,
  .ant-tooltip-placement-bottomRight {
    padding-top: 8px;
  }
  .ant-tooltip-placement-left,
  .ant-tooltip-placement-leftTop,
  .ant-tooltip-placement-leftBottom {
    padding-right: 8px;
  }
  .ant-tooltip-inner {
    min-width: 30px;
    min-height: 32px;
    padding: 6px 8px;
    color: #fff;
    text-align: left;
    text-decoration: none;
    word-wrap: break-word;
    background-color: rgba(0, 0, 0, 0.75);
    border-radius: 4px;
    -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  .ant-tooltip-arrow {
    position: absolute;
    display: block;
    width: 13.07106781px;
    height: 13.07106781px;
    overflow: hidden;
    background: transparent;
    pointer-events: none;
  }
  .ant-tooltip-arrow::before {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 5px;
    height: 5px;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.75);
    content: '';
    pointer-events: auto;
  }
  .ant-tooltip-placement-top .ant-tooltip-arrow,
  .ant-tooltip-placement-topLeft .ant-tooltip-arrow,
  .ant-tooltip-placement-topRight .ant-tooltip-arrow {
    bottom: -5.07106781px;
  }
  .ant-tooltip-placement-top .ant-tooltip-arrow::before,
  .ant-tooltip-placement-topLeft .ant-tooltip-arrow::before,
  .ant-tooltip-placement-topRight .ant-tooltip-arrow::before {
    -webkit-box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
    box-shadow: 3px 3px 7px rgba(0, 0, 0, 0.07);
    -webkit-transform: translateY(-6.53553391px) rotate(45deg);
    -ms-transform: translateY(-6.53553391px) rotate(45deg);
    transform: translateY(-6.53553391px) rotate(45deg);
  }
  .ant-tooltip-placement-top .ant-tooltip-arrow {
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .ant-tooltip-placement-topLeft .ant-tooltip-arrow {
    left: 13px;
  }
  .ant-tooltip-placement-topRight .ant-tooltip-arrow {
    right: 13px;
  }
  .ant-tooltip-placement-right .ant-tooltip-arrow,
  .ant-tooltip-placement-rightTop .ant-tooltip-arrow,
  .ant-tooltip-placement-rightBottom .ant-tooltip-arrow {
    left: -5.07106781px;
  }
  .ant-tooltip-placement-right .ant-tooltip-arrow::before,
  .ant-tooltip-placement-rightTop .ant-tooltip-arrow::before,
  .ant-tooltip-placement-rightBottom .ant-tooltip-arrow::before {
    -webkit-box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
    box-shadow: -3px 3px 7px rgba(0, 0, 0, 0.07);
    -webkit-transform: translateX(6.53553391px) rotate(45deg);
    -ms-transform: translateX(6.53553391px) rotate(45deg);
    transform: translateX(6.53553391px) rotate(45deg);
  }
  .ant-tooltip-placement-right .ant-tooltip-arrow {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .ant-tooltip-placement-rightTop .ant-tooltip-arrow {
    top: 5px;
  }
  .ant-tooltip-placement-rightBottom .ant-tooltip-arrow {
    bottom: 5px;
  }
  .ant-tooltip-placement-left .ant-tooltip-arrow,
  .ant-tooltip-placement-leftTop .ant-tooltip-arrow,
  .ant-tooltip-placement-leftBottom .ant-tooltip-arrow {
    right: -5.07106781px;
  }
  .ant-tooltip-placement-left .ant-tooltip-arrow::before,
  .ant-tooltip-placement-leftTop .ant-tooltip-arrow::before,
  .ant-tooltip-placement-leftBottom .ant-tooltip-arrow::before {
    -webkit-box-shadow: 3px -3px 7px rgba(0, 0, 0, 0.07);
    box-shadow: 3px -3px 7px rgba(0, 0, 0, 0.07);
    -webkit-transform: translateX(-6.53553391px) rotate(45deg);
    -ms-transform: translateX(-6.53553391px) rotate(45deg);
    transform: translateX(-6.53553391px) rotate(45deg);
  }
  .ant-tooltip-placement-left .ant-tooltip-arrow {
    top: 50%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .ant-tooltip-placement-leftTop .ant-tooltip-arrow {
    top: 5px;
  }
  .ant-tooltip-placement-leftBottom .ant-tooltip-arrow {
    bottom: 5px;
  }
  .ant-tooltip-placement-bottom .ant-tooltip-arrow,
  .ant-tooltip-placement-bottomLeft .ant-tooltip-arrow,
  .ant-tooltip-placement-bottomRight .ant-tooltip-arrow {
    top: -5.07106781px;
  }
  .ant-tooltip-placement-bottom .ant-tooltip-arrow::before,
  .ant-tooltip-placement-bottomLeft .ant-tooltip-arrow::before,
  .ant-tooltip-placement-bottomRight .ant-tooltip-arrow::before {
    -webkit-box-shadow: -3px -3px 7px rgba(0, 0, 0, 0.07);
    box-shadow: -3px -3px 7px rgba(0, 0, 0, 0.07);
    -webkit-transform: translateY(6.53553391px) rotate(45deg);
    -ms-transform: translateY(6.53553391px) rotate(45deg);
    transform: translateY(6.53553391px) rotate(45deg);
  }
  .ant-tooltip-placement-bottom .ant-tooltip-arrow {
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .ant-tooltip-placement-bottomLeft .ant-tooltip-arrow {
    left: 13px;
  }
  .ant-tooltip-placement-bottomRight .ant-tooltip-arrow {
    right: 13px;
  }
`;

export { StyledTooltip };