import React from 'react';
import { describe, expect, it, vitest } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { Tag, TagGroup } from '@components';

describe('<Tag>', () => {
    it('Should have the test id', () => {
        const { getByTestId } = render(<Tag icon='vader' />);
        expect(getByTestId('tag')).toBeTruthy();
    });
    it('Should have the icon', () => {
        const { getByTestId } = render(<Tag icon='vader' />);
        expect(getByTestId('icon')).toBeTruthy();
    });
    it('Should render children', () => {
        const testDiv = <div data-testid='test'>test</div>;
        const { getByTestId } = render(<Tag>{testDiv}</Tag>);
        expect(getByTestId('test')).toBeTruthy();
    });
    it('Should have 2 icon', () => {
        const { getAllByTestId } = render(<Tag icon='vader' closable />);
        expect(getAllByTestId('icon')).toHaveLength(2);
    });
    it('Should call onClose when user click on close icon', () => {
        const mockCallBack = vitest.fn();
        const { getAllByTestId } = render(<Tag icon='vader' closable onClose={mockCallBack} />);
        const closableIcon = getAllByTestId('icon')[1];
        fireEvent.click(closableIcon);
        expect(mockCallBack).toBeCalled();
    });
    it('Should call onClick when user click on tag', () => {
        const mockCallBack = vitest.fn();
        const { getByTestId } = render(<Tag icon='vader' onClick={mockCallBack} />);
        fireEvent.click(getByTestId('tag'));
        expect(mockCallBack).toBeCalled();
    });
});

describe('<Tag> variants and colours', () => {
    it('Filled has a tinted background and transparent border', () => {
        const { getByTestId } = render(<Tag color='#008188' variant='filled' />);
        const style = getComputedStyle(getByTestId('tag'));
        expect(style.borderColor).toBe('transparent');
        expect(style.color).toBe('rgb(0, 129, 136)');
        expect(style.backgroundColor).toBe('rgba(0, 129, 136, 0.1)');
    });
    it('Uses Tag-only red and green', () => {
        render(<Tag color='red' />);
        render(<Tag color='green' />);
        const [red, green] = screen.getAllByTestId('tag');
        expect(getComputedStyle(red).backgroundColor).toBe('rgb(242, 90, 90)');
        expect(getComputedStyle(green).backgroundColor).toBe('rgb(0, 204, 135)');
    });
    it('Gray outline uses dark text and a light border', () => {
        const { getByTestId } = render(<Tag color='gray' variant='outline' />);
        const style = getComputedStyle(getByTestId('tag'));
        expect(style.color).toBe('rgb(64, 65, 69)');
        expect(style.borderColor).toBe('#dee0e2');
    });
    it('Feedback presets resolve', () => {
        const { getByTestId } = render(<Tag color='warning' variant='filled' />);
        const style = getComputedStyle(getByTestId('tag'));
        expect(style.color).toBe('rgb(199, 134, 0)');
        expect(style.backgroundColor).toBe('rgb(255, 246, 217)');
    });
    it('Uses regular font weight', () => {
        const { getByTestId } = render(<Tag />);
        expect(getComputedStyle(getByTestId('tag')).fontWeight).toBe('400');
    });
});

describe('<TagGroup>', () => {
    it('Should render correct passing tag as children array', () => {
        const { getByTestId } = render(
            <TagGroup>
                <Tag color='orange' variant='outline' type='rounded' icon='alert'>
                    Tag
                </Tag>
                <Tag color='brown' variant='outline' type='rounded' icon='alert'>
                    Tag
                </Tag>
            </TagGroup>
        );
        expect(getByTestId('tag-group')).toBeTruthy();
    });
    it('Should call onClick for each tag', () => {
        const mockCallBackVader = vitest.fn();
        const mockCallBackClose = vitest.fn();
        const mockCallBackAdd = vitest.fn();

        render(
            <TagGroup>
                <Tag icon='vader' onClick={mockCallBackVader} />
                <Tag icon='close' onClick={mockCallBackClose} />
                <Tag icon='add' onClick={mockCallBackAdd} />
            </TagGroup>
        );

        expect(screen.getAllByTestId('tag')).toHaveLength(3);

        const closableIconVader = screen.getAllByTestId('tag')[0];
        const closableIconClose = screen.getAllByTestId('tag')[1];
        const closableIconAdd = screen.getAllByTestId('tag')[2];

        fireEvent.click(closableIconVader);
        expect(mockCallBackVader).toHaveBeenCalled();

        fireEvent.click(closableIconClose);
        expect(mockCallBackClose).toHaveBeenCalled();

        fireEvent.click(closableIconAdd);
        expect(mockCallBackAdd).toHaveBeenCalled();
    });
});
