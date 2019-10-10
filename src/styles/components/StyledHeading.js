import styled, { css } from 'styled-components';
import { border, headingFontSize, headingLineHeight } from 'styles/selectors';

const getSizes = props => {
  const fontSizes = headingFontSize(props);
  const lineHeight = headingLineHeight(props);
  return Object.keys(fontSizes).map(heading => {
    return css`
      ${heading} {
        font-size: ${fontSizes[heading]};
        line-height: ${lineHeight[heading]};
      }
    `;
  });
};

const StyledHeading = styled.div`
  padding: 0.6rem 0;
  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
  }
  ${props => getSizes(props)}
  .line-bottom {
    border-bottom: ${border};
  }
`;

export { StyledHeading };
