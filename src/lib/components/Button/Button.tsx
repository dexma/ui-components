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

type CommonButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {    
    size?: string | ButtonSize;
    variant?: string;
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
};

type ButtonTextProps = CommonButtonProps & {
    kind: 'button';
    text: string;
}

type IconButtonProps = CommonButtonProps & {
    kind: 'iconButton',
    iconColor?: string;
    iconBefore?: string;
    iconAfter?: string;
    iconAriaLabel: string;
}

type IconTextButtonProps = CommonButtonProps & {
    kind: 'iconTextButton',
    text: string;
    iconColor?: string;
    iconBefore?: string;
    iconAfter?: string;
}

export type ButtonProps = (Omit<ButtonTextProps, 'kind'> & { kind?: 'button' }) | IconButtonProps | IconTextButtonProps;

export const Button = withDataId(
    forwardRef<HTMLButtonElement, ButtonProps>(
        (
            {
                className,
                isCircle,
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
                kind = 'button',
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
            const isIconButton = kind.includes('icon');
            const getStyledButton = () => (
                <StyledButton
                    ref={ref}
                    className={classes}
                    $isCircle={isCircle || false}
                    $isExpanded={isExpanded}
                    $isLoading={isLoading}
                    disabled={isDisabled}
                    $size={size || 'medium'}
                    $iconColor={isIconButton ? (props as IconButtonProps).iconColor : undefined}
                    $iconAfter={isIconButton ? (props as IconButtonProps).iconAfter : undefined}
                    $variant={variant ?? 'primary'}
                    $text={kind === 'button' ? (props as ButtonTextProps).text : (kind === 'iconTextButton' ? (props as IconTextButtonProps).text : undefined)}
                    theme={th}
                    onClick={handleClick}
                    data-id={dataId}
                    data-testid={rest['data-testid'] ?? 'button'}
                    aria-live={isLoading ? 'polite' : undefined}
                    aria-busy={isLoading || false}
                    aria-disabled={isDisabled}
                    {...rest}
                >
                    {isLoading ? <Spinner size={spinnerSize} data-testid='button-loading' /> : null}
                    {!isLoading && isIconButton && (props as IconButtonProps).iconBefore ? (
                        <Icon
                            name={(props as IconButtonProps).iconBefore}
                            size={iconSize}
                            color={(props as IconButtonProps).iconColor}
                            data-testid='button-icon-before'
                            ariaLabel={(props as IconButtonProps).iconAriaLabel}
                        />
                    ) : null}
                    {kind === 'button' ? (props as ButtonTextProps).text : (kind === 'iconTextButton' ? (props as IconTextButtonProps).text : undefined)}
                    {children || null}
                    {!isLoading && isIconButton && (props as IconButtonProps).iconAfter ? (
                        <Icon name={(props as IconButtonProps).iconAfter} size={iconSize} color={(props as IconButtonProps).iconColor} data-testid='button-icon-after' ariaLabel={(props as IconButtonProps).iconAriaLabel} />
                    ) : null}
                </StyledButton>
            );
            return tooltip ? <Tooltip title={tooltip}>{getStyledButton()}</Tooltip> : getStyledButton();
        }
    ),
    'button'
);
