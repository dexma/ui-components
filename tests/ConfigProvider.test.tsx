import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Checkbox, ConfigProvider } from '@components';

describe('<ConfigProvider>', () => {
    it('Should render its children', () => {
        const { getByText } = render(
            <ConfigProvider>
                <span>test</span>
            </ConfigProvider>
        );
        expect(getByText('test')).toBeInTheDocument();
    });

    it('Should render a wrapped antd component', () => {
        const { getByTestId } = render(
            <ConfigProvider>
                <Checkbox data-testid='config-provider-checkbox'>check</Checkbox>
            </ConfigProvider>
        );
        expect(getByTestId('config-provider-checkbox')).toBeInTheDocument();
    });

    it('Should keep a caller-supplied theme token intact', () => {
        // The wrapper injects token.fontFamily; a caller's own token values must survive the merge.
        const { getByText } = render(
            <ConfigProvider theme={{ token: { colorPrimary: '#123456' } }}>
                <span>merged</span>
            </ConfigProvider>
        );
        expect(getByText('merged')).toBeInTheDocument();
    });
});
