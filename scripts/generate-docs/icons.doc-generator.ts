import { iconMap } from '../../src/components/icon/icon-map';
import { DocGenerator, DocGeneratorTable } from './doc-generator';

export class IconsCheatSheetDocGenerator extends DocGenerator {
	private baseSvgUrl =
		'https://raw.githubusercontent.com/Zenklub/freud-ds/main/packages/icons/src/icon';

	constructor() {
		super('Icons Cheat Sheet');
	}

	async generate() {
		this.logger.log('Generating Icons documentation...');
		this.generator
			.addText('Icons', 'title')
			.addText(
				'Here you can find all the available icons in Freud Design System.'
			)
			.addText(
				'You can use these icons in your projects by importing the `Icon` component.'
			)
			.addText("```tsx\nimport { Icon } from '@freud-ds/react-native';\n```")
			.addText(
				'And then use the `name` prop to specify the icon you want to display.'
			)
			.addText('```tsx\n<Icon name="icon-name" />\n```')
			.addText('Here is a list of all available icons:');

		await this.generateIconsTable();

		await this.generator.generate('icons-cheatsheet');

		this.logger.success();
	}

	private async generateIconsTable() {
		const keys = Object.keys(iconMap);

		const data: DocGeneratorTable = {
			header: ['Icon', 'Preview'],
			rows: [],
		};

		const rows: string[][] = [];

		for (const key of keys) {
			const svgUrl = this.formatSvgUrl(key);

			rows.push([
				key,
				`<img src="${svgUrl}" width="24" height="24" alt="${key}" />`,
			]);
		}

		data.rows = rows;

		this.generator.addText('Icons', 'title');
		this.generator.addTable(data);
	}

	private formatSvgUrl(iconName: string) {
		return `${this.baseSvgUrl}/${iconName}.svg`;
	}
}
