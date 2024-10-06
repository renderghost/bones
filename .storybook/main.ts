// main.ts

import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
	addons: [
		'@chromatic-com/storybook',
		'@storybook/addon-designs',
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
