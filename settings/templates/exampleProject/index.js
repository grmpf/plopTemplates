module.exports = {
	description: 'New example project',
	prompts: [
		{
			type: 'input',
			name: 'name',
			message: 'What is the name of the example?',
		},
		{
			type: 'input',
			name: 'desc',
			message: 'What will the example do/show?',
		},
	],
	actions: [
		// files starting with a dot need special handling (addMany ignores some of them)
		{
			type: 'add',
			path: '../examples/{{kebabCase name}}/.babelrc',
			templateFile: 'templates/exampleProject/.babelrc.hbs',
		},
		{
			type: 'add',
			path: '../examples/{{kebabCase name}}/.env.local.example',
			templateFile: 'templates/exampleProject/.env.local.example.hbs',
		},
		{
			type: 'add',
			path: '../examples/{{kebabCase name}}/.gitignore',
			templateFile: 'templates/exampleProject/.gitignore.hbs',
		},
		{
			type: 'addMany',
			destination: '../examples/{{kebabCase name}}',
			base: 'templates/exampleProject/',
			templateFiles: [
				//'templates/exampleProject/.*.hbs',
				//'templates/exampleProject/.*',
				//'templates/exampleProject/.babelrc.hbs',
				//'templates/exampleProject/.env.local.example.hbs',
				//'templates/exampleProject/.gitignore.hbs',
				//'templates/exampleProject/.*',
				//'templates/exampleProject/*.hbs',

				//'templates/exampleProject/*',
				//'templates/exampleProject/pages/*',
				//'templates/exampleProject/pages/*/*',
				//'templates/exampleProject/public/*',
				//'templates/exampleProject/public/*/*',
				//'templates/exampleProject/src/styles/*',
				//'templates/exampleProject/src/styles/*/*',

				'templates/exampleProject/*',
				'templates/exampleProject/*/*',
				'templates/exampleProject/*/*/*',
				'templates/exampleProject/*/*/*/*',
			],
		},
	],
}
