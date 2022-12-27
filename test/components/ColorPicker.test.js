import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ColorPicker from '../../src/components/ColorPicker';

describe('<ColorPicker>', () => {
  it('should render a basic ColorPicker', () => {
    render(<ColorPicker />);
    const colorPicker = screen.getByTestId('color-picker');
    expect(colorPicker).toBeTruthy();
  });

  it('should render a basic ColorPicker with a loading spinner', () => {
    render(<ColorPicker isLoading />);
    const colorPicker = screen.getByTestId('color-picker');
    expect(colorPicker).toBeTruthy();
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeTruthy();
  });

  it('should render a basic ColorPicker with input', () => {
    render(<ColorPicker showInput />);
    const colorPicker = screen.getByTestId('color-picker');
    expect(colorPicker).toBeTruthy();
    const inputElement = screen.getByTestId('input-element');
    expect(inputElement).toBeTruthy();
  });

  it('should render a basic ColorPicker with a loaded value from props', () => {
    const color = '#DDFFFB';
    render(<ColorPicker showInput value={color} />);
    const colorPicker = screen.getByTestId('color-picker');
    expect(colorPicker).toBeTruthy();
    const inputElementValue = screen
      .getByTestId('input-element')
      .getAttribute('value');
    expect(inputElementValue).toBe(color);
  });

  it('should render a basic ColorPicker with an input and a loading spinner', () => {
    render(<ColorPicker showInput isLoading />);
    const colorPicker = screen.getByTestId('color-picker');
    expect(colorPicker).toBeTruthy();
    const inputElement = screen.getByTestId('input-element');
    expect(inputElement).toBeTruthy();
    const spinner = screen.getByTestId('spinner');
    expect(spinner).toBeTruthy();
  });

  it('should render a basic ColorPicker call mockFunction onChangePicker when a color is changed on popover', () => {
    const onChangePickerFunction = jest.fn();
    const color = 'BBBCCC';
    const { container } = render(
      <ColorPicker onChangePicker={onChangePickerFunction} />
    );
    const colorPicker = screen.getByTestId('color-picker');
    fireEvent.click(colorPicker);
    const inputHex = container.querySelector('#rc-editable-input-1');
    fireEvent.change(inputHex, { target: { value: color } });
    expect(screen.findByDisplayValue(color)).toBeTruthy();
  });

  it('should render a basic ColorPicker call mockFunction onChangeInput when a color is changed on input', () => {
    const onChangeInputFunction = jest.fn();
    const color = 'BBBCCC';
    render(<ColorPicker showInput onChangeInput={onChangeInputFunction} />);
    const inputColorPicker = screen.getByTestId('input-element');
    fireEvent.change(inputColorPicker, { target: { value: color } });
    expect(screen.findByDisplayValue(color)).toBeTruthy();
  });
});
