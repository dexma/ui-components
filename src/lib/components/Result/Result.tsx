import { type ReactNode, useContext } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { Icon, Row } from '@components';
import { StyledResult } from '@styles/Result/StyledResult';

export enum ResultVariants {
    SUCCESS = 'success',
    INFO = 'info',
    WARNING = 'warning',
    ERROR = 'error',
    DELETED = 'deleted',
    DEFAULT = 'default',
}

const getIcon = (variant: string) => {
    let iconName;
    let iconColor;
    switch (variant) {
        case ResultVariants.SUCCESS:
            iconName = 'circle_check';
            iconColor = 'green';
            break;
        case ResultVariants.INFO:
            iconName = 'alert_sign';
            iconColor = 'blueLight';
            break;
        case ResultVariants.WARNING:
            iconName = 'circle_info';
            iconColor = 'amber';
            break;
        case ResultVariants.ERROR:
            iconName = 'circle_delete';
            iconColor = 'red';
            break;
        case ResultVariants.DELETED:
            iconName = 'delete';
            iconColor = 'red';
            break;
        case ResultVariants.DEFAULT:
            iconName = 'vader';
            iconColor = 'gray300';
            break;
        default:
            break;
    }
    return { iconName, iconColor };
};

export type ResultProps = {
    variant: ResultVariants;
    content?: ReactNode;
    title?: string;
    info?: string;
    size?: number;
    icon?: string;
    iconElement?: ReactNode;
    iconAriaLabel?: string;
};

export const Result = ({ title, info, variant = ResultVariants.DEFAULT, content, size = 72, icon, iconElement, iconAriaLabel }: ResultProps) => {
    const th = useContext(ThemeContext) || defaultTheme;
    const { iconName, iconColor } = getIcon(variant);
    return (
        <StyledResult fluid className={`result-${variant}`} data-testid={`result-${variant}`} theme={th}>
            <Row className='result-row icon'>
                {iconElement || (
                    <Icon
                        name={icon || iconName}
                        size={size}
                        color={iconColor}
                        data-testid={`icon_${icon || iconName}`}
                        ariaLabel={!iconAriaLabel ? `${icon || iconName} icon` : iconAriaLabel}
                    />
                )}
            </Row>
            {title && (
                <Row className='result-row title'>
                    <span>{title}</span>
                </Row>
            )}
            {info && (
                <Row className='result-row info'>
                    <span>{info}</span>
                </Row>
            )}
            {content && <Row className='result-row content'> {content} </Row>}
        </StyledResult>
    );
};
