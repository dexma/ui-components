import { expect, describe, it } from 'vitest';
import { render } from '@testing-library/react';

import { Pagination, itemRender } from '@components';

describe('<Pagination>', () => {
    it('Should render the correct classNamePrefix component', () => {
        const pagination = render(<Pagination />);
        expect(pagination.getAllByTestId('pagination').length).toEqual(1);
    });

    it('Should render the correct icon left', () => {
        const pagination = render(<Pagination total={100} pageSize={10} defaultCurrent={6} />);
        const icon = pagination.getAllByTestId('icon');
        expect(icon.length).toEqual(2);
    });

    it('Should render page items as anchor elements', () => {
        const pagination = render(<Pagination total={20} pageSize={10} defaultCurrent={1} />);
        const links = pagination.container.querySelectorAll('.ant-pagination-item a[role="link"]');
        expect(links.length).toBeGreaterThan(0);
    });

    it('Should set aria-current="page" on the active page anchor', () => {
        const pagination = render(<Pagination total={20} pageSize={10} defaultCurrent={1} />);
        const activeLink = pagination.container.querySelector('.ant-pagination-item-active a[role="link"]');
        expect(activeLink).not.toBeNull();
        expect(activeLink?.getAttribute('aria-current')).toBe('page');
    });

    it('Should not set aria-current on inactive page anchors', () => {
        const pagination = render(<Pagination total={20} pageSize={10} defaultCurrent={1} />);
        const inactiveLinks = pagination.container.querySelectorAll<Element>('.ant-pagination-item:not(.ant-pagination-item-active) a[role="link"]');
        inactiveLinks.forEach((link) => {
            expect(link.getAttribute('aria-current')).toBeNull();
        });
    });

    it('Should wrap prev and next icons in anchor elements', () => {
        const pagination = render(<Pagination total={20} pageSize={10} defaultCurrent={1} />);
        const prevAnchor = pagination.container.querySelector('.ant-pagination-prev a[role="link"]');
        const nextAnchor = pagination.container.querySelector('.ant-pagination-next a[role="link"]');
        expect(prevAnchor).not.toBeNull();
        expect(nextAnchor).not.toBeNull();
    });

    describe('itemRender', () => {
        it('Should render an anchor with aria-current="page" for the active page', () => {
            const renderFn = itemRender(2);
            const { container } = render(<>{renderFn(2, 'page', null)}</>);
            const anchor = container.querySelector('a');
            expect(anchor?.getAttribute('aria-current')).toBe('page');
            expect(anchor?.textContent).toBe('2');
        });

        it('Should render an anchor without aria-current for inactive pages', () => {
            const renderFn = itemRender(1);
            const { container } = render(<>{renderFn(3, 'page', null)}</>);
            const anchor = container.querySelector('a');
            expect(anchor?.getAttribute('aria-current')).toBeNull();
        });

        it('Should render an anchor wrapping the prev icon', () => {
            const renderFn = itemRender(1);
            const { container } = render(<>{renderFn(0, 'prev', null)}</>);
            expect(container.querySelector('a')).not.toBeNull();
        });

        it('Should render an anchor wrapping the next icon', () => {
            const renderFn = itemRender(1);
            const { container } = render(<>{renderFn(0, 'next', null)}</>);
            expect(container.querySelector('a')).not.toBeNull();
        });
    });
});
