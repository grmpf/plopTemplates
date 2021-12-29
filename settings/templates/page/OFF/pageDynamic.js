const { inputNotEmpty } = require('../../../validators/inputNotEmpty')

module.exports = {
	description: 'New pageOFF - Dynamic Routes',
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
			path: '../pages/{{kebabCase name}}/[key].tsx',
			templateFile: 'templates/page/pageDynamic.tsx.hbs',
		},
		{
			type: 'add',
			path: '../src/styles/pages/{{kebabCase name}}.module.scss',
			templateFile: 'templates/page/pageStyle.ts.hbs',
		},
	],
}
