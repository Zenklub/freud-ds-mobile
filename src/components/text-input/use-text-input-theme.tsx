import { TextProps } from '@components/typography';
import { deepMerge } from '@helpers/deep-merge';
import { useColorTokenOrHardCoded } from '@hooks';
import {
	useBorder,
	useComponentTheme,
	useRadii,
	useSpacing,
} from '@hooks/use-theme';
import {
	TextInputState,
	TextInputStateTheme,
	TextInputTheme,
} from '@theme/tokens';
import { useMemo } from 'react';

export function useTextInputTheme(inverted: boolean, state: TextInputState) {
	const componentTheme = useComponentTheme('TextInput');

	const theme = useMemo<TextInputStateTheme>(() => {
		let current = inverted
			? deepMerge(
					componentTheme.variants,
					componentTheme.inverted as TextInputTheme['variants']
			  )
			: componentTheme.variants;

		return state === 'default'
			? current.default
			: deepMerge(current.default, current[state] as TextInputStateTheme);
	}, [inverted, state, componentTheme]);

	// Container
	const containerProps = useMemo(() => {
		return {
			opacity: theme.opacity,
		};
	}, [theme]);

	// Input Container
	const borderRadius = useRadii(theme.borderRadius);
	const borderWidth = useBorder(theme.borderWidth);
	const borderColor = useColorTokenOrHardCoded(
		theme.borderColor,
		'neutral.light.300'
	);
	const backgroundColor = useColorTokenOrHardCoded(
		theme.backgroundColor,
		'neutral.white'
	);
	const inputContainerProps = useMemo(() => {
		return {
			style: {
				backgroundColor,
				borderRadius,
				borderColor,
				borderWidth,
			},
			opacity: theme.opacity,
		};
	}, [theme]);

	// Input
	const color = useColorTokenOrHardCoded(theme.color, 'neutral.dark.400');
	const placeholderTextColor = useColorTokenOrHardCoded(
		theme.placeholderColor,
		'neutral.dark.200'
	);
	const padding = useSpacing(theme.padding ?? 0);
	const paddingHorizontal = useSpacing(theme.paddingHorizontal);
	const paddingVertical = useSpacing(theme.paddingVertical);

	const inputProps = useMemo(() => {
		return {
			style: {
				paddingHorizontal,
				paddingVertical,
				padding: theme.padding ? padding : undefined,
				color,
			},
			placeholderTextColor: placeholderTextColor,
		};
	}, [theme]);

	const iconContainerProps = useMemo(() => {
		return {
			p: theme.icon.padding,
			ml: theme.icon.spacing,
			opacity: theme.icon.opacity,
		};
	}, [theme]);

	// Icon
	const iconProps = useMemo(() => {
		return {
			color: theme.icon.color,
			size: theme.icon.size,
		};
	}, [theme]);

	// Label
	const labelProps = useMemo(() => {
		return {
			...theme.label,
			mb: theme.label.spacing,
		} as TextProps;
	}, [theme]);

	// Helper Text
	const helperTextProps = useMemo(() => {
		return {
			...theme.helperText,
			mt: theme.helperText.spacing,
		} as TextProps;
	}, [theme]);

	// Error Text
	const errorTextProps = useMemo(() => {
		return {
			...theme.helperText,
			mt: theme.errorText.spacing,
		} as TextProps;
	}, [theme]);

	return {
		containerProps,
		inputContainerProps,
		iconContainerProps,
		inputProps,
		iconProps,
		labelProps,
		helperTextProps,
		errorTextProps,
		theme,
	};
}
