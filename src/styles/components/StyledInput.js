import styled, { css } from 'styled-components';
import {
  gray500,
  border,
  primaryColor,
  borderRadius,
  inputHeight,
  inputFontSize,
  inputPaddingX,
} from '../selectors';
import { StyledSpinner } from './StyledSpinner';

export const getLoading = () => {
  return css`
    border: ${border};
    border-radius: ${borderRadius};
    ${props => props.focused && `border-color: ${primaryColor(props)}`};
    input {
      padding-right: 40px;
      border: none;
    }
    ${StyledSpinner} {
      position: absolute;
      right: 10px;
      top: 6.5px;
    }
  `;
};

export const getIcon = () => {
  return css`
    border: ${border};
    border-radius: ${borderRadius};
    ${props => props.focused && `border-color: ${primaryColor(props)}`};
    input {
      padding-left: 0;
      border: none;
    }
    .icon-container {
      height: ${inputHeight};
      line-height: ${inputHeight};
      display: inline-flex;
      border-radius: ${borderRadius} 0 0 ${borderRadius};
      padding: 0 0.5rem;
      display: flex;
      align-items: center;
    }
  `;
};

const StyledInput = styled.div`
  position: relative;
  zoom: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    border: ${border};
    border-radius: ${borderRadius};
    padding: 0 ${inputPaddingX};
    height: ${inputHeight};
    line-height: ${inputHeight};
    font-size: ${inputFontSize};
    display: inline-flex;
    flex: 1 1 auto;
    width: 100%;
    color: ${gray500};
    ${props => props.focused && `border: 1px solid ${primaryColor(props)}`};
  }
  ${props => props.icon && getIcon};
  ${props => props.isLoading && getLoading};
`;

export { StyledInput };
