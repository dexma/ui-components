import styled, { css } from 'styled-components';
import { darken, saturate } from 'polished';
import {
  getButtonBase,
  getButtonSize,
  getIconSize,
  getButtonVariantPrimary,
  getButtonVariantSecondary,
} from './StyledButton';
import { primaryColor, borderRadius, white } from '../selectors';
import { StyledIcon } from './StyledIcon';

export const getSplitVariant = () => css`
  label {
    &.active {
      &:hover {
        background: ${primaryColor}!important;
        border-color: ${primaryColor}!important;
      }
    }
  }
  label:not(:last-child) {
    border-radius: ${borderRadius};
    margin-left: 0px;
  }
  label:not(:first-child) {
    border-radius: 4px;
    margin-left: 6px;
  }
  label + label {
    margin-top: -1px;
    margin-left: 0;
  }
`;

export const getCustomVariant = () => css`
  label {
    padding: 0px 8px !important;
    &:hover {
      ${StyledIcon} {
        fill: ${white}!important;
      }
    }
    &.active {
      background: ${white};
      border: 2px solid ${primaryColor};
      ${StyledIcon} {
        fill: ${primaryColor}!important;
      }
      &:hover {
        background: ${white};
        ${props => {
          let newCss = '';
          if (props.type === 'radio') {
            newCss = `
              border-color: ${primaryColor}!important;
            `;
          }
          return newCss;
        }}
      }
    }
  }
  label:not(:last-child) {
    border-radius: ${borderRadius};
    margin-left: 0px;
    margin-top: -1px;
  }
  label:not(:first-child) {
    border-radius: 4px;
    margin-left: 6px;
  }
  label + label {
    margin-top: -1px;
    margin-left: 0;
  }
`;

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
  ${props => (props.vertical ? getVertical(props) : getHorizontal(props))}
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
    width: 0px;
  }
  ${props => props.variant === 'split' && getSplitVariant(props)}
  ${props => props.variant === 'custom' && getCustomVariant(props)}
`;
export { StyledFieldGroup };
