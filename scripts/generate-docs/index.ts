import { DocGenerator } from './doc-generator';
import { IconsCheatSheetDocGenerator } from './icons.doc-generator';
import { TypographyCheatSheetDocGenerator } from './typography.doc-generator';

class Executor {
	private generators: DocGenerator[] = [
		new IconsCheatSheetDocGenerator(),
		new TypographyCheatSheetDocGenerator(),
	];

	public async generateDocs() {
		for (const generator of this.generators) {
			await generator.generate();
		}
	}
}

(async () => {
	const docsGenerator = new Executor();

	await docsGenerator.generateDocs();
})();
