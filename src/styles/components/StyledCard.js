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
  gray100,
  gray500,
  gray700,
  gray900,
} from 'styles/selectors';

import { StyledIcon } from 'styles/components/StyledIcon';
import { StyledParagraph } from 'styles/components/StyledParagraph';
import { StyledButton } from 'styles/components/StyledButton';

export const getHorizontal = () => {
  return css`
    flex-direction: row;
    .card-header {
      width: 33.33333333%;
    }
    .card-body {
      width: 66.66666667%;
    }
  `;
};
const StyledCard = styled.div`
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

  ${props => props.isHorizontal && getHorizontal}
`;
export { StyledCard };
