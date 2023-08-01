import { ISpinnerProps } from 'native-base';
import { SpinnerSize } from '@components/spinner/spinner.types';

export const iconSizesMap: Record<SpinnerSize, ISpinnerProps['size']> = {
	sm: 'small',
	lg: 'large',
	small: 'small',
	large: 'large',
};
