import { TagSelect } from '@components/TagSelect';
import { fireEvent, render, screen } from '@testing-library/react';

import { describe, expect, it, vi, beforeEach } from 'vitest';
import React from 'react';

describe('TagSelect', () => {
    const onChangeMock = vi.fn();

    beforeEach(() => {
        onChangeMock.mockClear();
    });

    it('renders with default props', () => {
        render(<TagSelect onChange={onChangeMock} />);
        const select = screen.getByTestId('tagSelect');
        expect(select).toBeInTheDocument();
        expect(select).toHaveAttribute('data-id', 'tagSelect');
        expect(select).toHaveAttribute('aria-disabled', 'false');
    });

    it('renders with custom placeholder and style', () => {
        render(<TagSelect onChange={onChangeMock} placeholder='Add something' style={{ width: 250 }} />);
        const select = screen.getByTestId('tagSelect');
        expect(select).toHaveTextContent('Add something');
        expect(select).toHaveStyle({ width: '250px' });
    });

    it('is disabled when disabled prop is true', () => {
        render(<TagSelect onChange={onChangeMock} disabled />);
        const select = screen.getByTestId('tagSelect');
        expect(select).toHaveAttribute('aria-disabled', 'true');
    });
});
