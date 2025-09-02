import React from 'react';
import { render } from '@testing-library/react';
import { Drawer } from '@components';
import { describe, expect, it, vi } from 'vitest';

// mock Ant Design's Drawer
vi.mock('antd', async () => {
    const actual: typeof import('antd') = await vi.importActual('antd');

    const DrawerMock = vi.fn(({ children, ...rest }: any) => (
        <div data-testid='mocked-drawer' data-props={JSON.stringify(rest)}>
            {children}
        </div>
    ));

    return {
        ...actual,
        Drawer: DrawerMock,
    };
});
describe('Drawer', () => {
    it('should render Ant Design Drawer with the given props', () => {
        const { getByTestId, getByText } = render(
            <Drawer open title='My title'>
                <span>content</span>
            </Drawer>
        );

        // Verify that the mocked Drawer is rendered
        const drawer = getByTestId('mocked-drawer');
        expect(drawer).toBeInTheDocument();

        // Verify that the children are rendered
        expect(getByText('content')).toBeInTheDocument();
    });
});
