import React from 'react';
import { mount } from 'enzyme';

import Pagination from '../../src/components/Pagination';

describe('<Pagination>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const pagination = mount(<Pagination />);
    expect(pagination.find('StyledPagination').length).toEqual(1);
  });

  it('Should render the correct icon left', () => {
    const pagination = mount(<Pagination total={100} pageSize={10} defaultCurrent={6} />);
    const icon = pagination.find('StyledIcon');
    expect(icon.length).toEqual(2);
  });
});
