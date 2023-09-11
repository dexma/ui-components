import React from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import Cascader, { tagRenderCascader } from '../../src/components/Cascader';
import theme from '../../src/styles/theme';

describe('Cascader', () => {
  describe('tagRender', () => {
    test('should render a tag successfully', () => {
      const props = {
        label: 'Test 1',
        value: 'Test 1',
        closable: true,
        onClose: jest.fn(),
      };
      render(tagRenderCascader(props, theme));
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
      render(tagRenderCascader(props, theme));
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
      render(tagRenderCascader(props, theme));
      const tag = screen.getByTestId('tag-option-selected-Test 1');
      expect(tag).toBeTruthy();
      const closeIcon = screen.queryByTestId('icon');
      expect(closeIcon).toBeNull();
    });
  });
  test('should render correctly in single mode', () => {
    render(<Cascader multiple={false} />);

    const cascader = screen.getByTestId('cascader');
    expect(cascader).toBeInTheDocument();
  });

  test('should render correctly in multiple mode', () => {
    render(<Cascader multiple />);

    const cascader = screen.getByTestId('cascader');
    expect(cascader).toBeInTheDocument();
  });

  test('should render correctly with options', () => {
    const onChange = jest.fn();
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

    const { container } = render(
      <Cascader options={options} onChange={onChange} open />
    );
    const cascader = container.querySelector(
      "[data-testid='cascader'] > .ant-select-selector"
    );
    expect(cascader).not.toBeNull();
    const regex = /Option/g;
    expect(screen.getAllByText(regex).length === 2).toBeTruthy();
    const option1 = screen.getByText('Option 1');
    act(() => {
      fireEvent.click(option1);
    });
    expect(onChange).toBeCalled();
  });
});
