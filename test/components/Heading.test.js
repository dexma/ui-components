import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Heading from '../../src/components/Heading';

describe('<Heading>', () => {
  it('Should render the correct classNamePrefix component', () => {
    const { getByTestId } = render(<Heading text="test" />);
    expect(getByTestId('heading')).toBeTruthy();
  });

  it('Should render the correct text inside', () => {
    const { getByTestId } = render(<Heading text="test" type="h1" />);
    expect(getByTestId('heading')).toHaveTextContent('test');
  });

  it('Should render the correct type h1 inside', () => {
    const { container } = render(<Heading text="test" type="h1" />);
    expect(container.querySelector('h1')).toBeInTheDocument();
  });

  it('Should render the correct type h2 inside', () => {
    const { container } = render(<Heading text="test" type="h2" />);
    expect(container.querySelector('h2')).toBeInTheDocument();
  });

  it('Should render the correct type h3 inside', () => {
    const { container } = render(<Heading text="test" type="h3" />);
    expect(container.querySelector('h3')).toBeInTheDocument();
  });

  it('Should render the correct type h4 inside', () => {
    const { container } = render(<Heading text="test" type="h4" />);
    expect(container.querySelector('h4')).toBeInTheDocument();
  });

  it('Should render the correct type h5 inside', () => {
    const { container } = render(<Heading text="test" type="h5" />);
    expect(container.querySelector('h5')).toBeInTheDocument();
  });

  it('Should render the correct type h6 inside', () => {
    const { container } = render(<Heading text="test" type="h6" />);
    expect(container.querySelector('h6')).toBeInTheDocument();
  });

  it('Should render the correct children inside', () => {
    const testChildren = <div data-testid="test-children">test</div>;
    const { getByTestId } = render(
      <Heading text="test" type="h6">
        {testChildren}
      </Heading>
    );
    expect(getByTestId('test-children')).toBeInTheDocument();
  });

  it('Should render the correct text', () => {
    const { getByText } = render(<Heading text="test" type="h6" />);
    expect(getByText('test')).toBeTruthy();
  });
});
