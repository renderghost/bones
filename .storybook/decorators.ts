import { makeDecorator } from '@storybook/addons';

export const withControls = makeDecorator({
	name: 'withControls',
	parameterName: 'controls',
	wrapper: (storyFn, context, { parameters }) => {
		const story = storyFn(context);

		if (parameters?.include === true) {
			// This story should include controls
			return story;
		}

		// For all other stories, disable controls
		context.args = { ...context.initialArgs };
		return story;
	},
});
