import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Typography, typography } from '../src/lib';
import defaultTheme, { fontFamily } from '../src/lib/utils/theme';

describe('typography tokens', () => {
    it('Should expose the canonical font stack, Montserrat first', () => {
        expect(typography.fontFamily).toBe(fontFamily);
        expect(typography.fontFamily.startsWith('"Montserrat"')).toBe(true);
    });

    it('Should keep the CJK fallbacks for zh_CN', () => {
        expect(typography.fontFamily).toContain('PingFang SC');
        expect(typography.fontFamily).toContain('Microsoft YaHei');
    });

    it('Should expose the weight tokens', () => {
        expect(typography.fontWeight).toEqual({ light: 300, normal: 400, medium: 500, semiBold: 600, bold: 700 });
    });
});

describe('<Typography>', () => {
    it('Should render the component with its children', () => {
        const { getByTestId } = render(<Typography>test</Typography>);
        expect(getByTestId('typography')).toHaveTextContent('test');
    });

    it('Should render a span by default', () => {
        const { container } = render(<Typography>test</Typography>);
        expect(container.querySelector('span')).toBeInTheDocument();
    });

    it('Should render the element given in `as`', () => {
        const { container } = render(<Typography as='p'>test</Typography>);
        expect(container.querySelector('p')).toBeInTheDocument();
    });

    it('Should apply the heading scale for h1', () => {
        const { getByTestId } = render(<Typography variant='h1'>test</Typography>);
        expect(getByTestId('typography')).toHaveStyle(`font-size: ${defaultTheme.heading.fontSize.h1}`);
    });

    it('Should apply the paragraph scale for small', () => {
        const { getByTestId } = render(<Typography variant='small'>test</Typography>);
        expect(getByTestId('typography')).toHaveStyle(`font-size: ${defaultTheme.paragraph.size.small.fontSize}`);
        expect(getByTestId('typography')).toHaveStyle(`line-height: ${defaultTheme.paragraph.size.small.lineHeight}`);
    });

    it('Should map the weight to the theme token', () => {
        const { getByTestId } = render(<Typography weight='bold'>test</Typography>);
        expect(getByTestId('typography')).toHaveStyle(`font-weight: ${defaultTheme.fontWeightBold}`);
    });

    it('Should map the `medium` weight to the fontWeightMedium token', () => {
        const { getByTestId } = render(<Typography weight='medium'>test</Typography>);
        expect(getByTestId('typography')).toHaveStyle(`font-weight: ${defaultTheme.fontWeightMedium}`);
    });

    it('Should not leak style props onto the DOM element', () => {
        const { getByTestId } = render(
            <Typography variant='h2' weight='bold' color='gray900'>
                test
            </Typography>
        );
        const element = getByTestId('typography');
        expect(element).not.toHaveAttribute('variant');
        expect(element).not.toHaveAttribute('weight');
        expect(element).not.toHaveAttribute('color');
    });
});
