import { Platform } from 'react-native';

export const shouldUseRipple = () =>
	Platform.OS === 'android' && Platform.Version >= 21;
