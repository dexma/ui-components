import { ReactNode, useContext, useEffect, useRef } from 'react';
import { type ModalProps as AntDModalProps } from 'antd';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { Button, Icon } from '@components';
import { StyledModal, StyledModalGlobal } from '@styles/Modal/StyledModal';

export type ModalProps = {
    body?: ReactNode;
    closeModalButtonAriaLabel: string;
} & AntDModalProps;

export const Modal = ({ open, title, body, footer, closeModalButtonAriaLabel, onCancel, ...props }: ModalProps) => {
    const th = useContext(ThemeContext) || defaultTheme;
    const titleRef = useRef<HTMLHeadingElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (open && titleRef.current) {
            titleRef.current.focus(); // Move NVDA's virtual cursor to the title
        }
    }, [open]);

    const handleOpenChange = () => {
        setTimeout(() => {
            const modalElement = document.querySelector('.ant-modal');
            if (modalElement) modalElement.removeAttribute('aria-labelledby');
        }, 0);
    };

    return (
        <>
            <StyledModal
                data-testid='modal'
                closable={false}
                title={null}
                transitionName=''
                maskTransitionName=''
                afterOpenChange={handleOpenChange}
                open={open}
                onCancel={onCancel}
                maskClosable={false}
                footer={null}
                aria-labelledby='modal-title'
                aria-describedby='modal-body'
                {...props}
            >
                <div role='dialog' aria-modal='true' id='modal-content' ref={modalRef} tabIndex={-1} style={{ position: 'relative' }}>
                    <h2 id='modal-title' ref={titleRef} tabIndex={-1}>
                        {title}
                    </h2>

                    {body && (
                        <div id='modal-body' tabIndex={-1}>
                            {body}
                        </div>
                    )}

                    {footer && (
                        <div
                            id='modal-footer'
                            style={{
                                marginTop: '16px',
                                display: 'flex',
                                justifyContent: 'flex-end',
                            }}
                        >
                            {footer as ReactNode}
                        </div>
                    )}

                    <Button
                        kind='iconButton'
                        iconAriaLabel={closeModalButtonAriaLabel}
                        onClick={onCancel}
                        style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            padding: '8px',
                            background: 'transparent',
                            border: 'none',
                            cursor: 'pointer',
                        }}
                    >
                        <Icon name='close' color='gray300' size='medium' ariaLabel={closeModalButtonAriaLabel} style={{ fill: '#c9cccf' }} />
                    </Button>
                </div>
            </StyledModal>
            <StyledModalGlobal theme={th} />
        </>
    );
};
