import { describe, expect, it, vitest } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

import { Input } from '@components';

describe('<Input>', () => {
    it('Should call mock function on change', () => {
        const mockCallBack = vitest.fn();
        const { getByTestId } = render(<Input type='text' placeholder='Input text' label='Input text' onChange={mockCallBack} />);
        fireEvent.change(getByTestId('input-element'), {
            target: { value: 'new value' },
        });
        expect(mockCallBack).toBeCalled();
    });
    it('Should call mock function on focus', () => {
        const mockCallBack = vitest.fn();
        const { getByTestId } = render(<Input type='text' placeholder='Input text' label='Input text' onFocus={mockCallBack} />);
        fireEvent.focus(getByTestId('input-element'));
        expect(mockCallBack).toBeCalled();
    });
    it('Should call mock function on blur', () => {
        const mockCallBack = vitest.fn();
        const { getByTestId } = render(<Input type='text' placeholder='Input text' label='Input text' onBlur={mockCallBack} />);
        fireEvent.blur(getByTestId('input-element'));
        expect(mockCallBack).toBeCalled();
    });
});
