import { SpinnerProps } from '@components/spinner/spinner.types';
import { useCustomColorExtractor } from '@hooks';
import { useColorMode, useComponentTheme } from '@hooks/use-theme.hook';
import React, { useMemo } from 'react';
import { ActivityIndicator, ColorValue, StyleSheet } from 'react-native';

type RNSpinnerProps = React.ComponentProps<typeof ActivityIndicator>;

export const Spinner: React.FC<SpinnerProps> = (props) => {
	const { testID } = props;
	const theme = useSpinnerTheme(props);

	return <ActivityIndicator testID={testID} {...theme} />;
};

function useSpinnerTheme(props: SpinnerProps): RNSpinnerProps {
	const {
		color: customColor,
		size: customSize,
		style: customStyle,
		...rest
	} = props;

	const colorMode = useColorMode(props.inverted);
	const theme = useComponentTheme('Spinner', colorMode);
	const customColorExtractor = useCustomColorExtractor();

	const style = useMemo(() => {
		return StyleSheet.flatten([theme.style, customStyle]);
	}, [theme.style, customStyle]);

	const spinnerColor = useMemo<ColorValue>(() => {
		if (customColor) {
			return customColorExtractor(customColor);
		}

		return theme.props?.color ?? theme.style?.color;
	}, [
		customColor,
		customColorExtractor,
		theme.props?.color,
		theme.style?.color,
	]);

	return {
		...(theme.props ?? {}),
		...rest,
		style: style,
		color: spinnerColor,
		size: customSize ?? theme.props?.size,
	};
}
