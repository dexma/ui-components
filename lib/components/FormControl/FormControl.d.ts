import { default as React, ReactNode } from '../../../../node_modules/react';

type FormControlProps = {
    dataId?: string;
    control: 'Input' | 'Checkbox' | 'Textarea' | 'Select' | 'ColorPicker' | 'DatePicker';
    name?: string;
    error?: boolean;
    success?: boolean;
    message?: string;
    options?: any[];
    value?: any;
    children?: ReactNode;
    disabled?: boolean;
    isLoading?: boolean;
    checked?: boolean;
    type?: 'range' | 'date';
    showInput?: boolean;
    format?: string;
    onChange?: any;
    onFocus?: any;
    onBlur?: any;
    onChangeInput?: any;
    onChangePicker?: (e: {
        hex: string;
    }) => void;
    onDatesChange?: any;
    initialColor?: string;
    placeholder?: string;
    maxLength?: number;
    rows?: number;
};
export declare const FormControl: React.ForwardRefExoticComponent<Omit<Omit<FormControlProps & React.RefAttributes<HTMLElement>, "dataId"> & Partial<{
    dataId?: string;
}>, "ref"> & React.RefAttributes<unknown>>;
export {};
