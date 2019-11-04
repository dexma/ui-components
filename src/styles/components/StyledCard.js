import styled from 'styled-components';
import {
  borderRadius,
  backgroundColor,
  boxShadow,
  fontSize,
  fontColor,
  cardPaddingX,
  cardPaddingY,
  cardFontSize,
  gray700,
  gray900,
} from 'styles/selectors';

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  //height: $card-height;
  word-wrap: break-word;
  background-color: ${backgroundColor};
  background-clip: border-box;
  border-radius: ${borderRadius};
  box-shadow: ${boxShadow};

  > hr {
    margin-right: 0;
    margin-left: 0;
  }

  .card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: ${cardPaddingX};
    color: ${fontColor};
    .card-title {
      margin-bottom: ${cardPaddingY};
      font-weight: 900;
      font-size: ${cardFontSize};
      color: ${gray900};
    }

    .card-subtitle {
      margin-top: -${cardPaddingY} / 2;
      margin-bottom: 0;
      font-size: ${fontSize};
      color: ${gray700};
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
`;
export { StyledCard };
