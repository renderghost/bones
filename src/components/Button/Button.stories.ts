import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { Home, ArrowRight, LucideIcon } from 'lucide-react';

type IconOption = LucideIcon | undefined;

const iconOptions: Record<string, IconOption> = {
	None: undefined,
	Home: Home,
	ArrowRight: ArrowRight,
};

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		label: { control: 'text' },
		variant: {
			control: 'radio',
			options: ['primary', 'secondary', 'caution', 'transparent'],
			defaultValue: 'primary',
		},
		size: {
			control: 'radio',
			options: ['small', 'medium', 'large'],
			defaultValue: 'medium',
		},
		contentType: {
			control: 'radio',
			options: [
				'labelOnly',
				'leftIcon',
				'rightIcon',
				'bothIcons',
				'iconOnly',
			],
			defaultValue: 'leftIcon',
		},
		icon: {
			control: 'radio',
			options: Object.keys(iconOptions),
			mapping: iconOptions,
			defaultValue: 'None',
		},
		leftIcon: {
			control: 'radio',
			options: Object.keys(iconOptions),
			mapping: iconOptions,
			defaultValue: 'Home',
		},
		rightIcon: {
			control: 'radio',
			options: Object.keys(iconOptions),
			mapping: iconOptions,
			defaultValue: 'ArrowRight',
		},
		fullWidth: { control: 'boolean', defaultValue: false },
		loading: { control: 'boolean', defaultValue: false },
		disabled: { control: 'boolean', defaultValue: false },
		onClick: { action: 'clicked' },
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		label: 'Some Label',
		variant: 'primary',
		size: 'medium',
		contentType: 'leftIcon',
		fullWidth: false,
		loading: false,
		disabled: false,
		leftIcon: Home,
		rightIcon: ArrowRight,
	},
};

// Variant stories
export const Primary: Story = {
	args: {
		...Default.args,
		label: 'Primary',
		variant: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		...Default.args,
		label: 'Secondary',
		variant: 'secondary',
	},
};

export const Caution: Story = {
	args: {
		...Default.args,
		label: 'Caution',
		variant: 'caution',
	},
};

export const Transparent: Story = {
	args: {
		...Default.args,
		label: 'Transparent',
		variant: 'transparent',
	},
};

// Size stories
export const Small: Story = {
	args: {
		...Default.args,
		label: 'Small',
		size: 'small',
	},
};

export const Medium: Story = {
	args: {
		...Default.args,
		label: 'Medium',
		size: 'medium',
	},
};

export const Large: Story = {
	args: {
		...Default.args,
		label: 'Large',
		size: 'large',
	},
};

// Content type stories
export const LabelOnly: Story = {
	args: {
		...Default.args,
		label: 'Label Only',
		contentType: 'labelOnly',
	},
};

export const LeftIcon: Story = {
	args: {
		...Default.args,
		label: 'Left Icon',
		contentType: 'leftIcon',
		leftIcon: Home,
	},
};

export const RightIcon: Story = {
	args: {
		...Default.args,
		label: 'Right Icon',
		contentType: 'rightIcon',
		rightIcon: ArrowRight,
	},
};

export const BothIcons: Story = {
	args: {
		...Default.args,
		label: 'Both Icons',
		contentType: 'bothIcons',
		leftIcon: Home,
		rightIcon: ArrowRight,
	},
};

export const IconOnly: Story = {
	args: {
		...Default.args,
		label: 'Icon Only',
		contentType: 'iconOnly',
		icon: Home,
	},
};

// State stories
export const Hover: Story = {
	args: {
		...Default.args,
		label: 'Hover',
		className: 'hover',
	},
};

export const Active: Story = {
	args: {
		...Default.args,
		label: 'Active',
		className: 'active',
	},
};

export const Focus: Story = {
	args: {
		...Default.args,
		label: 'Focus',
		className: 'focus',
	},
};

export const Disabled: Story = {
	args: {
		...Default.args,
		label: 'Disabled',
		disabled: true,
	},
};

export const Loading: Story = {
	args: {
		...Default.args,
		label: 'Loading',
		loading: true,
	},
};
