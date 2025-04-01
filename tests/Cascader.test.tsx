import { describe, expect, it, vitest } from 'vitest';
import { render, fireEvent } from '@testing-library/react';

import defaultTheme from '@utils/theme';
import { Cascader, tagRender } from '@components';

describe('Cascader', () => {
    describe('tagRender', () => {
        it('should render a tag successfully', () => {
            const props = {
                label: 'Test 1',
                value: 'Test 1',
                closable: true,
                onClose: vitest.fn(),
            };
            const { getByTestId } = render(tagRender(defaultTheme)(props));
            const tag = getByTestId('tag-option-selected-Test 1');
            expect(tag).toBeTruthy();
        });
        it('should trigger onClose when close icon is clicked', () => {
            const onClose = vitest.fn();
            const props = {
                label: 'Test 1',
                value: 'Test 1',
                closable: true,
                onClose,
            };
            const { getByTestId } = render(tagRender(defaultTheme)(props));
            const tag = getByTestId('tag-option-selected-Test 1');
            expect(tag).toBeTruthy();
            const closeIcon = getByTestId('icon');
            fireEvent.click(closeIcon);
            expect(onClose).toBeCalled();
        });
        it('should not render icon when closable is false', () => {
            const props = {
                label: 'Test 1',
                value: 'Test 1',
                closable: false,
                onClose: vitest.fn(),
            };
            const { getByTestId, queryByTestId } = render(tagRender(defaultTheme)(props));
            const tag = getByTestId('tag-option-selected-Test 1');
            expect(tag).toBeTruthy();
            const closeIcon = queryByTestId('icon');
            expect(closeIcon).toBeNull();
        });
    });

    it('should render correctly in single mode', () => {
        const { getByTestId } = render(<Cascader multiple={false} />);

        const cascader = getByTestId('cascader');
        expect(cascader).toBeInTheDocument();
    });

    it('should render correctly in single parent mode', () => {
        const { getByTestId } = render(<Cascader multiple={false} changeOnSelect />);

        const cascader = getByTestId('cascader');
        expect(cascader).toBeInTheDocument();
    });

    it('should render correctly in multiple mode', () => {
        const { getByTestId } = render(<Cascader multiple />);

        const cascader = getByTestId('cascader');
        expect(cascader).toBeInTheDocument();
    });

    it('should render correctly with options', () => {
        const onChange = vitest.fn();
        const options = [
            {
                label: 'Option 1',
                value: 'option1',
            },
            {
                label: 'Option 2',
                value: 'option2',
            },
        ];

        const { container, getByText, getAllByText } = render(<Cascader options={options} onChange={onChange} open />);
        const cascader = container.querySelector("[data-testid='cascader'] > .ant-select-selector");
        expect(cascader).not.toBeNull();
        const regex = /Option/;
        expect(getAllByText(regex).length === 2).toBeTruthy();
        const option1 = getByText('Option 1');
        fireEvent.click(option1);
        expect(onChange).toBeCalled();
    });
});
