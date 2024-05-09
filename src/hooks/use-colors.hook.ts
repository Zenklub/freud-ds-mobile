import { IColors } from '@theme/base/colors';
import { useToken } from 'native-base';

export const useColors = <T extends IColors>(...tokens: T[]): string[] => {
	const colors = useToken('colors', tokens);

	return colors;
};
