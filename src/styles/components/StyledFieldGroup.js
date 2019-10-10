import styled from 'styled-components';
import { button, active } from 'styles/mixins';

const StyledFieldGroup = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  .item {
    ${button};
    &.active {
      ${active};
    }
  }
  .vertical {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    .item:not(:last-child) {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    .item:not(:first-child) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    .item + .item {
      margin-top: -1px;
      margin-left: 0;
    }
  }
  .horizontal {
    display: flex;
    .item:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .item:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .item + .item {
      margin-left: -1px;
    }
    .item:not(:disabled) {
      cursor: pointer;
    }
  }
  input {
    opacity: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;
export { StyledFieldGroup };
