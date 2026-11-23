import { useContext } from 'react';
import { Radio as RadioAntd, RadioProps as AntRadioProps, RadioGroupProps as AntRadioGroupProps } from 'antd';
import { ConfigProvider } from '@components/ConfigProvider/ConfigProvider';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { withDataId } from '@components/DataId/withDataId';

export type RadioProps = {
    dataId?: string;
} & AntRadioProps;

export type RadioGroupProps = {
    dataId?: string;
} & AntRadioGroupProps;

export const Radio = withDataId(({ checked, disabled, dataId, children, ...props }: RadioProps) => {
    const th = useContext(ThemeContext) || defaultTheme;

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: th.primary,
                },
            }}
        >
            <RadioAntd disabled={disabled} checked={checked} aria-checked={checked} aria-disabled={disabled} {...props}>
                {children && <span data-id={dataId}>{children}</span>}
            </RadioAntd>
        </ConfigProvider>
    );
}, 'radio');

export const RadioGroup = withDataId(({ dataId, children, ...props }: RadioGroupProps) => {
    const th = useContext(ThemeContext) || defaultTheme;

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: th.primary,
                },
            }}
        >
            <RadioAntd.Group data-id={dataId} {...props}>
                {children}
            </RadioAntd.Group>
        </ConfigProvider>
    );
}, 'radio-group');
