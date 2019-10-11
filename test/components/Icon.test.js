import React from 'react';
import { mount } from 'enzyme';

import Icon from 'components/Icon';

describe('<Icon>', () => {
  it('Should render the classNamePrefix component', () => {
    const icon = mount(<Icon />);
    expect(icon.find('StyledIcon').length).toEqual(1);
  });
  it('Should render the element i', () => {
    const icon = mount(<Icon />);
    expect(icon.find('i').length).toEqual(1);
  });
  it('Should have size prop on the element', () => {
    const testSize = 'small';
    const icon = mount(<Icon size={testSize}/>);
    expect(icon.prop('size')).toEqual(testSize);
    expect(icon.find(`.${testSize}`).length).toBeTruthy();
    icon.setProps({ size: 'medium' });
    expect(icon.find('.medium').length).toBeTruthy();
  });
  it('Should have name prop on the element', () => {
    const testName = 'close';
    const icon = mount(<Icon name={testName} />);
    expect(icon.find(`i.dexma-icon-${testName}`).length).toEqual(1);
  });
  it('Should render children string', () => {
    const testName = 'close';
    const testText = 'Test text';
    const icon = mount(<Icon name={testName}>{testText}</Icon>);
    expect(icon.find(`i`).text()).toEqual(testText);
  });
  it('Should render children span', () => {
    const testName = 'close';
    const testSpan = <span className="testSpan">Test span</span>;
    const icon = mount(<Icon name={testName}>{testSpan}</Icon>);
    expect(icon.find(`.testSpan`).length).toEqual(1);
  });
});
