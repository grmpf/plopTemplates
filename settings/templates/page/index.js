const { actions } = require('./actions')
const { inputNotEmpty } = require('../../validators/inputNotEmpty')
const fuzzyPath_ExampleProjectDir = require('../../misc/fuzzyPath_ExampleProjectDir')

module.exports = {
	description: 'New page',

	prompts: [
		fuzzyPath_ExampleProjectDir.prompt,
		fuzzyPath_ExampleProjectDir.whenPrompt,

		{
			name: 'kind',
			type: 'list', //list || rawList
			message: 'What kind of page do you want to create?',
			choices: ['Default', 'Dynamic', 'DynamicCatchAll', 'DynamicOptionalCatchAll'],
			//default: 0,
		},

		{
			type: 'input',
			name: 'name',
			message: 'What is the route (url-slug) of the page?',
			validate: inputNotEmpty,
		},

		{
			type: 'input',
			name: 'desc',
			message: 'What will the page do/show?',
		},

	],

	actions: actions,
}
