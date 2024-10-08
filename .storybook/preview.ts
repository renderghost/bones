import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

const preview: Preview = {
	parameters: {
		// actions: { argTypesRegex: '^on[A-Z].*' },
		options: {
			storySort: {
				order: ['Start Here', '*'],
			},
		},
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		docs: {
			// You can add custom options here if needed
		},
	},
	decorators: [
		withThemeByDataAttribute({
			themes: {
				light: 'light',
				dark: 'dark',
			},
			defaultTheme: 'light',
			attributeName: 'data-mode',
		}),
	],
};

export default preview;
