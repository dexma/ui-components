import styled, { css } from 'styled-components';
import get from 'lodash/get';

import { type Theme } from '@utils/theme';
import { paragraphSize } from '@utils/selectors';

const getParagraphSize = (props: { $margin: string; color: string; size: 'small' | 'medium' | 'large' | 'xlarge'; theme: Theme }) => {
    const paragraphSizeValue = paragraphSize(props.theme);
    const sizeArray = paragraphSizeValue ? Object.entries(paragraphSizeValue) : [];
    let newCss = '';
    sizeArray.forEach((sizeItem: [string, any]) => {
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

const StyledParagraph = styled.div<{ $margin: string; color: string; size: 'small' | 'medium' | 'large' | 'xlarge'; theme: Theme }>`
    margin: ${(props) => props.$margin};
    color: ${(props) => get(props.theme.color, props.color)};
    ${(props) => getParagraphSize(props)};
`;

export { StyledParagraph };
