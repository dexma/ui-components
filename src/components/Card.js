import React, { Fragment, memo } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GeneralPropTypes } from 'utils/propTypes';

import Icon from 'components/Icon';

const propTypes = {
  ...GeneralPropTypes,
  id: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
  isActive: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
};

const defaultProps = {
  classNamePrefix: 'card',
  isActive: false,
};

const Card = ({
  className,
  classNamePrefix,
  id,
  link,
  title,
  icon,
  isActive,
  onClick,
  onFocus,
  dataCy,
}) => {
  const classes = classNames(className, classNamePrefix, isActive && 'active');
  const content = (
    <Fragment>
      <div className="card-body card-section">
        <Icon name={icon} />
      </div>
      {title ? (
        <div className="card-title card-section">
          <h6>{title}</h6>
        </div>
      ) : null}
    </Fragment>
  );
  if (link) {
    return (
      <ReactLink
        id={id}
        to={link}
        data-cy={dataCy}
        className={classes}
        onFocus={onFocus}
      >
        {content}
      </ReactLink>
    );
  }
  return (
    <div
      id={id}
      data-cy={dataCy}
      className={classes}
      onClick={onClick}
      onFocus={onFocus}
    >
      {content}
    </div>
  );
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default memo(Card);
