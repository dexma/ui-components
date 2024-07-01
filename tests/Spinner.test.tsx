import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Spinner } from '@components';

describe('<Spinner>', () => {
    it('Should render the correct classNamePrefix component', () => {
        render(<Spinner />);
        expect(screen.getAllByTestId('spinner').length).toEqual(1);
    });
});
