import styled from 'styled-components';
import { progressHeight, progressBackgroundColor } from 'styles/selectors';
import get from 'lodash/get';

const TRANSPARENT = '60';

const StyledProgress = styled.div`
  .outer {
    display: inline-block;
    width: 100%;
    margin-right: calc(-10em - 8px);
    padding-right: calc(10em + 8px);
    position: relative;
    .inner {
      position: relative;
      display: inline-block;
      width: 100%;
      vertical-align: middle;
      background-color: ${progressBackgroundColor};
      border-radius: 0;
      border-bottom: 1px solid ${props => get(props.theme.color, props.color)};
      height: 9px;
      .background {
        position: relative;
        background-color: ${props => {
          const bgColor = get(props.theme.color, props.color);
          if (props.isTransparent) {
            return `${bgColor}${TRANSPARENT}`;
          }
          return bgColor;
        }};
        border-radius: 0;
        transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
        height: ${progressHeight};
        width: ${props => props.percent}%;
        margin-left: 0;
      }
    }
  }
  .text {
    display: inline-block;
    width: 10em;
    margin-left: 8px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 0.75rem;
    line-height: 1;
    white-space: nowrap;
    text-align: left;
    vertical-align: middle;
    word-break: normal;
  }
`;

const StyledMark = styled.div`
  position: absolute;
  width: 1px;
  height: 18px;
  background: ${props => get(props.theme.color, props.color)};
  top: -4px;
  left: ${props => props.value}%;
`;

export { StyledProgress, StyledMark };
