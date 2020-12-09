import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { headingFontSize } from '../selectors';

const getSizes = props => {
  const fontSizes = headingFontSize(props);
  const typeHeading = props.as;
  return css`
    font-size: ${fontSizes[typeHeading]};
  `;
};

const StyledHeading = styled.div`
  ${props => getSizes(props)};
  color: ${props => get(props.theme.color, props.color)};
`;

export { StyledHeading };
