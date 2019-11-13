import React from 'react';
import { mount } from 'enzyme';

import Grid from 'components/Grid';

describe('<Grid>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const grid = mount(<Grid />);
    expect(grid.find('StyledGrid').length).toEqual(1);
  });
});
