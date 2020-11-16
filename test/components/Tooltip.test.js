import React, { useRef } from 'react';
import { render } from '@testing-library/react';

import { Tooltip } from '../../src/components/Tooltip';

jest.useFakeTimers();

describe('<Tooltip>', () => {
  let instance = null;

  afterEach(() => {
    instance = null;
  });

  const TooltipInstance = (props) => <Tooltip {...props} onCreate={i => (instance = i)} />;

  it('Should renders only the button element', () => {
    const { container } = render(
      <TooltipInstance content="tooltip">
        <button />
      </TooltipInstance>,
    );
    expect(container.innerHTML).toBe('<button></button>');
  });
  it('Should renders only the div element', () => {
    const { container } = render(
      <TooltipInstance content={<div>tooltip</div>}>
        <button />
      </TooltipInstance>,
    );

    expect(container.innerHTML).toBe('<button></button>');
  });

  it('Should adds a tooltip instance to the child node', () => {
    render(
      <TooltipInstance content="tooltip">
        <button />
      </TooltipInstance>,
    );
    expect(instance).toBeTruthy();
  });
  it('Should `reference` prop as RefObject', () => {
    function App() {
      const ref = useRef();
      return (
        <>
          <button ref={ref} data-testid="reference-prop" />
          <TooltipInstance reference={ref} />
        </>
      );
    }
    render(<App />);
    expect(instance.reference.getAttribute('data-testid')).toBe(
      'reference-prop',
    );
  });

  it('Should render 3 nesting tooltips', () => {
    const { getAllByText } = render(
      <Tooltip content="tooltip" placement="bottom" visible>
        <Tooltip content="tooltip" placement="left" visible>
          <Tooltip content="tooltip" visible>
            <button>Text</button>
          </Tooltip>
        </Tooltip>
      </Tooltip>,
    );
    expect(getAllByText('tooltip')).toHaveLength(3);
  });
});