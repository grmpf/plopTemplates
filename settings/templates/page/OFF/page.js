const { inputNotEmpty } = require('../../../validators/inputNotEmpty')

module.exports = {
	description: 'New pageOFF',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'What is the route (url-slug) of the page?',
			validate: inputNotEmpty,
		},
	],
	actions: [
		{
			type: 'add',
			path: '../pages/{{kebabCase name}}.tsx',
			templateFile: 'templates/page/page.tsx.hbs',
		},
		{
			type: 'add',
			path: '../src/styles/pages/{{pascalCase name}}.module.scss',
			templateFile: 'templates/page/pageStyle.ts.hbs',
		},
	],
}
