import styled, { css } from 'styled-components';

import { type Theme } from '@utils/theme';
import { gridGutterCompensation } from '@utils/selectors';

const getAlignItems = (align: string) => {
    let newAlign = '';
    if (align === 'start') newAlign = 'flex-start';
    if (align === 'center') newAlign = 'center';
    if (align === 'end') newAlign = 'flex-end';
    return css`
        align-items: ${newAlign};
    `;
};

const StyledRow = styled.div<{ $reverse?: boolean; $alignItems?: string; theme: Theme }>`
    box-sizing: border-box;
    display: flex;
    flex: 0 1 auto;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: ${(props) => gridGutterCompensation(props.theme)};
    margin-left: ${(props) => gridGutterCompensation(props.theme)};
    ${(props) =>
        props.$reverse &&
        css`
            flex-direction: row-reverse;
        `};
    ${(props) => props.$alignItems && getAlignItems(props.$alignItems)};
`;

export { StyledRow };
