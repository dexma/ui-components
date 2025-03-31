import { type MouseEvent, type ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { Cascader as CascaderAntd, ConfigProvider, type CascaderProps as CascaderAntdProps } from 'antd';
import { type CascaderRef, type DefaultOptionType } from 'antd/es/cascader';
import { type DefaultTheme, ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { Icon } from '@components/Icon';
import { CascaderOptionStyle, StyledTagSelected } from '@styles/Cascader/StyledCascader';
import { colors } from 'index';

type Value = Array<string | number>;
type CascaderProps = CascaderAntdProps & {
    open?: boolean;
    options?: OptionProps[];
    iconAriaLabel?: string;
    onChange?: (value: Value | Value[]) => void;
};

type OptionProps = DefaultOptionType & {
    selectedItemAriaLabel?: string;
}

export const tagRender = (theme: DefaultTheme, iconAriaLabel?: string) => (props: { label: ReactNode; value: string; closable: boolean; onClose: () => void }) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event: MouseEvent<HTMLSpanElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <StyledTagSelected onMouseDown={onPreventMouseDown} $closable={closable} style={{ marginRight: 4 }} data-testid={`tag-option-selected-${value}`} theme={theme}>
            {label}
            {closable && <Icon className='icon-close' name='close' size='small' ariaLabel={!iconAriaLabel ? `Icon to close card` : iconAriaLabel} onClick={onClose} color={colors.white} />}
        </StyledTagSelected>
    );
};

export const Cascader = ({ multiple, options = [], maxTagCount, onChange, open, changeOnSelect, iconAriaLabel, ...props }: CascaderProps) => {
    const th = useContext(ThemeContext) || defaultTheme;
    const [currentOpen, setCurrentOpen] = useState(open || false);
    const [itemsSelected, setItemsSelected] = useState([] as { label: string, selectedItemAriaLabel: string }[]);
    const ref = useRef<CascaderRef>();
    useEffect(() => {
        document.querySelectorAll('.ant-cascader-menu-item').forEach((item) => {
            item.removeAttribute('aria-label');
        });
        itemsSelected.forEach(item => {
            var liSelected = document.querySelector(`li[title="${item.label}"]`);
            liSelected?.setAttribute('aria-label', item.selectedItemAriaLabel);
        });
    }, [itemsSelected]);

    const handleOnChange = (value: Value | Value[]) => {
        if (onChange) onChange(value);
        if (!changeOnSelect && !multiple && ref.current?.blur()) setCurrentOpen(false);
        setItemsSelected([]);
        getItemsSelected(options, !multiple ? (value as Value[]).map(x => x.toString()) : (value as Value[]).flat().map(String));
    };

    const getItemsSelected = (options: OptionProps[], values: string[]) => {
        let selectedLabels: { label: string, selectedItemAriaLabel: string }[] = [];

        const findSelectedItems = (opts: OptionProps[], vals: string[]) => {
            vals.forEach(v => {
                const optSelected = opts.find(o => v === o.value?.toString());
                if (optSelected) {
                    selectedLabels.push({ label: optSelected.label!.toString(), selectedItemAriaLabel: optSelected.selectedItemAriaLabel || '' });
                    vals = vals.filter(val => val !== v);

                    if (optSelected.children) {
                        findSelectedItems(optSelected.children, vals);
                    }
                }
            });
        };

        findSelectedItems(options, values);

        // Ensuring the state is updated correctly
        setItemsSelected(prev => [...prev, ...selectedLabels]);
    }

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
                    tagRender={tagRender(defaultTheme, iconAriaLabel)}
                    maxTagPlaceholder={(values) => `+${values.length}`}
                    open={!changeOnSelect ? currentOpen : undefined}
                    changeOnSelect={changeOnSelect}
                    {...props}
                />
            </ConfigProvider>
        </>
    );
};
