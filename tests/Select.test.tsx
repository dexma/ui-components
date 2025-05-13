import { ButtonPaginationSelector, getButtonText } from '@components/Select/ButtonPaginationSelector';
import { tagRenderButtonPagination, dropdownRenderSelect, renderUnselectedOption, Select } from '@components/Select/Select';
import { filterOption, getOptionsBySearch } from '@components/Select/selectUtils';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vitest } from 'vitest';
import defaultTheme from '@utils/theme';

const text = {
    select: 'Select',
    all: 'all',
    connector: 'of',
    content: '"All items"',
    overflow: 'and more...',
};

describe('selectUtils', () => {
    const options = [
        { value: 'Test 1', label: 'Test 1' },
        { value: 'Test 2', label: 'Test 2' },
        { value: 'Test 3', label: 'Test 3' },
        { value: 'Test 4', label: 'Test 4' },
        { value: 'Test 5', label: 'Test 5' },
        { value: 'Test 6', label: 'Test 6' },
        { value: 'Random value 1', label: 'Random value 1' },
        { value: 'Random value 2', label: 'Random value 2' },
    ];
    describe('getOptionsBySearch', () => {
        it('should return options based on currentSearchValue', () => {
            const currentSearchValue = 'Test 1';
            const result = getOptionsBySearch(options, currentSearchValue);
            expect(result).toEqual([{ value: 'Test 1', label: 'Test 1' }]);
        });
        it('should return options based on currentSearchValue with *', () => {
            const currentSearchValue = 'Random *';
            const result = getOptionsBySearch(options, currentSearchValue);
            expect(result).toEqual([
                { value: 'Random value 1', label: 'Random value 1' },
                { value: 'Random value 2', label: 'Random value 2' },
            ]);
        });
        it('should return all options when is an empty currentSearchValue', () => {
            const currentSearchValue = '';
            const result = getOptionsBySearch(options, currentSearchValue);
            expect(result).toEqual(options);
        });
    });
    describe('filterOption', () => {
        it('should return true when there is no search value, search value is empty or only has "*"', () => {
            expect(filterOption('', options[0])).toEqual(true);
            expect(filterOption('***', options[0])).toEqual(true);
            expect(filterOption('  ', options[0])).toEqual(true);
        });
        // it('should return true if the option matches with the input value', () => {
        //   const result = filterOption('Test 1', {
        //     children: { props: { value: 'Test 1' } },
        //     label: 'Test 1',
        //   });
        //   expect(result).toEqual(['Test 1']);
        // });
        // it('should return true if the option matches with the substring previous to *', () => {
        //   const result = filterOption('Random*', {
        //     children: { props: { value: 'Random Test 1' } },
        //     label: 'Random Test 1',
        //   });
        //   expect(result).toEqual(['Random']);
        // });
        // it('should return true if the option matches with the substring after to *', () => {
        //   const result = filterOption('* 1', {
        //     children: { props: { value: 'Test 1' } },
        //     label: 'Test 1',
        //   });
        //   expect(result).toEqual([' 1']);
        // });
        // it('should return true if the option matches with the substring before and after to *', () => {
        //   const result = filterOption('t* 1', {
        //     children: { props: { value: 'Test 1' } },
        //     label: 'Test 1',
        //   });
        //   expect(result).toEqual(['Test 1']);
        // });
    });
});

describe('ButtonPaginationSelector', () => {
    const options = [
        { value: 'Test 1', label: 'Test 1' },
        { value: 'Test 2', label: 'Test 2' },
        { value: 'Test 3', label: 'Test 3' },
        { value: 'Test 4', label: 'Test 4' },
        { value: 'Test 5', label: 'Test 5' },
        { value: 'Test 6', label: 'Test 6' },
        { value: 'Test 7', label: 'Test 7' },
        { value: 'Test 8', label: 'Test 8' },
        { value: 'Test 9', label: 'Test 9' },
        { value: 'Test 10', label: 'Test 10' },
        { value: 'Test 11', label: 'Test 11' },
        { value: 'Test 12', label: 'Test 12' },
    ];
    describe('getButtonText', () => {
        it('should return an styled span with text according the parameters received when there is not a search value', () => {
            render(getButtonText(text, 1, 10, options, '', 12));
            const spanText = screen.getByTestId('text-pagination-selector').textContent;
            expect(spanText).toBe('Select 1 - 10 of "All items" (12)');
        });
        it('should return an styled span with text according the parameters received when there is a search value', () => {
            render(getButtonText(text, 1, 10, options, '1', 3));
            const spanText = screen.getByTestId('text-pagination-selector').textContent;
            expect(spanText).toBe('Select all "1" (3)');
        });
    });

    describe('Pagination buttons', () => {
        it('should render ButtonPaginationSelector successfully', () => {
            render(
                <ButtonPaginationSelector
                    handleSelectAll={vitest.fn()}
                    pageSize={10}
                    currentPage={1}
                    options={options}
                    onPageChange={vitest.fn()}
                    text={text}
                    searchValue=''
                />
            );
            const button = screen.getByTestId('text-pagination-selector');
            expect(button).toBeTruthy();
        });
        it('should trigger handleSelectAll when select all button is clicked', () => {
            const handleSelectAll = vitest.fn();
            render(
                <ButtonPaginationSelector
                    handleSelectAll={handleSelectAll}
                    pageSize={10}
                    currentPage={1}
                    options={options}
                    onPageChange={vitest.fn()}
                    text={text}
                    searchValue=''
                />
            );
            const button = screen.getByTestId('button-select-all');
            act(() => {
                fireEvent.click(button);
            });
            expect(handleSelectAll).toBeCalled();
        });
        it('should not trigger onPageChange when prevButton is clicked and is disabled', () => {
            const onPageChange = vitest.fn();
            render(
                <ButtonPaginationSelector
                    handleSelectAll={vitest.fn()}
                    pageSize={10}
                    currentPage={1}
                    options={options}
                    onPageChange={onPageChange}
                    text={text}
                    searchValue=''
                />
            );
            const button = screen.getByTestId('button-prev');
            fireEvent.click(button);
            expect(onPageChange).not.toHaveBeenCalled();
        });
        it('should trigger onPageChange when nextButton is clicked and is enabled', () => {
            const onPageChange = vitest.fn();
            render(
                <ButtonPaginationSelector
                    handleSelectAll={vitest.fn()}
                    pageSize={10}
                    currentPage={1}
                    options={options}
                    onPageChange={onPageChange}
                    text={text}
                    searchValue=''
                />
            );
            const button = screen.getByTestId('button-next');
            fireEvent.click(button);
            expect(onPageChange).toBeCalled();
        });
        it('should not trigger onPageChange when nextButton is clicked and is the latest page', () => {
            const onPageChange = vitest.fn();
            render(
                <ButtonPaginationSelector
                    handleSelectAll={vitest.fn()}
                    pageSize={10}
                    currentPage={2}
                    options={options}
                    onPageChange={onPageChange}
                    text={text}
                    searchValue=''
                />
            );
            const button = screen.getByTestId('button-next');
            fireEvent.click(button);
            expect(onPageChange).not.toBeCalled();
        });
        it('should trigger onPageChange when prevButton is clicked and is latest page', () => {
            const onPageChange = vitest.fn();
            render(
                <ButtonPaginationSelector
                    handleSelectAll={vitest.fn()}
                    pageSize={10}
                    currentPage={2}
                    options={options}
                    onPageChange={onPageChange}
                    text={text}
                    searchValue=''
                />
            );
            const button = screen.getByTestId('button-prev');
            fireEvent.click(button);
            expect(onPageChange).toBeCalled();
        });
        it('should render select all button but not pagination ones when pageSize is bigger than options', () => {
            render(
                <ButtonPaginationSelector
                    handleSelectAll={vitest.fn()}
                    pageSize={20}
                    currentPage={1}
                    options={options}
                    onPageChange={vitest.fn()}
                    text={text}
                    searchValue=''
                />
            );
            const buttonPrev = screen.queryByTestId('button-prev');
            const buttonNext = screen.queryByTestId('button-next');
            const buttonSelectAll = screen.queryByTestId('button-select-all');
            expect(buttonPrev).toBeNull();
            expect(buttonNext).toBeNull();
            expect(buttonSelectAll).toBeTruthy();
        });
        it('should not render any button if there is no data', () => {
            render(
                <ButtonPaginationSelector
                    handleSelectAll={vitest.fn()}
                    currentPage={1}
                    pageSize={10}
                    options={[]}
                    onPageChange={vitest.fn()}
                    text={text}
                    searchValue='random'
                />
            );
            const buttonPrev = screen.queryByTestId('button-prev');
            const buttonNext = screen.queryByTestId('button-next');
            const buttonSelectAll = screen.queryByTestId('button-select-all');
            expect(buttonPrev).toBeNull();
            expect(buttonNext).toBeNull();
            expect(buttonSelectAll).toBeNull();
        });
    });
});

describe('Ancillary functions', () => {
    describe('tagRender', () => {
        it('should render a tag successfully', () => {
            const props = {
                label: 'Test 1',
                value: 'Test 1',
                closable: true,
                onClose: vitest.fn(),
            };
            const options = [{ value: 'Test 1', label: 'Test 1', color: 'blue' }];
            render(tagRenderButtonPagination(props, options, 5, defaultTheme, 'Delete Option'));
            const tag = screen.getByTestId('tag-option-selected-Test 1');
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
            const options = [{ value: 'Test 1', label: 'Test 1', color: 'blue' }];
            render(tagRenderButtonPagination(props, options, 5, defaultTheme, 'Delete Option'));
            const tag = screen.getByTestId('tag-option-selected-Test 1');
            expect(tag).toBeTruthy();
            const closeIcon = screen.getByTestId('icon');
            act(() => {
                fireEvent.click(closeIcon);
            });
            expect(onClose).toBeCalled();
        });
        it('should not render icon when closable is false', () => {
            const props = {
                label: 'Test 1',
                value: 'Test 1',
                closable: false,
                onClose: vitest.fn(),
            };
            const options = [{ value: 'Test 1', label: 'Test 1', color: 'blue' }];
            render(tagRenderButtonPagination(props, options, 5, defaultTheme, 'Delete Option'));
            const tag = screen.getByTestId('tag-option-selected-Test 1');
            expect(tag).toBeTruthy();
            const closeIcon = screen.queryByTestId('icon');
            expect(closeIcon).toBeNull();
        });
    });
    describe('dropdownRender', () => {
        const MockDropdownMenuComponent = () => <span data-testid='dropdown-menu' />;

        it('should render a dropdown and pagination buttons successfully', () => {
            render(
                dropdownRenderSelect(
                    <MockDropdownMenuComponent />,
                    2,
                    [
                        { value: 'Test 1', label: 'Test 1', color: 'blue' },
                        { value: 'Test 2', label: 'Test 2', color: 'blue' },
                        { value: 'Test 3', label: 'Test 3', color: 'blue' },
                        { value: 'Test 4', label: 'Test 4', color: 'blue' },
                    ],
                    vitest.fn(),
                    vitest.fn(),
                    text,
                    '',
                    'multiple',
                    defaultTheme,
                    1
                )
            );
            const wrapper = screen.getByTestId('select-dropdown');
            expect(wrapper).toBeTruthy();
            const dropdown = screen.getByTestId('dropdown-menu');
            expect(dropdown).toBeTruthy();
            const buttonPrev = screen.getByTestId('button-prev');
            expect(buttonPrev).toBeTruthy();
            const buttonNext = screen.getByTestId('button-next');
            expect(buttonNext).toBeTruthy();
            const buttonSelectAll = screen.getByTestId('button-select-all');
            expect(buttonSelectAll).toBeTruthy();
        });
        it('should render a dropdown successfully but not pagination and select all ones', () => {
            render(dropdownRenderSelect(<MockDropdownMenuComponent />, 10, [], vitest.fn(), vitest.fn(), text, '', 'multiple', defaultTheme, 1));
            const wrapper = screen.getByTestId('select-dropdown');
            expect(wrapper).toBeTruthy();
            const dropdown = screen.getByTestId('dropdown-menu');
            expect(dropdown).toBeTruthy();
            const buttonPrev = screen.queryByTestId('button-prev');
            expect(buttonPrev).toBeNull();
            const buttonNext = screen.queryByTestId('button-next');
            expect(buttonNext).toBeNull();
            const buttonSelectAll = screen.queryByTestId('button-select-all');
            expect(buttonSelectAll).toBeNull();
        });
    });
    describe('renderUnselectedOption', () => {
        it('should render an simple option when no search value', () => {
            const option = 'Test 1';
            render(renderUnselectedOption(option, '', 'dataId'));
            const optionWrapper = screen.getByTestId('option-span-Test 1');
            expect(optionWrapper).toBeTruthy();
        });
        it('should render an bold option when search value matches', () => {
            const option = 'Test 1';
            render(renderUnselectedOption(option, 'Test', 'dataId'));
            const optionWrapper = screen.getByTestId('option-span-Test 1-bold');
            expect(optionWrapper).toBeTruthy();
        });
    });
});

describe('Select', () => {
    it('should render Select successfully', () => {
        render(<Select mode='multiple' data-testid='select' style={{ width: '100%' }} showOptionsAriaLabel='Show options' hideOptionsAriaLabel='Hide options' />);

        const select = screen.getByTestId('select');
        expect(select).toBeTruthy();
    });

    it('should open dropDown when input is clicked', () => {
        const { container } = render(<Select mode='multiple' data-testid='select' style={{ width: '100%' }} options={[{ color: 'blue', value: 'Test', label: 'Test' }]} showOptionsAriaLabel='Show options' hideOptionsAriaLabel='Hide options' />);
        // When
        const select = container.querySelector("[data-testid='select'] > .ant-select-selector");
        expect(select).not.toBeNull();

        act(() => {
            if (select !== null) fireEvent.focus(select);
        });
        // Then
        expect(screen.getAllByText('Test').length > 0);
    });

    it('should show icon clearAll when a value is selected and allowClear is enabled', () => {
        const { container } = render(
            <Select
                data-testid='select'
                allowClear
                defaultValues={['Test']}
                mode='multiple'
                style={{ width: '100%' }}
                options={[
                    { color: 'blue', value: 'Test', label: 'Test' },
                    { color: 'red', value: 'Test1', label: 'Test1' },
                ]}
                showOptionsAriaLabel='Show options' 
                hideOptionsAriaLabel='Hide options'
            />
        );
        // When
        const select = container.querySelector("[data-testid='select'] > .ant-select-selector");
        expect(select).not.toBeNull();

        act(() => {
            if (select !== null) fireEvent.focus(select);
        });
        // Then
        expect(screen.getAllByText('Test').length > 0);
        // One icon for arrow down, another for clearAll and another for selected value
        expect(screen.getAllByTestId('icon').length).toBe(3);
    });

    it('should trigger onChange when some option is selected', () => {
        const onChange = vitest.fn();
        const { container } = render(
            <Select
                data-testid='select'
                mode='multiple'
                style={{ width: '100%' }}
                options={[
                    { color: 'blue', value: 'Test1', label: 'Test1' },
                    { color: 'blue', value: 'Test2', label: 'Test2' },
                    { color: 'blue', value: 'Test3', label: 'Test3' },
                    { color: 'blue', value: 'Test4', label: 'Test4' },
                    { color: 'blue', value: 'Test5', label: 'Test5' },
                    { color: 'blue', value: 'Test6', label: 'Test6' },
                ]}
                pageSize={2}
                onChange={onChange}
                showOptionsAriaLabel='Show options' 
                hideOptionsAriaLabel='Hide options'
            />
        );

        const select = container.querySelector("[data-testid='select'] > .ant-select-selector");
        expect(select).not.toBeNull();

        act(() => {
            if (select !== null) fireEvent.focus(select);
        });
        const regex = /Test/;
        expect(screen.getAllByText(regex).length > 0);
        // When
        act(() => {
            fireEvent.click(screen.getByTestId('select-option-Test1'));
        });
        // Then
        expect(onChange).toBeCalled();
    });
    it('should remove the tag when icon is clicked', () => {
        const onChange = vitest.fn();
        const { container } = render(
            <Select
                data-testid='select'
                mode='multiple'
                style={{ width: '100%' }}
                options={[
                    { color: 'blue', value: 'Test1', label: 'Test1' },
                    { color: 'blue', value: 'Test2', label: 'Test2' },
                    { color: 'blue', value: 'Test3', label: 'Test3' },
                    { color: 'blue', value: 'Test4', label: 'Test4' },
                    { color: 'blue', value: 'Test5', label: 'Test5' },
                    { color: 'blue', value: 'Test6', label: 'Test6' },
                ]}
                pageSize={2}
                onChange={onChange}
                showOptionsAriaLabel='Show options' 
                hideOptionsAriaLabel='Hide options'
            />
        );

        const select = container.querySelector("[data-testid='select'] > .ant-select-selector");
        expect(select).not.toBeNull();

        act(() => {
            if (select !== null) fireEvent.focus(select);
        });
        const regex = /Test/;
        expect(screen.getAllByText(regex).length > 0);
        // When
        act(() => {
            fireEvent.click(screen.getByTestId('select-option-Test1'));
        });
        // Then
        expect(onChange).toBeCalled();
        // When
        act(() => {
            fireEvent.click(screen.getAllByTestId('icon')[0]);
        });
        expect(onChange).toBeCalled();
    });

    it('should render pagination elements when pageSize is smaller than the options total', () => {
        const { container } = render(
            <Select
                data-testid='select'
                mode='multiple'
                style={{ width: '100%' }}
                options={[
                    { color: 'blue', value: 'Test1', label: 'Test1' },
                    { color: 'blue', value: 'Test2', label: 'Test2' },
                    { color: 'blue', value: 'Test3', label: 'Test3' },
                    { color: 'blue', value: 'Test4', label: 'Test4' },
                    { color: 'blue', value: 'Test5', label: 'Test5' },
                    { color: 'blue', value: 'Test6', label: 'Test6' },
                ]}
                pageSize={2}
                showOptionsAriaLabel='Show options' 
                hideOptionsAriaLabel='Hide options'
            />
        );
        // When
        const select = container.querySelector("[data-testid='select'] > .ant-select-selector");
        expect(select).not.toBeNull();

        act(() => {
            if (select !== null) fireEvent.focus(select);
        });
        // Then
        expect(screen.getAllByText(/Test*/).length > 0);
        expect(screen.getAllByTestId('button-prev').length === 1);
        expect(screen.getAllByTestId('button-select-all').length === 1);
        expect(screen.getAllByTestId('button-next').length === 1);
    });

    it('should not render pagination, except select all button, when pageSize is bigger than the options total', () => {
        const { container } = render(
            <Select
                data-testid='select'
                mode='multiple'
                style={{ width: '100%' }}
                options={[
                    { color: 'blue', value: 'Test1', label: 'Test1' },
                    { color: 'blue', value: 'Test2', label: 'Test2' },
                    { color: 'blue', value: 'Test3', label: 'Test3' },
                    { color: 'blue', value: 'Test4', label: 'Test4' },
                    { color: 'blue', value: 'Test5', label: 'Test5' },
                    { color: 'blue', value: 'Test6', label: 'Test6' },
                ]}
                pageSize={10}
                showOptionsAriaLabel='Show options' 
                hideOptionsAriaLabel='Hide options'
            />
        );
        // When
        const select = container.querySelector("[data-testid='select'] > .ant-select-selector");
        expect(select).not.toBeNull();

        act(() => {
            if (select !== null) fireEvent.focus(select);
        });
        // Then
        expect(screen.getAllByText(/Test*/).length > 0);
        expect(screen.queryByTestId('button-prev')).not.toBeInTheDocument();
        expect(screen.getAllByTestId('button-select-all').length === 1);
        expect(screen.queryByTestId('button-next')).not.toBeInTheDocument();
    });
    it('should not render pagination elements when pageSize is undefined', () => {
        const { container } = render(
            <Select
                data-testid='select'
                mode='multiple'
                style={{ width: '100%' }}
                options={[
                    { color: 'blue', value: 'Test1', label: 'Test1' },
                    { color: 'blue', value: 'Test2', label: 'Test2' },
                    { color: 'blue', value: 'Test3', label: 'Test3' },
                    { color: 'blue', value: 'Test4', label: 'Test4' },
                    { color: 'blue', value: 'Test5', label: 'Test5' },
                    { color: 'blue', value: 'Test6', label: 'Test6' },
                ]}
                showOptionsAriaLabel='Show options' 
                hideOptionsAriaLabel='Hide options'
            />
        );
        // When
        const select = container.querySelector("[data-testid='select'] > .ant-select-selector");
        expect(select).not.toBeNull();

        act(() => {
            if (select !== null) fireEvent.focus(select);
        });
        // Then
        expect(screen.getAllByText(/Test*/).length > 0);
        expect(screen.queryAllByTestId('button-prev').length === 0);
        expect(screen.queryAllByTestId('button-select-all').length === 0);
        expect(screen.queryAllByTestId('button-next').length === 0);
    });
    it('should filter rendered options by the search value when there is a search value', () => {
        const { container } = render(
            <Select
                data-testid='select'
                mode='multiple'
                style={{ width: '100%' }}
                options={[
                    { color: 'blue', value: 'Test1', label: 'Test1' },
                    { color: 'blue', value: 'Test2', label: 'Test2' },
                    { color: 'blue', value: 'Test3', label: 'Test3' },
                    { color: 'blue', value: 'Test4', label: 'Test4' },
                    { color: 'blue', value: 'Test5', label: 'Test5' },
                    { color: 'blue', value: 'Test6', label: 'Test6' },
                ]}
                pageSize={2}
                showOptionsAriaLabel='Show options' 
                hideOptionsAriaLabel='Hide options'
            />
        );
        // When
        const select = container.querySelector("[data-testid='select'] > .ant-select-selector");
        expect(select).not.toBeNull();

        act(() => {
            if (select !== null) fireEvent.focus(select);
        });
        // Then
        expect(screen.getAllByText(/Test*/).length > 0);
        // When
        act(() => {
            fireEvent.change(screen.getByRole('combobox'), {
                target: { value: 'Test1' },
            });
        });
        // Then
        expect(screen.getByTestId('text-pagination-selector').textContent).toBe('Select all "Test1" (1)');
    });
});
