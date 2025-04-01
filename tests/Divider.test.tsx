import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { Divider } from '@components';

describe('<Divider>', () => {
    it('Should render the divider correct', () => {
        const { getByTestId } = render(<Divider />);
        expect(getByTestId('divider')).toBeTruthy();
    });
});
