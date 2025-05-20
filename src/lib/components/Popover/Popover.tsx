import { Popover as AntDPopover, type PopoverProps as AntDPopoverProps } from 'antd';

import { withDataId } from '@components/DataId/withDataId';
import { forwardRef } from 'react';

export const Popover = withDataId(
    forwardRef<any, AntDPopoverProps & { dataId?: string }>((props, ref) => {
        const { arrow, children, content, title, trigger, ...rest } = props;

        const handleOpenChange = (visible: boolean) => {
            setTimeout(() => {
                const popoverElement = document.querySelector('.ant-popover-inner');
                if (popoverElement) {
                    popoverElement.setAttribute('role', visible ? 'dialog' : 'tooltip');
                }
            }, 0);
        };

        return (
            <AntDPopover
                ref={ref}
                data-testid='popover'
                title={title}
                content={content}
                trigger={trigger}
                arrow={arrow}
                onOpenChange={handleOpenChange} {...rest}>
                {children}
            </AntDPopover>
        );
    }), 'popover');
