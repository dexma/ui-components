import React from 'react';
import { mount } from 'enzyme';

import Modal from '../../src/components/Modal';

describe('<Modal>', () => {
  it('Should render', () => {
    const modal = mount(<Modal visible />);
    expect(modal.find('StyledModal').length).toEqual(1);
  });
});
