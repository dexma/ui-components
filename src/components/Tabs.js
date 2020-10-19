import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import { Tabs as TabsAntDesign } from 'antd';

import theme from '../styles/theme';
import { StyledTabs } from '../styles/components/StyledTabs';

const propTypes = {
  className: PropTypes.string,
  dataCy: PropTypes.string,
  theme: PropTypes.shape({}),
};

const defaultProps = {
  theme: theme,
};

export const Tabs = props => {
  const { theme, dataCy } = props;
  return (
    <StyledTabs theme={theme} dataCy={dataCy}>
      <TabsAntDesign {...props} />
    </StyledTabs>
  );
};

export const TabPane = props => {
  return <TabsAntDesign.TabPane {...props} />;
};

StyledTabs.displayName = 'StyledTabs';

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;

export default memo(withTheme(Tabs));
