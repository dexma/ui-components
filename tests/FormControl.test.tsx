import { describe, expect, it, vitest } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { FormControl } from '@components';

const options = [
    { value: '1', label: 'First test option' },
    { value: '2', label: 'Second test option' },
];

describe('<FormControl>', () => {
    describe('input', () => {
        it('Should call mock function on change', () => {
            const mockCallBack = vitest.fn();
            const expectedValue = 'new value';
            const { getByTestId } = render(<FormControl control='Input' onChange={mockCallBack} />);
            const inputElement = getByTestId('input-element') as HTMLInputElement;
            fireEvent.change(inputElement, {
                target: { value: expectedValue },
            });
            expect(mockCallBack).toBeCalled();
            expect(inputElement.value).toBe(expectedValue);
        });
        it('Should call mock function on focus', () => {
            const mockCallBack = vitest.fn();
            const { getByTestId } = render(<FormControl control='Input' onFocus={mockCallBack} />);
            fireEvent.focus(getByTestId('input-element'));
            expect(mockCallBack).toBeCalled();
        });
        it('Should call mock function on blur', () => {
            const mockCallBack = vitest.fn();
            const { getByTestId } = render(<FormControl control='Input' onBlur={mockCallBack} />);
            fireEvent.blur(getByTestId('input-element'));
            expect(mockCallBack).toBeCalled();
        });
    });
    describe('select', () => {
        it('Should render a select', () => {
            const { getByTestId } = render(<FormControl control='Select' options={options} showSelectOptionsAriaLabel='Show options' hideSelectOptionsAriaLabel='Hide options' />);
            const selectInput = getByTestId('select') as HTMLInputElement;
            expect(selectInput).toBeInTheDocument();
        });
    });

    describe('Color Picker', () => {
        it('Should call onChange when some color change through input', () => {
            const mockCallBack = vitest.fn();
            const expectedColor = '#AAA';
            render(<FormControl control='ColorPicker' showInput onChangeInput={mockCallBack} />);
            fireEvent.change(screen.getByTestId('input-element'), {
                target: { value: expectedColor },
            });
            expect(mockCallBack).toHaveBeenCalled();
            expect((screen.getByTestId('input-element') as HTMLInputElement).value).toBe(expectedColor);
        });
    });

    describe('date picker', () => {
        it('Should call onChange when some date change', () => {
            const mockCallBack = vitest.fn();
            render(<FormControl
                control='DatePicker'
                format='DD-MM-YYYY'
                onChange={mockCallBack}
                calendarIconAriaLabel='Calendar icon'
                superPrevPageIconAriaLabel='Prev year'
                prevPageIconAriaLabel='Prev month'
                nextPageIconAriaLabel='Next mont'
                superNextPageIconAriaLabel='Next year' />);
            fireEvent.mouseDown(screen.getByTestId('antd-date-picker'));
            const todayLink = screen.getByText('Today');
            fireEvent.click(todayLink);
            expect(mockCallBack).toHaveBeenCalled();
        });
    });
});
