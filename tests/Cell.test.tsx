import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Cell } from '@components';

describe('<Cell>', () => {
    it('Should render the correct component', () => {
        render(<Cell />);
        expect(screen.getAllByTestId('cell').length).toEqual(1);
    });
});
