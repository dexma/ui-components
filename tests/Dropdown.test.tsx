import React from 'react';
import { describe, expect, it, vitest } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import { Dropdown } from '@components';

const content = [
    {
        text: 'Edit',
        icon: 'edit',
    },
    {
        text: 'Delete',
        icon: 'delete',
    },
];

describe('<Dropdown>', () => {
    it('Should render the button icon', () => {
        const { getByTestId } = render(<Dropdown icon='more_horiz' content={content} />);
        expect(getByTestId('dropdown-button-icon')).toBeTruthy();
        expect(getByTestId('button-icon-before')).toBeTruthy();
    });
    it('Should render the button text', () => {
        const textTest = 'Test';
        const { getByText } = render(<Dropdown text={textTest} content={content} />);
        expect(getByText(textTest)).toBeTruthy();
    });
    it('Should render 1 button', () => {
        const textTest = 'Test';
        const { getByText } = render(
            <Dropdown
                text={textTest}
                trigger={['click']}
                content={[
                    {
                        text: 'Edit',
                        icon: 'edit',
                    },
                ]}
            />
        );
        fireEvent.click(getByText(textTest));
        const contentButtons = screen.getAllByTestId('button');
        expect(contentButtons).toHaveLength(1);
    });
    it('Should render 2 button', () => {
        const textTest = 'Test';
        const { getByText } = render(
            <Dropdown
                text={textTest}
                trigger={['click']}
                content={[
                    {
                        text: 'Edit',
                        icon: 'edit',
                    },
                    {
                        text: 'Delete',
                        icon: 'delete',
                    },
                ]}
            />
        );
        fireEvent.click(getByText(textTest));
        const contentButtons = screen.getAllByTestId('button');
        expect(contentButtons).toHaveLength(2);
    });
    it('Should render 3 button', () => {
        const textTest = 'Test';
        const { getByText } = render(
            <Dropdown
                text={textTest}
                trigger={['click']}
                content={[
                    {
                        text: 'Edit',
                        icon: 'edit',
                    },
                    {
                        text: 'Delete',
                        icon: 'delete',
                    },
                    {
                        text: 'Add',
                        icon: 'add',
                    },
                ]}
            />
        );
        fireEvent.click(getByText(textTest));
        const contentButtons = screen.getAllByTestId('button');
        expect(contentButtons).toHaveLength(3);
    });
    it('Should call event passed on each 3 button', () => {
        const textTest = 'Test';
        const mockCallBackButtonEdit = vitest.fn();
        const mockCallBackButtonDelete = vitest.fn();
        const mockCallBackButtonAdd = vitest.fn();
        const { getByText } = render(
            <Dropdown
                text={textTest}
                trigger={['click']}
                content={[
                    {
                        text: 'Edit',
                        icon: 'edit',
                        onClick: mockCallBackButtonEdit,
                    },
                    {
                        text: 'Delete',
                        icon: 'delete',
                        onClick: mockCallBackButtonDelete,
                    },
                    {
                        text: 'Add',
                        icon: 'add',
                        onClick: mockCallBackButtonAdd,
                    },
                ]}
            />
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
