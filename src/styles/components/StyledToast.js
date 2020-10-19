/* eslint-disable import/no-cycle */
import styled from 'styled-components';
import {
  gray300,
  successColor,
  warningColor,
  errorColor,
  fontSize,
} from '../selectors';
import { ToastType } from '../../components/Toaster/Toast';

const StyledToast = styled.div`
  position: fixed;
  z-index: 100000;
  top: 0;
  right: 0;
  width: 360px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 20px;
  border-radius: 4px;
  font-weight: 500;
  font-size: ${fontSize};
  color: ${props => {
    return {
      [ToastType.INFO]: 'white',
      [ToastType.SUCCESS]: 'white',
      [ToastType.WARNING]: 'black',
      [ToastType.ERROR]: 'white',
    }[props.type];
  }};
  background-color: ${props => {
    return {
      [ToastType.INFO]: gray300,
      [ToastType.SUCCESS]: successColor,
      [ToastType.WARNING]: warningColor,
      [ToastType.ERROR]: errorColor,
    }[props.type];
  }};

  span {
    margin-left: 10px;
  }
`;

export { StyledToast };
