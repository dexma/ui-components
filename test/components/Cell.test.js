import React from 'react';
import { shallow } from 'enzyme';

import Cell from 'components/Cell';

describe('<Cell>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const grid = shallow(<Cell />);
    expect(grid.find('.cell').length).toEqual(1);
  });
  it('Should render the correct small class', () => {
    const title = shallow(<Cell small={2} />);
    expect(title.find('.small-2').length).toEqual(1);
  });
  it('Should render the correct medium class', () => {
    const title = shallow(<Cell medium={2} />);
    expect(title.find('.medium-2').length).toEqual(1);
  });
  it('Should render the correct large class', () => {
    const title = shallow(<Cell large={2} />);
    expect(title.find('.large-2').length).toEqual(1);
  });
  it('Should render the correct auto class', () => {
    const title = shallow(<Cell small={'auto'} />);
    expect(title.find('.small-auto').length).toEqual(1);
  });
  it('Should render the correct shrink class', () => {
    const title = shallow(<Cell small={'shrink'} />);
    expect(title.find('.small-shrink').length).toEqual(1);
  });
  it('Should render the correct shrink class', () => {
    const title = shallow(<Cell small={'full'} />);
    expect(title.find('.small-full').length).toEqual(1);
  });
});
