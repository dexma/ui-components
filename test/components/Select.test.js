import React from 'react';
import { shallow, mount } from 'enzyme';

import Select from 'components/Select';
import Icon from 'components/Icon';

const options = [
  { value: '1', label: '1st Floor [01. Luxemburg Building]' },
  { value: '2', label: '1st Floor [02. Luxemburg Building]' },
];

describe('<Select>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const select = shallow(<Select options={options} />);
    expect(select.find('.dexma-select').length).toEqual(1);
  });
  it('Should render the correct Icon component', () => {
    const select = mount(<Select options={options} />);
    expect(select.find('Icon').length).toEqual(1);
  });
  it('Should have the isClearable prop to false', () => {
    const select = shallow(<Select options={options} />);
    expect(select.prop('isClearable')).toEqual(false);
  });
});
