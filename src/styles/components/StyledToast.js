import styled from 'styled-components';
import {
  gray300Color,
  successColor,
  warningColor,
  errorColor,
  fontSize,
} from 'styles/selectors';

const StyledToast = styled.div`
  .toast {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 360px;
    display: flex;
    align-items: center;
    padding: 10px;
    margin: 20px;
    border-radius: 4px;
    color: white;
    font-weight: 500;
    font-size: ${fontSize};

    &.info {
      background-color: ${gray300Color};
    }
    &.success {
      background-color: ${successColor};
    }
    &.warning {
      background-color: ${warningColor};
      color: black;
    }
    &.error {
      background-color: ${errorColor};
    }

    span {
      margin-left: 10px;
    }
  }
`;

export { StyledToast };
