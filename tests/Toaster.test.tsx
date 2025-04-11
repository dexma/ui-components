import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { Button, Toaster } from '@components';
import { ToastType } from '@components/Toaster/Toast';
import { ToasterContext } from '@components/Toaster/ToasterContext';

describe('<Toaster>', () => {
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
