import { baseTheme, baseTokens } from '../../base-theme';
import { componentsThemeProcessor } from '../components-theme.processor';
import { tokensProcessor } from '../tokens.processor';

describe('Theme > Pre-processors > Universal Processor', () => {
	const leaves = tokensProcessor(baseTokens);
	it('Should process the theme object', () => {
		const result = componentsThemeProcessor(leaves, baseTheme);

		expect(result).toMatchSnapshot();
	});
});
