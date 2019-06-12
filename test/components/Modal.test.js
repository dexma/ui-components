import React from 'react';
import { shallow } from 'enzyme';

import Modal from 'components/Modal';

describe('<Modal>', () => {
  it('Should render the classNamePrefix component', () => {
    const modal = shallow(<Modal />);
    expect(modal.find('StyledModal').length).toEqual(1);
  });
});
