import React from 'react';
import Modal from 'components/Modal';
import { mount } from 'enzyme';

describe('<Modal>', () => {
  it('Should render', () => {
    const modal = mount(<Modal visible />);
    expect(modal.find('StyledModal').length).toEqual(1);
  });
});
