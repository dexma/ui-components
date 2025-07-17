import { ReactNode } from '../../../../node_modules/react';
import { ModalProps as AntDModalProps } from 'antd';
export type ModalProps = {
    body?: ReactNode;
    closeModalButtonAriaLabel: string;
} & AntDModalProps;
export declare const Modal: ({ open, title, body, footer, closeModalButtonAriaLabel, onCancel, ...props }: ModalProps) => import("react/jsx-runtime").JSX.Element;
