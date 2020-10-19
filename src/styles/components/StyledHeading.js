import styled, { css } from 'styled-components';
import { headingFontSize } from '../selectors';

const getSizes = props => {
  const fontSizes = headingFontSize(props);
  const typeHeading = props.as;
  return css`
    font-size: ${fontSizes[typeHeading]};
  `;
};

const StyledHeading = styled.div`
  ${props => getSizes(props)}
`;

export { StyledHeading };
