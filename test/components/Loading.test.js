import React from 'react';
import { shallow } from 'enzyme';

import Loading from 'components/Loading';
import Spinner from 'components/Spinner';

describe('<Loading>', () => {
  it('Should render the classNamePrefix component', () => {
    const loading = shallow(<Loading isLoading={true} />);
    expect(loading.find('.dexma-loading').length).toEqual(1);
  });
  it('Should render the Spinner component', () => {
    const loading = shallow(<Loading isLoading={true} />);
    expect(loading.find(Spinner).length).toEqual(1);
  });
  it('Should not render the Spinner component', () => {
    const loading = shallow(<Loading isLoading={false} />);
    expect(loading.find(Spinner).length).toEqual(0);
  });
  it('Should not render the Spinner and show children', () => {
    const loadDiv = <div>someText</div>;
    const loading = shallow(<Loading isLoading={false}>{loadDiv}</Loading>);
    expect(loading.contains(loadDiv)).toBeTruthy();
  });
});
