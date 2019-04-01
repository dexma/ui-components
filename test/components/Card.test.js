import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

import Card from 'components/Card';
import Icon from 'components/Icon';

describe('<Card>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const card = shallow(<Card icon="advancedanalytics" />);
    expect(card.find('.card').length).toEqual(1);
  });
  it('Should render the correct Icon component', () => {
    const card = shallow(<Card icon="advancedanalytics" />);
    expect(card.find(Icon).length).toEqual(1);
  });
  it('Should pass additional classes', () => {
    const testClass = 'classTest';
    const card = shallow(
      <Card icon="advancedanalytics" className={testClass} />
    );
    expect(card.find(`.${testClass}`).length).toEqual(1);
  });
  it('Should set correct title', () => {
    const testTitle = 'title';
    const card = shallow(<Card icon="advancedanalytics" title={testTitle} />);
    expect(card.find('.card-title h6').text()).toEqual(testTitle);
  });
  it('Should set correct active class', () => {
    const card = shallow(<Card icon="advancedanalytics" isActive />);
    expect(card.find('.active').length).toEqual(1);
  });
  it('Should render element link correct', () => {
    const card = shallow(<Card icon="advancedanalytics" link="/" />);
    expect(card.find(Link).length).toEqual(1);
  });
  it('Should click on the card', () => {
    const mockCallBack = jest.fn();
    const card = shallow(
      <Card icon="advancedanalytics" onClick={mockCallBack} />
    );
    card.simulate('click');
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
