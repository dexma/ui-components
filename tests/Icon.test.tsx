import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { icons } from '@config';
import { Icon, IconSize, getIconSize } from '@components';

describe('<Icon>', () => {
    it('Should render the classNamePrefix component', () => {
        render(<Icon />);
        expect(screen.getAllByTestId('icon').length).toEqual(1);
    });
    it('Should have icon config', () => {
        expect(icons.length).toBeTruthy();
    });
    it('Should have correct size passing small sizes', () => {
        render(<Icon size='small' />);
        expect(screen.getByTestId('icon').getAttribute('width')).toBe(getIconSize(IconSize.SMALL).toString());
    });
    it('Should have correct size passing medium sizes', () => {
        render(<Icon size='medium' />);
        expect(screen.getByTestId('icon').getAttribute('width')).toBe(getIconSize(IconSize.MEDIUM).toString());
    });
    it('Should have correct size passing large sizes', () => {
        render(<Icon size='large' />);
        expect(screen.getByTestId('icon').getAttribute('width')).toBe(getIconSize(IconSize.LARGE).toString());
    });
    it('Should have correct size passing xlarge sizes', () => {
        render(<Icon size='xlarge' />);
        expect(screen.getByTestId('icon').getAttribute('width')).toBe(getIconSize(IconSize.XLARGE).toString());
    });
});
