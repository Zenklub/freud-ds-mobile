import React from 'react';
import { iconCharMap, iconSizeMap } from '@components/icon/constants';
import { Text } from 'react-native';
import { IconProps, IconSize } from '@components/icon/icon.types';

const isIconSize = (size: unknown): size is IconSize => {
	return typeof size === 'string' && iconSizeMap[size] !== undefined;
};

export const Icon: React.FC<IconProps> = ({
	testID,
	color,
	name,
	size = 'md',
	style,
}) => {
	const char = iconCharMap[name];
	const iconsSize = isIconSize(size) ? iconSizeMap[size] : size;

	if (char) {
		return (
			<Text
				testID={testID}
				style={[
					{
						fontFamily: 'freud-icon',
						fontSize: iconsSize,
						color,
					},
					style,
				]}
			>
				{char}
			</Text>
		);
	}

	return null;
};
