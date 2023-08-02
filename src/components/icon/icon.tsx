import React from 'react';
import { iconCharMap, iconSizeMap } from '@components/icon/constants';
import { Text } from 'react-native';
import { IconProps } from '@components/icon/icon.types';

export const Icon: React.FC<IconProps> = ({
	testID,
	color,
	name,
	size = 'md',
}) => {
	const char = iconCharMap[name];
	const iconsSize = iconSizeMap[size];

	if (char) {
		return (
			<Text
				testID={testID}
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
