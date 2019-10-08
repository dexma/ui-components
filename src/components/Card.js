import React, { Fragment, memo } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import classNames from 'classnames';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';

import Icon from 'components/Icon';

import { StyledCard } from 'styles/components/StyledCard';

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
  ...DefaultGeneralPropTypes,
  isActive: false,
};

const Card = ({
  id,
  link,
  title,
  icon,
  isActive,
  onClick,
  onFocus,
  theme,
  dataCy,
}) => {
  const classes = classNames(isActive && 'active');
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
    <StyledCard
      id={id}
      data-cy={dataCy}
      className={classes}
      onClick={onClick}
      onFocus={onFocus}
      theme={theme}
    >
      {content}
    </StyledCard>
  );
};

StyledCard.displayName = 'StyledCard';

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default memo(withTheme(Card));
