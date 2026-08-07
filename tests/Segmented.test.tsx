import React from 'react';
import { render } from '@testing-library/react';
import { Segmented } from '@components';
import { describe, expect, it, vi } from 'vitest';

// mock Ant Design's Segmented
vi.mock('antd', async () => {
    const actual: typeof import('antd') = await vi.importActual('antd');

    const SegmentedMock = vi.fn(({ options, ...rest }: any) => (
        <div data-testid='mocked-segmented' data-props={JSON.stringify(rest)}>
            {options?.map((option: any) => (
                <span key={option.value}>{option.label}</span>
            ))}
        </div>
    ));

    return {
        ...actual,
        Segmented: SegmentedMock,
    };
});
describe('Segmented', () => {
    it('should render Ant Design Segmented with the given props', () => {
        const { getByTestId, getByText } = render(
            <Segmented
                value='all'
                options={[
                    { label: 'All', value: 'all' },
                    { label: 'Critical', value: 'critical' },
                ]}
            />
        );

        // Verify that the mocked Segmented is rendered
        const segmented = getByTestId('mocked-segmented');
        expect(segmented).toBeInTheDocument();

        // Verify that the options are rendered
        expect(getByText('All')).toBeInTheDocument();
        expect(getByText('Critical')).toBeInTheDocument();
    });
});
