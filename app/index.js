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
			}
		]);

        const { repoName, description, email, name } = this.answers;
		this.tpl = { repoName, description, email, name, };
		this.spawnCommand('git', ['init', '--quiet']);
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

		const webpackFilePath = path.join(__dirname, './templates/_webpack.config.js');
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
		this.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉');
		logCyan("Congrats! You're ready to go!");
		logCyan("Run `npm start` to begin your premiere developer experience");
		this.log('🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉🎉');
	}
}
