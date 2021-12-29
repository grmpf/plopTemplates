function inputNotEmpty(value) {
	const tValue = value.trim()
	if (tValue === '' || tValue === '.') {
		//return 'Please provide a valid string'
		return 'Input is required'
	}
	return true
}

function inputNotEmpty2(value) {
	if ((/.+/).test(value)) {
		return true
	}
	return 'Input is required'
}

module.exports = {
	inputNotEmpty,
	inputNotEmpty2,
}
