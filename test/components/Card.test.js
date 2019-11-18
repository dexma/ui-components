import React from 'react';
import { mount } from 'enzyme';

import Card from 'components/Card';

describe('<Card>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const card = mount(<Card icon="add" />);
    expect(card.find('StyledCard').length).toEqual(1);
  });

  it('Should click on the card', () => {
    const mockCallBack = jest.fn();
    const card = mount(
      <Card icon="add" onClick={mockCallBack} />
    );
    card.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
