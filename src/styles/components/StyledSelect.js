import styled from 'styled-components';
import {
  border,
  borderColor,
  backgroundColor,
  backgroundColorActive,
  backgroundColorSelected,
  fontSize,
  fontColor,
  fontWeightBold,
  iconColor,
  iconColorActive,
  componentHeight,
  borderRadius,
} from 'styles/selectors';

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
    min-height: 32px;
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
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
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
  .css-1g6gooi {
    margin: 0;
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
    font-size: ${fontSize};
  }

  // Dropdown
  .select-styled__dropdown-indicator,
  .select-styled__dropdown-indicator:hover {
    color: ${iconColor};
    cursor: pointer;
  }
  .select-styled__control {
    min-height: ${componentHeight};
    border-radius: ${borderRadius};
    font-size: ${fontSize};
  }
  .select-styled__value-container,
  .select-styled__dropdown-indicator {
    padding: 0 10px;
  }
  .select-styled__menu-list {
    padding-bottom: 0px;
    padding-top: 0px;
  }
  .select-styled__option,
  .select-styled__option--is-selected {
    padding: 5px 10px;
    font-size: 12px;
  }

  // Control
  .select-styled__control,
  .select-styled__control:hover {
    border: ${border};
    box-shadow: none;
  }
  .select-styled__indicator-separator {
    background: ${backgroundColorSelected};
  }

  // Menu
  .select-styled__menu {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 2px 6px,
      rgba(0, 0, 0, 0.07) 0px 0px 0px 1px;
    border-radius: ${borderRadius};
    margin-bottom: 8px;
    margin-top: 5px;
  }
  .select-styled__option--is-selected {
    background-color: ${backgroundColorActive}!important;
    color: ${iconColorActive};
  }
  .select-styled__option:active,
  .select-styled__option--is-focused {
    background-color: ${backgroundColorSelected};
  }
  .select-styled__menu-list {
    max-height: 315px;
  }
  .select-styled .select-styled__dropdown-indicator,
  .select-styled .select-styled__dropdown-indicator:hover,
  .select-styled__single-value {
    font-size: ${fontSize};
    color: ${fontColor};
  }
  .select-styled__input {
    input {
      box-shadow: none !important;
      outline: none !important;
      outline: 0px !important;
    }
  }
`;

export { StyledSelect };
