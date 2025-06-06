import { useState, forwardRef, type ForwardedRef, useContext, FocusEvent, InputHTMLAttributes, ChangeEvent } from 'react';
import { ThemeContext } from 'styled-components';
import omit from 'lodash/omit';

import { StyledInput, StyledInputLabel } from '@styles/Input/StyledInput';
import defaultTheme from '@utils/theme';
import { Icon, Spinner } from '@components';
import { withDataId } from '@components/DataId/withDataId';

type InputProps = {
    placeholder?: string;
    id?: string;
    icon?: string;
    label: string;
    title?: string;
    value?: string;
    isLoading?: boolean;
    type: 'email' | 'file' | 'number' | 'password' | 'tel' | 'text' | 'url';
    name?: string;
    disabled?: boolean;
    dataId?: string;
    iconAriaLabel?: string;
    ariaLabel?: string;
    isItToSearch?: boolean;
    autoComplete?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = withDataId(
    forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
        const [focused, setFocused] = useState(false);
        const { icon, isLoading, onFocus, onBlur, children, dataId, iconAriaLabel, label, ariaLabel, disabled, isItToSearch, autoComplete, onChange } = props;
        const th = useContext(ThemeContext) || defaultTheme;
        const newProps = omit(props, ['placeholder', 'id', 'label', 'value', 'type', 'name', 'onChange', 'onFocus', 'onBlur', 'dataId', 'isLoading', 'icon', 'ariaLabel', 'isItToSearch']);
        const inputProps = omit(props, ['icon', 'isLoading', 'theme', 'children', 'onFocus', 'onBlur', 'dataId', 'isLoading', 'ariaLabel', 'isItToSearch']);
        const handleOnFocus = (e: FocusEvent<HTMLInputElement>) => {
            setFocused(true);
            if (onFocus) onFocus(e);
        };
        const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
            setFocused(false);
            if (onBlur) onBlur(e);
        };
        const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
            if (onChange) onChange(e);
        };
        return (
            <>
                <StyledInputLabel htmlFor='input-element'>
                    {label}
                </StyledInputLabel>
                <StyledInput
                    role={isItToSearch ? 'search' : undefined}
                    data-testid='input'
                    $icon={icon}
                    $isLoading={isLoading !== undefined ? isLoading : false}
                    $focused={focused}
                    data-id={dataId}
                    theme={th}
                    {...newProps}
                >
                    {icon && (
                        <div className='icon-container'>
                            <Icon name={icon} size={20} color='gray500' ariaLabel={!iconAriaLabel ? `${icon} icon` : iconAriaLabel} />
                        </div>
                    )}
                    <input
                        id='input-element'
                        onFocus={handleOnFocus}
                        onBlur={handleOnBlur}
                        {...inputProps}
                        ref={ref}
                        data-testid='input-element'
                        aria-label={ariaLabel}
                        disabled={disabled}
                        aria-disabled={disabled}
                        autoComplete={autoComplete ?? 'off'}
                        onChange={handleOnChange}
                    />
                    {isLoading && <Spinner size={20} />}
                    {children && children}
                </StyledInput>
            </>
        );
    }),
    'input'
);
