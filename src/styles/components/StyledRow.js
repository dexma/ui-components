import styled, { css } from 'styled-components';
import { gridGutterCompensation } from 'styles/selectors';

const getAlignItems = align => {
  let newAlign = '';
  if (align === 'start') newAlign = 'flex-start';
  if (align === 'center') newAlign = 'center';
  if (align === 'end') newAlign = 'flex-end';
  return css`
    align-items: ${newAlign};
  `;
};

const StyledRow = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: ${gridGutterCompensation};
  margin-left: ${gridGutterCompensation};
  ${props =>
    props.reverse &&
    css`
      flex-direction: row-reverse;
    `};
  ${props => props.alignItems && getAlignItems(props.alignItems)};
`;

export { StyledRow };
