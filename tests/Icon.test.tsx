import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { icons } from '@config';
import { Icon, IconSize, getIconSize } from '@components';

describe('<Icon>', () => {
    it('Should render the classNamePrefix component', () => {
        render(<Icon ariaLabel='icon test' />);
        expect(screen.getAllByTestId('icon').length).toEqual(1);
    });
    it('Should have icon config', () => {
        expect(icons.length).toBeTruthy();
    });
    it('Should have correct size passing small sizes', () => {
        render(<Icon size='small' ariaLabel='small icon test' />);
        expect(screen.getByTestId('icon').getAttribute('width')).toBe(getIconSize(IconSize.SMALL).toString());
    });
    it('Should have correct size passing medium sizes', () => {
        render(<Icon size='medium' ariaLabel='medium icon test' />);
        expect(screen.getByTestId('icon').getAttribute('width')).toBe(getIconSize(IconSize.MEDIUM).toString());
    });
    it('Should have correct size passing large sizes', () => {
        render(<Icon size='large' ariaLabel='large icon test' />);
        expect(screen.getByTestId('icon').getAttribute('width')).toBe(getIconSize(IconSize.LARGE).toString());
    });
    it('Should have correct size passing xlarge sizes', () => {
        render(<Icon size='xlarge' ariaLabel='xlarge icon test' />);
        expect(screen.getByTestId('icon').getAttribute('width')).toBe(getIconSize(IconSize.XLARGE).toString());
    });
});
