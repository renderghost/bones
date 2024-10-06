// main.ts

import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@chromatic-com/storybook',
		'@storybook/addon-designs',
		'@storybook/addon-docs',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-links',
		'@storybook/addon-onboarding',
		'@storybook/addon-storysource',
		'@storybook/addon-themes',
		'@storybook/addon-viewport',
	],
	framework: {
		name: '@storybook/react-vite',
		options: {},
	},
	docs: {
		autodocs: 'tag',
	},
	viteFinal: async config => {
		return mergeConfig(config, {
			css: {
				postcss: {
					plugins: [require('tailwindcss'), require('autoprefixer')],
				},
			},
		});
	},
};
export default config;
