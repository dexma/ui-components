import React from 'react';
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import { Button, Result, ResultVariants } from '@components';

describe('<Result>', () => {
    it('Should render the Result success correct', () => {
        render(<Result variant={ResultVariants.SUCCESS} />);
        expect(screen.getByTestId('result-success')).toBeTruthy();
        expect(screen.getByTestId('icon_circle_check')).toBeTruthy();
    });
    it('Should render the Result info correct', () => {
        render(<Result variant={ResultVariants.INFO} />);
        expect(screen.getByTestId('result-info')).toBeTruthy();
        expect(screen.getByTestId('icon_alert_sign')).toBeTruthy();
    });
    it('Should render the Result warning correct', () => {
        render(<Result variant={ResultVariants.WARNING} />);
        expect(screen.getByTestId('result-warning')).toBeTruthy();
        expect(screen.getByTestId('icon_circle_info')).toBeTruthy();
    });
    it('Should render the Result error correct', () => {
        render(<Result variant={ResultVariants.ERROR} />);
        expect(screen.getByTestId('result-error')).toBeTruthy();
        expect(screen.getByTestId('icon_circle_delete')).toBeTruthy();
    });
    it('Should render the Result deleted correct', () => {
        render(<Result variant={ResultVariants.DELETED} />);
        expect(screen.getByTestId('result-deleted')).toBeTruthy();
        expect(screen.getByTestId('icon_delete')).toBeTruthy();
    });
    it('Should render the title correct', () => {
        render(<Result variant={ResultVariants.SUCCESS} title='Test' />);
        expect(screen.getByText('Test')).toBeTruthy();
    });
    it('Should render the info correct', () => {
        render(<Result variant={ResultVariants.SUCCESS} title='Test' info='Test info' />);
        expect(screen.getByText('Test info')).toBeTruthy();
    });
    it('Should render the content correct', () => {
        const mockContent = <Button text='Content test' />;
        render(<Result variant={ResultVariants.SUCCESS} title='Test' content={mockContent} />);
        expect(screen.getByText('Content test')).toBeTruthy();
    });
    it('Should render a element passed as icon correct', () => {
        const mockContent = <Button text='Content test' />;
        render(<Result variant={ResultVariants.SUCCESS} title='Test' iconElement={mockContent} />);
        expect(screen.getByText('Content test')).toBeTruthy();
    });
});
