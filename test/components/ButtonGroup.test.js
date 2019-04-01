import React from 'react';
import { shallow } from 'enzyme';

import ButtonGroup from 'components/ButtonGroup';
import Button from 'components/Button';

describe('<ButtonGroup>', () => {
  it('Should render the classNamePrefix component', () => {
    const buttonGroup = shallow(
      <ButtonGroup>
        <Button iconBefore="photo-camera" />
        <Button iconBefore="scatter" />
        <Button iconBefore="bar" />
        <Button iconBefore="line" />
        <Button iconBefore="share-user" />
        <Button iconBefore="config" />
      </ButtonGroup>
    );
    expect(buttonGroup.find('.button-group').length).toEqual(1);
  });
  it('Should render a button element', () => {
    const buttonGroup = shallow(
      <ButtonGroup>
        <Button iconBefore="photo-camera" />
        <Button iconBefore="scatter" />
        <Button iconBefore="bar" />
        <Button iconBefore="line" />
        <Button iconBefore="share-user" />
        <Button iconBefore="config" />
      </ButtonGroup>
    );
    expect(buttonGroup.find(Button).length).toEqual(6);
  });
  it('Should have the class for the position', () => {
    const buttonGroup = shallow(
      <ButtonGroup vertical>
        <Button iconBefore="photo-camera" />
        <Button iconBefore="scatter" />
      </ButtonGroup>
    );
    expect(buttonGroup.find('.vertical').length).toEqual(1);
    buttonGroup.setProps({ vertical: false });
    expect(buttonGroup.find('.horizontal').length).toEqual(1);
  });
});
