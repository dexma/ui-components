import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Icon from './Icon';

import theme from '../styles/theme';
import {
  StyledModal,
  StyledModalGlobal,
} from '../styles/components/StyledModal';

const propTypes = {
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  theme: theme,
};

export const Modal = props => {
  const { theme } = props;
  return (
    <>
      <StyledModal
        data-testid="modal"
        closeIcon={<Icon name="close" color="gray300" size="medium" />}
        footer={false}
        {...props}
      />
      <StyledModalGlobal theme={theme} />
    </>
  );
};

StyledModal.displayName = 'StyledModal';

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default withTheme(Modal);
