import React from 'react';
import { Drawer as AntdDrawer, DrawerProps as AntdDrawerProps } from 'antd';

export type DrawerProps = AntdDrawerProps;

export const Drawer: React.FC<DrawerProps> = (props) => {
    return <AntdDrawer {...props} />;
};
