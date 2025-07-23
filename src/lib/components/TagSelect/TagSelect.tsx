import { Select as AntdSelect } from 'antd';
import defaultTheme, { type Theme } from '@utils/theme';
import { useContext } from 'react';

import { ThemeContext } from 'styled-components';
import { withDataId } from '@components/DataId/withDataId';
import { SelectOptionStyle } from '@styles/Select/StyledSelect';

export type TagSelectProps = {
    dataId?: string;
    theme?: Theme;
    isLoading?: boolean;
    onChange: (value: string[]) => void;
    disabled?: boolean;
    placeholder?: string;
    style?: React.CSSProperties;
};

export const TagSelect = withDataId(({ dataId = 'tagSelect', placeholder = 'Type text and press enter', onChange, disabled, style }: TagSelectProps) => {
    const th = useContext(ThemeContext) || defaultTheme;

    return (
        <>
            <SelectOptionStyle $theme={th} />
            <AntdSelect
                data-id={dataId}
                data-testid='tagSelect'
                mode={'tags'}
                placeholder={placeholder}
                style={style || { width: '100%' }}
                dropdownAlign={{ offset: [0, 3] }}
                disabled={disabled}
                aria-disabled={disabled || false}
                onChange={onChange}
            ></AntdSelect>
        </>
    );
}, 'tagSelect');
