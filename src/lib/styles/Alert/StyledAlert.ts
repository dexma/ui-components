import styled, { css } from 'styled-components';
import { StyledIcon } from '@styles/Icon/StyledIcon';

import {
    alertMessageFontSize,
    alertDescriptionMessageFontSize,
    white,
    successColor,
    warningColor,
    errorColor,
    infoColor,
    gray100,
    gray200,
    gray700,
    gray900,
    blue700,
    gray800,
    fontWeightSemiBold,
    fontWeightNormal,
    borderRadius,
} from '@utils/selectors';
import { type Theme } from '@utils/theme';
import { type ReactNode } from 'react';

const getAlertTypeColor = (theme: Theme, $type: string) => {
    let bgColor = '';
    switch ($type) {
        case 'outline':
            bgColor = white(theme);
            break;
        case 'success':
            bgColor = successColor(theme);
            break;
        case 'info':
            bgColor = infoColor(theme);
            break;
        case 'warning':
            bgColor = warningColor(theme);
            break;
        case 'error':
            bgColor = errorColor(theme);
            break;
        case 'basic':
        default:
            bgColor = gray100(theme);
            break;
    }
    return css`
        background-color: ${bgColor};
    `;
};

type StyledAlertProps = {
    $type: string;
    $description?: ReactNode;
    $message: ReactNode;
    $showIcon?: boolean;
    theme: Theme;
};

const StyledAlert = styled.div<StyledAlertProps>`
    ${(props) => getAlertTypeColor(props.theme, props.$type)};
    box-sizing: border-box;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    word-wrap: break-word;
    border-radius: ${(props) => borderRadius(props.theme)};
    display: flex;
    align-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    justify-content: center;
    ${(props) => {
        let iconColor;
        let textColor;
        let borderColor;
        switch (props.$type) {
            case 'basic':
                textColor = gray700(props.theme);
                iconColor = gray700(props.theme);
                borderColor = gray100(props.theme);
                break;
            case 'outline':
                textColor = gray900(props.theme);
                iconColor = gray900(props.theme);
                borderColor = gray200(props.theme);
                break;
            case 'success':
                textColor = white(props.theme);
                iconColor = white(props.theme);
                borderColor = successColor(props.theme);
                break;
            case 'info':
                textColor = blue700(props.theme);
                iconColor = blue700(props.theme);
                borderColor = infoColor(props.theme);
                break;
            case 'warning':
                textColor = gray800(props.theme);
                iconColor = gray800(props.theme);
                borderColor = warningColor(props.theme);
                break;
            case 'error':
                textColor = white(props.theme);
                iconColor = white(props.theme);
                borderColor = errorColor(props.theme);
                break;
            default:
                break;
        }
        return css`
            color: ${textColor};
            border: 1px solid ${borderColor};
            ${StyledIcon} {
                fill: ${iconColor};
            }
        `;
    }}
    .icon {
        left: 0px;
        margin-right: 10px;
    }

    .icon-close {
        position: absolute;
        top: 10px;
        right: 20px;
        overflow: hidden;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }

    .message {
        display: flex;
        align-items: center;
        font-weight: ${(props) => fontWeightSemiBold(props.theme)};
        font-weight: ${(props) => (!props.$message && props.$description ? fontWeightNormal(props.theme) : fontWeightSemiBold(props.theme))};
        font-size: ${(props) => alertMessageFontSize(props.theme)};
    }

    ${(props: StyledAlertProps) =>
        props.$description &&
        css`
            height: auto;
            line-height: normal;
            padding: ${!props.$message ? '10px 15px' : '20px 15px'};
            .description {
                position: relative;
                padding: ${props.$showIcon ? '0px 0px 0px 30px' : '0px 0px 0px 0px'};
                padding-left: ${!props.$message && '0px'};
                padding-top: ${props.$message && '10px'};
                line-height: 1.5;
                border-radius: ${borderRadius(props.theme)};
                flex-direction: column;
                align-items: start;
                font-size: ${alertDescriptionMessageFontSize(props.theme)};
                .alert-icon {
                    position: absolute;
                    top: 10px;
                    left: 20px;
                }
            }
            .icon-close {
                top: 17px;
            }
        `}
`;

export { StyledAlert };
