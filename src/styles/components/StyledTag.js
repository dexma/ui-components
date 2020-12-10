import styled, { css } from 'styled-components';
import { darken, transparentize } from 'polished';
import get from 'lodash/get';
import {
  tagLineHeight,
  tagFontSize,
  tagPaddingX,
  tagPaddingY,
  white,
  fontWeightSemiBold,
  border,
  borderRadius,
} from '../selectors';

import { StyledIcon } from './StyledIcon';

export const getTagPrimary = props => {
  const themeColor = getTagColor(props);
  return css`
    border-color: ${themeColor};
    color: ${white};
    ${StyledIcon} {
      fill: ${white};
    }
  `;
};

const getTagColor = props => {
  const { theme, color } = props;
  return get(theme.color, color);
};

export const getTagOutline = props => {
  const themeColor = getTagColor(props);
  const tagBackgroundColor = transparentize(0.9, themeColor);
  const tagColor = darken(0.1, themeColor);
  return css`
    border-color: ${themeColor};
    color: ${tagColor};
    background: ${tagBackgroundColor};
    ${StyledIcon} {
      fill: ${tagColor};
    }
  `;
};

const StyledTag = styled.div`
  display: inline-flex;
  align-items: center;
  padding: ${tagPaddingX} ${tagPaddingY};
  font-size: ${tagFontSize};
  font-weight: ${fontWeightSemiBold};
  line-height: ${tagLineHeight};
  white-space: nowrap;
  cursor: default;
  opacity: 1;
  border: ${border};
  background: ${props => props.color && getTagColor(props)};
  border-radius: ${props => (props.type === 'rounded' ? '16px' : borderRadius)};
  ${props => props.variant === 'primary' && getTagPrimary};
  ${props => props.variant === 'outline' && getTagOutline};
  ${StyledIcon} {
    ${props =>
      props.icon &&
      css`
        &.icon {
          margin-right: 3px;
          margin-left: -2px;
        }
      `};
    ${props =>
      props.closable &&
      css`
        &.icon-close {
          cursor: pointer;
          margin-right: -2px;
          margin-left: 3px;
        }
      `};
  }
`;

export { StyledTag };
