import React from 'react';
import { mount } from 'enzyme';
import Icon, { getIconSize } from 'components/Icon';
import icons from 'config/icon';

describe('<Icon>', () => {
  it('Should render the classNamePrefix component', () => {
    const icon = mount(<Icon />);
    expect(icon.find('StyledIcon').length).toEqual(1);
  });
  it('Should render the element i', () => {
    const icon = mount(<Icon />);
    expect(icon.find('svg').length).toEqual(1);
  });
  it('Should have icon config', () => {
    expect(icons.length).toBeTruthy();
  });
  it('Should have correct size passing small sizes', () => {
    const icon = mount(<Icon size="small"/>);
    expect(icon.find('svg').prop('width')).toBe(getIconSize('small'));
  });
  it('Should have correct size passing medium sizes', () => {
    const icon = mount(<Icon size="medium"/>);
    expect(icon.find('svg').prop('width')).toBe(getIconSize('medium'));
  });
  it('Should have correct size passing large sizes', () => {
    const icon = mount(<Icon size="large"/>);
    expect(icon.find('svg').prop('width')).toBe(getIconSize('large'));
  });
  it('Should have correct size passing xlarge sizes', () => {
    const icon = mount(<Icon size="xlarge"/>);
    expect(icon.find('svg').prop('width')).toBe(getIconSize('xlarge'));
  });
});
