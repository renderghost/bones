import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { Home, ArrowRight } from 'lucide-react';

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	parameters: {
		controls: { hideNoControlsWarning: true },
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Playground: Story = {
	args: {
		label: 'Button',
		variant: 'primary',
		size: 'medium',
		contentType: 'labelOnly',
		fullWidth: false,
		loading: false,
		disabled: false,
	},
};

export const Primary: Story = {
	args: {
		label: 'Primary Button',
		variant: 'primary',
	},
	parameters: { controls: { disable: true } },
};

export const Secondary: Story = {
	args: {
		label: 'Secondary Button',
		variant: 'secondary',
	},
	parameters: { controls: { disable: true } },
};

export const Caution: Story = {
	args: {
		label: 'Caution Button',
		variant: 'caution',
	},
	parameters: { controls: { disable: true } },
};

export const Transparent: Story = {
	args: {
		label: 'Transparent Button',
		variant: 'transparent',
	},
	parameters: { controls: { disable: true } },
};

export const Small: Story = {
	args: {
		label: 'Small Button',
		size: 'small',
	},
	parameters: { controls: { disable: true } },
};

export const Medium: Story = {
	args: {
		label: 'Medium Button',
		size: 'medium',
	},
	parameters: { controls: { disable: true } },
};

export const Large: Story = {
	args: {
		label: 'Large Button',
		size: 'large',
	},
	parameters: { controls: { disable: true } },
};

export const LabelOnly: Story = {
	args: {
		label: 'Label Only',
		contentType: 'labelOnly',
	},
	parameters: { controls: { disable: true } },
};

export const LeftIcon: Story = {
	args: {
		label: 'Left Icon',
		contentType: 'leftIcon',
		leftIcon: Home,
	},
	parameters: { controls: { disable: true } },
};

export const RightIcon: Story = {
	args: {
		label: 'Right Icon',
		contentType: 'rightIcon',
		rightIcon: ArrowRight,
	},
	parameters: { controls: { disable: true } },
};

export const BothIcons: Story = {
	args: {
		label: 'Both Icons',
		contentType: 'bothIcons',
		leftIcon: Home,
		rightIcon: ArrowRight,
	},
	parameters: { controls: { disable: true } },
};

export const IconOnly: Story = {
	args: {
		label: 'Icon Only',
		contentType: 'iconOnly',
		icon: Home,
	},
	parameters: { controls: { disable: true } },
};

export const Disabled: Story = {
	args: {
		label: 'Disabled Button',
		disabled: true,
	},
	parameters: { controls: { disable: true } },
};

export const Loading: Story = {
	args: {
		label: 'Loading Button',
		loading: true,
	},
	parameters: { controls: { disable: true } },
};

export const FullWidth: Story = {
	args: {
		label: 'Full Width Button',
		fullWidth: true,
	},
	parameters: { controls: { disable: true } },
};
