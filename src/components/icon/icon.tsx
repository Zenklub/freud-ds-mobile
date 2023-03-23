import React from 'react';
import { iconCodeMap, IconName } from '@components/icon/icon-code-map';
import { Text } from 'react-native';

export interface IconProps {
	name: IconName;
	size?: 'sm' | 'md' | 'lg';
	color?: string;
}

const iconSizeMap = {
	sm: 16,
	md: 24,
	lg: 32,
};

export const Icon: React.FC<IconProps> = ({ color, name, size = 'md' }) => {
	const char = iconCodeMap[name];
	const iconsSize = iconSizeMap[size];
	if (char) {
		return (
			<Text
				style={{
					fontFamily: 'freud-icon',
					fontSize: iconsSize,
					color,
				}}
			>
				{char}
			</Text>
		);
	}

	return null;
};
