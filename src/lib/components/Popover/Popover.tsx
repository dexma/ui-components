import React from 'react';
import { Popover as AntDPopover, type PopoverProps as AntDPopoverProps } from 'antd';

import { withDataId } from '@components/DataId/withDataId';

export const Popover = withDataId((props: AntDPopoverProps & { dataId?: string }) => {
    const { arrow, children, content, title, trigger, ...rest } = props;

    return (
        <AntDPopover data-testid='popover' title={title} content={content} trigger={trigger} arrow={arrow} {...rest}>
            {children}
        </AntDPopover>
    );
}, 'popover');
