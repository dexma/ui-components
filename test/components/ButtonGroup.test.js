import React from 'react';
import { mount } from 'enzyme';

import ButtonGroup from 'components/ButtonGroup';
import Button from 'components/Button';

describe('<ButtonGroup>', () => {
  it('Should render the classNamePrefix component', () => {
    const buttonGroup = mount(
      <ButtonGroup>
        <Button iconBefore="photo-camera" />
        <Button iconBefore="scatter" />
        <Button iconBefore="bar" />
        <Button iconBefore="line" />
        <Button iconBefore="share-user" />
        <Button iconBefore="config" />
      </ButtonGroup>
    );
    expect(buttonGroup.find('StyledButtonGroup').length).toBeTruthy();
  });
  it('Should render a button element', () => {
    const buttonGroup = mount(
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
    const buttonGroup = mount(
      <ButtonGroup vertical>
        <Button iconBefore="photo-camera" />
        <Button iconBefore="scatter" />
      </ButtonGroup>
    );
    expect(buttonGroup.find('.vertical').length).toBeTruthy();
    buttonGroup.setProps({ vertical: false });
    expect(buttonGroup.find('.horizontal').length).toBeTruthy();
  });
});
