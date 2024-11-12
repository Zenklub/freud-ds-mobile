import { IconProps } from '@components/icon/icon.types';
import { calculateLineHeight } from '@helpers/calculate-line-height';
import { useColorMode, useComponentTheme } from '@hooks/use-theme';
import React, { useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';
import { iconMap } from './icon-map';

export const Icon: React.FC<IconProps> = (props) => {
	const char = iconMap[props.name];

	const theme = useIconTheme(props);

	if (char) {
		return (
			<Text testID={props.testID} style={[theme.style, props.style]}>
				{char}
			</Text>
		);
	}

	return null;
};

function useIconTheme(props: IconProps) {
	const {
		inverted,
		size: customSize,
		color: customColor,
		style: customStyle,
	} = props;
	const colorMode = useColorMode(inverted);
	const theme = useComponentTheme('Icon', colorMode);

	const { style: baseStyle, sizes } = theme;
	const size = typeof customSize === 'string' ? sizes[customSize] : sizes.md;

	const customStyleLineHeight = StyleSheet.flatten(customStyle)?.lineHeight;

	const [fontSize, lineHeight] = useMemo(() => {
		if (typeof customSize === 'number') {
			return [
				customSize,
				calculateLineHeight(customSize, customStyleLineHeight ?? 1),
			];
		}

		return [size.style.fontSize, size.style.lineHeight];
	}, [
		customSize,
		size.style.fontSize,
		size.style.lineHeight,
		customStyleLineHeight,
	]);

	const style = useMemo(() => {
		return StyleSheet.flatten([
			baseStyle,
			size.style,
			{
				fontSize,
				lineHeight,
				color: customColor || size.style?.color,
			},
			customStyle,
		]);
	}, [baseStyle, size.style, fontSize, lineHeight, customColor, customStyle]);

	return { ...size.props, style };
}
