import { render, fireEvent } from '@testing-library/react';
import { expect, describe, it, vitest } from 'vitest';

import { Radio, RadioGroup, DataIdProvider } from '@components';

describe('<Radio>', () => {
    it('Should render the label passed as children', () => {
        const { getByText } = render(<Radio value='a'>Option A</Radio>);
        expect(getByText('Option A')).toBeTruthy();
    });

    it('Should render checked when checked is true', () => {
        const { getByRole } = render(<Radio checked>Option A</Radio>);
        expect((getByRole('radio') as HTMLInputElement).checked).toBe(true);
    });

    it('Should render disabled when disabled is true', () => {
        const { getByRole } = render(<Radio disabled>Option A</Radio>);
        expect((getByRole('radio') as HTMLInputElement).disabled).toBe(true);
    });

    it('Should build the default data-id on the label', () => {
        const { container } = render(<Radio>Option A</Radio>);
        expect(container.querySelectorAll("[data-id='radio']")).toHaveLength(1);
    });

    it('Should not build a data-id when it has no label', () => {
        const { container } = render(<Radio />);
        expect(container.querySelectorAll("[data-id='radio']")).toHaveLength(0);
    });
});

describe('<RadioGroup>', () => {
    it('Should check the option matching the controlled value', () => {
        const { getByLabelText } = render(
            <RadioGroup value='b'>
                <Radio value='a'>Option A</Radio>
                <Radio value='b'>Option B</Radio>
            </RadioGroup>
        );
        expect((getByLabelText('Option A') as HTMLInputElement).checked).toBe(false);
        expect((getByLabelText('Option B') as HTMLInputElement).checked).toBe(true);
    });

    it('Should call onChange with the selected value', () => {
        const onChange = vitest.fn();
        const { getByLabelText } = render(
            <RadioGroup value='a' onChange={onChange}>
                <Radio value='a'>Option A</Radio>
                <Radio value='b'>Option B</Radio>
            </RadioGroup>
        );
        fireEvent.click(getByLabelText('Option B'));
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange.mock.calls[0][0].target.value).toBe('b');
    });

    it('Should not call onChange when the clicked option is disabled', () => {
        const onChange = vitest.fn();
        const { getByLabelText } = render(
            <RadioGroup value='a' onChange={onChange}>
                <Radio value='a'>Option A</Radio>
                <Radio value='b' disabled>
                    Option B
                </Radio>
            </RadioGroup>
        );
        fireEvent.click(getByLabelText('Option B'));
        expect(onChange).not.toHaveBeenCalled();
    });

    it('Should build the default data-id on the group', () => {
        const { container } = render(
            <RadioGroup>
                <Radio value='a'>Option A</Radio>
            </RadioGroup>
        );
        expect(container.querySelectorAll("[data-id='radio-group']")).toHaveLength(1);
    });

    it('Should compose the data-id with the provider namespace', () => {
        const { container } = render(
            <DataIdProvider dataId='form'>
                <RadioGroup dataId='reference'>
                    <Radio value='a'>Option A</Radio>
                </RadioGroup>
            </DataIdProvider>
        );
        expect(container.querySelectorAll("[data-id='form.reference']")).toHaveLength(1);
    });
});
