import { afterEach, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { Button, Toaster } from '@components';
import { ToastType } from '@components/Toaster/Toast';
import { ToasterContext } from '@components/Toaster/ToasterContext';

const toastText = 'ERROR TOAST! The baseline could not be calculated.';

const renderAndToast = () => {
    render(
        <Toaster>
            <ToasterContext.Consumer>
                {(context) => <Button variant='outline' text='Error' onClick={() => context.toast({ text: toastText, type: ToastType.ERROR })} />}
            </ToasterContext.Consumer>
        </Toaster>
    );
    fireEvent.click(screen.getByText('Error'));
    return screen.getByTestId('alert').parentElement as HTMLElement;
};

describe('<Toaster>', () => {
    afterEach(() => {
        delete (HTMLElement.prototype as Partial<HTMLElement>).showPopover;
    });

    it('Should show the toast in the top layer, above host overlays, when the browser supports popovers', () => {
        const showPopover = vi.fn();
        HTMLElement.prototype.showPopover = showPopover;

        const toast = renderAndToast();

        expect(toast).toHaveAttribute('popover', 'manual');
        expect(showPopover).toHaveBeenCalledTimes(1);
        expect(showPopover.mock.instances[0]).toBe(toast);
    });

    it('Should keep the toast as a plain fixed element when the browser does not support popovers', () => {
        const toast = renderAndToast();

        expect(toast).not.toHaveAttribute('popover');
        expect(toast).toBeVisible();
    });

    it('Should render a toast element when call toast', () => {
        render(
            <Toaster>
                <ToasterContext.Consumer>
                    {(context) => (
                        <Button
                            variant='outline'
                            text='Information'
                            onClick={() => {
                                context.toast({
                                    text: 'INFORMATION TOAST! This is an example of a notification message toast.',
                                    type: ToastType.INFO,
                                });
                            }}
                        />
                    )}
                </ToasterContext.Consumer>
            </Toaster>
        );
        fireEvent.click(screen.getByText('Information'));
        expect(screen.getByText('INFORMATION TOAST! This is an example of a notification message toast.')).toBeInTheDocument();
    });
    it('Should render nothing if toast not called', () => {
        render(
            <Toaster>
                <ToasterContext.Consumer>
                    {(context) => (
                        <Button
                            variant='outline'
                            text='Information'
                            onClick={() => {
                                context.toast({
                                    text: 'INFORMATION TOAST! This is an example of a notification message toast.',
                                    type: ToastType.INFO,
                                });
                            }}
                        />
                    )}
                </ToasterContext.Consumer>
            </Toaster>
        );
        expect(screen.queryByText('INFORMATION TOAST! This is an example of a notification message toast.')).not.toBeInTheDocument();
    });
});
