import styled, { css } from 'styled-components';
import { StyledIcon } from './StyledIcon';

import {
  alertMessageFontSize,
  alertDescriptionMessageFontSize,
  white,
  successColor,
  warningColor,
  errorColor,
  infoColor,
  gray100,
  gray200,
  gray700,
  gray900,
  blue700,
  gray800,
  fontWeightSemiBold,
  fontWeightNormal,
  borderRadius,
} from '../selectors';

const getAlertTypeColor = props => {
  let bgColor = '';
  switch (props.type) {
    case 'basic':
      bgColor = gray100;
      break;
    case 'outline':
      bgColor = white;
      break;
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
  ${props => {
    let iconColor;
    let textColor;
    let borderColor;
    switch (props.type) {
      case 'basic':
        textColor = gray700;
        iconColor = gray700;
        borderColor = gray100;
        break;
      case 'outline':
        textColor = gray900;
        iconColor = gray900;
        borderColor = gray200;
        break;
      case 'success':
        textColor = white;
        iconColor = white;
        borderColor = successColor;
        break;
      case 'info':
        textColor = blue700;
        iconColor = blue700;
        borderColor = infoColor;
        break;
      case 'warning':
        textColor = gray800;
        iconColor = gray800;
        borderColor = warningColor;
        break;
      case 'error':
        textColor = white;
        iconColor = white;
        borderColor = errorColor;
        break;
      default:
        break;
    }
    return css`
      color: ${textColor};
      border: 1px solid ${borderColor};
      ${StyledIcon} {
        fill: ${iconColor};
      }
    `;
  }}

  .icon {
    left: 0px;
    margin-right: 10px;
  }

  .description {
    position: relative;
    padding: ${props =>
      props.showIcon ? '10px 15px 10px 30px' : '10px 15px 10px 0px'};
    line-height: 1.5;
    border-radius: ${borderRadius};
    flex-direction: column;
    align-items: start;
    font-size: ${alertDescriptionMessageFontSize};
  }

  .icon-close {
    position: absolute;
    top: 15px;
    right: 20px;
    overflow: hidden;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }

  .message {
    display: flex;
    font-weight: ${fontWeightSemiBold};
    font-weight: ${props =>
      !props.message && props.description
        ? fontWeightNormal(props)
        : fontWeightSemiBold(props)};
    font-size: ${alertMessageFontSize};
    .description {
      position: relative;
      padding: ${props =>
        props.showIcon ? '0px 15px 10px 0px' : '0px 0px 10px 0px'};
      line-height: 1.5;
      border-radius: ${borderRadius};
      flex-direction: column;
      align-items: start;
      font-size: ${alertDescriptionMessageFontSize};
    }
  }

  .description .alert-icon {
    position: absolute;
    top: 10px;
    left: 20px;
  }
`;

export { StyledAlert };
