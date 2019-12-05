import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Icon from 'components/Icon';

import theme from 'styles/theme';
import { StyledModal, StyledModalGlobal } from 'styles/components/StyledModal';

const propTypes = {
  className: PropTypes.string,
  dataCy: PropTypes.string,
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
        closeIcon={<Icon name="close" color="gray300" size="medium" />}
        theme={theme}
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
