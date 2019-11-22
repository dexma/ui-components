import styled, { css } from 'styled-components';
import { headingFontSize } from 'styles/selectors';

const getSizes = props => {
  const fontSizes = headingFontSize(props);
  return Object.keys(fontSizes).map(heading => {
    return css`
      ${heading} {
        font-size: ${fontSizes[heading]};
      }
    `;
  });
};

const StyledHeading = styled.div`
  ${props => getSizes(props)}
`;

export { StyledHeading };
