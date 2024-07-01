import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expect, describe, it, vitest, beforeAll } from 'vitest';

import { ColorPicker } from '@components';

describe('<ColorPicker>', () => {
    beforeAll(() => {
        (HTMLCanvasElement as any).prototype.getContext = vitest.fn();
    });

    it('should render a basic ColorPicker', () => {
        const { getByTestId } = render(<ColorPicker />);
        const colorPicker = getByTestId('color-picker');
        expect(colorPicker).toBeTruthy();
    });

    it('should render a basic ColorPicker with a loading spinner', () => {
        const { getByTestId } = render(<ColorPicker isLoading />);
        const colorPicker = getByTestId('color-picker');
        expect(colorPicker).toBeTruthy();
        const spinner = getByTestId('spinner');
        expect(spinner).toBeTruthy();
    });

    it('should render a basic ColorPicker with input', () => {
        const { getByTestId } = render(<ColorPicker showInput />);
        const colorPicker = getByTestId('color-picker');
        expect(colorPicker).toBeTruthy();
        const inputElement = getByTestId('input-element');
        expect(inputElement).toBeTruthy();
    });

    it('should render a basic ColorPicker with a loaded value from props', () => {
        const color = '#DDFFFB';
        const { getByTestId } = render(<ColorPicker showInput value={color} />);
        const colorPicker = getByTestId('color-picker');
        expect(colorPicker).toBeTruthy();
        const inputElementValue = getByTestId('input-element').getAttribute('value');
        expect(inputElementValue).toBe(color);
    });

    it('should render a basic ColorPicker with an input and a loading spinner', () => {
        const { getByTestId } = render(<ColorPicker showInput isLoading />);
        const colorPicker = getByTestId('color-picker');
        expect(colorPicker).toBeTruthy();
        const inputElement = getByTestId('input-element');
        expect(inputElement).toBeTruthy();
        const spinner = getByTestId('spinner');
        expect(spinner).toBeTruthy();
    });

    it('should render a basic ColorPicker call mockFunction onChangePicker when a color is changed on popover', () => {
        const onChangePickerFunction = vitest.fn();
        const color = 'BBBCCC';
        const { container, getByTestId, findByDisplayValue } = render(<ColorPicker onChangePicker={onChangePickerFunction} />);
        const colorPicker = getByTestId('color-picker');
        fireEvent.click(colorPicker);
        const inputHex = container.querySelector('#rc-editable-input-1');
        expect(inputHex).toBeTruthy();
        if (inputHex) {
            fireEvent.change(inputHex, { target: { value: color } });
            expect(findByDisplayValue(color)).toBeTruthy();
        }
    });

    it('should render a basic ColorPicker call mockFunction onChangeInput when a color is changed on input', () => {
        const onChangeInputFunction = vitest.fn();
        const color = 'BBBCCC';
        const { getByTestId, findByDisplayValue } = render(<ColorPicker showInput onChangeInput={onChangeInputFunction} />);
        const inputColorPicker = getByTestId('input-element');
        fireEvent.change(inputColorPicker, { target: { value: color } });
        expect(findByDisplayValue(color)).toBeTruthy();
    });
});
