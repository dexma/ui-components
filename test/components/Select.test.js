import React from 'react';
import { mount } from 'enzyme';

import Select from 'components/Select';

const options = [
  { value: '1', label: '1st Floor [01. Luxemburg Building]' },
  { value: '2', label: '1st Floor [02. Luxemburg Building]' },
];

describe('<Select>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const select = mount(<Select options={options} />);
    expect(select.find('StyledSelect').length).toEqual(1);
  });
  it('Should render the correct Icon component', () => {
    const select = mount(<Select options={options} />);
    expect(select.find('Icon').length).toEqual(1);
  });
});
