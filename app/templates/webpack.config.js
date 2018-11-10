const path = require('path');

/* Used to generate html file from template */
const HtmlWebpackPlugin = require('html-webpack-plugin')

/* Used to minify the css after it has been written to its output file */
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

const nano = require("cssnano");

/* Used to inline above the fold CSS */
const HtmlCriticalWebpackPlugin = require("html-critical-webpack-plugin");

/* Used to uglify bundle.js */
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


const WebpackBar = require('webpackbar');

module.exports = {

}
