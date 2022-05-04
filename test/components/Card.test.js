import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Card from '../../src/components/Card';

const IMAGE_URL =
  'https://get.dexma.com/hs-fs/hubfs/Logo/New%20DEXMA%20Logo.png?width=350&name=New%20DEXMA%20Logo.png';

describe('<Card>', () => {
  it('Should render header card component', () => {
    const { getByTestId } = render(<Card icon="add" />);
    expect(getByTestId('card-header')).toBeTruthy();
  });

  it('Should call onClick event when user click on the icon card', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(<Card icon="add" onClick={mockCallBack} />);
    const cardHeader = getByTestId('card-header');
    fireEvent.click(cardHeader);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it('Should render icon component', () => {
    const { getByTestId } = render(<Card icon="add" />);
    expect(getByTestId('card-icon')).toBeTruthy();
  });

  it('Should call onClick event when user click on the icon card', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(<Card icon="add" onClick={mockCallBack} />);
    const cardIcon = getByTestId('card-icon');
    fireEvent.click(cardIcon);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it('Should render image component correctly', () => {
    const { getByTestId } = render(<Card image={IMAGE_URL} />);
    const imageCard = getByTestId('card-image');
    expect(imageCard).toBeTruthy();
    expect(imageCard).toHaveAttribute('src', IMAGE_URL);
  });

  it('Should call onClick event when user click on the image card', () => {
    const mockCallBack = jest.fn();
    const { getByTestId } = render(
      <Card image={IMAGE_URL} onClick={mockCallBack} />
    );
    const cardImage = getByTestId('card-image');
    fireEvent.click(cardImage);
    expect(mockCallBack).toHaveBeenCalled();
  });

  it('Should have a h5 when a title is set', () => {
    const testTitle = 'test';
    const { getByTestId, getByText, container } = render(
      <Card title={testTitle} />
    );
    const bodyCard = getByTestId('card-body');
    expect(bodyCard).toBeTruthy();
    expect(container.getElementsByTagName('h5')).toBeTruthy();
    expect(getByText(testTitle)).toBeTruthy();
  });

  it('Should have a h6 when a subtitle is set', () => {
    const testSubtitle = 'test';
    const { getByTestId, getByText, container } = render(
      <Card subtitle={testSubtitle} />
    );
    const bodyCard = getByTestId('card-body');
    expect(bodyCard).toBeTruthy();
    expect(container.getElementsByTagName('h6')).toBeTruthy();
    expect(getByText(testSubtitle)).toBeTruthy();
  });

  it('Should have a p when set a description', () => {
    const testDescription = 'test';
    const { getByTestId, getByText, container } = render(
      <Card description={testDescription} />
    );
    const bodyCard = getByTestId('card-body');
    expect(bodyCard).toBeTruthy();
    expect(container.getElementsByTagName('p')).toBeTruthy();
    expect(getByText(testDescription)).toBeTruthy();
  });

  it('Should have a link when set a link prop', () => {
    const hrefMock = 'https://www.dexma.com/es/';
    const { getByTestId, container } = render(<Card link={hrefMock} />);
    const card = getByTestId('card');
    expect(container.getElementsByTagName('a')).toBeTruthy();
    expect(card).toHaveAttribute('href', hrefMock);
  });

  it('Should render footer component correctly', () => {
    const footerMock = (
      <div data-testid="footer">
        <span>test</span>
      </div>
    );
    const { getByTestId, getByText } = render(<Card footer={footerMock} />);
    const footerCard = getByTestId('footer');
    expect(footerCard).toBeTruthy();
    expect(getByText('test')).toBeTruthy();
  });
});
