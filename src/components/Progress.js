import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import theme from 'styles/theme';
import { StyledProgress, StyledMark } from 'styles/components/StyledProgress';

const propTypes = {
  percent: PropTypes.number.isRequired,
  marks: PropTypes.arrayOf(PropTypes.object()),
  text: PropTypes.string,
  isTransparent: PropTypes.boolean,
  color: PropTypes.oneOf(Object.keys(theme.color)),
  theme: PropTypes.shape({}),
};

const defaultProps = {
  theme: theme,
  isTransparent: false,
  color: 'green',
};

export const Progress = props => {
  const { text, marks } = props;
  return (
    <StyledProgress {...props}>
      <div className="outer">
        <div className="inner">
          <div className="background" />
          {marks && marks.length > 0
            ? marks.map(mark => <StyledMark {...mark} theme={props.theme} />)
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
