import React from 'react';
import { cleanup, render } from '@testing-library/react';

import Modal from 'components/Modal';
import Theme from 'components/Theme';

describe('<Modal>', () => {
  afterEach(cleanup);

  test('render Modal', () => {
    const { container } = render(
      <Theme>
        <Modal />
      </Theme>,
    );
    expect(container.firstChild).toMatchSnapshot()
  });
});
