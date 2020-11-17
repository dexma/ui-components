import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import omit from 'lodash/omit';

import theme from '../styles/theme';
import {
  StyledProgress,
  StyledMark,
} from '../styles/components/StyledProgress';

const propTypes = {
  /**
   * Number of the percent
   */
  percent: PropTypes.number.isRequired,
  /**
   * List if marks `[{ value: 20, color: 'blue' }, { value: 30, color: 'red' }]`
   */
  marks: PropTypes.arrayOf(PropTypes.object),
  /**
   * Set the text on the end
   */
  text: PropTypes.string,
  /**
   * Set the bar transparent
   */
  isTransparent: PropTypes.bool,
  /**
   * Set the color name for the bar, it will be a <a href="https://dexma.github.io/ui-components/?path=/docs/colors--colors">color</a>
   */
  color: PropTypes.oneOf(Object.keys(theme.color)),
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  isTransparent: false,
  color: 'green',
  theme: theme,
};

export const Progress = props => {
  const { text, marks } = props;
  const progressProps = omit(props, ['text', 'marks']);
  return (
    <StyledProgress data-testid="progress" {...progressProps}>
      <div className="outer">
        <div className="inner">
          <div className="background" />
          {marks && marks.length > 0
            ? marks.map((mark, i) => (
                <StyledMark key={i} {...mark} theme={props.theme} />
              ))
            : null}
        </div>
      </div>
      {text && <div className="text">{text}</div>}
    </StyledProgress>
  );
};

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;

export default withTheme(Progress);
