import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import theme from '../styles/theme';
import { StyledTagGroup } from '../styles/components/StyledTagGroup';

const propTypes = {
  /**
   * Children accepts only Tag components
   */
  // eslint-disable-next-line consistent-return
  children: PropTypes.arrayOf((propValue, key) => {
    if (
      propValue[key].type.displayName !== 'Tag' &&
      propValue[key].type.displayName !== 'WithTheme(Tag)'
    ) {
      return new Error(
        `Invalid children type ${propValue[key].type.displayName}, you have to pass Tag component as children`
      );
    }
  }),
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  theme: theme,
};

export const TagGroup = props => (
  <StyledTagGroup data-testid="tag-group" {...props} />
);

StyledTagGroup.displayName = 'StyledTagGroup';

TagGroup.propTypes = propTypes;
TagGroup.defaultProps = defaultProps;

export default withTheme(TagGroup);
