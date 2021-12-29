const fuzzyPathPrompt = require('inquirer-fuzzy-path')
//const ifCondHelper = require('./settings/helpers/ifCond') // not required yet - and there are probably better ways/scripts

const {
	component,
	page,
	exampleProject,
} = require('./settings')


module.exports = function(plop) {
	//plop.setHelper('ifCond', ifCond)

	// setPrompt prompt type (e.g. 'fuzzyPath') which can then be used in generators
	plop.setPrompt('fuzzyPath', fuzzyPathPrompt)

	plop.setGenerator('Component', component)
	plop.setGenerator('Page', page)
	plop.setGenerator('ExampleProject', exampleProject)
}
