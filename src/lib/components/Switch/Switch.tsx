import React, { useContext } from 'react';
import { Switch as SwitchAntDesign } from 'antd';
import { SwitchChangeEventHandler, SwitchClickEventHandler, type SwitchProps as AntdSwitchProps, type SwitchSize } from 'antd/es/switch';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { withDataId } from '@components/DataId/withDataId';
import { StyledSwitch } from '@styles/Switch/StyledSwitch';

export type SwitchProps = {
    disabled?: boolean;
    size?: SwitchSize;
    dataId?: string;
    onChange?: SwitchChangeEventHandler;
    onClick?: SwitchClickEventHandler;
} & AntdSwitchProps;

export const Switch = withDataId(({ disabled, size = 'default', onChange, onClick, dataId, ...props }: SwitchProps) => {
    const th = useContext(ThemeContext) || defaultTheme;

    return (
        <StyledSwitch {...props} theme={th}>
            <SwitchAntDesign {...props} data-testid='switch' disabled={disabled} onChange={onChange} onClick={onClick} size={size} data-id={dataId} />
        </StyledSwitch>
    );
}, 'switch');
