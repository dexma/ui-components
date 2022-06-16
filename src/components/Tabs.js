import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Tabs as TabsAntDesign } from 'antd';
import omit from 'lodash/omit';
import 'antd/dist/antd.css';

import theme from '../styles/theme';
import { StyledTabs } from '../styles/components/StyledTabs';

const propTypes = {
  /**
   * Theme json based
   */
  theme: PropTypes.shape({}),
  variant: PropTypes.string,
};

const defaultProps = {
  theme: theme,
};

export const Tabs = withTheme(props => {
  const { theme, variant } = props;
  const tabsProps = omit(props, ['theme']);
  return (
    <StyledTabs variant={variant} data-testid="tabs" theme={theme}>
      <TabsAntDesign
        {...tabsProps}
        animated={{ inkBar: false, tabPane: false }}
      />
    </StyledTabs>
  );
});

export const TabPane = props => {
  return <TabsAntDesign.TabPane {...props} />;
};

StyledTabs.displayName = 'StyledTabs';

Tabs.defaultProps = propTypes;
Tabs.defaultProps = defaultProps;
