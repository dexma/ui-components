import styled, { css } from 'styled-components';
import { transparentize } from 'polished';
import {
  border,
  borderColor,
  backgroundColor,
  backgroundColorActive,
  backgroundColorSelected,
  boxShadow,
  fontColor,
  gray100,
  fontWeightBold,
  iconColor,
  borderRadius,
  selectFontSize,
  selectHeight,
  selectPaddingX,
  primaryColor,
  fontWeightSemiBold,
  boxShadowHover,
  tagFontSize,
  tagHeight,
} from '../selectors';

export const getSelectSize = props => {
  return css`
    font-size: ${selectFontSize};
    line-height: ${selectFontSize};
    padding: 0 ${selectPaddingX};
    min-height: ${selectHeight};
    height: ${props.isMulti ? 'auto' : selectHeight(props)};
  `;
};

const StyledSelect = styled.div`
  .css-1aya2g8 {
    background: ${backgroundColor};
    border-radius: ${borderRadius};
    border: ${border};
    margin: 0;
    padding: 0;
    cursor: text;
    overflow: hidden;
  }
  .css-2o5izw,
  .css-1aya2g8 {
    height: calc(${selectHeight} - 2px);
    line-height: calc(${selectHeight} - 2px);
    border-radius: ${borderRadius};
    border: ${border};
  }
  .css-1aya2g8:hover,
  .css-1aya2g8:focus,
  .css-2o5izw:hover {
    border-color: ${borderColor};
    box-shadow: none;
  }
  .css-d8oujb {
    display: none;
  }
  .css-15k3avv {
    background-color: hsl(0, 0%, 100%);
    border-radius: 0px 0px ${borderRadius} ${borderRadius};
    border: ${border};
    box-shadow: ${boxShadowHover};
    margin-bottom: 0px;
    margin-top: -1px;
    position: absolute;
    width: 100%;
    z-index: 1;
    box-sizing: border-box;
  }
  .css-11unzgr {
    padding-top: 0px;
    padding-bottom: 0px;
  }
  .css-1ep9fjw {
    padding: 5px;
  }
  .css-1sjym57,
  .css-1rtrksz {
    padding: 0 6px;
  }
  .css-rsyb7x {
    margin: 0;
    padding-bottom: 0px;
  }

  //Items options
  .css-z5z6cw,
  .css-v73v8k,
  .css-wqgs6e {
    padding: 6px 6px;
  }

  // Item selected and intem option background
  .css-wqgs6e {
    background-color: ${backgroundColorSelected};
  }

  //Item selected
  .css-10odw4q {
    color: inherit;
    font-weight: ${fontWeightBold};
  }

  .css-1alnv5e:hover {
    background-color: transparent;
    color: inherit;
    cursor: pointer;
  }

  // Start refactoring scss

  .select-styled__placeholder {
    color: ${iconColor};
    font-size: ${selectFontSize};
  }

  // Dropdown
  .select-styled__dropdown-indicator,
  .select-styled__dropdown-indicator:hover {
    color: ${iconColor};
    cursor: pointer;
  }

  .css-1g6gooi {
    padding: 0px;
    margin: 0px;
  }

  .select-styled__menu {
    box-shadow: ${boxShadow};
  }

  .select-styled__menu-list {
    padding-bottom: 0px;
    padding-top: 0px;
  }

  .select-styled__option {
    color: ${fontColor};
    font-size: ${selectFontSize};
    text-align: left;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .select-styled__option,
  .select-styled__option--is-selected {
    font-size: ${selectFontSize};
    padding: 0 ${selectPaddingX};
    height: ${selectHeight};
    line-height: ${selectHeight};
  }

  // Control
  .select-styled__control,
  .select-styled__control:hover {
    border: ${border};
    box-shadow: none;
  }
  .select-styled__control {
    border-radius: ${borderRadius};
    ${getSelectSize};
  }
  .select-styled__indicator-separator {
    display: none;
  }

  .select-styled__value-container {
    padding: 0;
  }

  // Multiple
  .select-styled__value-container--is-multi {
    padding: 2px 0;
    .css-1g6gooi {
      height: ${tagHeight};
      line-height: ${tagHeight};
    }
  }

  .select-styled__multi-value {
    color: ${fontColor};
    font-size: ${tagFontSize};
    font-weight: ${fontWeightSemiBold};
    border: 0px;
    background: ${gray100};
    margin: 2px;
    height: ${tagHeight};
    line-height: ${tagHeight};
  }

  .select-styled__multi-value__label {
    padding: 0px 0px 0px 6px;
  }

  // Menu
  .select-styled__menu {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px,
      rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
    border-radius: ${borderRadius};
    margin-bottom: 0px;
    margin-top: 0px;
  }
  .select-styled__option--is-selected {
    background-color: ${props =>
      transparentize(0.6, backgroundColorActive(props))}!important;
    color: ${fontColor};
  }
  .select-styled__control--menu-is-open {
    border-color: ${primaryColor}!important;
  }
  .select-styled__option:active,
  .select-styled__option--is-focused {
    background-color: ${backgroundColorSelected};
  }
  .select-styled__dropdown-indicator,
  .select-styled__dropdown-indicator:hover,
  .select-styled__single-value {
    font-size: ${selectFontSize};
    color: ${fontColor};
    padding: 0px;
  }
  .select-styled__input {
    input {
      box-shadow: none !important;
      outline: none !important;
      outline: 0px !important;
    }
  }

  .select-styled__clear-indicator {
    padding: 0px 2px 0px 0px;
    cursor: pointer;
  }
`;

export { StyledSelect };
