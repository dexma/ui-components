import React from 'react';
import { mount } from 'enzyme';

import Spinner from 'components/Spinner';

describe('<Spinner>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const spinner = mount(<Spinner />);
    expect(spinner.find('StyledSpinner').length).toEqual(1);
  });
  it('Should render the correct prop width', () => {
    const title = mount(<Spinner width={100} />);
    expect(title.prop('width')).toEqual(100);
  });
  it('Should render the correct prop width', () => {
    const title = mount(<Spinner height={100} />);
    expect(title.prop('height')).toEqual(100);
  });
});
