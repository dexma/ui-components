import styled, { css } from 'styled-components';
import { primaryColor } from 'styles/selectors';
import { darken, saturate } from 'polished';
import {
  getButtonBase,
  getButtonSize,
  getIconSize,
  getButtonVariantPrimary,
  getButtonVariantSecondary,
} from 'styles/components/StyledButton';

export const getVertical = () => css`
  display: flex;
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
  display: inline-flex;
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
    ${getButtonVariantSecondary};
    margin: 0;
    &.active {
      ${getButtonVariantPrimary};
    }
  }
  .active + .active {
    border-left: 1px solid
      ${props => darken(0.1, saturate(0.2, primaryColor(props)))};
  }

  input {
    opacity: 0;
    -moz-appearance: none;
    -webkit-appearance: none;
  }
`;
export { StyledFieldGroup };
