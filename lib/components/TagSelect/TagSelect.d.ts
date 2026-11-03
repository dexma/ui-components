import { Theme } from '../../utils/theme';
export type TagSelectProps = {
    dataId?: string;
    theme?: Theme;
    isLoading?: boolean;
    onChange: (value: string[]) => void;
    disabled?: boolean;
    placeholder?: string;
    style?: React.CSSProperties;
    defaultValue?: string[];
    value?: string[];
    onBlur?: () => void;
};
export declare const TagSelect: import('../../../../node_modules/react').ForwardRefExoticComponent<TagSelectProps & {
    dataId?: string;
} & import('../../../../node_modules/react').RefAttributes<unknown>>;
