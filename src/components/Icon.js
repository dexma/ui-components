import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withTheme } from 'styled-components';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';

import { StyledIcon } from 'styles/components/StyledIcon';

const propTypes = {
  ...GeneralPropTypes,
  name: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
  children: PropTypes.node,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  size: 'small',
};

const Icon = ({ name, size, dataCy, theme, children }) => {
  const classes = classNames(size && size, name && `dexma-icon-${name}`);
  return (
    <StyledIcon data-cy={dataCy} className={classes} theme={theme}>
      {children || null}
    </StyledIcon>
  );
};

StyledIcon.displayName = 'StyledIcon';

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default memo(withTheme(Icon));
