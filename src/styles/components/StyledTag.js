import styled, { css } from 'styled-components';
import { darken, transparentize } from 'polished';
import {
  tagHeight,
  tagFontSize,
  tagPaddingX,
  white,
  fontWeightSemiBold,
} from 'styles/selectors';

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

export const getTagOutline = ({ color }) => {
  const tagBackgroundColor = transparentize(0.9, color);
  const tagColor = darken(0.1, color);
  return css`
    border-color: ${color};
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
  height: ${tagHeight};
  margin-right: ${tagPaddingX};
  padding: 0 ${tagPaddingX};
  font-size: ${tagFontSize};
  font-weight: ${fontWeightSemiBold};
  line-height: ${tagHeight};
  white-space: nowrap;
  cursor: default;
  opacity: 1;
  border: 1px solid;
  background: ${props => props.color && props.color};
  border-radius: ${props => (props.type === 'rounded' ? 16 : 4)}px;
  ${props => props.onClick && 'cursor: pointer'};
  ${props => props.variant === 'primary' && getTagPrimary};
  ${props => props.variant === 'outline' && getTagOutline};
  ${StyledIcon} {
    margin-right: 2px;
    margin-left: -2px;
  }
`;

export { StyledTag };
