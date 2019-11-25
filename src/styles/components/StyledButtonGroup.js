import styled, { css } from 'styled-components';
import { StyledButton } from 'styles/components/StyledButton';

export const getButtonGroupBase = () => css`
  ${StyledButton} {
    margin-right: 0;
    &:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin-left: -1px;
    }

    &:focus,
    &:active,
    &.active {
      box-shadow: none;
    }
  }
`;
const StyledButtonGroup = styled.div`
  ${getButtonGroupBase};
`;
export { StyledButtonGroup };
