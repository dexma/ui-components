import { default as React } from '../../../../node_modules/react';
import { PopoverProps as AntDPopoverProps } from 'antd';

export declare const Popover: React.ForwardRefExoticComponent<Omit<AntDPopoverProps, "dataId"> & Partial<{
    dataId?: string;
}> & React.RefAttributes<unknown>>;
