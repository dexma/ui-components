import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { expect, describe, it, vitest } from 'vitest';

import { Alert } from '@components';

describe('<Alert>', () => {
    it('Should render the message passed as a prop', () => {
        const messageText = 'Success Tips';
        const { getByTestId } = render(<Alert message={messageText} type='success' />);
        const message = getByTestId('alert-message');
        expect(message.textContent).toEqual(messageText);
    });
    it('Should render the description passed as a prop', () => {
        const descriptionText = 'Success Tips';
        const messageText = 'Success Tips';
        const { getByTestId } = render(<Alert message={messageText} description={descriptionText} type='success' />);
        const description = getByTestId('alert-description');
        expect(description.textContent).toEqual(descriptionText);
    });
    it('Should render the icon for basic type', () => {
        const type = 'basic';
        const messageText = 'Basic Tips';
        const { getByTestId } = render(<Alert message={messageText} type={type} showIcon />);
        const icon = getByTestId(`alert-icon-${type}`);
        expect(icon).toBeTruthy();
    });
    it('Should render the icon for outline type', () => {
        const type = 'outline';
        const messageText = 'Outline Tips';
        const { getByTestId } = render(<Alert message={messageText} type={type} showIcon />);
        const icon = getByTestId(`alert-icon-${type}`);
        expect(icon).toBeTruthy();
    });
    it('Should render the icon for success type', () => {
        const type = 'success';
        const messageText = 'Success Tips';
        const { getByTestId } = render(<Alert message={messageText} type={type} showIcon />);
        const icon = getByTestId(`alert-icon-${type}`);
        expect(icon).toBeTruthy();
    });
    it('Should render the icon for warning type', () => {
        const type = 'warning';
        const messageText = 'Warning Tips';
        const { getByTestId } = render(<Alert message={messageText} type={type} showIcon />);
        const icon = getByTestId(`alert-icon-${type}`);
        expect(icon).toBeTruthy();
    });
    it('Should render the icon for info type', () => {
        const type = 'info';
        const messageText = 'Info Tips';
        const { getByTestId } = render(<Alert message={messageText} type={type} showIcon />);
        const icon = getByTestId(`alert-icon-${type}`);
        expect(icon).toBeTruthy();
    });
    it('Should render the icon for error type', () => {
        const type = 'error';
        const messageText = 'Error Tips';
        const { getByTestId } = render(<Alert message={messageText} type={type} showIcon />);
        const icon = getByTestId(`alert-icon-${type}`);
        expect(icon).toBeTruthy();
    });
    it('Should render the icon close', () => {
        const messageText = 'Warning Tips';
        const { getByTestId } = render(<Alert message={messageText} type='warning' closable />);
        expect(getByTestId('alert-icon-close')).toBeTruthy();
    });
    it('Should remove all the alert when click on the close button', () => {
        const messageText = 'Warning Tips';
        const { getByTestId, container } = render(<Alert message={messageText} type='warning' closable />);
        const buttonClose = getByTestId('alert-icon-close');
        expect(getByTestId('alert')).toBeTruthy();
        fireEvent.click(buttonClose);
        expect(container.firstChild).toBeNull();
    });
    it('Should call onClose event', () => {
        const mockCallBack = vitest.fn();
        const messageText = 'Warning Tips';
        const { getByTestId } = render(<Alert message={messageText} type='warning' closable onClose={mockCallBack} />);
        const buttonClose = getByTestId('alert-icon-close');
        fireEvent.click(buttonClose);
        expect(mockCallBack).toHaveBeenCalled();
    });
});
