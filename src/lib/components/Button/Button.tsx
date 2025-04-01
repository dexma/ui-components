/* eslint-disable import/no-cycle */
import { forwardRef, type ButtonHTMLAttributes, type ReactNode, useContext } from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { Tooltip, Spinner, Icon, getIconSize } from '@components';
import { withDataId } from '@components/DataId/withDataId';
import { StyledButton, StyledButtonGroup } from '@styles/Button/StyledButton';
import { omit } from 'lodash';

export enum ButtonSize {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
    XLARGE = 'xlarge',
}

export const BUTTON_VARIANT = ['primary', 'secondary', 'outline', 'destructive', 'link', 'icon', 'icon-secondary', 'icon-outline'];

const getButtonIconSize = (size?: string | ButtonSize) => {
    if (size === 'small') return 'small';
    if (size === 'medium') return 'medium';
    if (size === 'large') return 'large';
    if (size === 'xlarge') return 'large';
    return 'small';
};

export const ButtonGroup = (props: any) => <StyledButtonGroup {...props} />;

export type ButtonProps = {
    text?: string;
    size?: string | ButtonSize;
    variant?: string;
    iconBefore?: string;
    iconAfter?: string;
    iconColor?: string;
    tooltip?: string;
    onClick?: (e?: any) => void;
    onFocus?: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
    isCircle?: boolean;
    isExpanded?: boolean;
    debounceTime?: number;
    children?: ReactNode;
    dataId?: string;
    'data-testid'?: string;
    iconAriaLabel?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = withDataId(
    forwardRef<HTMLButtonElement, ButtonProps>(
        (
            {
                className,
                text,
                iconBefore,
                iconAfter,
                isCircle,
                iconColor,
                tooltip,
                onClick,
                isDisabled = false,
                isExpanded = false,
                isLoading = false,
                size = 'medium',
                debounceTime,
                children,
                dataId = 'button',
                variant = 'primary',
                iconAriaLabel,
                ...props
            },
            ref
        ) => {
            const th = useContext(ThemeContext) || defaultTheme;
            const rest = omit(props, ['refs']);
            const classes = classNames(isExpanded && 'expanded', className);
            const handleClick = debounceTime && debounceTime > 0 && onClick ? debounce(onClick, debounceTime) : onClick;
            const spinnerSize = getIconSize(size);
            const iconSize = getButtonIconSize(size);
            const getStyledButton = () => (
                <StyledButton
                    ref={ref}
                    className={classes}
                    $isCircle={isCircle || false}
                    $isExpanded={isExpanded || false}
                    $isLoading={isLoading || false}
                    disabled={isDisabled || false}
                    $size={size || 'medium'}
                    $iconColor={iconColor}
                    $iconAfter={iconAfter}
                    $variant={variant ?? 'primary'}
                    $text={text}
                    theme={th}
                    onClick={handleClick}
                    data-id={dataId}
                    data-testid={rest['data-testid'] ?? 'button'}
                    aria-live={isLoading ? 'polite' : undefined}
                    aria-busy={isLoading || false}
                    aria-disabled={isDisabled || false}
                    {...rest}
                >
                    {isLoading ? <Spinner size={spinnerSize} data-testid='button-loading' /> : null}
                    {!isLoading && iconBefore ? <Icon name={iconBefore} size={iconSize} color={iconColor} data-testid='button-icon-before' ariaLabel={!iconAriaLabel ? `${iconBefore} icon` : iconAriaLabel} /> : null}
                    {text || null}
                    {children || null}
                    {!isLoading && iconAfter ? <Icon name={iconAfter} size={iconSize} color={iconColor} data-testid='button-icon-after' ariaLabel={!iconAriaLabel ? `${iconAfter} icon` : iconAriaLabel} /> : null}
                </StyledButton>
            );
            return tooltip ? <Tooltip title={tooltip}>{getStyledButton()}</Tooltip> : getStyledButton();
        }
    ),
    'button'
);
