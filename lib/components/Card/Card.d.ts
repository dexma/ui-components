import { default as React } from '../../../../node_modules/react';

export type CardProps = {
    link?: string;
    title?: string;
    subtitle?: string;
    description?: string;
    icon?: string;
    image?: string;
    footer?: React.ReactNode;
    isActive?: boolean;
    isHorizontal?: boolean;
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLAnchorElement>) => void;
};
export declare const Card: (props: CardProps) => import("react/jsx-runtime").JSX.Element;
export default Card;
