import React from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css';

export const withTooltip = BaseComponent => props => {
  const { tooltip } = props;
  if (tooltip) {
    const { size } = props;
    let tooltipDistance = 20;
    if (size === 'medium') tooltipDistance = 22;
    if (size === 'large') tooltipDistance = 25;
    if (size === 'xlarge') tooltipDistance = 25;
    return (
      <Tooltip
        title={tooltip}
        position="bottom"
        trigger="mouseenter"
        arrow
        distance={tooltipDistance}
        size="small"
      >
        <BaseComponent {...props} />
      </Tooltip>
    );
  }
  return <BaseComponent {...props} />;
};
