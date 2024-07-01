import React, { useContext } from 'react';
import { type ModalProps } from 'antd';
import { ThemeContext } from 'styled-components';

import defaultTheme from '@utils/theme';
import { Icon } from '@components';
import { StyledModal, StyledModalGlobal } from '@styles/Modal/StyledModal';

export const Modal = (props: ModalProps) => {
    const th = useContext(ThemeContext) || defaultTheme;
    return (
        <>
            <StyledModal data-testid='modal' closeIcon={<Icon name='close' color='gray300' size='medium' />} transitionName='' maskTransitionName='' {...props} />
            <StyledModalGlobal theme={th} />
        </>
    );
};
