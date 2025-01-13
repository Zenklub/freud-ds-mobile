import { baseTheme, baseTokens } from '../../dist/theme/base-theme';
import { baseThemeTypography } from '../../dist/theme/base-theme/typography';
import { componentsThemeProcessor } from '../../dist/theme/pre-processors/components-theme.processor';
import { tokensProcessor } from '../../dist/theme/pre-processors/tokens.processor';
import {
	HeadingFontSizes,
	TextFontSizes,
} from '../../dist/theme/tokens/components/text-heading';
import { FontWeight, FontWeightValue } from '../../dist/theme/tokens/tokens';
import { ThemeValues } from '../../dist/theme/types';
import { DocGenerator, DocGeneratorTable } from './doc-generator';

export class TypographyCheatSheetDocGenerator extends DocGenerator {
	private theme: ThemeValues;

	constructor() {
		super('Typography Cheat Sheet');
		this.theme = this.processTheme();
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

	private processTheme() {
		const leaves = tokensProcessor(baseTokens);
		const theme = componentsThemeProcessor(leaves, baseTheme);

		return theme;
	}

	private generateFontWeights() {
		this.generator.addText('Font Weights', 'subtitle');
		this.generator.addText('Here are the available font weights:', 'text');

		const table: DocGeneratorTable = {
			header: ['Weight', 'Value'],
			rows: [],
		};

		const rows: string[][] = [];

		const weights = Object.keys(
			baseThemeTypography.fontWeights
		) as FontWeight[];

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

		const sizes: HeadingFontSizes[] = [
			'xs',
			'sm',
			'md',
			'lg',
			'xl',
			'2xl',
			'3xl',
			'4xl',
		];

		for (const size of sizes) {
			const style = this.theme.Heading.sizes[size].style;
			rows.push([
				size,
				`${style.fontSize}`,
				`${style.lineHeight}`,
				`${style.fontWeight} (${this.findFontWeight(style.fontWeight)})`,
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

		const sizes: TextFontSizes[] = [
			'2xs',
			'xs',
			'sm',
			'md',
			'lg',
			'xl',
			'2xl',
			'3xl',
			'4xl',
			'5xl',
			'6xl',
		];

		for (const size of sizes) {
			const style = this.theme.Text.sizes[size].style;
			rows.push([
				size,
				`${style.fontSize}`,
				`${style.lineHeight}`,
				`${style.fontWeight} (${this.findFontWeight(style.fontWeight)})`,
			]);
		}

		table.rows = rows;

		this.generator.addTable(table);
	}

	private findFontWeight(weight?: FontWeightValue) {
		const weights = Object.keys(
			baseThemeTypography.fontWeights
		) as FontWeight[];

		let fontWeights: FontWeight = 'regular';

		for (const w of weights) {
			if (baseThemeTypography.fontWeights[w] === weight) {
				fontWeights = w;
			}
		}

		return fontWeights;
	}
}
