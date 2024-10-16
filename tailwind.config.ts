import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config: Config = {
	content: [
		'./.storybook/**/*.{js,jsx,ts,tsx}', // scans Storybook config files
		'./src/**/*.{js,jsx,ts,tsx}', // scans all JS/TS files in src
		'./src/**/*.css', // scans all CSS files in src
		'./src/components/**/*.{js,jsx,ts,tsx}', // scans all JS/TS components
	],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				attention: {
					500: '#facc15',
				},
				brand: {
					white: '#FFFFFF',
					50: '#E5E8FF',
					100: '#CCCFFF',
					200: '#999EFF',
					300: '#666BFF',
					400: '#3336FF',
					500: '#0000FF',
					600: '#0004D6',
					700: '#0006AD',
					800: '#000785',
					900: '#00024b',
					950: '#000022',
					black: '#000000',
				},
			},
			fontFamily: {
				sans: ['DM Sans', 'sans-serif'],
				serif: ['DM Serif Display', 'serif'],
				mono: ['DM Mono', 'monospace'],
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
	darkMode: ['class', '[data-mode="dark"]'],
};

export default config;
