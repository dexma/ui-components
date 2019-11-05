import React, { Fragment, memo } from 'react';
import { Link as ReactLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import classNames from 'classnames';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';

import { StyledCard } from 'styles/components/StyledCard';

const propTypes = {
  ...GeneralPropTypes,
  id: PropTypes.string,
  link: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.string,
  footer: PropTypes.node,
  isActive: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  isActive: false,
  isWhite: false,
  isHorizontal: false,
};

export const CardHeader = ({ image, icon }) => {
  if (!image && !icon) return null;
  return (
    <div className="card-header">
      {image && !icon && (
        <img alt="card-header" src={image} className="card-img card-img-top" />
      )}
      {icon && !image && <Icon name={icon} color="gray300" />}
    </div>
  );
};

export const CardBody = ({ title, subtitle, description }) => {
  if (!title && !subtitle && !description) return null;
  return (
    <div className="card-body">
      {title && <h5 className="card-title">{title}</h5>}
      {subtitle && <h6 className="card-subtitle">{subtitle}</h6>}
      {description && <Paragraph>{description}</Paragraph>}
    </div>
  );
};

export const CardFooter = ({ footer }) => {
  if (!footer) return null;
  return <div className="card-footer">{footer}</div>;
};

const Card = ({
  id,
  link,
  title,
  subtitle,
  description,
  icon,
  image,
  footer,
  isHorizontal,
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
      image={image}
      hasFooter={footer}
      isHorizontal={isHorizontal}
      isActive={isActive}
      theme={theme}
    >
      <CardHeader image={image} icon={icon} />
      <CardBody title={title} subtitle={subtitle} description={description} />
      <CardFooter footer={footer} />
    </StyledCard>
  );
};

StyledCard.displayName = 'StyledCard';

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default memo(withTheme(Card));
