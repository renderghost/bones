import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
	stories: [
		'../stories/**/*.mdx',
		'../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
	],
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
};
export default config;
