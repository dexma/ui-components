import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Dropdown from '../../src/components/Dropdown';

const content = [
  {
    text: 'Edit',
    iconBefore: 'edit',
  },
  {
    text: 'Delete',
    iconBefore: 'delete',
  },
];

describe('<Dropdown>', () => {
  it('Should render the button icon', () => {
    const { getByTestId } = render(
      <Dropdown icon="more_horiz" content={content} />
    );
    expect(getByTestId("dropdown-button-icon")).toBeTruthy();
    expect(getByTestId("button-icon-before")).toBeTruthy();
  });
  it('Should render the button text', () => {
    const textTest = 'Test';
    const { getByText } = render(
      <Dropdown text={textTest} content={content} />
    );
    expect(getByText(textTest)).toBeTruthy();
  });
  it('Should render 1 button', () => {
    const textTest = 'Test';
    const { getByText } = render(
      <Dropdown text={textTest} trigger="click" content={[
        {
          text: 'Edit',
          iconBefore: 'edit',
        }
      ]} />
    );
    fireEvent.click(getByText(textTest));
    const contentButtons = screen.getAllByTestId('button');
    expect(contentButtons).toHaveLength(1);
  });
  it('Should render 2 button', () => {
    const textTest = 'Test';
    const { getByText } = render(
      <Dropdown text={textTest} trigger="click" content={[
        {
          text: 'Edit',
          iconBefore: 'edit',
        },
        {
          text: 'Delete',
          iconBefore: 'delete',
        }
      ]} />
    );
    fireEvent.click(getByText(textTest));
    const contentButtons = screen.getAllByTestId('button');
    expect(contentButtons).toHaveLength(2);
  });
  it('Should render 3 button', () => {
    const textTest = 'Test';
    const { getByText } = render(
      <Dropdown text={textTest} trigger="click" content={[
        {
          text: 'Edit',
          iconBefore: 'edit',
        },
        {
          text: 'Delete',
          iconBefore: 'delete',
        },
        {
          text: 'Add',
          iconBefore: 'add',
        }
      ]} />
    );
    fireEvent.click(getByText(textTest));
    const contentButtons = screen.getAllByTestId('button');
    expect(contentButtons).toHaveLength(3);
  });
  it('Should call event passed on each 3 button', () => {
    const textTest = 'Test';
    const mockCallBackButtonEdit = jest.fn();
    const mockCallBackButtonDelete = jest.fn();
    const mockCallBackButtonAdd = jest.fn();
    const { getByText } = render(
      <Dropdown text={textTest} trigger="click" content={[
        {
          text: 'Edit',
          iconBefore: 'edit',
          onClick: mockCallBackButtonEdit
        },
        {
          text: 'Delete',
          iconBefore: 'delete',
          onClick: mockCallBackButtonDelete
        },
        {
          text: 'Add',
          iconBefore: 'add',
          onClick: mockCallBackButtonAdd
        }
      ]} />
    );
    fireEvent.click(getByText(textTest));

    const buttonEdit = screen.getByText('Edit');
    expect(buttonEdit).toBeTruthy();
    fireEvent.click(buttonEdit);
    expect(mockCallBackButtonEdit).toBeCalled();

    const buttonDelete = screen.getByText('Delete');
    expect(buttonDelete).toBeTruthy();
    fireEvent.click(buttonDelete);
    expect(mockCallBackButtonDelete).toBeCalled();

    const buttonAdd = screen.getByText('Add');
    expect(buttonAdd).toBeTruthy();
    fireEvent.click(buttonAdd);
    expect(mockCallBackButtonDelete).toBeCalled();
  });
});

