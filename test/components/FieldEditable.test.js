import React from 'react';
import { shallow, mount } from 'enzyme';
import AutosizeInput from 'react-input-autosize';

import FieldEditable from 'components/FieldEditable';

describe('<FieldEditable>', () => {
  it('Should render the classNamePrefix component', () => {
    const fieldEditable = mount(<FieldEditable />);
    expect(fieldEditable.find('StyledFieldEditable').length).toEqual(1);
  });
  it('Should render the buttons with loading active prop', () => {
    const fieldEditable = mount(<FieldEditable isLoading />);
    expect(fieldEditable.find('.loading').length).toBeTruthy();
  });
  it('Should render correct class error', () => {
    const fieldEditable = mount(<FieldEditable hasError />);
    expect(fieldEditable.find('div.hasError').length).toEqual(1);
  });
  it("Shouldn't render the buttons with disabled prop", () => {
    const fieldEditable = mount(<FieldEditable disabled />);
    expect(fieldEditable.find('Button').length).toEqual(0);
  });
  it('Should have correct editable behavior', () => {
    const fieldEditable = mount(
      <FieldEditable disabled={false} isLoading={false} />
    );
    expect(fieldEditable.find('Button').length).toEqual(0);
    fieldEditable.simulate('mouseenter');
    expect(fieldEditable.find('Button').is('.edit')).toBeTruthy();
    fieldEditable.find('Button').simulate('click');
    expect(
      fieldEditable
        .find('Button')
        .first()
        .is('.save')
    ).toBeTruthy();
    expect(
      fieldEditable
        .find('Button')
        .last()
        .is('.close')
    ).toBeTruthy();
  });
  it('Should have correct onSave behavior', () => {
    const mockCallBack = jest.fn();
    const fieldEditable = mount(<FieldEditable onSave={mockCallBack} />);
    fieldEditable.simulate('mouseenter');
    fieldEditable.find('Button').simulate('click');
    expect(fieldEditable.state('isEditable')).toEqual(true);
    fieldEditable
      .find('Button')
      .first()
      .simulate('click'); // Click on save button
    expect(fieldEditable.state('isEditable')).toEqual(false);
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it('Should have correct onClose behavior', () => {
    const mockCallBack = jest.fn();
    const fieldEditable = mount(<FieldEditable onClose={mockCallBack} />);
    fieldEditable.simulate('mouseenter');
    fieldEditable.find('Button').simulate('click');
    expect(fieldEditable.state('isEditable')).toEqual(true);
    fieldEditable
      .find('Button')
      .last()
      .simulate('click'); // Click on close button
    expect(fieldEditable.state('isEditable')).toEqual(false);
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it('Should render the autosize field', () => {
    const fieldEditable = shallow(<FieldEditable isEditable />);
    expect(fieldEditable.find(AutosizeInput).length).toEqual(1);
  });
  it('Should have correct enter key down behavior', () => {
    const mockCallBack = jest.fn();
    const fieldEditable = mount(<FieldEditable onClose={mockCallBack} />);
    fieldEditable.simulate('mouseenter');
    fieldEditable.find('Button').simulate('click');
    fieldEditable.find('input').simulate('keydown', { keyCode: 27 });
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  it('Should have correct escape key down behavior', () => {
    const mockCallBack = jest.fn();
    const fieldEditable = mount(<FieldEditable onSave={mockCallBack} />);
    fieldEditable.simulate('mouseenter');
    fieldEditable.find('Button').simulate('click');
    fieldEditable.find('input').simulate('keydown', { keyCode: 13 });
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
  /*
  wrapper.find('input').simulate('keypress', {key: 'Enter'})
*/
});
