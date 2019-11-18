// Handy CSS animations for micro-interactions
import { css } from 'styled-components';
import get from 'lodash/get';
import { buttonSize } from '../selectors';

export const getTooltipSize = props => {
  const sizeProps = get(buttonSize(props), props.size);
  const { paddingX, fontSize } = sizeProps;
  return css`
    font-size: ${fontSize};
    padding: 0 ${paddingX};
  `;
};

const getTooltip = css`
  &[data-tooltip] {
    position: relative;
    transition: all 0.3s;
    outline: none;
    i {
      opacity: 0.3;
    }
    &::before {
      content: '';
      position: absolute;
      top: -6px;
      left: 50%;
      transform: translateX(-50%);
      border-width: 4px 6px 0 6px;
      border-style: solid;
      border-color: rgba(0, 0, 0, 0.8) transparent transparent transparent;
      z-index: 100;
    }
    &::after {
      text-shadow: none;
      content: attr(data-tooltip);
      position: absolute;
      left: 50%;
      top: -6px;
      transform: translateX(-50%) translateY(-100%);
      background: rgba(0, 0, 0, 0.8);
      text-align: center;
      color: #fff;
      border-radius: 4px;
      pointer-events: none;
      display: flex;
      flex-direction: row;
      margin: 0;
      justify-content: center;
      align-items: center;
      align-content: center;
      z-index: 99999;
      ${props => props.size && getTooltipSize}
    }
  }
`;

export { getTooltip };
