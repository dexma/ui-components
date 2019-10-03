import React from 'react';
import Title from 'components/Title';
import Heading from 'components/Heading';

import { mountWithTheme } from '../utils/wrapperThemeProvider';

const text = 'Some text';
const type = 'h3';

describe('<Title>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const title = mountWithTheme(<Title text={text} />);
    expect(title.find('StyledTitle').length).toEqual(1);
  });
  it('Should render the correct type', () => {
    const title = mountWithTheme(<Title text={text} type={type} />);
    expect(title.find(type).length).toEqual(1);
  });
  it('Should render the correct text', () => {
    const title = mountWithTheme(<Title text={text} type={type} />);
    expect(title.find(type).text()).toEqual(text);
  });
  it('Should render the correct line className', () => {
    const title = mountWithTheme(<Title text={text} type={type} />);
    expect(title.find('.line').length).toEqual(2);
  });
  it('Should render Heading component', () => {
    const title = mountWithTheme(<Title text={text} type={type} />);
    expect(title.find(Heading).length).toEqual(1);
  });
});
