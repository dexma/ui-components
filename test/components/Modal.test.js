import React, { Fragment } from 'react';
import { shallow, mount } from 'enzyme';

import Modal from 'components/Modal';
import Button from 'components/Button';

describe('<Modal>', () => {
  it('Should render the classNamePrefix component', () => {
    const modal = shallow(<Modal />);
    expect(modal.find('.modal').length).toEqual(1);
  });
  it('Should render the correct buttons element', () => {
    const titleTest = 'Basic modal';
    const modal = mount(
      <Modal title={titleTest} visible>
        <Fragment>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <Button key="cancel" size="small" text="Cancel" />,
          <Button key="send" size="small" text="Send" />
        </Fragment>
      </Modal>
    );
    expect(modal.find('Button').length).toEqual(2);
  });
});
