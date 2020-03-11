const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname, 'src/index'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			resolve: { extensions: [".js", ".jsx"] },
			include: path.resolve(__dirname, 'src'),
			use: ['babel-loader'],
		}],
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 9000,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html', // source html
		}),
	],
	devtool: 'cheap-module-eval-source-map'
};
