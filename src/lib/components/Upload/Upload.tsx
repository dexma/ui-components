import React from 'react';
import { Upload as AntdUpload } from 'antd';
import { withDataId } from '@components/DataId/withDataId';

type UploadProps = React.ComponentProps<typeof AntdUpload>;

const Wrapped = withDataId((props: UploadProps) => {
    return <AntdUpload {...props} />;
}, 'upload');

export const Upload = Object.assign(Wrapped, {
    Dragger: AntdUpload.Dragger,
    LIST_IGNORE: AntdUpload.LIST_IGNORE,
}) as typeof AntdUpload;
