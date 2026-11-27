import { beforeAll, describe, expect, it, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { TableV2, TableCell } from '@components';

describe('TableCell', () => {
    // jsdom has no pseudo-element styles, which antd's table asks for; drop the second argument as TableV2.test does.
    beforeAll(() => {
        const { getComputedStyle } = window;
        window.getComputedStyle = (elt) => getComputedStyle(elt);
    });

    it('Text shows its lines and leading content', () => {
        render(
            <TableCell.Text secondLine='Barcelona' leading={<span data-testid='lead' />}>
                Main office
            </TableCell.Text>
        );
        expect(screen.getByText('Main office')).toBeTruthy();
        expect(screen.getByText('Barcelona')).toBeTruthy();
        expect(screen.getByTestId('lead')).toBeTruthy();
    });

    it('Tags shows each tag', () => {
        render(<TableCell.Tags tags={['Gas', 'Water']} />);
        expect(screen.getByText('Gas')).toBeTruthy();
        expect(screen.getByText('Water')).toBeTruthy();
    });

    it('Numeric shows the value and a toned comparison with an arrow', () => {
        const { container } = render(<TableCell.Numeric value='1,204 kWh' comparison={{ value: '+12%', direction: 'up', tone: 'bad' }} />);
        expect(screen.getByText('1,204 kWh')).toBeTruthy();
        const comparison = container.querySelector('.table-cell-comparison');
        expect(comparison).toHaveStyle({ color: '#EB1212' }); // theme errorDefault
        expect(comparison?.querySelector('svg')).not.toBeNull();
        expect(comparison?.textContent).toBe('+12%');
    });

    it('Badge is a named dot', () => {
        render(<TableCell.Badge color='green' ariaLabel='Online' />);
        expect(screen.getByRole('img', { name: 'Online' })).toBeTruthy();
    });

    it('MV draws each bar at its percentage, capped at 100, with an optional target', () => {
        const { container } = render(
            <TableCell.MV
                rows={[
                    { percent: 40, target: 60, tone: 'positive', label: 'Savings 40%' },
                    { percent: 120, tone: 'neutral', label: 'Baseline 120%' },
                ]}
            />
        );
        const fills = container.querySelectorAll<HTMLElement>('.table-cell-mv-fill');
        expect(fills[0].style.width).toBe('40%');
        expect(fills[1].style.width).toBe('100%');
        expect(container.querySelector<HTMLElement>('.table-cell-mv-target')?.style.left).toBe('60%');
        expect(screen.getByText('Baseline 120%')).toBeTruthy();
    });

    it('Feedback shows its text with its status and variant', () => {
        const { container } = render(
            <TableCell.Feedback status='warning' variant='solid'>
                Late data
            </TableCell.Feedback>
        );
        expect(screen.getByText('Late data')).toBeTruthy();
        const feedback = container.querySelector('.table-cell-feedback');
        expect(feedback?.getAttribute('data-status')).toBe('warning');
        expect(feedback?.getAttribute('data-variant')).toBe('solid');
    });

    it('Boolean names its state', () => {
        const { rerender } = render(<TableCell.Boolean value trueLabel='Yes' falseLabel='No' />);
        expect(screen.getByRole('img', { name: 'Yes' })).toBeTruthy();
        rerender(<TableCell.Boolean value={false} trueLabel='Yes' falseLabel='No' />);
        expect(screen.getByRole('img', { name: 'No' })).toBeTruthy();
    });

    it('Code renders a code element', () => {
        render(<TableCell.Code>DEV-0042</TableCell.Code>);
        expect(screen.getByText('DEV-0042').tagName).toBe('CODE');
    });

    it('Action calls onClick', () => {
        const onClick = vi.fn();
        render(<TableCell.Action onClick={onClick}>View report</TableCell.Action>);
        fireEvent.click(screen.getByRole('button', { name: 'View report' }));
        expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('Actions opens its menu and runs the picked item', () => {
        const onEdit = vi.fn();
        render(<TableCell.Actions ariaLabel='Row actions' items={[{ text: 'Edit', onClick: onEdit }]} />);
        fireEvent.click(screen.getByRole('button', { name: 'Row actions' }));
        fireEvent.click(screen.getByText('Edit'));
        expect(onEdit).toHaveBeenCalledTimes(1);
    });

    it('Favorite exposes its state and reports the next one', () => {
        const onChange = vi.fn();
        render(<TableCell.Favorite isFavorite={false} onChange={onChange} ariaLabel='Favourite' />);
        const star = screen.getByRole('button', { name: 'Favourite' });
        expect(star.getAttribute('aria-pressed')).toBe('false');
        fireEvent.click(star);
        expect(onChange).toHaveBeenCalledWith(true);
    });

    it('keeps clicks on its controls from reaching the row', () => {
        const onRowClick = vi.fn();
        render(
            <TableV2
                dataSource={[{ key: '1' }]}
                isPaginated={false}
                onRow={() => ({ onClick: onRowClick })}
                columns={[
                    {
                        title: 'Controls',
                        key: 'controls',
                        render: () => (
                            <>
                                <TableCell.Favorite isFavorite={false} onChange={() => undefined} ariaLabel='Favourite' />
                                <TableCell.Action onClick={() => undefined}>View report</TableCell.Action>
                                <TableCell.Actions ariaLabel='Row actions' items={[{ text: 'Edit' }]} />
                            </>
                        ),
                    },
                ]}
            />
        );
        fireEvent.click(screen.getByRole('button', { name: 'Favourite' }));
        fireEvent.click(screen.getByRole('button', { name: 'View report' }));
        fireEvent.click(screen.getByRole('button', { name: 'Row actions' }));
        fireEvent.click(screen.getByText('Edit'));
        expect(onRowClick).not.toHaveBeenCalled();
    });
});
