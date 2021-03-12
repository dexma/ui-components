import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '../../src/components/Button';
import Result from '../../src/components/Result';

describe('<Result>', () => {
  it('Should render the Result success correct', () => {
    render(<Result variant="success" />);
    expect(screen.getByTestId("result-success")).toBeTruthy();
    expect(screen.getByTestId("icon_circle_check")).toBeTruthy();
  });
  it('Should render the Result info correct', () => {
    render(<Result variant="info" />);
    expect(screen.getByTestId("result-info")).toBeTruthy();
    expect(screen.getByTestId("icon_alert_sign")).toBeTruthy();
  });
  it('Should render the Result warning correct', () => {
    render(<Result variant="warning" />);
    expect(screen.getByTestId("result-warning")).toBeTruthy();
    expect(screen.getByTestId("icon_circle_info")).toBeTruthy();
  });
  it('Should render the Result error correct', () => {
    render(<Result variant="error" />);
    expect(screen.getByTestId("result-error")).toBeTruthy();
    expect(screen.getByTestId("icon_circle_delete")).toBeTruthy();
  });
  it('Should render the Result deleted correct', () => {
    render(<Result variant="deleted" />);
    expect(screen.getByTestId("result-deleted")).toBeTruthy();
    expect(screen.getByTestId("icon_delete")).toBeTruthy();
  });
  it('Should render the title correct', () => {
    render(<Result variant="success" title="Test" />);
    expect(screen.getByText("Test")).toBeTruthy();
  });
  it('Should render the info correct', () => {
    render(<Result variant="success" title="Test" info="Test info"/>);
    expect(screen.getByText("Test info")).toBeTruthy();
  });
  it('Should render the content correct', () => {
    const mockContent = <Button text="Content test"/>
    render(<Result variant="success" title="Test" content={mockContent}/>);
    expect(screen.getByText("Content test")).toBeTruthy();
  });
  it('Should render a element passed as icon correct', () => {
    const mockContent = <Button text="Content test"/>
    render(<Result variant="success" title="Test" iconElement={mockContent}/>);
    expect(screen.getByText("Content test")).toBeTruthy();
  });
});
