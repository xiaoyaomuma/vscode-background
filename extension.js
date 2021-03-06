// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
var vscode = require('vscode');

var controller = require('./src/controller');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "background" is now active!');


	var disposableReset = vscode.commands.registerCommand('extension.background.reset', function () {

		controller.reset();

	});

	var disposableSetImgs = vscode.commands.registerCommand('extension.background.setImgs', function () {

		controller.setImgs();

	});

	var disposableUninstall = vscode.commands.registerCommand('extension.background.uninstall', function () {

		controller.uninstall();

	});

	context.subscriptions.push(disposableReset);
	context.subscriptions.push(disposableSetImgs);
	context.subscriptions.push(disposableUninstall);
	context.subscriptions.push(controller);
}
exports.activate = activate;