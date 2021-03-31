import React, { useContext } from 'react';
import hoistStatics from 'hoist-non-react-statics';

import { DataIdContext } from './DataIdProvider';

export default (WrappedComponent) => {
    const withDataId = React.forwardRef((props, ref) => {
        const context = useContext(DataIdContext);
        const { defaultProps } = WrappedComponent;

        let dataId = defaultProps?.dataId;

        if (context && props.dataId) {
            dataId = `${context}.${props.dataId}`;
        } else if (context) {
            console.log(dataId);
            dataId = `${context}.${dataId}`;
        } else if (props.dataId) {
            dataId = props.dataId;
        }

        const newProps = { ...props, dataId };

        return <WrappedComponent {...newProps} ref={ref} />;
    });

    const Hoisted = hoistStatics(withDataId, WrappedComponent);
    Hoisted.defaultProps = WrappedComponent.defaultProps;

    withDataId.displayName = `withDataId(WrappedComponent)`;

    return Hoisted;
};
