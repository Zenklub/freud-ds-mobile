#!/bin/node

const previewProjName = 'preview';

const { spawn, spawnSync } = require('child_process');
const { name } = require('../package.json');
const fs = require('fs');

const SAMPLE_PROJ_PATH = `./${previewProjName}/node_modules/${name}`;

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

function preBuild() {
	notify('· Cleaning previous building...');
	spawnSync('yarn', ['clean']);
	success('  Done');

	notify('· Preparing building...');
	spawnSync('yarn', ['tsc', '-p', 'tsconfig.json']);
	spawnSync('yarn', ['tsc-alias', '-p', 'tsconfig.json']);
	success('  Done');
}

function cloneFiles() {
	notify('· Coping files to Preview App project...');

	spawnSync('rm', ['-rf', SAMPLE_PROJ_PATH]);
	spawnSync('mkdir', ['-p', SAMPLE_PROJ_PATH]);
	function cloneItem(path, isDir) {
		if (isDir) {
			spawnSync('cp', ['-R', `./${path}`, `${SAMPLE_PROJ_PATH}/${path}`]);
		} else {
			spawnSync('cp', [`./${path}`, `${SAMPLE_PROJ_PATH}/${path}`]);
		}
	}

	const cloneAndAdjustPodspec = () => {
		const sourcePath = './react-native-freud-ds.podspec';
		const destPath = `${SAMPLE_PROJ_PATH}/react-native-freud-ds.podspec`;

		try {
			const content = fs.readFileSync(sourcePath, 'utf8');

			const adjustedContent = content.replace(
				/(s\.version\s*=\s*)(package\["version"\]|['"].*?['"])/,
				'$1"1.0.0"'
			);

			fs.writeFileSync(destPath, adjustedContent);
			return true;
		} catch (error) {
			print(`Failed to adjust podspec: ${error.message}`);
			return false;
		}
	};
	cloneItem('android', true);
	cloneItem('ios', true);
	cloneItem('dist', true);
	cloneItem('package.json', false);
	cloneAndAdjustPodspec();
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

let previewRunner;
let builder;

function startSampleProject() {
	notify('· Starting Preview App project');
	previewRunner = spawn('yarn', ['start', '--reset-cache'], {
		cwd: `./${previewProjName}`,
	});

	previewRunner.stdout.on('data', (data) => {
		const str = `${data}`;
		if (str && str.replace(/\s\t\r\n/, '') !== '') {
			console.log(Colors.cyan, '[Preview App]:', Colors.reset, str);
		}
	});

	previewRunner.stderr.on('data', (data) => {
		console.error(
			Colors.cyan,
			'[Preview App]:',
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
function killPreviewAppRunner() {
	if (!previewRunner) return;
	previewRunner.stdin.pause();
	previewRunner.kill();
}

function exitHandler(exitCode) {
	breath();
	console.log(
		'------------------------------------------------------------------\n'
	);
	breath();
	notify('Killing process and removing watchers...');
	killBuilder();
	killPreviewAppRunner();
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

preBuild();
cloneFiles();
startUp();
