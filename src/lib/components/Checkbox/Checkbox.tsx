import { useContext } from 'react';
import { Checkbox as CheckboxAntd, CheckboxProps as AntCheckboxProps, ConfigProvider } from 'antd';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { withDataId } from '@components/DataId/withDataId';

export type CheckboxProps = {
    dataId?: string;
} & AntCheckboxProps;

export const Checkbox = withDataId(({ checked, disabled, dataId, children, ...props }: CheckboxProps) => {
    const th = useContext(ThemeContext) || defaultTheme;

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: th.primary,
                },
            }}
        >
            <CheckboxAntd disabled={disabled} checked={checked} aria-checked={checked} aria-disabled={disabled} {...props}>
                {children && <span data-id={dataId}>{children}</span>}
            </CheckboxAntd>
        </ConfigProvider>
    );
}, 'checkbox');
