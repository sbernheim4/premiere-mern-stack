const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeExternals = require('webpack-node-externals');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

const env = dotenv.config().parsed;
const envKeys = Object.keys(env).reduce((prev, next) => {
	prev[`process.env.${next}`] = JSON.stringify(env[next]);
	return prev;
}, {});

const port = 8080;

const clientConfig = {
	entry: {
		main: "./src/index.jsx", // Entry point of where webpack should start from
	},
	output: {
        publicPath: '/',
	},
	module: {
		rules: [
			// lint all jsx files and then run babel on them before bundling
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
                use: ['babel-loader', 'ts-loader']
			},

			// use sass-loader, css-loader, and style-loader for all scss files
			// sass-loader - converts scss to css
			// css-loader - allows for using import or require statements in the jsx
			// style-loader - injects the css into the browser in a style tag
			{
				test: /\.scss$/,
				use: ['style-loader', "css-loader", "postcss-loader", "sass-loader"]
			},

			{
				test: /\.css$/,
				use: ["style-loader", "css-loader", "postcss-loader"]
			}
		]
	},

	mode: process.env.NODE_ENV || 'development',

	resolve: {
		extensions: ['.js', '.jsx', '.ts','.tsx','.css', '.scss', '.sass']
    },
	devServer: {
		historyApiFallback: true,
		static: {
			directory: path.join(__dirname, 'dist'),
		},
		compress: true,
		port,
		proxy: {
			"/api": `http://localhost:${port}`
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			base: './dist/',
			template: path.join(__dirname, 'HTMLTemplate.js'),
			dest: 'index.html',
			inject: false,
			title: 'Premiere Mern Stack',
			alwaysWriteToDisk: true
		}),

		new StyleLintPlugin({
			configFile: './.stylelintrc',
			files: './src/**/*.scss'
		}),

		new CssMinimizerPlugin(),

		new webpack.DefinePlugin(envKeys),

		new ESLintPlugin()

	]
}

const serverConfig = {
	devtool: 'source-map',
	entry: {
		server: './server/index.ts'
	},
	output: {
		path: __dirname + '/server-dist',
		filename: '[name].js'
	},
    externals: [ nodeExternals() ],
	mode: process.env.NODE_ENV || 'development',
	target: 'node',
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: ["babel-loader"]
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: ['ts-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.ts']
	},
	plugins: [

		new ESLintPlugin()

	]
}


module.exports = [clientConfig, serverConfig];
