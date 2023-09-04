import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Popover from '../../src/components/Popover';
import Button from '../../src/components/Button';

describe('Popover', () => {
  test('should open a popover with a title and content', () => {
    // Given
    render(
      <Popover title="Popover" content="Popover content" trigger="click">
        <Button text="Click me"></Button>
      </Popover>
    );

    // When
    const button = screen.getByText('Click me');
    fireEvent.click(button);

    // Then
    expect(screen.getByText('Popover')).toBeInTheDocument();
    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  test('should open a popover with only title', () => {
    // Given
    render(
      <Popover title="Popover" trigger="click">
        <Button text="Click me"></Button>
      </Popover>
    );

    // When
    const button = screen.getByText('Click me');
    fireEvent.click(button);

    // Then
    expect(screen.getByText('Popover')).toBeInTheDocument();
    expect(screen.queryByText('Popover content')).toBeNull();
  });

  test('should open a popover with only content', () => {
    // Given
    render(
      <Popover content="Popover content" trigger="click">
        <Button text="Click me"></Button>
      </Popover>
    );

    // When
    const button = screen.getByText('Click me');
    fireEvent.click(button);

    // Then
    expect(screen.queryByText('Popover')).toBeNull();
    expect(screen.getByText('Popover content')).toBeInTheDocument();
  });

  test('should open a popover with a custom element as content', () => {
    // Given
    render(
      <Popover
        title="Popover custom"
        content={<div data-testid="test-content">Popover content</div>}
        trigger="click"
      >
        <Button text="Click me"></Button>
      </Popover>
    );

    // When
    const button = screen.getByText('Click me');
    fireEvent.click(button);

    // Then
    expect(screen.getByText('Popover custom')).toBeInTheDocument();
    expect(screen.getByTestId('test-content')).toBeInTheDocument();
  });
});
