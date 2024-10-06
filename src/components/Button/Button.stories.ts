// Button.stories.ts
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { Home, ArrowRight, Search } from 'lucide-react';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'caution', 'transparent'],
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
		},
		contentType: {
			control: 'select',
			options: [
				'labelOnly',
				'leftIcon',
				'rightIcon',
				'bothIcons',
				'iconOnly',
			],
		},
		icon: { control: false },
		leftIcon: { control: false },
		rightIcon: { control: false },
		fullWidth: { control: 'boolean' },
		loading: { control: 'boolean' },
		disabled: { control: 'boolean' },
		onClick: { action: 'clicked' },
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const LabelOnly: Story = {
	args: {
		label: 'Label Only',
		variant: 'primary',
		size: 'medium',
		contentType: 'labelOnly',
	},
};

export const WithLeftIcon: Story = {
	args: {
		label: 'Left Icon',
		variant: 'primary',
		size: 'medium',
		contentType: 'leftIcon',
		leftIcon: Home,
	},
};

export const WithRightIcon: Story = {
	args: {
		label: 'Right Icon',
		variant: 'primary',
		size: 'medium',
		contentType: 'rightIcon',
		rightIcon: ArrowRight,
	},
};

export const WithBothIcons: Story = {
	args: {
		label: 'Both Icons',
		variant: 'primary',
		size: 'medium',
		contentType: 'bothIcons',
		leftIcon: Home,
		rightIcon: ArrowRight,
	},
};

export const IconOnly: Story = {
	args: {
		label: 'Search',
		variant: 'primary',
		size: 'medium',
		contentType: 'iconOnly',
		icon: Search,
	},
};

export const Loading: Story = {
	args: {
		label: 'Loading',
		variant: 'primary',
		size: 'medium',
		contentType: 'labelOnly',
		loading: true,
	},
};

export const Disabled: Story = {
	args: {
		label: 'Disabled',
		variant: 'primary',
		size: 'medium',
		contentType: 'labelOnly',
		disabled: true,
	},
};

export const FullWidth: Story = {
	args: {
		label: 'Full Width',
		variant: 'primary',
		size: 'medium',
		contentType: 'labelOnly',
		fullWidth: true,
	},
};

export const Secondary: Story = {
	args: {
		...LabelOnly.args,
		variant: 'secondary',
	},
};

export const Caution: Story = {
	args: {
		...LabelOnly.args,
		variant: 'caution',
	},
};

export const Transparent: Story = {
	args: {
		...LabelOnly.args,
		variant: 'transparent',
	},
};
