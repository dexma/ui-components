import React from 'react';
import { mount } from 'enzyme';

import Button from 'components/Button';

describe('<Button>', () => {
  it('Should render the classNamePrefix component', () => {
    const button = mount(<Button />);
    expect(button.find('StyledButton').length).toEqual(1);
  });
  it('Should render a button element', () => {
    const button = mount(<Button />);
    expect(button.find('button')).toBeTruthy();
  });
  it('Should pass additional classes', () => {
    const testClass = 'classTest';
    const button = mount(<Button className={testClass} />);
    expect(button.find(`.${testClass}`).length).toBeTruthy();
  });
  it('Should render correct text passing by props', () => {
    const testText = 'Some text';
    const button = mount(<Button text={testText} />);
    expect(button.text()).toEqual(testText);
  });
  it('Should render correct id passing by props', () => {
    const testId = '2312';
    const button = mount(<Button id={testId} />);
    expect(button.prop('id')).toEqual(testId);
  });
  it('Should disabled the button', () => {
    const isDisabled = true;
    const button = mount(<Button isDisabled={isDisabled} />);
    expect(button.find('StyledButton').prop('disabled')).toEqual(isDisabled);
  });
  it('Should render icons elements', () => {
    const iconBefore = 'close';
    const iconAfter = 'bar';
    const button = mount(<Button iconBefore={iconBefore} />);
    expect(button.find('Icon').length).toEqual(1);
    button.setProps({ iconAfter });
    expect(button.find('Icon').length).toEqual(2);
  });
  it('Should click on the button', () => {
    const mockCallBack = jest.fn();
    const button = mount(<Button onClick={mockCallBack} />);
    button.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
