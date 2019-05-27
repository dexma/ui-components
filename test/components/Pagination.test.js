import React from 'react';
import { shallow, mount } from 'enzyme';

import Pagination from 'components/Pagination';
import Icon from 'components/Icon';

describe('<Pagination>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const pagination = shallow(<Pagination />);
    expect(pagination.find('.pagination').length).toEqual(1);
  });

  it('Should render the correct icon left', () => {
    const pagination = mount(<Pagination initialPage={0} pageCount={5} />);
    const icon = pagination.find('Icon');
    expect(icon.length).toEqual(2);
    expect(icon.first().prop('name')).toEqual('left_arrow');
    expect(icon.last().prop('name')).toEqual('right_arrow');
  });

  it('Should has correct class active for item', () => {
    const pagination = mount(<Pagination initialPage={0} pageCount={5} />);
    expect(pagination.find('.active').length).toEqual(1);
  });

  it('Should has correct class next for item', () => {
    const pagination = mount(<Pagination initialPage={0} pageCount={5} />);
    expect(pagination.find('.next').length).toEqual(1);
  });

  it('Should has correct class previous for item', () => {
    const pagination = mount(<Pagination initialPage={0} pageCount={5} />);
    expect(pagination.find('.previous').length).toEqual(1);
  });

  it('Should call correct function on change page', () => {
    const mockCallBack = jest.fn();
    const pagination = mount(
      <Pagination initialPage={0} pageCount={5} onPageChange={mockCallBack} />
    );
    pagination.find('.next').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
    pagination.find('.previous').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
