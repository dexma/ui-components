import styled from 'styled-components';
import {
  backgroundColor,
  fontSize,
  fontColor,
  fontWeightBold,
} from 'styles/selectors';

import { StyledButton } from 'styles/components/StyledButton';

const StyledFieldEditable = styled.div`
  width: auto;
  border: none;
  background-color: ${backgroundColor};
  word-wrap: break-word;
  word-break: break-word;
  max-width: 100%;
  position: relative;
  box-sizing: border-box;
  transition: box-shadow 150ms ease-in 0ms;
  border-radius: 2.01px;
  cursor: text;
  display: inline-block;
  box-shadow: 0 0 0 0 transparent;
  &.hasError {
    border: 1px solid #cc4b37;
    input {
      border: 0px;
      min-width: 30px;
    }
  }
  &.active {
    padding: 0px;
    background-color: #f0f0f0;
    input {
      margin: 0 1rem;
    }
  }
  ${StyledButton} {
    box-sizing: border-box;
    color: #979494;
    font-size: 11px;
    cursor: pointer;
    border: 0px;
    box-shadow: none;
    border-radius: 0px 2px 2px 0px;
    padding: 0.8rem 0.4rem;
    background: transparent;
  }
  ${StyledButton}:last-child {
    padding-right: 0.8rem;
  }
  ${StyledButton}:not (:last-child) {
    border-radius: 0px;
    padding-left: 0.8rem;
  }
  input {
    height: 30px;
    color: ${fontColor};
    font-weight: ${fontWeightBold};
    font-size: ${fontSize};
    border: 0px;
    outline: none;
    width: 100%;
    background: transparent;
  }
  .editable {
    align-items: center;
  }
`;

export { StyledFieldEditable };
