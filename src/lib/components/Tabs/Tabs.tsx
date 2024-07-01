import React, { ReactNode, useContext } from 'react';
import { Tabs as TabsAntDesign, type TabsProps as TabsPropsAntDesign, type TabPaneProps } from 'antd';

import { StyledTabs } from '@styles/Tabs/StyledTabs';
import { ThemeContext } from 'styled-components';

export enum TabsVariant {
    DEFAULT = 'default',
    SCROLLABLE = 'scrollable',
}
type TabsProps = { variant?: TabsVariant } & TabsPropsAntDesign;

export const Tabs = ({ variant = TabsVariant.DEFAULT, ...props }: TabsProps): ReactNode => {
    const th = useContext(ThemeContext);
    return (
        <StyledTabs $variant={variant} theme={th} data-testid='tabs'>
            <TabsAntDesign animated={{ inkBar: false, tabPane: false }} {...props} />
        </StyledTabs>
    );
};

/**
 * @deprecated [Tabs] Tabs.TabPane is deprecated. Please use `items` directly.
 */
export const TabPane = (props: TabPaneProps): ReactNode => <TabsAntDesign.TabPane {...props} />;
