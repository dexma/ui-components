import styled, { css } from 'styled-components';
import { StyledIcon } from './StyledIcon';

import {
  fontSize,
  white,
  successColor,
  warningColor,
  errorColor,
  infoColor,
  fontWeightSemiBold,
  borderRadius,
} from '../selectors';

const getAlertTypeColor = props => {
  let bgColor = '';
  switch (props.type) {
    case 'success':
      bgColor = successColor;
      break;
    case 'info':
      bgColor = infoColor;
      break;
    case 'warning':
      bgColor = warningColor;
      break;
    case 'error':
      bgColor = errorColor;
      break;
    default:
      break;
  }
  return css`
    background-color: ${bgColor};
  `;
};

const StyledAlert = styled.div`
  ${getAlertTypeColor};
  box-sizing: border-box;
  margin: 0;
  font-size: ${fontSize};
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  word-wrap: break-word;
  border-radius: ${borderRadius};
  display: flex;
  align-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: ${props => (props.description ? '15px 20px 5px 20px' : '10px 20px')};
  ${StyledIcon} {
    fill: ${white};
  }
  .icon {
    left: 0px;
    margin-right: 10px;
  }

  .description {
    position: relative;
    padding: ${props =>
      props.showIcon ? '10px 15px 10px 30px' : '10px 15px 10px 0px'};
    color: ${white};
    line-height: 1.5;
    border-radius: ${borderRadius};
    flex-direction: column;
    align-items: start;
  }

  .icon-close {
    position: absolute;
    top: 10px;
    right: 20px;
    overflow: hidden;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .message {
    display: flex;
    color: ${white};
    font-weight: ${fontWeightSemiBold};
  }

  .description .alert-icon {
    position: absolute;
    top: 10px;
    left: 20px;
  }
`;

export { StyledAlert };
