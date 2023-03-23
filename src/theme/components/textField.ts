// TextField
// @ts-ignore
import { mode } from 'native-base/lib/module/theme/tools';

const baseStyle = (props: Record<string, any>) => {
	return {
		_errorMessageProps: {
			mt: 1,
			ml: 3,
			fontSize: 'xs',
			color: 'error.400',
		},
		_helperTextProps: {
			mt: 1,
			ml: 3,
			fontSize: 'xs',
			color: mode('muted.400', 'muted.500')(props),
		},
	};
};

export const TextField = {
	baseStyle,
	defaultProps: {
		component: 'input',
	},
};
