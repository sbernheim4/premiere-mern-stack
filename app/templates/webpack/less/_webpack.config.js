module.exports = {
	resolve: {
        extensions: ['.less']
    },
	module: {
		rules: [
			// use less-loader, css-loader, and style-loader for all scss files
			// less-loader - converts less to css
			// css-loader - allows for using import or require statements in the jsx
			// style-loader - injects the css into the browser in a style tag
			{
				test: /\.less$/,
				use: ["style-loader", "css-loader", "less-loader"]
			}
		]
	}
};

