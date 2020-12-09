import styled, { css } from 'styled-components';
import get from 'lodash/get';

import { paragraphSize } from '../selectors';

const getParagraphSize = props => {
  const sizeArray = Object.entries(paragraphSize(props));
  let newCss = '';
  sizeArray.forEach(sizeItem => {
    const [size, { fontSize, lineHeight }] = sizeItem;
    if (props.size === size) {
      newCss += `
        font-size: ${fontSize};
        line-height: ${lineHeight};
      `;
    }
  });
  return css`
    ${newCss}
  `;
};

const StyledParagraph = styled.p`
  margin: ${props => props.margin};
  color: ${props => get(props.theme.color, props.color)};
  ${getParagraphSize};
`;

export { StyledParagraph };
