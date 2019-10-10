import styled from 'styled-components';

import { StyledButton } from 'styles/components/StyledButton';

const StyledButtonGroup = styled.div`
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  ${StyledButton} {
    position: relative;
    flex: 0 1 auto;
  }
  &.vertical {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    ${StyledButton}:not(:last-child) {
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 0;
    }
    ${StyledButton}:not(:first-child) {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
    ${StyledButton} + ${StyledButton} {
      margin-top: -1px;
      margin-left: 0;
    }
  }
  &.horizontal {
    ${StyledButton}:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    ${StyledButton}:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    ${StyledButton} + ${StyledButton} {
      margin-left: -1px;
    }
    ${StyledButton}:not(:disabled) {
      cursor: pointer;
    }
  }
`;
export { StyledButtonGroup };
