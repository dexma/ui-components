import React from 'react';
import { shallow } from 'enzyme';

import Spinner from 'components/Spinner';

describe('<Spinner>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const spinner = shallow(<Spinner />);
    expect(spinner.find('.spinner').length).toEqual(1);
  });
  it('Should render the correct type', () => {
    const title = shallow(<Spinner />);
    expect(title.find('svg').length).toEqual(1);
  });
  it('Should render the correct prop width', () => {
    const title = shallow(<Spinner width={100} />);
    expect(title.prop('width')).toEqual(100);
  });
  it('Should render the correct prop width', () => {
    const title = shallow(<Spinner height={100} />);
    expect(title.prop('height')).toEqual(100);
  });
});
