import React from 'react';
import { shallow } from 'enzyme';

import Grid from 'components/Grid';

describe('<Grid>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const grid = shallow(<Grid />);
    expect(grid.find('.grid').length).toEqual(1);
  });
  it('Should render the correct up directin  class', () => {
    const title = shallow(<Grid upOnSmall={2} />);
    expect(title.find('.small-up-2').length).toEqual(1);
  });
  it('Should render the correct up directin  class', () => {
    const title = shallow(<Grid upOnMedium={2} />);
    expect(title.find('.medium-up-2').length).toEqual(1);
  });
  it('Should render the correct up direction  class', () => {
    const title = shallow(<Grid upOnLarge={2} />);
    expect(title.find('.large-up-2').length).toEqual(1);
  });
  it('Should render the correct type', () => {
    const title = shallow(<Grid type="horizontal" />);
    expect(title.find('.grid-x').length).toEqual(1);
  });
  it('Should render the correct type', () => {
    const title = shallow(<Grid type="vertical" />);
    expect(title.find('.grid-y').length).toEqual(1);
  });
  it('Should render the correct type', () => {
    const title = shallow(<Grid type="container" />);
    expect(title.find('.grid-container').length).toEqual(1);
  });
  it('Should render the correct horizontal margin class', () => {
    const title = shallow(<Grid horizontalMargin />);
    expect(title.find('.grid-margin-x').length).toEqual(1);
  });
  it('Should render the correct vertical margin class', () => {
    const title = shallow(<Grid verticalMargin />);
    expect(title.find('.grid-margin-y').length).toEqual(1);
  });

  it('Should render the correct horizontal padding class', () => {
    const title = shallow(<Grid horizontalPadding />);
    expect(title.find('.grid-padding-x').length).toEqual(1);
  });
  it('Should render the correct vertical padding class', () => {
    const title = shallow(<Grid verticalPadding />);
    expect(title.find('.grid-padding-y').length).toEqual(1);
  });
});
