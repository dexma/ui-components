import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { RadioFieldGroup, CheckboxFieldGroup, FieldGroupItem } from '@components';
import { mockRadioGroup, mockCheckboxGroup, mockSelectedRadioItem, mockSelectedCheckboxItem } from './mock/FieldGroup';

describe('<FieldGroup>', () => {
    it('Should render correct input and label elements', () => {
        render(
            <RadioFieldGroup
                onChange={(e: any) => {
                    console.log(e);
                }}
                values={mockRadioGroup}
                selectedValues={mockSelectedRadioItem}
            />
        );
        expect(screen.getAllByRole('radio').length).toEqual(mockRadioGroup.length);
        expect(screen.getByText('15min')).toBeInTheDocument();
        expect(screen.getByText('30min')).toBeInTheDocument();
        expect(screen.getByText('h')).toBeInTheDocument();
        expect(screen.getByText('d')).toBeInTheDocument();
        expect(screen.getByText('s')).toBeInTheDocument();
        expect(screen.getByText('m')).toBeInTheDocument();
    });

    it('Should render correct input type radio', () => {
        render(
            <RadioFieldGroup
                onChange={(e: any) => {
                    console.log(e);
                }}
                values={mockRadioGroup}
                selectedValues={mockSelectedRadioItem}
            />
        );
        expect(screen.getAllByRole('radio').length).toEqual(mockRadioGroup.length);
    });
    it('Should render correct input type checkbox', () => {
        render(
            <CheckboxFieldGroup
                onChange={(e: any) => {
                    console.log(e);
                }}
                values={mockCheckboxGroup}
                selectedValues={mockSelectedCheckboxItem}
            />
        );
        expect(screen.getAllByRole('checkbox').length).toEqual(mockCheckboxGroup.length);
    });

    it('Should render correct input radio active', () => {
        const { container } = render(
            <RadioFieldGroup
                onChange={(e: any) => {
                    console.log(e);
                }}
                values={mockRadioGroup}
                selectedValues={mockSelectedRadioItem}
            />
        );
        expect(container.querySelectorAll(".active input[type='radio']").length).toEqual(1);
    });

    it('Should render correct input checkbox active', () => {
        const { container } = render(
            <CheckboxFieldGroup
                onChange={(e: any) => {
                    console.log(e);
                }}
                values={mockCheckboxGroup}
                selectedValues={mockSelectedCheckboxItem}
            />
        );
        expect(container.querySelectorAll(".active input[type='checkbox']").length).toEqual(mockSelectedCheckboxItem.length);
    });

    it('Should run changeFunction when change input', () => {
        const mockCallBack = vi.fn();
        render(<CheckboxFieldGroup values={mockRadioGroup} selectedValues={mockSelectedCheckboxItem} onChange={(value: FieldGroupItem) => mockCallBack(value)} />);

        fireEvent.click(screen.getByText('m'));
        expect(mockCallBack).toHaveBeenCalled();
    });

    it('Should run onChangeFunction for second FieldGroup when it changes', () => {
        const mockCallBackFirst = vi.fn();
        const mockCallBackSecond = vi.fn();
        const { container } = render(
            <>
                <CheckboxFieldGroup values={mockCheckboxGroup} selectedValues={mockSelectedCheckboxItem} onChange={(value: FieldGroupItem) => mockCallBackFirst(value)} />
                <CheckboxFieldGroup values={mockCheckboxGroup} selectedValues={mockSelectedCheckboxItem} onChange={(value: FieldGroupItem) => mockCallBackSecond(value)} />
            </>
        );
        expect(container.querySelectorAll('.item-hdd input').length).toBe(2);
        fireEvent.click(container.querySelectorAll('.item-hdd input')![1]);
        expect(mockCallBackFirst).not.toBeCalled();
        expect(mockCallBackSecond).toBeCalled();
    });
});
