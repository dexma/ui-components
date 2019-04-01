import React from 'react';
import { shallow } from 'enzyme';

import Button from 'components/Button';
import Icon from 'components/Icon';

describe('<Button>', () => {
  it('Should render the classNamePrefix component', () => {
    const button = shallow(<Button />);
    expect(button.find('.button').length).toEqual(1);
  });
  it('Should render a button element', () => {
    const button = shallow(<Button />);
    expect(button.type()).toEqual('button');
  });
  it('Should pass additional classes', () => {
    const testClass = 'classTest';
    const button = shallow(<Button className={testClass} />);
    expect(button.find(`.${testClass}`).length).toEqual(1);
  });
  it('Should render correct text passing by props', () => {
    const testText = 'Some text';
    const button = shallow(<Button text={testText} />);
    expect(button.text()).toEqual(testText);
  });
  it('Should render correct id passing by props', () => {
    const testId = '2312';
    const button = shallow(<Button id={testId} />);
    expect(button.prop('id')).toEqual(testId);
  });
  it('Should disabled the button', () => {
    const isDisabled = true;
    const button = shallow(<Button isDisabled={isDisabled} />);
    expect(button.prop('disabled')).toEqual(isDisabled);
  });
  it('Should render icons elements', () => {
    const iconBefore = 'close';
    const iconAfter = 'bar';
    const button = shallow(<Button iconBefore={iconBefore} />);
    expect(button.find(Icon).length).toEqual(1);
    button.setProps({ iconAfter });
    expect(button.find(Icon).length).toEqual(2);
  });
  it('Should click on the button', () => {
    const mockCallBack = jest.fn();
    const button = shallow(<Button onClick={mockCallBack} />);
    button.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
