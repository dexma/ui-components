import React from 'react';
import { Segmented as AntdSegmented, SegmentedProps as AntdSegmentedProps } from 'antd';

export type SegmentedProps = AntdSegmentedProps;

export const Segmented: React.FC<SegmentedProps> = (props) => {
    return <AntdSegmented {...props} />;
};
