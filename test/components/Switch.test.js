import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import Switch from '../../src/components/Switch';

describe('<Switch>', () => {
  it('Should render the switch', () => {
    const { getByTestId } = render(<Switch />);
    expect(getByTestId('switch')).toBeTruthy();
  });

  it('Should call on click when is clicked', () => {
    const mockOnClick = jest.fn();

    const { getByTestId } = render(<Switch onClick={mockOnClick} />);

    fireEvent.click(getByTestId('switch'));

    expect(mockOnClick).toBeCalled();
  });
});
