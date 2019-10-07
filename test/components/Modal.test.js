import React from 'react';
import Modal from 'components/Modal';
import { mount } from 'enzyme';

describe('<Modal>', () => {
  it('Should render', () => {
    const modal = mount(<Modal visible />);
    expect(modal.find('StyledModal').length).toEqual(1);
  });
  it('Should have the container class', () => {
    const modal = mount(<Modal visible />);
    expect(modal.find('.container').length).toEqual(1);
    expect(modal.find('.panel').length).toEqual(1);
    expect(modal.find('.mask').length).toEqual(1);
  });
  it('Should have the containerClass class', () => {
    const modal = mount(<Modal visible={false} />);
    expect(modal.find('.containerHidden').length).toEqual(1);
    expect(modal.find('.panelHidden').length).toEqual(1);
    expect(modal.find('.maskHidden').length).toEqual(1);
  });
  it('Should call function on click outside', () => {
    const mockCallBack = jest.fn();
    const modal = mount(<Modal onClickAway={mockCallBack} />);
    modal.find('.maskHidden').simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it('Should render correct children', () => {
    const modal = mount(
      <Modal>
        <h1 className="element-test">Hello Test!</h1>
      </Modal>
    );
    expect(modal.find('.element-test').length).toEqual(1);
  });
  it('Should hide when press Escape key', () => {
    const map = {
      keydown: () => {},
    };
    window.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const modal = mount(
      <Modal visible>
        <h1 className="element-test">Hello Test!</h1>
      </Modal>
    );
    expect(modal.find('Modal').state('visible')).toBeTruthy();
    map.keydown({ key: 'Escape' });
    expect(modal.find('Modal').state('visible')).toBeFalsy();
    modal.find('Modal').setState({ visible: true });
    map.keydown({ key: 'Enter' });
    expect(modal.find('Modal').state('visible')).toBeTruthy();
  });
});
