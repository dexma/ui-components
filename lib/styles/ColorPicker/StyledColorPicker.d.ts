import { SketchPicker } from 'react-color';
import { Theme } from '../../utils/theme';
declare const StyledColorPickerLayout: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
declare const StyledColorPickerInput: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<Omit<Omit<{
    placeholder?: string;
    id?: string;
    icon?: string;
    label: string;
    title?: string;
    value?: string;
    isLoading?: boolean;
    type: "email" | "file" | "number" | "password" | "tel" | "text" | "url";
    name?: string;
    disabled?: boolean;
    dataId?: string;
    iconAriaLabel?: string;
    ariaLabel?: string;
    isItToSearch?: boolean;
    autoComplete?: string;
} & import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement> & import('../../../../node_modules/react').RefAttributes<HTMLInputElement> & {
    dataId?: string;
}, "ref"> & import('../../../../node_modules/react').RefAttributes<unknown>, "ref"> & {
    ref?: ((instance: unknown) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<unknown> | null | undefined;
}, never>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<{
    placeholder?: string;
    id?: string;
    icon?: string;
    label: string;
    title?: string;
    value?: string;
    isLoading?: boolean;
    type: "email" | "file" | "number" | "password" | "tel" | "text" | "url";
    name?: string;
    disabled?: boolean;
    dataId?: string;
    iconAriaLabel?: string;
    ariaLabel?: string;
    isItToSearch?: boolean;
    autoComplete?: string;
} & import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement> & import('../../../../node_modules/react').RefAttributes<HTMLInputElement> & {
    dataId?: string;
}, "ref"> & import('../../../../node_modules/react').RefAttributes<unknown>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
declare const StyledSpinnerColorPicker: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<{
    color?: string;
    size?: number;
}, {
    $showInput: boolean;
    theme: Theme;
}>> & string & Omit<({ color, size, ...props }: {
    color?: string;
    size?: number;
}) => import("react/jsx-runtime").JSX.Element, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
declare const StyledColorPanel: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
declare const StyledSketchPicker: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<Omit<import('react-color').SketchPickerProps, "ref"> & import('../../../../node_modules/react').RefAttributes<SketchPicker>, never>> & string & Omit<typeof SketchPicker, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
declare const StyledColorPickerSwatch: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
declare const StyledColorPickerPopover: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export { StyledColorPickerLayout, StyledColorPickerInput, StyledSketchPicker, StyledSpinnerColorPicker, StyledColorPanel, StyledColorPickerPopover, StyledColorPickerSwatch };
