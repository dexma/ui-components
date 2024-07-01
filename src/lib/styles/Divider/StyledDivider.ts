import styled, { css } from 'styled-components';
import { gray200 } from '@utils/selectors';
import { type Theme } from '@utils/theme';

const StyledDivider = styled.hr<{ $vertical?: boolean; theme: Theme }>`
    border: none;
    height: 1px;
    margin: 0;
    flex-shrink: 0;
    background-color: ${(props) => gray200(props.theme)};
    ${(props) =>
        props.$vertical &&
        css`
            width: 1px;
            height: 100%;
            margin: 0px 4px;
        `};
`;

export { StyledDivider };
