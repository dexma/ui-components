import React from 'react';

import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Loading } from '@components';

describe('<Loading>', () => {
    it('Should render the classNamePrefix component', () => {
        render(<Loading isLoading />);
        expect(screen.getAllByTestId('loading').length).toEqual(1);
    });
    it('Should render the Spinner component', () => {
        render(<Loading isLoading />);
        expect(screen.getByTestId('loading')).toBeInTheDocument();
        expect(screen.getAllByTestId('spinner').length).toEqual(1);
    });
    it('Should not render the Spinner and show children', () => {
        const loadDiv = <div data-testid='children'>someText</div>;
        render(<Loading isLoading={false}>{loadDiv}</Loading>);
        expect(screen.findByTestId('children')).toBeTruthy();
    });
});
