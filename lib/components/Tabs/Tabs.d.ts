import { ReactNode } from '../../../../node_modules/react';
import { TabsProps as TabsPropsAntDesign, TabPaneProps } from 'antd';
export declare enum TabsVariant {
    DEFAULT = "default",
    SCROLLABLE = "scrollable"
}
type TabsProps = {
    variant?: TabsVariant;
} & TabsPropsAntDesign;
export declare const Tabs: ({ variant, ...props }: TabsProps) => ReactNode;
/**
 * @deprecated [Tabs] Tabs.TabPane is deprecated. Please use `items` directly.
 */
export declare const TabPane: (props: TabPaneProps) => ReactNode;
export {};
