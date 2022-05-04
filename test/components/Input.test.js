import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../../src/components/Input';

describe('<Input>', () => {
  it('Should call mock function on change', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input type="text" placeholder="Input text" onChange={mockCallBack} />
    );
    fireEvent.change(getByTestId('input-element'), {
      target: { value: 'new value' },
    });
    expect(mockCallBack).toBeCalled();
  });
  it('Should call mock function on focus', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input type="text" placeholder="Input text" onFocus={mockCallBack} />
    );
    fireEvent.focus(getByTestId('input-element'));
    expect(mockCallBack).toBeCalled();
  });
  it('Should call mock function on blur', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Input type="text" placeholder="Input text" onBlur={mockCallBack} />
    );
    fireEvent.blur(getByTestId('input-element'));
    expect(mockCallBack).toBeCalled();
  });
});
