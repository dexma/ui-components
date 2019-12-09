import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import classNames from 'classnames';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';

import { StyledCard, StyledCardLink } from 'styles/components/StyledCard';

const propTypes = {
  ...GeneralPropTypes,
  link: PropTypes.string,
  title: PropTypes.string,
  titleTruncated: PropTypes.bool,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string,
  image: PropTypes.string,
  footer: PropTypes.node,
  isActive: PropTypes.bool,
  isLoading: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  titleTruncated: false,
  isActive: false,
  isWhite: false,
  isLoading: false,
  isHorizontal: false,
};

export const CardHeader = ({ image, icon }) => {
  if (!image && !icon) return null;
  return (
    <div className="card-header">
      {image && !icon && (
        <img alt="card-header" src={image} className="card-img card-img-top" />
      )}
      {icon && !image && <Icon name={icon} color="iconColor" />}
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

export const Card = ({
  titleTruncated,
  link,
  title,
  subtitle,
  description,
  icon,
  image,
  footer,
  isActive,
  isLoading,
  isHorizontal,
  onClick,
  onFocus,
  theme,
  dataCy,
}) => {
  const classes = classNames(isActive && 'active');
  const CardComponent = link ? StyledCardLink : StyledCard;
  return (
    <CardComponent
      titleTruncated={titleTruncated}
      data-cy={dataCy}
      className={classes}
      onClick={onClick}
      onFocus={onFocus}
      image={image}
      hasFooter={footer}
      isActive={isActive}
      isLoading={isLoading}
      isHorizontal={isHorizontal}
      theme={theme}
      href={link}
    >
      <CardHeader image={image} icon={icon} />
      {isHorizontal ? (
        <div className="horizontal">
          <CardBody
            title={title}
            subtitle={subtitle}
            description={description}
          />
          <CardFooter footer={footer} />
        </div>
      ) : (
        <>
          <CardBody
            title={title}
            subtitle={subtitle}
            description={description}
          />
          <CardFooter footer={footer} />
        </>
      )}
    </CardComponent>
  );
};

StyledCard.displayName = 'StyledCard';

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default memo(withTheme(Card));
