import styled from 'styled-components';
import isNumber from 'lodash/isNumber';
import { gridColumns, gridHalfGutterWidth } from '@utils/selectors';
import { type Theme } from '@utils/theme';

const percentage = (number: number) => number * 100;

const isColumnFull = (value: string | number): boolean => !isNumber(value);

const getColumnFull = () => `{
      flex-grow: 1;
      flex-basis: 0;
      max-width: 100%;
    }`;

const getColumn = (size: number, columns: number) => `
    flex: 0 0 ${percentage(size / columns)}%;
    max-width: ${percentage(size / columns)}%;
  `;

const getColumnOffset = (size: number, columns: number) => `
    margin-left: ${percentage(size / columns)}%;
  `;

const getColumns = (theme: Theme, breakpoint: number) => (isColumnFull(breakpoint) ? getColumnFull() : getColumn(breakpoint, gridColumns(theme)));

const getColumnsOffset = (theme: Theme, breakpoint: number) => getColumnOffset(breakpoint, gridColumns(theme));

type StyledCellProps = {
    $direction?: string;
    $xs?: number;
    $xsOffset?: number;
    $sm?: number;
    $smOffset?: number;
    $md?: number;
    $mdOffset?: number;
    $lg?: number;
    $lgOffset?: number;
    theme: Theme;
};

const StyledCell = styled.div<StyledCellProps>`
    box-sizing: border-box;
    flex: 0 0 auto;
    padding-right: ${(props) => gridHalfGutterWidth(props.theme)};
    padding-left: ${(props) => gridHalfGutterWidth(props.theme)};

    flex-basis: 0;
    flex-grow: 1;
    max-width: 100%;

    ${(props) => props.$direction === 'left' && `left: 0; display: none`}
    ${(props) => props.$xs && getColumns(props.theme, props.$xs)};
    ${(props) => props.$xsOffset && getColumnsOffset(props.theme, props.$xsOffset)};

    @media only screen and (min-width: 48em) {
        ${(props) => props.$sm && getColumns(props.theme, props.$sm)};
        ${(props) => props.$smOffset && getColumnsOffset(props.theme, props.$smOffset)};
    }
    @media only screen and (min-width: 64em) {
        ${(props) => props.$md && getColumns(props.theme, props.$md)};
        ${(props) => props.$mdOffset && getColumnsOffset(props.theme, props.$mdOffset)};
    }
    @media only screen and (min-width: 75em) {
        ${(props) => props.$lg && getColumns(props.theme, props.$lg)};
        ${(props) => props.$lgOffset && getColumnsOffset(props.theme, props.$lgOffset)};
    }
`;

export { StyledCell };
