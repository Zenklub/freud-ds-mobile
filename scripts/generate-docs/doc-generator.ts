import { GeneratorLogger } from './logger';
import fs from 'fs';
import path from 'path';

export interface DocGeneratorTable {
	header?: string[];
	rows: string[][];
}

export type DocTextLevel = 'title' | 'subtitle' | 'text';

abstract class Generator {
	protected doc = '';
	private docFolderPath = './';

	abstract addTable(data: DocGeneratorTable): Generator;
	abstract addText(text: string, level?: DocTextLevel): Generator;
	abstract generate(name: string): Promise<void>;

	protected async saveFile(fileName: string): Promise<void> {
		return new Promise((resolve, reject) => {
			const filePath = path.join(this.docFolderPath, fileName);
			fs.writeFile(filePath, this.doc, (err) => {
				if (err) {
					reject(err);
				} else {
					resolve();
				}
			});
		});
	}

	setDocFolderPath(docFolderPath: string) {
		this.docFolderPath = docFolderPath;
	}
}

class MarkdownGenerator extends Generator {
	addTable(data: DocGeneratorTable) {
		if (data.header?.length) {
			const header = data.header.join(' | ');
			const separator = data.header.map(() => '---').join(' | ');
			this.doc += `| ${header} |\n`;
			this.doc += `| ${separator} |\n`;
		} else {
			this.doc += '| |\n';
		}

		let rows: string[] = [];

		for (const row of data.rows) {
			rows.push(`| ${row.join(' | ')} |`);
		}

		this.doc += `${rows.join('\n')}\n\n`;

		return this;
	}

	addText(text: string, level?: DocTextLevel) {
		const prefix = {
			title: '# ',
			subtitle: '## ',
			text: '',
		}[level ?? 'text'];

		this.doc += `${prefix}${text}\n\n`;

		return this;
	}

	async generate(name: string) {
		return this.saveFile(`${name}.md`);
	}
}

export abstract class DocGenerator {
	private _generator = new MarkdownGenerator();
	/**
	 * Logger to log messages.
	 */
	protected logger: GeneratorLogger;
	/**
	 * Generates the documentation.
	 */
	abstract generate(): Promise<void>;

	constructor(generatorName: string) {
		this.logger = new GeneratorLogger(generatorName);
		this.generator.setDocFolderPath(path.join(__dirname, '..', '..', 'docs'));
	}

	get generator() {
		return this._generator;
	}
}
