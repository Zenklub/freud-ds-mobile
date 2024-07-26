import { iconCharMap, iconSizeMap } from '@components/icon/constants';
import { IconProps, IconSize } from '@components/icon/icon.types';
import { useColorTokenOrHardCoded } from '@hooks';
import { ColorTokensPath } from '@theme/tokens/colors';
import React from 'react';
import { Text } from 'react-native';

const isIconSize = (size: unknown): size is IconSize => {
	return typeof size === 'string' && size in iconSizeMap;
};

const ICONS_DEFAULT_COLOR: ColorTokensPath = 'neutral.dark.400';

export const Icon: React.FC<IconProps> = ({
	testID,
	color,
	name,
	size = 'md',
	style,
}) => {
	const char = iconCharMap[name];
	const iconsSize = isIconSize(size) ? iconSizeMap[size] : size;

	const iconColor = useColorTokenOrHardCoded(
		color ?? ICONS_DEFAULT_COLOR,
		ICONS_DEFAULT_COLOR
	);

	if (char) {
		return (
			<Text
				testID={testID}
				style={[
					{
						fontFamily: 'freud-icon',
						fontSize: iconsSize,
						color: iconColor,
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
