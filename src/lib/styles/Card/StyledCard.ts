import styled, { css } from 'styled-components';
import {
    borderRadius,
    backgroundColor,
    boxShadow,
    boxShadowHover,
    fontSize,
    fontColor,
    fontWeightNormal,
    fontWeightSemiBold,
    cardPaddingX,
    cardPaddingY,
    cardFontSize,
    cardLineHeight,
    gray100,
    gray500,
    gray700,
    gray900,
} from '@utils/selectors';

import { StyledIcon } from '@styles/Icon/StyledIcon';
import { StyledParagraph } from '@styles/Paragraph/StyledParagraph';
import { StyledButton } from '@styles/Button/StyledButton';
import { type Theme } from '@utils/theme';

export const getHorizontal = () => css`
    flex-direction: row;
    .card-header {
        width: 33.33333333%;
    }
    .horizontal {
        flex-direction: column;
        width: 66.66666667%;
        display: flex;
        .card-body {
            flex: 1 1 100%;
            align-items: flex-start;
            justify-content: center;
            /* align-self: center; */
            display: flex;
            flex-direction: column;
            padding: 1.25rem;
        }
        .card-footer {
            width: 100%;
            flex: auto;
        }
    }
`;

export const getTextTruncate = () => css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const getStyleCard = (props: StyledCardProps) => {
    const { theme, $hasFooter, $isHorizontal } = props;
    return css`
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        //height: $card-height;
        word-wrap: break-word;
        background-clip: border-box;
        background-color: ${gray100(props.theme)};
        border-radius: ${borderRadius(props.theme)};
        box-shadow: ${boxShadow(props.theme)};
        overflow: hidden;
        width: 100%;
        &:hover {
            box-shadow: ${boxShadowHover(props.theme)};
            .card-body,
            .card-footer {
                background: ${backgroundColor(props.theme)};
            }
        }

        > hr {
            margin-right: 0;
            margin-left: 0;
        }

        .card-header {
            display: flex;
            flex-shrink: 0;
            width: 100%;
            background-color: ${backgroundColor(props.theme)};
            .card-img,
            ${StyledIcon} {
                width: 100%;
                align-self: center;
                object-fit: cover;
                height: 100%;
            }
        }
        .card-body {
            flex: 1 1 auto;
            min-height: 1px;
            padding: ${$hasFooter
                ? css`
                      ${cardPaddingX(theme)} ${cardPaddingX(theme)} ${cardPaddingY(theme)} ${cardPaddingX(theme)}
                  `
                : cardPaddingX(theme)};
            color: ${fontColor(theme)};
            .card-title {
                margin-bottom: ${cardPaddingY(theme)};
                font-weight: ${fontWeightSemiBold(theme)};
                font-size: ${cardFontSize(theme)};
                color: ${gray900(theme)};
                line-height: ${cardLineHeight(theme)};
            }

            .card-subtitle {
                margin-bottom: 0;
                font-size: ${fontSize(theme)};
                color: ${gray700(theme)};
                font-weight: ${fontWeightNormal(theme)};
            }

            ${StyledParagraph} {
                font-size: ${fontSize(theme)};
                color: ${gray500(theme)};
            }

            .card-text:last-child {
                margin-bottom: 0;
            }

            .card-link {
                &:hover {
                    text-decoration: none;
                }

                + .card-link {
                    margin-left: ${cardPaddingX(theme)};
                }
            }
        }
        .card-footer {
            padding: 0 ${cardPaddingX(theme)} ${cardPaddingX(theme)} ${cardPaddingX(theme)};
            a,
            div,
            ${StyledButton} {
                margin: 0;
            }
        }
        ${$isHorizontal && getHorizontal};
    `;
};

type StyledCardProps = {
    theme: Theme;
    $isHorizontal?: boolean;
    $hasFooter?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLAnchorElement>) => void;
};

const StyledCard = styled.div<StyledCardProps>`
    ${(props) => getStyleCard(props)};
`;

const StyledCardLink = styled.a<StyledCardProps>`
    ${(props) => getStyleCard(props)};
`;

export { StyledCard, StyledCardLink };
