import { getColorScheme, mode } from 'native-base/lib/typescript/theme/tools';
const baseStyle = (props: Record<string, any>) => {
	let colorScheme = getColorScheme(props);
	return {
		bg: mode(`${colorScheme}.500`, `${colorScheme}.300`)(props),
		px: 2,
	};
};
const defaultProps = {
	colorScheme: 'primary',
};

export default {
	baseStyle,
	defaultProps,
};
