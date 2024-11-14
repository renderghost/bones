// src/components/Heading/Heading.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta = {
	title: 'Typography/Heading',
	component: Heading,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		level: {
			control: 'select',
			options: [1, 2, 3, 4],
			defaultValue: 1,
		},
		truncate: {
			control: 'boolean',
			defaultValue: false,
		},
		children: {
			control: 'text',
		},
	},
} as Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof Heading>;

export const Level1: Story = {
	args: {
		level: 1,
		children: 'Heading Level 1',
	},
};

export const Level2: Story = {
	args: {
		level: 2,
		children: 'Heading Level 2',
	},
};

export const Level3: Story = {
	args: {
		level: 3,
		children: 'Heading Level 3',
	},
};

export const Level4: Story = {
	args: {
		level: 4,
		children: 'Heading Level 4',
	},
};

export const Truncated: Story = {
	args: {
		level: 2,
		truncate: true,
		children:
			'This is a very long heading that should be truncated when it reaches the end of its container and show ellipsis',
	},
};
