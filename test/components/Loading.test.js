import React from 'react';
import { mount } from 'enzyme';

import Loading from 'components/Loading';
import Spinner from 'components/Spinner';

describe('<Loading>', () => {
  it('Should render the classNamePrefix component', () => {
    const loading = mount(<Loading isLoading />);
    expect(loading.find('StyledLoading').length).toEqual(1);
  });
  it('Should render the Spinner component', () => {
    const loading = mount(<Loading isLoading />);
    expect(loading.find(Spinner).length).toEqual(1);
  });
  it('Should not render the Spinner and show children', () => {
    const loadDiv = <div>someText</div>;
    const loading = mount(<Loading isLoading={false}>{loadDiv}</Loading>);
    expect(loading.contains(loadDiv)).toBeTruthy();
  });
});
