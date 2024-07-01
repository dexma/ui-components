import React, { useState, forwardRef, type ForwardedRef, useContext, ReactNode, FocusEvent, InputHTMLAttributes } from 'react';
import { ThemeContext } from 'styled-components';
import omit from 'lodash/omit';

import { StyledInput } from '@styles/Input/StyledInput';
import defaultTheme from '@utils/theme';
import { Icon, Spinner } from '@components';
import { withDataId } from '@components/DataId/withDataId';

type InputProps = {
    placeholder?: string;
    id?: string;
    icon?: string;
    label?: string | ReactNode;
    title?: string;
    value?: string;
    isLoading?: boolean;
    type?: string;
    name?: string;
    disabled?: boolean;
    dataId?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = withDataId(
    forwardRef((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
        const [focused, setFocused] = useState(false);
        const { icon, isLoading, onFocus, onBlur, children, dataId } = props;
        const th = useContext(ThemeContext) || defaultTheme;
        const newProps = omit(props, ['placeholder', 'id', 'label', 'value', 'type', 'name', 'onChange', 'onFocus', 'onBlur', 'dataId', 'isLoading']);
        const inputProps = omit(props, ['icon', 'isLoading', 'theme', 'children', 'onFocus', 'onBlur', 'dataId', 'isLoading']);
        const handleOnFocus = (e: FocusEvent<HTMLInputElement>) => {
            setFocused(true);
            if (onFocus) onFocus(e);
        };
        const handleOnBlur = (e: FocusEvent<HTMLInputElement>) => {
            setFocused(false);
            if (onBlur) onBlur(e);
        };
        return (
            <StyledInput data-testid='input' $icon={icon} $isLoading={isLoading !== undefined ? isLoading : false} $focused={focused} data-id={dataId} theme={th} {...newProps}>
                {icon && (
                    <div className='icon-container'>
                        <Icon name={icon} size={20} color='gray500' />
                    </div>
                )}
                <input onFocus={handleOnFocus} onBlur={handleOnBlur} {...inputProps} ref={ref} data-testid='input-element' />
                {isLoading && <Spinner size={20} />}
                {children && children}
            </StyledInput>
        );
    }),
    'input'
);
