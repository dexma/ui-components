import styled from 'styled-components';
import { gridColumns, gridHalfGutterWidth } from 'styles/selectors';
import isNumber from 'lodash/isNumber';

const precentage = number => number * 100;

const isColumnFull = value => !isNumber(value);

const getColumnFull = () => `{
      flex-grow: 1;
      flex-basis: 0;
      max-width: 100%;      
    }`;

const getColumn = (size, columns) => {
  return `
    flex: 0 0 ${precentage(size / columns)}%;
    max-width: ${precentage(size / columns)}%;
  `;
};

const getColumnOffset = (size, columns) => {
  return `
    margin-left: ${precentage(size / columns)}%;
  `;
};

const getColumns = (props, breakpoint) => {
  const columns = gridColumns(props);
  return isColumnFull(breakpoint)
    ? getColumnFull(breakpoint)
    : getColumn(breakpoint, columns);
};

const getColumnsOffset = (props, breakpoint) => {
  const columns = gridColumns(props);
  return getColumnOffset(breakpoint, columns);
};

const StyledCell = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: ${gridHalfGutterWidth};
  padding-left: ${gridHalfGutterWidth};

  ${props => props.reverse && `flex-direction: column-reverse;`}
  ${props => props.xs && getColumns(props, props.xs)};
  ${props => props.xsOffset && getColumnsOffset(props, props.xsOffset)};

  @media only screen and (min-width: 48em) {
    ${props => props.sm && getColumns(props, props.sm)};
    ${props => props.smOffset && getColumnsOffset(props, props.smOffset)};
  }
  @media only screen and (min-width: 64em) {
    ${props => props.md && getColumns(props, props.md)};
    ${props => props.mdOffset && getColumnsOffset(props, props.mdOffset)};
  }
  @media only screen and (min-width: 75em) {
    ${props => props.lg && getColumns(props, props.lg)};
    ${props => props.lgOffset && getColumnsOffset(props, props.lgOffset)};
  }
`;

export { StyledCell };
