const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var mode = process.env.NODE_ENV || 'development';

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
			resolve: { extensions: ['.js', '.jsx'] },
			include: path.resolve(__dirname, 'src'),
			use: ['babel-loader'],
		},
		{
			test: /\.css$/,
			use: ['style-loader', 'css-loader'],
		},
		],

	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		port: 5000,
		historyApiFallback: true,
		compress: true,
		hot: true,
	},
	mode: mode,
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html', // source html
		}),
	],
	devtool: (mode === 'development') ? 'eval-cheap-module-source-map' : 'source-map',
}
