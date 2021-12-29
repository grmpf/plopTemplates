function actions(data) {
	const actions = [
		/*
		{
			... defaults ...
		}
		*/
	]

	if (data.name !== '') {

		if (data.where === 'Example' && data.exampleProjectDir !== '') {
			// Example folder (/examples/<FOO>/src/components/<BAR>)
			actions.push({
				type: 'add',
				path: '../{{exampleProjectDir}}/src/components/{{pascalCase name}}/index.tsx',
				templateFile: 'templates/component/component.tsx.hbs',
			})
			actions.push({
				type: 'add',
				path: '../{{exampleProjectDir}}/src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
				templateFile: 'templates/component/componentStyles.module.scss.hbs',
			})
			//actions.push({
			//	type: 'add',
			//	path: '../examples/{{kebabCase exampleProjectName}}/src/components/{{pascalCase name}}/__tests__/index.spec.tsx',
			//	templateFile: 'templates/test/test.tsx.hbs',
			//})
		} else {
			// Project (/src/components/<BAR>)
			actions.push({
				type: 'add',
				path: '../src/components/{{pascalCase name}}/index.tsx',
				templateFile: 'templates/component/component.tsx.hbs',
			})
			actions.push({
				type: 'add',
				path: '../src/components/{{pascalCase name}}/{{pascalCase name}}.module.scss',
				templateFile: 'templates/component/componentStyles.module.scss.hbs',
			})
			//actions.push({
			//	type: 'add',
			//	path: '../src/components/{{pascalCase name}}/__tests__/index.spec.tsx',
			//	templateFile: 'templates/test/test.tsx.hbs',
			//})
		}

	}

	return actions
}

module.exports = {
	actions,
}
