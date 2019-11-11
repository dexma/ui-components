import React from 'react';
import { mount } from 'enzyme';

import Card from 'components/Card';
import Icon from 'components/Icon';

describe('<Card>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const card = mount(<Card icon="advancedanalytics" />);
    expect(card.find('StyledCard').length).toEqual(1);
  });
  it('Should render the correct Icon component', () => {
    const card = mount(<Card icon="advancedanalytics" />);
    expect(card.find(Icon).length).toEqual(1);
  });
  it('Should click on the card', () => {
    const mockCallBack = jest.fn();
    const card = mount(
      <Card icon="advancedanalytics" onClick={mockCallBack} />
    );
    card.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
