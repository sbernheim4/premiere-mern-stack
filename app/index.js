const path = require('path');
const fs = require('fs');
const Generator = require('yeoman-generator');
const chalk = require('chalk');

module.exports = class extends Generator {
	// The name `constructor` is important here
	constructor(args, opts) {
		// Calling the super constructor is important so our generator is correctly set up
		super(args, opts);

		// Next, add your custom code
		//this.option('babel'); // This method adds support for a `--babel` flag
	}

	async prompting() {
		const gitName = this.user.git.name();

		this.answers = await this.prompt([
			{
				name: 'repoName',
				message: 'Git repo name:'
			},
			{
				name    : 'description',
				message : 'Description:',
			},
			{
				name: 'name',
				message: "Author's name:",
				default: gitName
			},
			{
				name: 'email',
				message: "Author's email:",
				default: this.user.git.email()
			},
			{
				name: 'githubUsername',
				message: 'GitHub username:',
				default: gitName
			},
			{
				name: 'cssPreprocessor',
				type: 'list',
				message: 'Select a CSS preprocessor',
				choices: [
					{
						name: 'Regular \'ol CSS',
						value: 'css'
					},
					{
						name: 'SCSS/SASS',
						value: 'scss'
					},
					{
						name: 'LESS',
						value: 'less'
					}
				]
			}
		]);

		this.tpl = {};
		this.tpl.repoName = this.answers.repoName;
		this.tpl.description = this.answers.description
		this.tpl.email = this.answers.email;
		this.tpl.name = this.answers.name;

		this.spawnCommand('git', ['init', '--quiet']); // Initialize Git repo
	}

	writing() {

		this.fs.copyTpl(
			this.templatePath('**/*'),
			this.destinationRoot(),
			this.tpl,
			undefined,
			{ globOptions: {
				dot: true,
			}}
		);

		let webpackFilePath = path.join(__dirname, './templates/webpack/default/_webpack.config.js');

		// Check CSS Preprocessor
		if (this.answers.cssPreprocessor === 'scss') {
			this.fs.extendJSON(this.destinationPath('package.json'), {
				devDependencies: {
					"sass-loader": "^7.1.0",
				}
			});
			webpackFilePath = path.join(__dirname, './templates/webpack/scss/_webpack.config.js');
		} else if(this.answers.cssPreprocessor === 'less') {
			this.fs.extendJSON(this.destinationPath('package.json'), {
				devDependencies: {
					"less-loader": "^4.1.0",
				}
			});
			webpackFilePath = path.join(__dirname, './templates/webpack/less/_webpack.config.js');
		}

		const webpackDest = path.resolve(this.destinationRoot(), 'webpack.config.js');
		fs.copyFileSync(webpackFilePath, webpackDest);
	}

	install() {
		const logGreen = text => this.log(chalk.cyan(text));

		logGreen("Installing dependencies... this might take some time");
		this.npmInstall();
	}

	end() {
		const logCyan = text => this.log(chalk.cyan(text));
		const deleteFolderRecursive = (path) => {
			if (fs.existsSync(webpackPath)) {
				fs.readdirSync(path).forEach((file) => {
					const curPath = path + "/" + file;

					if(fs.statSync(curPath).isDirectory()) { // recurse
						deleteFolderRecursive(curPath);
					} else { // delete file
						fs.unlinkSync(curPath);
					}
				});

				fs.rmdirSync(path);
			}
		}

		const webpackPath = this.destinationRoot() + "/webpack";
		deleteFolderRecursive(webpackPath)

		this.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉');
		logCyan("Congrats! You're ready to go!");
		logCyan("Run `npm start` to begin your premiere developer experience");
		this.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉');
	}
}
