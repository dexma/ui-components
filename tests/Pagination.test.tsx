import { expect, describe, it } from 'vitest';
import { render } from '@testing-library/react';

import { Pagination } from '@components';

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
});
