import React from 'react';
import { shallow, mount } from 'enzyme';

import Title from 'components/Title';
import Heading from 'components/Heading';

const text = 'Some text';
const type = 'h3';

describe('<Title>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const title = shallow(<Title text={text} />);
    expect(title.find('.title').length).toEqual(1);
  });
  it('Should render the correct type', () => {
    const title = mount(<Title text={text} type={type} />);
    expect(title.find(type).length).toEqual(1);
  });
  it('Should render the correct text', () => {
    const title = mount(<Title text={text} type={type} />);
    expect(title.find(type).text()).toEqual(text);
  });
  it('Should render the correct line className', () => {
    const title = shallow(<Title text={text} type={type} />);
    expect(title.find('.line').length).toEqual(1);
  });
  it('Should render Heading component', () => {
    const title = shallow(<Title text={text} type={type} />);
    expect(title.find(Heading).length).toEqual(1);
  });
});
