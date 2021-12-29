const { actions } = require('./actions')
const { inputNotEmpty } = require('../../validators/inputNotEmpty')
const { fuzzyPath_ExampleProjectDir } = require('../../misc')

module.exports = {
	description: 'New component',

	prompts: [
		/*
		{
			name: 'where',
			type: 'list', //list || rawList
			message: 'Where to create the component',
			choices: ['Project', 'Example'],
			//default: 0,
		},

		// TODO: This throws when no path is selected (e.g. when there is none to select or when filtered with no result)
		// Needs some promise handling or try/catch
		{
			name: 'exampleProjectDir',
			type: 'fuzzyPath',
			itemType: 'directory',
			rootPath: 'examples',
			depthLimit: 0,
			excludeFilter: nodePath => nodePath == 'examples',
			suggestOnly: false, //???
			//message: 'What is the folder name of the example project?',
			message: 'Select a target directory for your component',
			when(answers) {
				//console.error('when answers', answers)
				return answers.where === 'Example'
			},
			//validate: inputNotEmpty,
			abortOnFail: true,

		},*/

		fuzzyPath_ExampleProjectDir.prompt,
		fuzzyPath_ExampleProjectDir.whenPrompt,


		{
			name: 'name',
			type: 'input',
			message: 'What is the name of the component?',
			validate: inputNotEmpty,
		},
	],

	actions: actions,
}
