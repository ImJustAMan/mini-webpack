const {resolve} = require('path')

module.exports = {
	entry: './index.js',
	output: {
		path: resolve(__dirname, './build'),
		filename: "app.js"
	}
}
