import React from 'react';

import { Tag } from '../components/Tag';

export default {
  title: 'Tag',
  component: Tag,
};

export const enabled = () => <Tag color="#E12F8A">Tag</Tag>;
export const disabled = () => (
  <Tag color="#13C3A3" variant="outline" type="rounded" icon="alert">
    1
  </Tag>
);
