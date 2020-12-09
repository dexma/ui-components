import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import classNames from 'classnames';
import omit from 'lodash/omit';

import Icon from './Icon';
import Paragraph from './Paragraph';
import { StyledCard, StyledCardLink } from '../styles/components/StyledCard';
import theme from '../styles/theme';

const propTypes = {
  /**
   * Set the card as a link with href
   */
  link: PropTypes.string,
  /**
   * Show the title of the card
   */
  title: PropTypes.string,
  /**
   * Show ... if the title collapse
   */
  titleTruncated: PropTypes.bool,
  /**
   * Set the subtitle of the card
   */
  subtitle: PropTypes.string,
  /**
   * Set the description of the card
   */
  description: PropTypes.string,
  /**
   * You can use icon as the main picture
   */
  icon: PropTypes.string,
  /**
   * You can pass image url image
   */
  image: PropTypes.string,
  /**
   * You can set the footer of the card
   */
  footer: PropTypes.node,
  /**
   * Show the active card
   */
  isActive: PropTypes.bool,
  /**
   * Show a white card
   */
  isWhite: PropTypes.bool,
  /**
   * Show a loading placeholder
   */
  isLoading: PropTypes.bool,
  /**
   * Show the horizontal style card
   */
  isHorizontal: PropTypes.bool,
  /**
   * Invoked once the button has been clicked.
   */
  onClick: PropTypes.func,
  /**
   * Invoked once the button has been focused.
   */
  onFocus: PropTypes.func,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  titleTruncated: false,
  isActive: false,
  isWhite: false,
  isLoading: false,
  isHorizontal: false,
  theme: theme,
};

export const CardHeader = ({ image, icon }) => {
  if (!image && !icon) return null;
  return (
    <div className="card-header" data-testid="card-header">
      {image && !icon && (
        <img
          alt="card-header"
          src={image}
          className="card-img card-img-top"
          data-testid="card-image"
        />
      )}
      {icon && !image && <Icon name={icon} data-testid="card-icon" />}
    </div>
  );
};

export const CardBody = ({ title, subtitle, description }) => {
  if (!title && !subtitle && !description) return null;
  return (
    <div className="card-body" data-testid="card-body">
      {title && <h5 className="card-title">{title}</h5>}
      {subtitle && <h6 className="card-subtitle">{subtitle}</h6>}
      {description && <Paragraph>{description}</Paragraph>}
    </div>
  );
};

export const CardFooter = ({ footer }) => {
  if (!footer) return null;
  return (
    <div className="card-footer" data-testid="card-footer">
      {footer}
    </div>
  );
};

export const Card = props => {
  const {
    link,
    title,
    subtitle,
    description,
    icon,
    image,
    footer,
    isActive,
    isHorizontal,
  } = props;
  const classes = classNames(isActive && 'active');
  const CardComponent = link ? StyledCardLink : StyledCard;
  const cardProps = omit(props, ['icon', 'title', 'subtitle', 'description']);
  return (
    <CardComponent
      className={classes}
      hasFooter={footer}
      href={link}
      data-testid="card"
      {...cardProps}
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

export default withTheme(Card);
