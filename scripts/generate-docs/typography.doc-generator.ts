import { DocGenerator, DocGeneratorTable } from './doc-generator';
import { baseThemeTypography } from '../../src/theme/base-theme/typography';
import { calculateLineHeight } from '../../src/helpers/calculate-line-height';
import {
	HeadingFontSizes,
	TextFontSizes,
	FontSizeBaseMap,
} from '../../src/theme/types/typography';

export class TypographyCheatSheetDocGenerator extends DocGenerator {
	constructor() {
		super('Typography Cheat Sheet');
	}

	async generate() {
		this.logger.log('Generating Typography Cheat Sheet documentation...');
		this.generator.addText('Typography Cheat Sheet', 'title');
		this.generator.addText(
			'Here you can find all the available typography components in Freud Design System.'
		);

		this.generateFontWeights();
		this.generateForHeading();
		this.generateForText();

		await this.generator.generate('typography-cheatsheet');
		this.logger.success();
	}

	private generateFontWeights() {
		this.generator.addText('Font Weights', 'subtitle');
		this.generator.addText('Here are the available font weights:', 'text');

		const table: DocGeneratorTable = {
			header: ['Weight', 'Value'],
			rows: [],
		};

		const rows: string[][] = [];

		const weights = Object.keys(baseThemeTypography.fontWeights);

		for (const weight of weights) {
			rows.push([weight, baseThemeTypography.fontWeights[weight]]);
		}

		table.rows = rows;

		this.generator.addTable(table);
	}

	private generateForHeading() {
		this.generator.addText('Heading', 'subtitle');
		this.generator.addText('Here are the available heading styles:', 'text');
		this.generator.addText(
			"```tsx\nimport { Heading } from '@freud-ds/react-native';\n```"
		);

		this.generator.addText('```tsx\n<Heading size="md">Heading</Heading>\n```');
		this.generator.addText('Here is a list of all available heading sizes:');
		this.generateTableHeading();
	}

	private generateTableHeading() {
		const table: DocGeneratorTable = {
			header: ['Size', 'Font Size', 'Line Height', 'Font Weight'],
			rows: [],
		};

		const rows: string[][] = [];

		const sizes = Object.keys(
			baseThemeTypography.heading
		) as HeadingFontSizes[];

		for (const size of sizes) {
			const config: FontSizeBaseMap = baseThemeTypography.heading[size];
			const lineHeight = calculateLineHeight(
				config.fontSize,
				config.lineHeight
			);
			rows.push([
				size,
				config.fontSize.toString(),
				lineHeight.toString(),
				`${config.fontWeight} (${
					baseThemeTypography.fontWeights[config.fontWeight]
				})`,
			]);
		}

		table.rows = rows;

		this.generator.addTable(table);
	}

	private generateForText() {
		this.generator.addText('Text', 'subtitle');
		this.generator.addText('Here are the available text styles:');
		this.generator.addText(
			"```tsx\nimport { Text } from '@freud-ds/react-native';\n```"
		);
		this.generator.addText('```tsx\n<Text size="md">Text</Text>\n```');
		this.generator.addText('Here is a list of all available text sizes:');

		this.generateTableText();

		this.generator.addText('Text.Regular', 'subtitle');
		this.generator.addText(
			'If you want to use the regular font weight, you can use the `Text.Regular` component.'
		);
		this.generator.addText(
			'```tsx\n<Text.Regular size="md">Text</Text.Regular>\n```'
		);

		this.generator.addText('Text.Medium', 'subtitle');
		this.generator.addText(
			'If you want to use the medium font weight, you can use the `Text.Medium` component.'
		);
		this.generator.addText(
			'```tsx\n<Text.Medium size="md">Text</Text.Medium>\n```'
		);
	}

	private generateTableText() {
		const table: DocGeneratorTable = {
			header: ['Size', 'Font Size', 'Line Height', 'Font Weight'],
			rows: [],
		};

		const rows: string[][] = [];

		const sizes = Object.keys(baseThemeTypography.text) as TextFontSizes[];

		for (const size of sizes) {
			const config: FontSizeBaseMap = baseThemeTypography.text[size];
			const lineHeight = calculateLineHeight(
				config.fontSize,
				config.lineHeight
			);
			rows.push([
				size,
				config.fontSize.toString(),
				lineHeight.toString(),
				`${config.fontWeight} (${
					baseThemeTypography.fontWeights[config.fontWeight]
				})`,
			]);
		}

		table.rows = rows;

		this.generator.addTable(table);
	}
}
