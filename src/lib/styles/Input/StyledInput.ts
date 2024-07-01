import styled, { css } from 'styled-components';
import { gray500, border, primaryColor, borderRadius, inputHeight, inputFontSize, inputPaddingX } from '@utils/selectors';
import { StyledSpinner } from '@styles/Spinner/StyledSpinner';
import { type Theme } from '@utils/theme';

export const getLoading = (props: any) => {
    const { theme, focused } = props;
    return css`
        border: ${border(theme)};
        border-radius: ${borderRadius(theme)};
        ${focused && `border-color: ${primaryColor(theme)}`};
        input {
            padding-right: 40px;
            border: none;
        }
        ${StyledSpinner} {
            position: absolute;
            right: 10px;
            top: 6.5px;
        }
    `;
};

export const getIcon = (props: any) => {
    const { theme, focused } = props;
    return css`
        border: ${border(theme)};
        border-radius: ${borderRadius(theme)};
        ${focused && `border-color: ${primaryColor(theme)}`};
        input {
            padding-left: 0;
            border: none;
        }
        .icon-container {
            height: ${inputHeight(theme)};
            line-height: ${inputHeight(theme)};
            display: inline-flex;
            border-radius: ${borderRadius(theme)} 0 0 ${borderRadius(theme)};
            padding: 0 0.5rem;
            display: flex;
            align-items: center;
        }
    `;
};

const StyledInput = styled.div<{ $focused: boolean; $icon?: string; $isLoading?: boolean; theme: Theme }>`
    position: relative;
    zoom: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
        border: ${(props) => border(props.theme)};
        border-radius: ${(props) => borderRadius(props.theme)};
        padding: 0 ${(props) => inputPaddingX(props.theme)};
        height: ${(props) => inputHeight(props.theme)};
        line-height: ${(props) => inputHeight(props.theme)};
        font-size: ${(props) => inputFontSize(props.theme)};
        display: inline-flex;
        flex: 1 1 auto;
        width: 100%;
        color: ${(props) => gray500(props.theme)};
        ${(props) => props.$focused && `border: 1px solid ${primaryColor(props.theme)}`};
    }
    ${(props) => props.$icon && getIcon(props)};
    ${(props) => props.$isLoading && getLoading(props)};
`;

export { StyledInput };
