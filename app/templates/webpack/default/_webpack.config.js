const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const nano = require("cssnano");
const WebpackBar = require('webpackbar');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
	prev[`process.env.${next}`] = JSON.stringify(env[next]);
	return prev;
}, {});

const port = envKeys['process.env.PORT'];

const serverConfig = {
	devtool: 'source-map',
	target: 'node',
	entry: {
		server: './server/index.ts'
	},
	output: {
		path: __dirname + '/public',
		filename: '[name].js',
		publicPath: '/'
	},
	module: {

		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: ['awesome-typescript-loader']
			}
		]
	},

	mode: process.env.NODE_ENV || 'development',

	resolve: {
		extensions: ['.ts', '.js', '.json']
	},

	plugins: [

		new webpack.DefinePlugin(envKeys)

	]
}

const clientConfig = {
	devtool: 'source-map',
	entry: {
		main: "./src/index.jsx", // Entry point of where webpack should start from
	},
	output: {
		// output build file to /public folder and call the file bundle.js
		path: __dirname + "/public",
		filename: "[name].js"
	},
	module: {
		rules: [
			// lint all jsx files and then run babel on them before bundling
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: ["babel-loader", "eslint-loader"],
			},

			// use css-loader, and style-loader for all scss files
			// css-loader - allows for using import or require statements in the jsx
			// style-loader - injects the css into the browser in a style tag
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"]
			}
		]
	},

	mode: process.env.NODE_ENV || 'development',

	resolve: {
		extensions: ['*', '.js', 'jsx', '.css', '.scss', '.sass']
	},

	devServer: {
		historyApiFallback: true,
		contentBase: path.join(__dirname, './public'),
		proxy: {
			"/api": `http://localhost:${port}`
		}
	},

	plugins: [
		new HtmlWebpackPlugin({
			base: './public/',
			template: 'HTMLTemplate.js',
			dest: 'index.html',
			inject: false,
			title: 'Premiere Mern Stack'
		}),

		// Optimizes css by minifying it and removing comments
		new OptimizeCssAssetsPlugin({
			cssProcessor: nano,
			cssProcessorOptions: {discardComments: {removeAll: true} },
			canPrint: true
		}),

		// CSS Linter based on rules set in the .stylelintrc file
		new StyleLintPlugin({
			configFile: "./.stylelintrc",
			files: "./src/scss/*.scss"
		}),

		new WebpackBar(),

		new webpack.DefinePlugin(envKeys)
	]
}

module.exports = [clientConfig, serverConfig];
