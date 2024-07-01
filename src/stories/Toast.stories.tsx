import React from 'react';

import { Button, Cell, Grid, Paragraph, Row, Toaster } from '@components';
import { ToasterContext } from '../lib/components/Toaster/ToasterContext';
import { ToastType } from '../lib/components/Toaster/Toast';

export default {
    title: 'Toaster',
    component: Toaster,
    tags: ['autodocs'],
};

export const Basic = () => (
    <Grid fluid>
        <Row>
            <Cell xs={12}>
                <Paragraph margin='1rem 0 1rem 0'>
                    We present a series of toasters that appear on the top area of the view. In order to make it work it is necessary to inject our custom provider wrapping all
                    components you want to be able to display it. You will then be able to operate the toaster via this provider.
                </Paragraph>
            </Cell>
            <Cell xs={12}>
                <Toaster>
                    <ToasterContext.Consumer>
                        {(context) => (
                            <>
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
                                <Button
                                    variant='outline'
                                    text='Success'
                                    onClick={() => {
                                        context.toast({
                                            text: 'SUCCESS TOAST! This is an example of a success message toast.',
                                            type: ToastType.SUCCESS,
                                        });
                                    }}
                                />
                                <Button
                                    variant='outline'
                                    text='Warning'
                                    onClick={() => {
                                        context.toast({
                                            text: 'WARNING TOAST! This is an example of a warning message toast.',
                                            type: ToastType.WARNING,
                                        });
                                    }}
                                />
                                <Button
                                    variant='outline'
                                    text='Error'
                                    onClick={() => {
                                        context.toast({
                                            text: 'ERROR TOAST! This is an example of an error message toast.',
                                            type: ToastType.ERROR,
                                        });
                                    }}
                                />
                            </>
                        )}
                    </ToasterContext.Consumer>
                </Toaster>
            </Cell>
        </Row>
    </Grid>
);
