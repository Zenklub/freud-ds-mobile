import { useState, useEffect } from 'react';
import { Platform } from 'react-native';

export const useIsIOS = () => {
	const [isIOS, setIsIOS] = useState(false);
	useEffect(() => {
		setIsIOS(Platform.OS === 'ios');
	}, []);
	return isIOS;
};
