import React from 'react';
import Heading from 'components/Heading';

import { mountWithTheme } from '../utils/wrapperThemeProvider';

describe('<Heading>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const heading = mountWithTheme(<Heading type="h3" />);
    expect(heading.find('StyledHeading').length).toEqual(1);
  });
  it('Should render the correct type', () => {
    const heading = mountWithTheme(<Heading type="h3" />);
    expect(heading.find('h3').length).toEqual(1);
  });
  it('Should render the correct text', () => {
    const text = 'Some text';
    const heading = mountWithTheme(<Heading type="h3" text={text} />);
    expect(heading.find('h3').text()).toEqual(text);
  });
  it('Should render the correct line className', () => {
    const text = 'Some text';
    const heading = mountWithTheme(<Heading type="h3" text={text} line />);
    expect(heading.find('.line-bottom').length).toEqual(1);
  });
});
