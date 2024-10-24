export class GeneratorLogger {
	constructor(private generatorName: string) {}

	private getTimestamp() {
		return new Date().toLocaleTimeString();
	}

	public log(...args: any[]) {
		const prefix = this.getPrefix('log');
		console.log(prefix, ...args);
	}

	public error(...args: any[]) {
		const prefix = this.getPrefix('error');
		console.log(prefix, `${Colors.red}`, ...args, `${Colors.reset}`);
	}

	public success() {
		const prefix = this.getPrefix('success');
		console.log(prefix, 'Generated successfully!', '\n');
	}

	private getPrefix(level: 'error' | 'log' | 'success') {
		return `${this.getName()} ${this.getLevelLabel(level)}`;
	}

	private getName() {
		return `${Colors.magenta}[${this.generatorName}]${
			Colors.reset
		} ${this.getTimestamp()}`;
	}

	private getLevelLabel(level: 'error' | 'log' | 'success') {
		const levelName = {
			error: ' ERROR ',
			log: ' LOG ',
			success: ' SUCCESS ',
		}[level];

		switch (level) {
			case 'error':
				return Colors.bgRed + levelName + Colors.reset;
			case 'log':
				return Colors.bgBlack + levelName + Colors.reset;
			case 'success':
				return Colors.bgGreen + levelName + Colors.reset;
		}
	}
}

const Colors = {
	reset: '\x1b[0m',
	yellow: '\x1b[33m',
	green: '\x1b[32m',
	red: '\x1b[31m',
	black: '\x1b[30m',
	magenta: '\x1b[35m',

	bgYellow: '\x1b[43m',
	bgGreen: '\x1b[42m',
	bgRed: '\x1b[41m',
	bgBlack: '\x1b[40m',

	bold: '\x1b[1m',
	underline: '\x1b[4m',
};
