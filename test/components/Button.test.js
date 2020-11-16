import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Button from 'components/Button';

describe('<Button>', () => {
  it('Should render the button component', () => {
    const { getByRole } = render(<Button />);
    expect(getByRole('button')).toBeTruthy();
  });
  it('Should render the spinner if isLoading is passed', () => {
    const { getByTestId } = render(<Button isLoading/>);
    expect(getByTestId('button-loading')).toBeTruthy();
  });
  it('Should render the icon before', () => {
    const { getByTestId } = render(<Button iconBefore="vader" />);
    expect(getByTestId('button-icon-before')).toBeTruthy();
  });
  it('Should render the icon after', () => {
    const { getByTestId } = render(<Button iconAfter="vader" />);
    expect(getByTestId('button-icon-after')).toBeTruthy();
  });
  it('Should render the children correctly', () => {
    const testDiv = <div data-testid="test">test</div>
    const { getByTestId } = render(<Button iconAfter="vader">{testDiv}</Button>);
    expect(getByTestId('button-icon-after')).toBeTruthy();
  });
  it('Should call mock function on click', () => {
    const mockCallBack = jest.fn();
    const testDiv = <div data-testid="test">test</div>
    const { getByRole } = render(<Button iconAfter="vader" onClick={mockCallBack}>{testDiv}</Button>);
    fireEvent.click(getByRole('button'));
    expect(mockCallBack).toBeCalled();
  });
});