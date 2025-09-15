import React from 'react';
import { render } from '@testing-library/react';
import { Upload } from '@components';
import { describe, expect, it, vi } from 'vitest';

vi.mock('antd', async () => {
    const actual: typeof import('antd') = await vi.importActual('antd');

    const UploadMock = vi.fn(({ children, ...rest }: any) => (
        <div data-testid='mocked-upload' data-props={JSON.stringify(rest)}>
            {children}
        </div>
    ));

    return {
        ...actual,
        Upload: UploadMock,
    };
});
describe('Upload', () => {
    it('should render Ant Design Upload with the given props', () => {
        const { getByTestId, getByText } = render(
            <Upload>
                <span>content</span>
            </Upload>
        );

        const drawer = getByTestId('mocked-upload');
        expect(drawer).toBeInTheDocument();

        expect(getByText('content')).toBeInTheDocument();
    });
});
