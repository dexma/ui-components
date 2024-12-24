import React, { type MouseEvent, type ReactNode, useContext, useRef, useState } from 'react';
import { Cascader as CascaderAntd, ConfigProvider, type CascaderProps as CascaderAntdProps } from 'antd';
import { type CascaderRef, type DefaultOptionType } from 'antd/es/cascader';
import { type DefaultTheme, ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { Icon } from '@components/Icon';
import { CascaderOptionStyle, StyledTagSelected } from '@styles/Cascader/StyledCascader';
import { colors } from 'index';

type Value = Array<string | number>;
type CascaderProps<OptionType extends DefaultOptionType> = CascaderAntdProps & {
    open?: boolean;
    options?: OptionType[];
    onChange?: (value: Value | Value[]) => void;
};

export const tagRender = (theme: DefaultTheme) => (props: { label: ReactNode; value: string; closable: boolean; onClose: () => void }) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <StyledTagSelected onMouseDown={onPreventMouseDown} $closable={closable} style={{ marginRight: 4 }} data-testid={`tag-option-selected-${value}`} theme={theme}>
            {label}
            {closable && <Icon className='icon-close' name='close' size='small' onClick={onClose} color={colors.white} />}
        </StyledTagSelected>
    );
};

export const Cascader = <OptionType extends DefaultOptionType>({ multiple, options = [], maxTagCount, onChange, open, changeOnSelect, ...props }: CascaderProps<OptionType>) => {
    const th = useContext(ThemeContext) || defaultTheme;
    const [currentOpen, setCurrentOpen] = useState(open || false);
    const ref = useRef<CascaderRef>();

    const handleOnChange = (value: Value | Value[]) => {
        if (onChange) onChange(value);
        if (!changeOnSelect && !multiple && ref.current?.blur()) setCurrentOpen(false);
    };

    return (
        <>
            <CascaderOptionStyle theme={th} />
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: th.primary,
                    },
                }}
            >
                <CascaderAntd
                    data-testid='cascader'
                    multiple={multiple}
                    options={options}
                    onChange={handleOnChange}
                    maxTagCount={maxTagCount}
                    ref={(innerRef) => {
                        if (innerRef) ref.current = innerRef;
                    }}
                    onDropdownVisibleChange={
                        !changeOnSelect
                            ? (e) => {
                                  if (e !== currentOpen) {
                                      setCurrentOpen(e);
                                  }
                              }
                            : undefined
                    }
                    onFocus={() => {
                        setCurrentOpen(true);
                    }}
                    tagRender={tagRender(defaultTheme)}
                    maxTagPlaceholder={(values) => `+${values.length}`}
                    open={!changeOnSelect? currentOpen : undefined}
                    changeOnSelect={changeOnSelect}
                    {...props}
                />
            </ConfigProvider>
        </>
    );
};
