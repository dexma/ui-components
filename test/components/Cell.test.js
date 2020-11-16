import React from 'react';
import { mount } from 'enzyme';

import Cell from '../../src/components/Cell';

describe('<Cell>', () => {
  it('Should render the correct component', () => {
    const grid = mount(<Cell />);
    expect(grid.find('StyledCell').length).toEqual(1);
  });
});
