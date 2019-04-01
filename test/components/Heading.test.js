import React from 'react';
import { shallow } from 'enzyme';

import Heading from 'components/Heading';

describe('<Heading>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const heading = shallow(<Heading type="h3" />);
    expect(heading.find('.heading').length).toEqual(1);
  });
  it('Should render the correct type', () => {
    const heading = shallow(<Heading type="h3" />);
    expect(heading.find('h3').length).toEqual(1);
  });
  it('Should render the correct text', () => {
    const text = 'Some text';
    const heading = shallow(<Heading type="h3" text={text} />);
    expect(heading.find('h3').text()).toEqual(text);
  });
  it('Should render the correct line className', () => {
    const text = 'Some text';
    const heading = shallow(<Heading type="h3" text={text} line />);
    expect(heading.find('.line-bottom').length).toEqual(1);
  });
});
