import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Select } from '../../src/components/Select';

const options = [
  { value: '1', label: 'First test option' },
  { value: '2', label: 'Second test option' },
];

describe('<Select>', () => {
  it('Should have the test id', () => {
    const { getByTestId } = render(<Select options={options} />);
    expect(getByTestId('select')).toBeTruthy();
  });
  it('Should render dropdown icon', () => {
    const { getByTestId } = render(<Select options={options} />);
    expect(getByTestId('select-dropdown-icon')).toBeTruthy();
  });
  it('Should render select input', () => {
    const { getByTestId } = render(<Select options={options} />);
    const selectInput = getByTestId('select-input');
    expect(selectInput).toBeTruthy();
  });
  it('Should render one option when user type matching words', () => {
    const { getByTestId } = render(<Select options={options} />);
    const selectInput = getByTestId('select-input');
    fireEvent.change(selectInput, { target: { value: 'First' } });
    expect(selectInput.value).toBe('First');
    const selectOptions = getByTestId('select-option');
    expect(selectOptions).toBeTruthy();
  });
  it('Should render two options when user type matching words', () => {
    const { getByTestId, getAllByTestId } = render(
      <Select options={options} />
    );
    const selectInput = getByTestId('select-input');
    fireEvent.change(selectInput, { target: { value: 'test option' } });
    expect(selectInput.value).toBe('test option');
    const selectOptions = getAllByTestId('select-option');
    expect(selectOptions).toHaveLength(2);
  });
  it('Should render icon close when isClearable is setter', () => {
    const { getByTestId } = render(
      <Select value={options[0]} options={options} isClearable />
    );
    const selectClear = getByTestId('select-clear-icon');
    expect(selectClear).toBeTruthy();
  });
});
