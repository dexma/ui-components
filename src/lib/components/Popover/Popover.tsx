import { Popover as AntDPopover, type PopoverProps as AntDPopoverProps } from 'antd';

import { withDataId } from '@components/DataId/withDataId';

export const Popover = withDataId((props: AntDPopoverProps & { dataId?: string }) => {
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
        <AntDPopover data-testid='popover' title={title} content={content} trigger={trigger} arrow={arrow} onOpenChange={handleOpenChange} {...rest}>
            {children}
        </AntDPopover>
    );
}, 'popover');
