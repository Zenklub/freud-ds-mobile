#!/bin/node

const { spawn, spawnSync } = require('child_process');
const { name } = require('../package.json');

const SAMPLE_PROJ_PATH = `./playground/node_modules/${name}`;

const Colors = {
	reset: '\x1b[0m',
	black: '\x1b[30m',
	red: '\x1b[31m',
	green: '\x1b[32m',
	yellow: '\x1b[33m',
	blue: '\x1b[34m',
	magenta: '\x1b[35m',
	cyan: '\x1b[36m',
	white: '\x1b[37m',
	crimson: '\x1b[38m',
};

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

function print(text, color) {
	if (color) {
		console.log(color, text, Colors.reset);
	} else {
		console.log(text);
	}
}

function breath() {
	console.log('');
}

function notify(text) {
	print(text, Colors.yellow);
}
function warning(text) {
	print(text, Colors.yellow);
}
function success(text) {
	print(text, Colors.green);
}
function error(text) {
	print(text, Colors.red);
}

function cloneFiles() {
	notify('· Coping files to Playground project...');

	spawnSync('rm', ['-rf', SAMPLE_PROJ_PATH]);
	spawnSync('mkdir', ['-p', SAMPLE_PROJ_PATH]);
	function cloneItem(path, isDir) {
		if (isDir) {
			spawnSync('cp', ['-R', `./${path}`, `${SAMPLE_PROJ_PATH}/${path}`]);
		} else {
			spawnSync('cp', [`./${path}`, `${SAMPLE_PROJ_PATH}/${path}`]);
		}
	}
	cloneItem('android', true);
	cloneItem('ios', true);
	cloneItem('lib', true);
	cloneItem('package.json', false);
	cloneItem('react-native-freud-ds.podspec', false);
	success('  Done');
}

function removeWatches() {
	spawnSync('./scripts/watchers.sh', ['clean_up_watchers']);
}

function cleanUp() {
	notify('· Clean up watchers...');
	removeWatches();
	console.log('  Done');
}

let playgroundRunner;
let builder;

function startSampleProject() {
	notify('· Starting Playground project');
	playgroundRunner = spawn('yarn', ['start', '--reset-cache'], {
		cwd: './playground',
	});

	playgroundRunner.stdout.on('data', (data) => {
		const str = `${data}`;
		if (str && str.replace(/\s\t\r\n/, '') !== '') {
			console.log(Colors.cyan, '[Playground]:', Colors.reset, str);
		}
	});

	playgroundRunner.stderr.on('data', (data) => {
		console.error(
			Colors.cyan,
			'[Playground]:',
			Colors.red,
			`${data}`,
			Colors.reset
		);
	});
	success('  Done');
}

function startBuilder() {
	spawnSync('./scripts/watchers.sh', ['add_watchers']);

	builder = spawn('yarn', ['start']);

	builder.stdout.on('data', (data) => {
		const str = `${data}`;
		if (str && str.replace(/\s\t\r\n/, '') !== '') {
			console.log(Colors.magenta, '[Builder]:', Colors.reset, str.trim());
		}
	});

	builder.stderr.on('data', (data) => {
		console.error(
			Colors.magenta,
			'[Builder]:',
			Colors.red,
			`${data}`,
			Colors.reset
		);
	});

	success('  Done');
}

async function startUp() {
	notify('· Clean up old watcher and creating fresh one...');
	removeWatches();
	startBuilder();
	startSampleProject();
}

function killBuilder() {
	if (!builder) return;
	builder.stdin.pause();
	builder.kill();
}
function killPlaygroundRunner() {
	if (!playgroundRunner) return;
	playgroundRunner.stdin.pause();
	playgroundRunner.kill();
}

function exitHandler(exitCode) {
	breath();
	console.log(
		'------------------------------------------------------------------\n'
	);
	breath();
	notify('Killing process and removing watchers...');
	killBuilder();
	killPlaygroundRunner();
	removeWatches();
	success('Done');
	process.exit();
}

// process.on('exit', function(exitCode) { exitHandler(exitCode) });
process.on('SIGTERM', function (exitCode) {
	exitHandler(exitCode);
});
process.on('SIGINT', function (exitCode) {
	exitHandler(exitCode);
});

cloneFiles();
startUp();
