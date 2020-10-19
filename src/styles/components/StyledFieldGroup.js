import styled, { css } from 'styled-components';
import { darken, saturate } from 'polished';
import {
  getButtonBase,
  getButtonSize,
  getIconSize,
  getButtonVariantPrimary,
  getButtonVariantSecondary200,
} from './StyledButton';
import { gray300, primaryColor } from '../selectors';

export const getVertical = () => css`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  label:not(:last-child) {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  label:not(:first-child) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  label + label {
    margin-top: -1px;
    margin-left: 0;
  }
`;

export const getHorizontal = () => css`
  display: flex;
  label:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  label:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  label + label {
    margin-left: -1px;
  }
  label:not(:disabled) {
    cursor: pointer;
  }
`;

const StyledFieldGroup = styled.div`
  position: relative;
  vertical-align: middle;
  .vertical {
    ${getVertical}
  }
  .horizontal {
    ${getHorizontal}
  }
  label {
    ${getButtonBase};
    ${props => props.size && getButtonSize}
    ${getIconSize};
    ${getButtonVariantSecondary200};
    margin: 0;
    &.active {
      ${getButtonVariantPrimary};
    }
    &:hover {
      border-color: ${gray300};
      background-color: ${gray300};
    }
  }
  .active + .active {
    border-left: 1px solid
      ${props => darken(0.1, saturate(0.2, primaryColor(props)))};
  }

  input {
    opacity: 0;
    width: 0px;
  }
`;
export { StyledFieldGroup };
