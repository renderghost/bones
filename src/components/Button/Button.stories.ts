import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { Home, ArrowRight, LucideIcon } from 'lucide-react';

type IconOption = LucideIcon | undefined;

const iconOptions: Record<string, IconOption> = {
	Home: Home,
	ArrowRight: ArrowRight,
};

const meta: Meta<typeof Button> = {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		label: { control: 'text' },
		variant: {
			control: 'select',
			options: ['primary', 'secondary', 'caution', 'transparent'],
			defaultValue: 'primary',
		},
		size: {
			control: 'select',
			options: ['small', 'medium', 'large'],
			defaultValue: 'medium',
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
			defaultValue: 'leftIcon',
		},
		icon: {
			control: 'select',
			options: Object.keys(iconOptions),
			mapping: iconOptions,
			defaultValue: 'Home',
		},
		leftIcon: {
			control: 'select',
			options: Object.keys(iconOptions),
			mapping: iconOptions,
			defaultValue: 'Home',
		},
		rightIcon: {
			control: 'select',
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
        contentType: "rightIcon",
        fullWidth: false,
        loading: false,
        disabled: false,
        leftIcon: "Home",
        rightIcon: "ArrowRight",
        icon: "ArrowRight",
        tooltip: ""
    },
};
