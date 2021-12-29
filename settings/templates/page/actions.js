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
			// Example folder (/examples/<FOO>/pages/<BAR>)

			if (data.kind === 'Default') {
				actions.push({
					type: 'add',
					path: '../{{exampleProjectDir}}/pages/{{kebabCase name}}.tsx',
					templateFile: 'templates/page/page.tsx.hbs',
				})
			} else if (data.kind === 'Dynamic') {
				actions.push({
					type: 'add',
					path: '../{{exampleProjectDir}}/pages/{{kebabCase name}}/[key].tsx',
					templateFile: 'templates/page/pageDynamic.tsx.hbs',
				})
			} else if (data.kind === 'DynamicCatchAll') {
				actions.push({
					type: 'add',
					path: '../{{exampleProjectDir}}/pages/{{kebabCase name}}/[...key].tsx',
					templateFile: 'templates/page/pageDynamicCatchAll.tsx.hbs',
				})
			} else if (data.kind === 'DynamicOptionalCatchAll') {
				actions.push({
					type: 'add',
					path: '../{{exampleProjectDir}}/pages/{{kebabCase name}}/[[...key]].tsx',
					templateFile: 'templates/page/pageDynamicOptionalCatchAll.tsx.hbs',
				})
			}

			actions.push({
				type: 'add',
				path: '../{{exampleProjectDir}}/src/styles/pages/{{kebabCase name}}.module.scss',
				templateFile: 'templates/page/pageStyle.ts.hbs',
			})

		} else {
			// Project (/pages/<BAR>)

			if (data.kind === 'Default') {
				actions.push({
					type: 'add',
					path: '../pages/{{kebabCase name}}.tsx',
					templateFile: 'templates/page/page.tsx.hbs',
				})
			} else if (data.kind === 'Dynamic') {
				actions.push({
					type: 'add',
					path: '../pages/{{kebabCase name}}/[key].tsx',
					templateFile: 'templates/page/pageDynamic.tsx.hbs',
				})
			} else if (data.kind === 'DynamicCatchAll') {
				actions.push({
					type: 'add',
					path: '../pages/{{kebabCase name}}/[...key].tsx',
					templateFile: 'templates/page/pageDynamicCatchAll.tsx.hbs',
				})
			} else if (data.kind === 'DynamicOptionalCatchAll') {
				actions.push({
					type: 'add',
					path: '../pages/{{kebabCase name}}/[[...key]].tsx',
					templateFile: 'templates/page/pageDynamicOptionalCatchAll.tsx.hbs',
				})
			}

			actions.push({
				type: 'add',
				path: '../src/styles/pages/{{kebabCase name}}.module.scss',
				templateFile: 'templates/page/pageStyle.ts.hbs',
			})

		}

	}

	return actions
}

module.exports = {
	actions,
}
