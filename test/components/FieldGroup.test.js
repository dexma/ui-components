import React from 'react';
import { mountWithTheme, shallowWithTheme } from '../utils/wrapperThemeProvider';
import FieldGroup from 'components/FieldGroup';
import {
  mockRadioGroup,
  mockCheckboxGroup,
  mockSelectedCheckboxItem,
  mockSelectedRadioItem,
} from '../mock/FieldGroup';

describe('<FieldGroup>', () => {
  it('Should render correct input and label elements', () => {
    const fieldGroup = mountWithTheme(
      <FieldGroup
        values={mockRadioGroup}
        selectedValues={mockSelectedRadioItem}
        type="radio"
      />
    );
    expect(fieldGroup.find('input').length).toEqual(mockRadioGroup.length);
    expect(fieldGroup.find('label').length).toEqual(mockRadioGroup.length);
  });
  it('Should render correct input type radio', () => {
    const fieldGroup = mountWithTheme(
      <FieldGroup
        values={mockRadioGroup}
        selectedValues={mockSelectedRadioItem}
        type="radio"
      />
    );
    expect(fieldGroup.find("input[type='radio']").length).toEqual(
      mockRadioGroup.length
    );
  });
  it('Should render correct input type checkbox', () => {
    const fieldGroup = mountWithTheme(
      <FieldGroup
        values={mockCheckboxGroup}
        selectedValues={mockSelectedCheckboxItem}
        type="checkbox"
      />
    );
    expect(fieldGroup.find("input[type='checkbox']").length).toEqual(
      mockCheckboxGroup.length
    );
  });
  it('Should render correct input radio active', () => {
    const fieldGroup = mountWithTheme(
      <FieldGroup
        values={mockRadioGroup}
        selectedValues={mockSelectedRadioItem}
        type="radio"
      />
    );
    expect(fieldGroup.find(".active input[type='radio']").length).toEqual(1);
  });
  it('Should render correct input checkbox active', () => {
    const fieldGroup = mountWithTheme(
      <FieldGroup
        values={mockCheckboxGroup}
        selectedValues={mockSelectedCheckboxItem}
        type="checkbox"
      />
    );
    expect(fieldGroup.find(".active input[type='checkbox']").length).toEqual(
      mockSelectedCheckboxItem.length
    );
  });
  it('Should run changeFunction when change input', () => {
    const mockCallBack = jest.fn();
    const fieldGroup = mountWithTheme(
      <FieldGroup
        values={mockCheckboxGroup}
        selectedValues={mockSelectedCheckboxItem}
        type="checkbox"
        onChange={value => mockCallBack(value)}
      />
    );
    fieldGroup.find('.item-hdd input').simulate('change');
    expect(mockCallBack).toBeCalled();
  });
});
