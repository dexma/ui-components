import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import classNames from 'classnames';
import { GeneralPropTypes, DefaultGeneralPropTypes } from 'utils/propTypes';

import Icon from 'components/Icon';
import Paragraph from 'components/Paragraph';
import Grid from 'components/Grid';
import Row from 'components/Row';
import Cell from 'components/Cell';

import {
  StyledCard,
  StyledCardLink,
  StyledCardLayoutEquals,
  StyledCardLayoutTruncate,
  StyledCardLayoutHorizontal,
} from 'styles/components/StyledCard';

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
  isLoading: PropTypes.bool,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
};

const defaultProps = {
  ...DefaultGeneralPropTypes,
  isActive: false,
  isWhite: false,
  isLoading: false,
};

export const CardLayoutHorizontal = ({ children }) => {
  return (
    <StyledCardLayoutHorizontal>
      <Grid>
        <Row>
          {React.Children.map(children || null, (child, i) => {
            return (
              <Cell xs={12} md={6}>
                <child.type {...child.props} key={i} />
              </Cell>
            );
          })}
        </Row>
      </Grid>
    </StyledCardLayoutHorizontal>
  );
};

export const CardLayoutEquals = ({ children }) => {
  return (
    <StyledCardLayoutEquals>
      <Grid>
        <Row>
          {React.Children.map(children || null, (child, i) => {
            return (
              <Cell xs={12} md={4} xl={3}>
                <child.type {...child.props} key={i} />
              </Cell>
            );
          })}
          {React.Children.map(children || null, (child, i) => {
            return (
              <Cell xs={12} md={4} xl={3}>
                <child.type {...child.props} key={i} />
              </Cell>
            );
          })}
        </Row>
      </Grid>
    </StyledCardLayoutEquals>
  );
};

export const CardLayoutTruncate = ({ children }) => {
  return (
    <StyledCardLayoutTruncate>
      <Grid>
        <Row>
          {React.Children.map(children || null, (child, i) => {
            return (
              <Cell xs={12} md={4} lg={3}>
                <child.type {...child.props} key={i} />
              </Cell>
            );
          })}{' '}
          {React.Children.map(children || null, (child, i) => {
            return (
              <Cell xs={12} md={4} lg={3}>
                <child.type {...child.props} key={i} />
              </Cell>
            );
          })}
        </Row>
      </Grid>
    </StyledCardLayoutTruncate>
  );
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

export const Card = ({
  id,
  link,
  title,
  subtitle,
  description,
  icon,
  image,
  footer,
  isActive,
  isLoading,
  onClick,
  onFocus,
  theme,
  dataCy,
}) => {
  const classes = classNames(isActive && 'active');
  const TagComponent = link ? StyledCardLink : StyledCard;
  return (
    <TagComponent
      id={id}
      data-cy={dataCy}
      className={classes}
      onClick={onClick}
      onFocus={onFocus}
      image={image}
      hasFooter={footer}
      isActive={isActive}
      isLoading={isLoading}
      theme={theme}
      href={link}
    >
      <CardHeader image={image} icon={icon} />
      <CardBody title={title} subtitle={subtitle} description={description} />
      <CardFooter footer={footer} />
    </TagComponent>
  );
};

StyledCard.displayName = 'StyledCard';

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;

export default memo(withTheme(Card));
