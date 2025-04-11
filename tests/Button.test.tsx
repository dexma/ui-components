import { render, fireEvent, screen } from '@testing-library/react';
import { expect, describe, it, vitest } from 'vitest';

import { color } from '@utils/theme';
import { Button } from '@components';

describe('<Button>', () => {
    it('Should render the button component', () => {
        const { getByRole } = render(<Button text='Button' />);
        expect(getByRole('button')).toBeTruthy();
    });
    it('Should render the spinner if isLoading is passed', () => {
        const { getByTestId } = render(<Button isLoading text='Loading...' />);
        expect(getByTestId('button-loading')).toBeTruthy();
    });
    it('Should render the icon before', () => {
        const { getByTestId } = render(<Button kind='iconButton' iconBefore='vader' iconAriaLabel='Vader icon' />);
        expect(getByTestId('button-icon-before')).toBeTruthy();
    });
    it('Should render the icon after', () => {
        const { getByTestId } = render(<Button kind='iconButton' iconAfter='vader' iconAriaLabel='Vader icon' />);
        expect(getByTestId('button-icon-after')).toBeTruthy();
    });
    it('Should render the icon before with overriden color', () => {
        const { getByTestId } = render(<Button kind='iconButton' iconBefore='vader' iconColor={color.amber} iconAriaLabel='Vader icon' />);
        expect(getByTestId('button-icon-before')).toHaveStyle(`fill: ${color.amber}`);
    });
    it('Should render the icon after with overriden color', () => {
        render(<Button kind='iconButton' iconAfter='vader' iconColor={color.amber} iconAriaLabel='Vader icon' />);
        expect(screen.getByTestId('button-icon-after')).toHaveStyle(`fill: ${color.amber}`);
    });
    it('Should render the children correctly', () => {
        const testDiv = <div data-testid='test'>test</div>;
        render(<Button kind='iconButton' iconAfter='vader' iconAriaLabel='Vader icon'>{testDiv}</Button>);
        expect(screen.getByTestId('button-icon-after')).toBeTruthy();
    });
    it('Should call mock function on click', () => {
        const mockCallBack = vitest.fn();
        const testDiv = <div data-testid='test'>test</div>;
        const { getByRole } = render(
            <Button kind='iconButton' iconAfter='vader' onClick={mockCallBack} iconAriaLabel='Vader icon'>
                {testDiv}
            </Button>
        );
        fireEvent.click(getByRole('button'));
        expect(mockCallBack).toBeCalled();
    });
});
