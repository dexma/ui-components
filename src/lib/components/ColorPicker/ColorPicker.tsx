import React, { ChangeEvent, type ForwardedRef, forwardRef, useContext, useEffect, useState } from 'react';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import {
    StyledColorPanel,
    StyledColorPickerInput,
    StyledColorPickerLayout,
    StyledColorPickerPopover,
    StyledColorPickerSwatch,
    StyledSketchPicker,
    StyledSpinnerColorPicker,
} from '@styles/ColorPicker/StyledColorPicker';
import { withDataId } from '@components/DataId/withDataId';

export type ColorPickerProps = {
    dataId?: string;
    isLoading?: boolean;
    placeholder?: string;
    presetColors?: string[];
    onChangePicker?: (color: any) => void;
    onChangeInput?: (e: any) => void;
    showInput?: boolean;
    value?: string;
};

export const ColorPicker = withDataId(
    forwardRef(
        (
            { dataId, isLoading, placeholder = '#FFFFFF', presetColors = [], onChangePicker, onChangeInput, showInput, value = '#FFFFFF' }: ColorPickerProps,
            ref: ForwardedRef<HTMLInputElement>
        ) => {
            const th = useContext(ThemeContext) || defaultTheme;
            const [showColorPicker, setShowColorPicker] = useState(false);
            const [color, setColor] = useState(value);

            useEffect(() => {
                setColor(value);
            }, [value]);

            const handleClick = () => {
                setShowColorPicker((status) => !status);
            };
            const handleClose = () => {
                setShowColorPicker(false);
            };

            const handleChangePicker = (_color: { hex: string }) => {
                setColor(_color.hex);
                if (onChangePicker) onChangePicker(_color);
            };
            const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
                setColor(e.target.value);
                if (onChangeInput) onChangeInput(e);
            };

            return (
                <>
                    <StyledColorPickerLayout>
                        <StyledColorPanel data-testid='color-picker' data-id={dataId} color={color} onClick={handleClick} />
                        {showInput && (
                            <StyledColorPickerInput
                                data-testid='input-color-picker'
                                value={!isLoading ? color : ''}
                                ref={ref}
                                placeholder={!isLoading ? placeholder : ''}
                                onChange={handleChangeInput}
                            />
                        )}
                        {isLoading && <StyledSpinnerColorPicker $showInput={showInput !== undefined ? showInput : false} size={20} theme={th} />}
                    </StyledColorPickerLayout>
                    {showColorPicker && (
                        <StyledColorPickerPopover data-testid='popover-color-picker'>
                            <StyledColorPickerSwatch onClick={handleClose} />
                            <StyledSketchPicker color={color} onChangeComplete={handleChangePicker} presetColors={presetColors} disableAlpha />
                        </StyledColorPickerPopover>
                    )}
                </>
            );
        }
    ),
    'colorpicker'
);
