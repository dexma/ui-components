import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import Row from './Row';
import Icon from './Icon';

import theme from '../styles/theme';
import { StyledResult } from '../styles/components/StyledResult';

const RESULT_VARIANT = Object.freeze({
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
  deleted: 'deleted',
  default: 'default',
});

const propTypes = {
  /**
   * Set the title of the result
   */
  title: PropTypes.string,
  /**
   * Set the info of the result
   */
  info: PropTypes.string,
  /**
   * You can set the footer of the resut as JSX element.
   */
  content: PropTypes.node,
  /**
   * Set the style variant of the result
   */
  variant: PropTypes.oneOf(Object.keys(RESULT_VARIANT)).isRequired,
  /**
   * Size of the icon inside result
   */
  size: PropTypes.number,
  /**
   * Set the icon <a href="https://dexma.github.io/ui-components/?path=/docs/icon--sizes#icons">Icons</a>:
   */
  icon: PropTypes.string,
  /**
   * Pass an element to render
   */
  iconElement: PropTypes.node,
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  theme: theme,
  variant: RESULT_VARIANT.default,
  size: 72,
};

const getIcon = variant => {
  let iconName = null;
  let iconColor = null;
  switch (variant) {
    case RESULT_VARIANT.success:
      iconName = 'circle_check';
      iconColor = 'green';
      break;
    case RESULT_VARIANT.info:
      iconName = 'alert_sign';
      iconColor = 'blueLight';
      break;
    case RESULT_VARIANT.warning:
      iconName = 'circle_info';
      iconColor = 'amber';
      break;
    case RESULT_VARIANT.error:
      iconName = 'circle_delete';
      iconColor = 'red';
      break;
    case RESULT_VARIANT.deleted:
      iconName = 'delete';
      iconColor = 'red';
      break;
    case RESULT_VARIANT.default:
      iconName = 'vader';
      iconColor = 'gray300';
      break;
    default:
      break;
  }
  return { iconName, iconColor };
};

export const Result = props => {
  const { title, info, variant, content, size, icon, iconElement } = props;
  const { iconName, iconColor } = getIcon(variant);
  return (
    <StyledResult
      data-testid={`result-${variant}`}
      fluid
      className={`result-${variant}`}
      {...props}
    >
      <Row className="result-row icon">
        {iconElement || (
          <Icon
            name={icon || iconName}
            size={size}
            color={iconColor}
            data-testid={`icon_${icon || iconName}`}
          />
        )}
      </Row>
      {title && (
        <Row className="result-row title">
          <span>{title}</span>
        </Row>
      )}
      {info && (
        <Row className="result-row info">
          <span>{info}</span>
        </Row>
      )}
      {content && <Row className="result-row content"> {content} </Row>}
    </StyledResult>
  );
};

StyledResult.displayName = 'StyledResult';

Result.propTypes = propTypes;
Result.defaultProps = defaultProps;

export default withTheme(Result);
