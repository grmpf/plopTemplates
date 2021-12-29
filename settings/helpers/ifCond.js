// Use it in a template like this:
// {{#ifCond var1 '==' var2}}

function ifCond(v1, operator, v2, options) {

	switch (operator) {
		case '==':
			return (v1 == v2) ? options.fn(this) : options.inverse(this)
		case '===':
			return (v1 === v2) ? options.fn(this) : options.inverse(this)
		case '!=':
			return (v1 != v2) ? options.fn(this) : options.inverse(this)
		case '!==':
			return (v1 !== v2) ? options.fn(this) : options.inverse(this)
		case '<':
			return (v1 < v2) ? options.fn(this) : options.inverse(this)
		case '<=':
			return (v1 <= v2) ? options.fn(this) : options.inverse(this)
		case '>':
			return (v1 > v2) ? options.fn(this) : options.inverse(this)
		case '>=':
			return (v1 >= v2) ? options.fn(this) : options.inverse(this)
		case '&&':
			return (v1 && v2) ? options.fn(this) : options.inverse(this)
		case '||':
			return (v1 || v2) ? options.fn(this) : options.inverse(this)
		default:
			return options.inverse(this)
	}

}

module.exports = {
	ifCond,
}
