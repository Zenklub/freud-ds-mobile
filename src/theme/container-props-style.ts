export interface ContainerProps {
	// Margins
	margin?: number;
	marginHorizontal?: number;
	marginVertical?: number;
	marginTop?: number;
	marginBottom?: number;
	marginLeft?: number;
	marginRight?: number;

	// Paddings
	padding?: number;
	paddingHorizontal?: number;
	paddingVertical?: number;
	paddingTop?: number;
	paddingBottom?: number;
	paddingLeft?: number;
}

export function isContainerProps(props: any): props is ContainerProps {
	return (
		'margin' in props ||
		'marginHorizontal' in props ||
		'marginVertical' in props ||
		'marginTop' in props ||
		'marginBottom' in props ||
		'marginLeft' in props ||
		'marginRight' in props ||
		'padding' in props ||
		'paddingHorizontal' in props ||
		'paddingVertical' in props ||
		'paddingTop' in props ||
		'paddingBottom' in props ||
		'paddingLeft' in props
	);
}
