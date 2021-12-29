/*
* This can plugged into plop.js' prompts[] array.
*
* Used fields:
* - where - either 'Project' or 'Example'
* - exampleProjectDir - an absolute(?) path to an example folder (e.g. ..........)
*/


// selection of where to generate things
const prompt = {
	name: 'where',
	type: 'list', //list || rawList
	message: 'Where to create',
	choices: ['Project', 'Example'],
	//default: 0,
}

// selection of the desired example (only shows if answers.where === 'Example')
const whenPrompt = {
	name: 'exampleProjectDir',
	type: 'fuzzyPath',
	itemType: 'directory',
	rootPath: 'examples',
	depthLimit: 0, // 0 === no sub-dir selection possible
	excludeFilter: nodePath => nodePath === 'examples',
	suggestOnly: false, //???
	//message: 'What is the folder name of the example project?',
	message: 'Select the example directory',
	when(answers) {
		//console.error('when answers', answers)
		return answers.where === 'Example'
	},
	//validate: inputNotEmpty,
	abortOnFail: true,
}

module.exports = {
	prompt,
	whenPrompt,
}
