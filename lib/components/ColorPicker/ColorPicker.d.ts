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
export declare const ColorPicker: import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<ColorPickerProps & import('../../../../node_modules/react').RefAttributes<HTMLInputElement> & {
    dataId?: string;
}, "ref"> & import('../../../../node_modules/react').RefAttributes<unknown>>;
