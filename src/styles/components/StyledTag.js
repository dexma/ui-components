import styled, { css } from 'styled-components';
import { darken, transparentize } from 'polished';
import {
  tagFontSize,
  tagPaddingX,
  tagPaddingY,
  white,
  fontWeightSemiBold,
  border,
  borderRadius,
} from 'styles/selectors';
import get from 'lodash/get';

import { StyledIcon } from 'styles/components/StyledIcon';

export const getTagPrimary = () => {
  return css`
    border-color: transparent;
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
  line-height: ${tagFontSize};
  white-space: nowrap;
  cursor: default;
  opacity: 1;
  border: ${border};
  background: ${props => props.color && getTagColor(props)};
  border-radius: ${props => (props.type === 'rounded' ? '16px' : borderRadius)};
  ${props => props.onClick && 'cursor: pointer'};
  ${props => props.variant === 'primary' && getTagPrimary};
  ${props => props.variant === 'outline' && getTagOutline};
  ${StyledIcon} {
    margin-right: 2px;
    margin-left: -2px;
  }
`;

export { StyledTag };
