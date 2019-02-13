const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const nano = require("cssnano");
const WebpackBar = require('webpackbar');

/* Used to generate html file from template */
const HtmlWebpackPlugin = require('html-webpack-plugin')

/* Used to minify the css after it has been written to its output file */
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

/* Used to ensure proper order of SCSS/CSS */
const StyleLintPlugin = require("stylelint-webpack-plugin");

module.exports = () => {

	const env = dotenv.config().parsed;
	const envKeys = Object.keys(env).reduce((prev, next) => {
		prev[`process.env.${next}`] = JSON.stringify(env[next]);
		return prev;
	}, {});

	return {
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

				// use sass-loader, css-loader, and style-loader for all scss files
				// sass-loader - converts scss to css
				// css-loader - allows for using import or require statements in the jsx
				// style-loader - injects the css into the browser in a style tag
				{
					test: /\.scss$/,
					use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"]
				},

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
				"/api": "http://localhost:3000"
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
}
