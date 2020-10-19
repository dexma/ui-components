import styled, { css } from 'styled-components';
import {
  borderRadius,
  backgroundColor,
  boxShadow,
  boxShadowHover,
  fontSize,
  fontColor,
  fontWeightNormal,
  fontWeightSemiBold,
  cardPaddingX,
  cardPaddingY,
  cardFontSize,
  cardLineHeight,
  gray100,
  gray500,
  gray700,
  gray900,
} from '../selectors';

import { StyledIcon } from './StyledIcon';
import { StyledParagraph } from './StyledParagraph';
import { StyledButton } from './StyledButton';

export const getHorizontal = () => {
  return css`
    flex-direction: row;
    .card-header {
      width: 33.33333333%;
    }
    .horizontal {
      flex-direction: column;
      width: 66.66666667%;
      display: flex;
      .card-body {
        flex: 1 1 100%;
        align-items: flex-start;
        justify-content: center;
        /* align-self: center; */
        display: flex;
        flex-direction: column;
        padding: 1.25rem;
      }
      .card-footer {
        width: 100%;
        flex: auto;
      }
    }
  `;
};

export const getTextTruncate = () => css`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const getStyleCard = css`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  //height: $card-height;
  word-wrap: break-word;
  background-clip: border-box;
  background-color: ${gray100};
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};
  overflow: hidden;
  width: 100%;
  &:hover {
    box-shadow: ${boxShadowHover};
    .card-body,
    .card-footer {
      background: ${backgroundColor};
    }
  }

  > hr {
    margin-right: 0;
    margin-left: 0;
  }

  .card-header {
    display: flex;
    flex-shrink: 0;
    width: 100%;
    background-color: ${backgroundColor};
    .card-img,
    ${StyledIcon} {
      width: 100%;
      align-self: center;
      object-fit: cover;
      height: 100%;
    }
  }
  .card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: ${props =>
      props.hasFooter
        ? css`${cardPaddingX} ${cardPaddingX} ${cardPaddingY} ${cardPaddingX}`
        : cardPaddingX};
    color: ${fontColor};
    .card-title {
      margin-bottom: ${cardPaddingY};
      font-weight: ${fontWeightSemiBold};
      font-size: ${cardFontSize};
      color: ${gray900};
      line-height: ${cardLineHeight};
    }

    .card-subtitle {
      margin-bottom: 0;
      font-size: ${fontSize};
      color: ${gray700};
      font-weight: ${fontWeightNormal};
    }

    ${StyledParagraph} {
      font-size: ${fontSize};
      color: ${gray500};
    }

    .card-text:last-child {
      margin-bottom: 0;
    }

    .card-link {
      &:hover {
        text-decoration: none;
      }

      + .card-link {
        margin-left: ${cardPaddingX};
      }
    }
  }
  .card-footer {
    padding: 0 ${cardPaddingX} ${cardPaddingX} ${cardPaddingX};
    a,
    div,
    ${StyledButton} {
      margin: 0;
    }
  }
  ${props => props.isHorizontal && getHorizontal};
`;

const StyledCard = styled.div`
  ${getStyleCard};
`;

const StyledCardLink = styled.a`
  ${getStyleCard};
`;

export { StyledCard, StyledCardLink };
