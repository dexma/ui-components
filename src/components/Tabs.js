import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Tabs as TabsAntDesign } from 'antd';
import omit from 'lodash/omit';

import theme from '../styles/theme';
import { StyledTabs } from '../styles/components/StyledTabs';

const propTypes = {
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
};

const defaultProps = {
  theme: theme,
};

export const Tabs = props => {
  const { theme } = props;
  const tabsProps = omit(props, ['theme']);
  return (
    <StyledTabs data-testid="tabs" theme={theme}>
      <TabsAntDesign {...tabsProps} />
    </StyledTabs>
  );
};

export const TabPane = props => {
  return <TabsAntDesign.TabPane {...props} />;
};

StyledTabs.displayName = 'StyledTabs';

Tabs.defaultProps = propTypes;
Tabs.defaultProps = defaultProps;

export default withTheme(Tabs);
