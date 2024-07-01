import React from 'react';
import { beforeAll, describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';

import { Modal } from '@components';

describe('<Modal>', () => {
    beforeAll(() => {
        const { getComputedStyle } = window;
        window.getComputedStyle = (elt) => getComputedStyle(elt);
    });

    it('Should render', () => {
        const { getByTestId } = render(<Modal open />);
        expect(getByTestId('modal')).toBeInTheDocument();
    });
});
