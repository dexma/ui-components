import { DefaultTheme } from 'styled-components';
import { Theme } from '../../utils/theme';
export declare const hexToRGBA: (hex: string, a: number) => string;
export declare const StyledPaginationPageWrapper: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<{
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xsOffset?: number;
    smOffset?: number;
    mdOffset?: number;
    lgOffset?: number;
    direction?: string;
    onClick?: () => void;
    "data-testid"?: string;
} & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, {
    $disabled?: boolean;
    theme?: Theme;
}>> & string & Omit<({ xs, sm, md, lg, xsOffset, smOffset, mdOffset, lgOffset, direction, children, onClick, ...props }: {
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xsOffset?: number;
    smOffset?: number;
    mdOffset?: number;
    lgOffset?: number;
    direction?: string;
    onClick?: () => void;
    "data-testid"?: string;
} & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
export declare const StyledIconButtonPagination: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<Omit<Omit<import('../../components/index.ts').IconProps, "ref"> & import('../../../../node_modules/react').RefAttributes<SVGSVGElement>, "ref"> & {
    ref?: ((instance: SVGSVGElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<SVGSVGElement> | null | undefined;
}, never>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<Omit<import('../../components/index.ts').IconProps, "ref"> & import('../../../../node_modules/react').RefAttributes<SVGSVGElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
export declare const StyledRowButtonPagination: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<{
    reverse?: boolean;
    alignItems?: string;
} & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, never>> & string & Omit<({ alignItems, reverse, children, ...props }: import('../../components/index.ts').RowhProps) => import("react/jsx-runtime").JSX.Element, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
export declare const StyledButtonSelectAll: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<(Omit<Omit<import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: string | import('../../components/index.ts').ButtonSize;
    variant?: string;
    tooltip?: string;
    onClick?: (e?: any) => void;
    onFocus?: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
    isCircle?: boolean;
    isExpanded?: boolean;
    debounceTime?: number;
    children?: import('../../../../node_modules/react').ReactNode;
    dataId?: string;
    'data-testid'?: string;
} & {
    kind: "iconButton";
    iconColor?: string;
    iconBefore?: string;
    iconAfter?: string;
    iconAriaLabel: string;
} & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement> & {
    dataId?: string;
}, "ref"> & import('../../../../node_modules/react').RefAttributes<unknown>, "ref"> & {
    ref?: ((instance: unknown) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<unknown> | null | undefined;
}) | (Omit<Omit<import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: string | import('../../components/index.ts').ButtonSize;
    variant?: string;
    tooltip?: string;
    onClick?: (e?: any) => void;
    onFocus?: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
    isCircle?: boolean;
    isExpanded?: boolean;
    debounceTime?: number;
    children?: import('../../../../node_modules/react').ReactNode;
    dataId?: string;
    'data-testid'?: string;
} & {
    kind: "iconTextButton";
    text: string;
    iconColor?: string;
    iconBefore?: string;
    iconAfter?: string;
} & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement> & {
    dataId?: string;
}, "ref"> & import('../../../../node_modules/react').RefAttributes<unknown>, "ref"> & {
    ref?: ((instance: unknown) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<unknown> | null | undefined;
}) | (Omit<Omit<Omit<import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: string | import('../../components/index.ts').ButtonSize;
    variant?: string;
    tooltip?: string;
    onClick?: (e?: any) => void;
    onFocus?: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
    isCircle?: boolean;
    isExpanded?: boolean;
    debounceTime?: number;
    children?: import('../../../../node_modules/react').ReactNode;
    dataId?: string;
    'data-testid'?: string;
} & {
    kind: "button";
    text: string;
}, "kind"> & {
    kind?: "button";
} & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement> & {
    dataId?: string;
}, "ref"> & import('../../../../node_modules/react').RefAttributes<unknown>, "ref"> & {
    ref?: ((instance: unknown) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<unknown> | null | undefined;
}), import('styled-components/dist/types').BaseObject>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<(Omit<import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: string | import('../../components/index.ts').ButtonSize;
    variant?: string;
    tooltip?: string;
    onClick?: (e?: any) => void;
    onFocus?: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
    isCircle?: boolean;
    isExpanded?: boolean;
    debounceTime?: number;
    children?: import('../../../../node_modules/react').ReactNode;
    dataId?: string;
    'data-testid'?: string;
} & {
    kind: "iconButton";
    iconColor?: string;
    iconBefore?: string;
    iconAfter?: string;
    iconAriaLabel: string;
} & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement> & {
    dataId?: string;
}, "ref"> | Omit<import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: string | import('../../components/index.ts').ButtonSize;
    variant?: string;
    tooltip?: string;
    onClick?: (e?: any) => void;
    onFocus?: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
    isCircle?: boolean;
    isExpanded?: boolean;
    debounceTime?: number;
    children?: import('../../../../node_modules/react').ReactNode;
    dataId?: string;
    'data-testid'?: string;
} & {
    kind: "iconTextButton";
    text: string;
    iconColor?: string;
    iconBefore?: string;
    iconAfter?: string;
} & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement> & {
    dataId?: string;
}, "ref"> | Omit<Omit<import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: string | import('../../components/index.ts').ButtonSize;
    variant?: string;
    tooltip?: string;
    onClick?: (e?: any) => void;
    onFocus?: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
    isCircle?: boolean;
    isExpanded?: boolean;
    debounceTime?: number;
    children?: import('../../../../node_modules/react').ReactNode;
    dataId?: string;
    'data-testid'?: string;
} & {
    kind: "button";
    text: string;
}, "kind"> & {
    kind?: "button";
} & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement> & {
    dataId?: string;
}, "ref">) & import('../../../../node_modules/react').RefAttributes<unknown>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
export declare const StyledPaginationSelector: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const StyledSelectDropdown: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, never>> & string;
export declare const StyledSpanOptionSelected: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    theme: Theme;
    icon?: any;
    closable?: any;
    color?: string;
    $isSingleSelect?: boolean;
}>> & string;
export declare const StyledSpanOption: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
    value: string | null;
}>> & string;
export declare const getSelectOptionStyle: (theme: DefaultTheme | Theme) => import('styled-components').RuleSet<object>;
export declare const SelectOptionStyle: import('../../../../node_modules/react').NamedExoticComponent<import('styled-components').ExecutionProps & {
    $theme: DefaultTheme | Theme;
}>;
