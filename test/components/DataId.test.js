import React from 'react';
import { render } from '@testing-library/react'

import { DataIdProvider } from '../../src/components/DataId/DataIdProvider';
import withDataId from '../../src/components/DataId/withDataId';

describe('Data Id', () => {
  it('withDataId should not build data-id', () => {
    const Example = props => {
      return <div data-id={props.dataId}>Example</div>
    };

    const ExampleWithId = withDataId(Example);

    const { container } = render(<ExampleWithId />);
    const example = container.querySelectorAll("[data-id='example']");
    expect(Array.from(example)).toHaveLength(0);
  });

  it('withDataId should build data-id as default value', () => {
    const Example = props => {
      return <div data-id={props.dataId}>Example</div>
    };

    Example.defaultProps = {
      dataId: 'example',
    };

    const ExampleWithId = withDataId(Example);

    const { container } = render(<ExampleWithId />);
    const example = container.querySelectorAll("[data-id='example']");
    expect(Array.from(example)).toHaveLength(1);
  });

  it('withDataId should build data-id as specific value', () => {
    const Example = props => {
      return <div data-id={props.dataId}>Example</div>
    };

    Example.defaultProps = {
      dataId: 'example',
    };

    const ExampleWithId = withDataId(Example);

    const { container } = render(<ExampleWithId dataId='example.test' />);
    const example = container.querySelectorAll("[data-id='example.test']");
    expect(Array.from(example)).toHaveLength(1);
  });

  it('withDataId should build data-id as context + default value', () => {
    const Example = props => {
      return <div data-id={props.dataId}>Example</div>
    };

    Example.defaultProps = {
      dataId: 'example',
    };

    const ExampleWithId = withDataId(Example);

    const { container } = render(<DataIdProvider dataId="page.section"><ExampleWithId /></DataIdProvider>);
    const example = container.querySelectorAll("[data-id='page.section.example']");
    expect(Array.from(example)).toHaveLength(1);
  });

  it('withDataId should build data-id as context + specific value', () => {
    const Example = props => {
      return <div data-id={props.dataId}>Example</div>
    };

    Example.defaultProps = {
      dataId: 'example',
    };

    const ExampleWithId = withDataId(Example);

    const { container } = render(<DataIdProvider dataId="page.section"><ExampleWithId dataId='example.test' /></DataIdProvider>);
    const example = container.querySelectorAll("[data-id='page.section.example.test']");
    expect(Array.from(example)).toHaveLength(1);
  });
});
