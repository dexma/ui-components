import type { Meta, StoryObj } from '@storybook/react';

import { Dots } from '@components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
    title: 'Dots',
    component: Dots,
    tags: ['autodocs'],
    argTypes: {
        size: { control: 'number', defaultValue: 8 },
        steps: { control: 'number', defaultValue: 3 },
    },
} satisfies Meta<typeof Dots>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
    args: {
        size: 8,
        steps: 3,
    },
};
