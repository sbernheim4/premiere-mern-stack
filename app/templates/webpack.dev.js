const path = require('path');
/* Used to generate html file from template */
const HtmlWebpackPlugin = require('html-webpack-plugin')

/* Used to ensure proper order of SCSS/CSS */
const StyleLintPlugin = require("stylelint-webpack-plugin");

const WebpackBar = require('webpackbar');

module.exports = {
	devtool: "source-map", // Enables source maps for both JS(X) and (S)CSS
	entry: {
		main: "./src/main/index.jsx", // Entry point of where webpack should start from
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
				use: ["style-loader", "css-loader", "sass-loader"]
			}
		]
	},

	mode: process.env.NODE_ENV || 'development',

	resolve: {
		extensions: ["*", ".js", "jsx", ".scss"] // allows me to leave off the extension when importing - import File from '../path/to/file'
	},

	devServer: {
		contentBase: path.join(__dirname, './public'),
		proxy: {
			"/api": "http://localhost:3000"
		}
		// hot: true // Only reloads the component that changed. When set to false all components are reloaded (but page is not refreshed)
	},

	plugins: [
		new HtmlWebpackPlugin({
			base: './public/',
			template: 'HTMLTemplate.js',
			dest: 'index.html',
			inject: false,
			title: 'React Stack V2'
		}),

		// CSS Linter based on rules set in the .stylelintrc file
		new StyleLintPlugin({
			configFile: "./.stylelintrc",
			files: "./src/scss/*.scss"
		}),

		new WebpackBar()
	]
};

