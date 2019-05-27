import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GeneralPropTypes } from 'utils/propTypes';

// Support: Chrome, Firefox, Safari 6+, IE10+, iOS 7+, and Android 4.4+.

const propTypes = {
  ...GeneralPropTypes,
  type: PropTypes.oneOf(['horizontal', 'vertical', 'container']),
  upOnSmall: PropTypes.number,
  upOnMedium: PropTypes.number,
  upOnLarge: PropTypes.number,
  horizontalMargin: PropTypes.bool,
  verticalMargin: PropTypes.bool,
  horizontalPadding: PropTypes.bool,
  verticalPadding: PropTypes.bool,
  fluid: PropTypes.bool,
  children: PropTypes.node,
};

const defaultProps = {
  classNamePrefix: 'grid',
  type: 'horizontal',
};

const Grid = ({
  className,
  classNamePrefix,
  type,
  upOnSmall,
  upOnMedium,
  upOnLarge,
  horizontalMargin,
  verticalMargin,
  horizontalPadding,
  verticalPadding,
  fluid,
  dataCy,
  children,
}) => {
  const classes = classNames(
    className,
    classNamePrefix,
    type === 'horizontal' && 'grid-x',
    type === 'vertical' && 'grid-y',
    type === 'container' && 'grid-container',
    upOnSmall && `small-up-${upOnSmall}`,
    upOnMedium && `medium-up-${upOnMedium}`,
    upOnLarge && `large-up-${upOnLarge}`,
    horizontalMargin && 'grid-margin-x',
    verticalMargin && 'grid-margin-y',
    horizontalPadding && 'grid-padding-x',
    verticalPadding && 'grid-padding-y',
    fluid && 'fluid'
  );
  return (
    <div data-cy={dataCy} className={classes}>
      {children || null}
    </div>
  );
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

export default memo(Grid);
