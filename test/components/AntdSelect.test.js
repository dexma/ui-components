import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { act } from 'react-dom/test-utils';
import AntdSelect, {
  dropdownRenderSelectAntd,
  renderUnselectedOption,
  selectedValuesRenderer,
  tagRenderButtonPagination,
} from '../../src/components/AntdSelect/AntdSelect';
import ButtonPaginationSelector, {
  getButtonText,
} from '../../src/components/AntdSelect/ButtonPaginationSelector';
import {
  filterOption,
  getOptionsBySearch,
} from '../../src/components/AntdSelect/selectUtils';
import theme from '../../src/styles/theme';
import Tooltip from '../../src/components/Tooltip';

describe('AntdSelect', () => {
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
      test('should return options based on currentSearchValue', () => {
        const currentSearchValue = 'Test 1';
        const result = getOptionsBySearch(options, currentSearchValue);
        expect(result).toEqual([{ value: 'Test 1', label: 'Test 1' }]);
      });
      test('should return options based on currentSearchValue with *', () => {
        const currentSearchValue = 'Random *';
        const result = getOptionsBySearch(options, currentSearchValue);
        expect(result).toEqual([
          { value: 'Random value 1', label: 'Random value 1' },
          { value: 'Random value 2', label: 'Random value 2' },
        ]);
      });
      test('should return all options when is an empty currentSearchValue', () => {
        const currentSearchValue = '';
        const result = getOptionsBySearch(options, currentSearchValue);
        expect(result).toEqual(options);
      });
    });
    describe('filterOption', () => {
      test('should return true when there is no search value, search value is empty or only has "*"', () => {
        expect(filterOption('', options[0])).toEqual(true);
        expect(filterOption('***', options[0])).toEqual(true);
        expect(filterOption('  ', options[0])).toEqual(true);
      });
      test('should return true if the option matches with the input value', () => {
        const result = filterOption('Test 1', {
          children: { props: { value: 'Test 1' } },
          label: 'Test 1',
        });
        expect(result).toEqual(['Test 1']);
      });
      test('should return true if the option matches with the substring previous to *', () => {
        const result = filterOption('Random*', {
          children: { props: { value: 'Random Test 1' } },
          label: 'Random Test 1',
        });
        expect(result).toEqual(['Random']);
      });
      test('should return true if the option matches with the substring after to *', () => {
        const result = filterOption('* 1', {
          children: { props: { value: 'Test 1' } },
          label: 'Test 1',
        });
        expect(result).toEqual([' 1']);
      });
      test('should return true if the option matches with the substring before and after to *', () => {
        const result = filterOption('t* 1', {
          children: { props: { value: 'Test 1' } },
          label: 'Test 1',
        });
        expect(result).toEqual(['Test 1']);
      });
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
    const text = {
      select: 'Select',
      all: 'all',
      connector: 'of',
      content: '"All items"',
    };
    describe('getButtonText', () => {
      test('should return an styled span with text according the parameters received when there is not a search value', () => {
        render(getButtonText(text, 1, 10, options, '', 12));
        const spanText = screen.getByTestId('text-pagination-selector')
          .textContent;
        expect(spanText).toBe('Select 1 - 10 of "All items" (12)');
      });
      test('should return an styled span with text according the parameters received when there is a search value', () => {
        render(getButtonText(text, 1, 10, options, '1', 3));
        const spanText = screen.getByTestId('text-pagination-selector')
          .textContent;
        expect(spanText).toBe('Select all "1" (3)');
      });
    });

    describe('Pagination buttons', () => {
      test('should render ButtonPaginationSelector successfully', () => {
        render(
          <ButtonPaginationSelector
            handleSelectAll={jest.fn()}
            pageSize={10}
            currentPage={1}
            options={options}
            totalPages={2}
            onPageChange={jest.fn()}
            text={text}
            searchValue=""
            showDropdown
          />
        );
        const button = screen.getByTestId('text-pagination-selector');
        expect(button).toBeTruthy();
      });
      test('should trigger handleSelectAll when select all button is clicked', () => {
        const handleSelectAll = jest.fn();
        render(
          <ButtonPaginationSelector
            handleSelectAll={handleSelectAll}
            pageSize={10}
            currentPage={1}
            options={options}
            totalPages={2}
            onPageChange={jest.fn()}
            text={text}
            searchValue=""
            showDropdown
          />
        );
        const button = screen.getByTestId('button-select-all');
        act(() => {
          fireEvent.click(button);
        });
        expect(handleSelectAll).toBeCalled();
      });
      test('should not trigger onPageChange when prevButton is clicked and is disabled', () => {
        const onPageChange = jest.fn();
        render(
          <ButtonPaginationSelector
            handleSelectAll={jest.fn()}
            pageSize={10}
            currentPage={1}
            options={options}
            totalPages={2}
            onPageChange={onPageChange}
            text={text}
            searchValue=""
            showDropdown
          />
        );
        const button = screen.getByTestId('button-prev');
        fireEvent.click(button);
        expect(onPageChange).not.toHaveBeenCalled();
      });
      test('should trigger onPageChange when nextButton is clicked and is enabled', () => {
        const onPageChange = jest.fn();
        render(
          <ButtonPaginationSelector
            handleSelectAll={jest.fn()}
            pageSize={10}
            currentPage={1}
            options={options}
            totalPages={2}
            onPageChange={onPageChange}
            text={text}
            searchValue=""
            showDropdown
          />
        );
        const button = screen.getByTestId('button-next');
        fireEvent.click(button);
        expect(onPageChange).toBeCalled();
      });
      test('should not trigger onPageChange when nextButton is clicked and is the latest page', () => {
        const onPageChange = jest.fn();
        render(
          <ButtonPaginationSelector
            handleSelectAll={jest.fn()}
            pageSize={10}
            currentPage={2}
            options={options}
            totalPages={2}
            onPageChange={onPageChange}
            text={text}
            searchValue=""
            showDropdown
          />
        );
        const button = screen.getByTestId('button-next');
        fireEvent.click(button);
        expect(onPageChange).not.toBeCalled();
      });
      test('should trigger onPageChange when prevButton is clicked and is latest page', () => {
        const onPageChange = jest.fn();
        render(
          <ButtonPaginationSelector
            handleSelectAll={jest.fn()}
            pageSize={10}
            currentPage={2}
            options={options}
            totalPages={2}
            onPageChange={onPageChange}
            text={text}
            searchValue=""
            showDropdown
          />
        );
        const button = screen.getByTestId('button-prev');
        fireEvent.click(button);
        expect(onPageChange).toBeCalled();
      });
      test('should render select all button but not pagination ones when pageSize is bigger than options', () => {
        render(
          <ButtonPaginationSelector
            handleSelectAll={jest.fn()}
            pageSize={20}
            currentPage={1}
            options={options}
            totalPages={1}
            onPageChange={jest.fn()}
            text={text}
            searchValue=""
            showDropdown
          />
        );
        const buttonPrev = screen.queryByTestId('button-prev');
        const buttonNext = screen.queryByTestId('button-next');
        const buttonSelectAll = screen.queryByTestId('button-select-all');
        expect(buttonPrev).toBeNull();
        expect(buttonNext).toBeNull();
        expect(buttonSelectAll).toBeTruthy();
      });
      test('should not render any button if there is no data', () => {
        render(
          <ButtonPaginationSelector
            handleSelectAll={jest.fn()}
            currentPage={1}
            options={[]}
            totalPages={1}
            onPageChange={jest.fn()}
            text={text}
            searchValue="random"
            showDropdown
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
      test('should render a tag successfully', () => {
        const props = {
          label: 'Test 1',
          value: 'Test 1',
          closable: true,
          onClose: jest.fn(),
        };
        const options = [{ value: 'Test 1', label: 'Test 1', color: 'blue' }];
        render(tagRenderButtonPagination(props, options, 5, theme));
        const tag = screen.getByTestId('tag-option-selected-Test 1');
        expect(tag).toBeTruthy();
      });
      test('should trigger onClose when close icon is clicked', () => {
        const onClose = jest.fn();
        const props = {
          label: 'Test 1',
          value: 'Test 1',
          closable: true,
          onClose,
        };
        const options = [{ value: 'Test 1', label: 'Test 1', color: 'blue' }];
        render(tagRenderButtonPagination(props, options, 5, theme));
        const tag = screen.getByTestId('tag-option-selected-Test 1');
        expect(tag).toBeTruthy();
        const closeIcon = screen.getByTestId('icon');
        act(() => {
          fireEvent.click(closeIcon);
        });
        expect(onClose).toBeCalled();
      });
      test('should not render icon when closable is false', () => {
        const props = {
          label: 'Test 1',
          value: 'Test 1',
          closable: false,
          onClose: jest.fn(),
        };
        const options = [{ value: 'Test 1', label: 'Test 1', color: 'blue' }];
        render(tagRenderButtonPagination(props, options, theme));
        const tag = screen.getByTestId('tag-option-selected-Test 1');
        expect(tag).toBeTruthy();
        const closeIcon = screen.queryByTestId('icon');
        expect(closeIcon).toBeNull();
      });
    });
    describe('dropdownRender', () => {
      const MockDropdownMenuComponent = () => {
        return <span data-testid="dropdown-menu"></span>;
      };
      test('should render a dropdown and pagination buttons successfully', () => {
        render(
          dropdownRenderSelectAntd(
            <MockDropdownMenuComponent />,
            2,
            1,
            [
              { value: 'Test 1', label: 'Test 1' },
              { value: 'Test 2', label: 'Test 2' },
              { value: 'Test 3', label: 'Test 3' },
              { value: 'Test 4', label: 'Test 4' },
            ],
            jest.fn(),
            jest.fn(),
            {
              select: 'Select',
              all: 'all',
              connector: 'of',
              content: '"All items"',
            },
            '',
            true,
            'multiple'
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
      test('should render a dropdown successfully but not pagination and select all ones', () => {
        render(
          dropdownRenderSelectAntd(
            <MockDropdownMenuComponent />,
            10,
            undefined,
            1,
            [],
            jest.fn(),
            jest.fn(),
            {
              select: 'Select',
              all: 'all',
              connector: 'of',
              content: '"All items"',
            },
            '',
            true,
            'multiple'
          )
        );
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
      test('should render an simple option when no search value', () => {
        const option = 'Test 1';
        render(renderUnselectedOption(option, ''));
        const optionWrapper = screen.getByTestId('option-span-Test 1');
        expect(optionWrapper).toBeTruthy();
      });
      test('should render an bold option when search value matches', () => {
        const option = 'Test 1';
        render(renderUnselectedOption(option, 'Test'));
        const optionWrapper = screen.getByTestId('option-span-Test 1-bold');
        expect(optionWrapper).toBeTruthy();
      });
    });
    describe('selectedValuesRenderer', () => {
      beforeEach(() => {
        jest
          .spyOn(Tooltip, 'render')
          .mockImplementation(({ title, children }) => (
            <>
              <div data-testid="title-tooltip">{title}</div>
              <div data-testid="children-tooltip">{children}</div>
            </>
          ));
      });
      test('should render the overflow values based on overlfowLength prop, including overflowText', () => {
        const selectedVaues = [
          { value: 'Test 1', label: { props: { value: 'Test 1' } } },
          { value: 'Test 2', label: { props: { value: 'Test 2' } } },
          { value: 'Test 3', label: { props: { value: 'Test 3' } } },
          { value: 'Test 4', label: { props: { value: 'Test 4' } } },
          { value: 'Test 5', label: { props: { value: 'Test 5' } } },
        ];
        const overflowLength = 2;
        const overflowText = 'and more...';
        const result = selectedValuesRenderer(
          selectedVaues,
          overflowLength,
          overflowText
        );
        render(result);
        expect(screen.getByTestId('title-tooltip').textContent).toBe(
          ' Test 1, Test 2 and more...'
        );
        expect(screen.getByTestId('children-tooltip').textContent).toBe('+5');
      });
      test('should render the overflow values based on overlfowLength prop, not including overflowText', () => {
        const selectedVaues = [
          { value: 'Test 1', label: { props: { value: 'Test 1' } } },
          { value: 'Test 2', label: { props: { value: 'Test 2' } } },
          { value: 'Test 3', label: { props: { value: 'Test 3' } } },
          { value: 'Test 4', label: { props: { value: 'Test 4' } } },
          { value: 'Test 5', label: { props: { value: 'Test 5' } } },
        ];
        const overflowLength = undefined;
        const overflowText = 'and more...';
        const result = selectedValuesRenderer(
          selectedVaues,
          overflowLength,
          overflowText
        );
        render(result);
        expect(screen.getByTestId('title-tooltip').textContent).toBe(
          ' Test 1, Test 2, Test 3, Test 4, Test 5'
        );
        expect(screen.getByTestId('children-tooltip').textContent).toBe('+5');
      });
    });
  });

  describe('Select', () => {
    test('should render AntdSelect successfully', () => {
      render(<AntdSelect mode="multiple" style={{ width: '100%' }} />);

      const select = screen.getByTestId('select');
      expect(select).toBeTruthy();
    });

    test('should render AntdSelect successfully with ids', () => {
      const { container } = render(
        <AntdSelect
          mode="multiple"
          style={{ width: '100%' }}
          options={[
            { id: 'blueId', color: 'blue', value: 'Test', label: 'Test' },
          ]}
        />
      );

      // When
      const select = container.querySelector(
        "[data-testid='select'] > .ant-select-selector"
      );
      expect(select).not.toBeNull();

      act(() => {
        fireEvent.focus(select);
      });

      expect(screen.getByTestId('select-option-Test').id).toEqual('blueId');
    });

    test('should open dropDown when input is clicked', () => {
      const { container } = render(
        <AntdSelect
          mode="multiple"
          style={{ width: '100%' }}
          options={[{ color: 'blue', value: 'Test', label: 'Test' }]}
        />
      );
      // When
      const select = container.querySelector(
        "[data-testid='select'] > .ant-select-selector"
      );
      expect(select).not.toBeNull();

      act(() => {
        fireEvent.focus(select);
      });
      // Then
      expect(screen.findAllByText('Test').length > 0);
    });

    test('should show icon clearAll when a value is selected and allowClear is enabled', () => {
      const { container } = render(
        <AntdSelect
          allowClear
          defaultValues={['Test']}
          mode="multiple"
          style={{ width: '100%' }}
          options={[
            { color: 'blue', value: 'Test', label: 'Test' },
            { color: 'red', value: 'Test1', label: 'Test1' },
          ]}
        />
      );
      // When
      const select = container.querySelector(
        "[data-testid='select'] > .ant-select-selector"
      );
      expect(select).not.toBeNull();

      act(() => {
        fireEvent.focus(select);
      });
      // Then
      expect(screen.findAllByText('Test').length > 0);
      // One icon for arrow down, another for clearAll and another for selected value
      expect(screen.getAllByTestId('icon').length).toBe(3);
    });

    test('should trigger onChange when some option is selected', () => {
      const onChange = jest.fn();
      const { container } = render(
        <AntdSelect
          mode="multiple"
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
        />
      );

      const select = container.querySelector(
        "[data-testid='select'] > .ant-select-selector"
      );
      expect(select).not.toBeNull();

      act(() => {
        fireEvent.focus(select);
      });
      const regex = /Test/g;
      expect(screen.getAllByText(regex).length > 0);
      // When
      act(() => {
        fireEvent.click(screen.getByTestId('select-option-Test1'));
      });
      // Then
      expect(onChange).toBeCalled();
    });
    test('should remove the tag when icon is clicked', () => {
      const onChange = jest.fn();
      const { container } = render(
        <AntdSelect
          mode="multiple"
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
        />
      );

      const select = container.querySelector(
        "[data-testid='select'] > .ant-select-selector"
      );
      expect(select).not.toBeNull();

      act(() => {
        fireEvent.focus(select);
      });
      const regex = /Test/g;
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
    test('should render pagination elements when pageSize is smaller than the options total', () => {
      const { container } = render(
        <AntdSelect
          mode="multiple"
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
        />
      );
      // When
      const select = container.querySelector(
        "[data-testid='select'] > .ant-select-selector"
      );
      expect(select).not.toBeNull();

      act(() => {
        fireEvent.focus(select);
      });
      // Then
      expect(screen.findAllByText('Test').length > 0);
      expect(screen.findAllByText('button-prev').length > 0);
      expect(screen.findAllByText('button-select-all').length > 0);
      expect(screen.findAllByText('button-next').length > 0);
    });
    test('should not render pagination, except select all button, when pageSize is bigger than the options total', () => {
      const { container } = render(
        <AntdSelect
          mode="multiple"
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
        />
      );
      // When
      const select = container.querySelector(
        "[data-testid='select'] > .ant-select-selector"
      );
      expect(select).not.toBeNull();

      act(() => {
        fireEvent.focus(select);
      });
      // Then
      expect(screen.findAllByText('Test').length > 0);
      expect(screen.findAllByText('button-prev').length === 0);
      expect(screen.findAllByText('button-select-all').length > 0);
      expect(screen.findAllByText('button-next').length === 0);
    });
    test('should not render pagination elements when pageSize is undefined', () => {
      const { container } = render(
        <AntdSelect
          mode="multiple"
          style={{ width: '100%' }}
          options={[
            { color: 'blue', value: 'Test1', label: 'Test1' },
            { color: 'blue', value: 'Test2', label: 'Test2' },
            { color: 'blue', value: 'Test3', label: 'Test3' },
            { color: 'blue', value: 'Test4', label: 'Test4' },
            { color: 'blue', value: 'Test5', label: 'Test5' },
            { color: 'blue', value: 'Test6', label: 'Test6' },
          ]}
        />
      );
      // When
      const select = container.querySelector(
        "[data-testid='select'] > .ant-select-selector"
      );
      expect(select).not.toBeNull();

      act(() => {
        fireEvent.focus(select);
      });
      // Then
      expect(screen.findAllByText('Test').length > 0);
      expect(screen.findAllByText('button-prev').length === 0);
      expect(screen.findAllByText('button-select-all').length === 0);
      expect(screen.findAllByText('button-next').length === 0);
    });
    test('should filter rendered options by the search value when there is a search value', () => {
      const { container } = render(
        <AntdSelect
          mode="multiple"
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
        />
      );
      // When
      const select = container.querySelector(
        "[data-testid='select'] > .ant-select-selector"
      );
      expect(select).not.toBeNull();

      act(() => {
        fireEvent.focus(select);
      });
      // Then
      expect(screen.findAllByText('Test').length > 0);
      // When
      act(() => {
        fireEvent.change(screen.getByRole('combobox'), {
          target: { value: 'Test1' },
        });
      });
      // Then
      expect(screen.findAllByText('Test').length === 1);
    });
  });
});
