import React from 'react';
import { render } from '@testing-library/react';

import Dots from '../../src/components/Dots';

describe('<Dots>', () => {
  it('Should render the dots correct', () => {
    const { getByTestId } = render(
      <Dots steps={2}/>
    );
    expect(getByTestId("dots")).toBeTruthy();
  });
  it('Should render 2 dot ', () => {
    const numberOfDots = 2;
    const { getAllByTestId } = render(
      <Dots steps={numberOfDots}/>
    );
    expect(getAllByTestId("dot")).toHaveLength(numberOfDots);
  });
  it('Should render 3 dot ', () => {
    const numberOfDots = 3;
    const { getAllByTestId } = render(
      <Dots steps={numberOfDots}/>
    );
    expect(getAllByTestId("dot")).toHaveLength(numberOfDots);
  });
  it('Should render 4 dot ', () => {
    const numberOfDots = 4;
    const { getAllByTestId } = render(
      <Dots steps={numberOfDots}/>
    );
    expect(getAllByTestId("dot")).toHaveLength(numberOfDots);
  });
});
