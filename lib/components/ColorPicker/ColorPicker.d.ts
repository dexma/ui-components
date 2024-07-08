import { default as React } from '../../../../node_modules/react';

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
export declare const ColorPicker: React.ForwardRefExoticComponent<Omit<Omit<ColorPickerProps & React.RefAttributes<HTMLInputElement>, "dataId"> & Partial<{
    dataId?: string;
}>, "ref"> & React.RefAttributes<unknown>>;
