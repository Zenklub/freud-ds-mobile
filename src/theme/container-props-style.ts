import { OpacityLevel, SpacingSizes } from './tokens';

export const containerPropsKeys = [
	'm',
	'mx',
	'my',
	'mt',
	'mb',
	'ml',
	'mr',
	'p',
	'px',
	'py',
	'pt',
	'pb',
	'pl',
	'pr',
	'borderRadius',
	'borderColor',
	'borderWidth',
	'backgroundColor',
	'opacity',
] as const;

export interface ContainerProps {
	/**
	 * Margin on all sides. It overrides all other margin props
	 */
	m?: SpacingSizes | number;
	/**
	 * Margin Horizontal. It overrides marginLeft and marginRight
	 */
	mx?: SpacingSizes | number;
	/**
	 * Margin Vertical. It overrides marginTop and marginBottom
	 */
	my?: SpacingSizes | number;
	/**
	 * Margin Top
	 */
	mt?: SpacingSizes | number;
	/**
	 * Margin Bottom
	 */
	mb?: SpacingSizes | number;
	/**
	 * Margin Left
	 */
	ml?: SpacingSizes | number;
	/**
	 * Margin Right
	 */
	mr?: SpacingSizes | number;

	/**
	 * Padding on all sides. It overrides all other padding props
	 */
	p?: SpacingSizes | number;
	/**
	 * Padding Horizontal. It overrides paddingLeft and paddingRight
	 */
	px?: SpacingSizes | number;
	/**
	 * Padding Vertical. It overrides paddingTop and paddingBottom
	 */
	py?: SpacingSizes | number;
	/**
	 * Padding Top
	 */
	pt?: SpacingSizes | number;
	/**
	 * Padding Bottom
	 */
	pb?: SpacingSizes | number;
	/**
	 * Padding Left
	 */
	pl?: SpacingSizes | number;
	/**
	 * Padding Right
	 */
	pr?: SpacingSizes | number;
	/**
	 * Opacity
	 */
	opacity?: OpacityLevel | number;
}

export function hasContainerProps(props: any): props is ContainerProps {
	return containerPropsKeys.some((key) => key in props);
}
