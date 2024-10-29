import { useMemo } from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { ContainerProps } from '../theme/container-props-style';
import { useTheme } from './use-theme';

function getValue<T, K extends keyof T = keyof T, V = T[K]>(
	obj: T,
	keyOrValue?: K | V
): V | undefined {
	if (keyOrValue === undefined) {
		return undefined;
	}

	return (
		obj &&
		typeof obj === 'object' &&
		typeof keyOrValue === 'string' &&
		keyOrValue in obj
			? obj[keyOrValue as K]
			: keyOrValue
	) as V;
}

export function useContainerPropsStyle<
	P extends ContainerProps,
	S extends ViewStyle
>(
	props: P,
	style?: StyleProp<S>
): [style: S, rest: Exclude<P, keyof ContainerProps>] {
	const {
		opacity,
		m,
		mx,
		my,
		mt,
		mb,
		ml,
		mr,
		p,
		px,
		py,
		pt,
		pb,
		pl,
		pr,
		...rest
	} = props;

	const theme = useTheme();

	const mergedStyle = useMemo(() => {
		return StyleSheet.flatten([
			style,
			{
				margin: getValue(theme.spacing, m),
				marginHorizontal: getValue(theme.spacing, mx),
				marginVertical: getValue(theme.spacing, my),
				marginTop: getValue(theme.spacing, mt),
				marginBottom: getValue(theme.spacing, mb),
				marginLeft: getValue(theme.spacing, ml),
				marginRight: getValue(theme.spacing, mr),
				padding: getValue(theme.spacing, p),
				paddingHorizontal: getValue(theme.spacing, px),
				paddingVertical: getValue(theme.spacing, py),
				paddingTop: getValue(theme.spacing, pt),
				paddingBottom: getValue(theme.spacing, pb),
				paddingLeft: getValue(theme.spacing, pl),
				paddingRight: getValue(theme.spacing, pr),
				opacity: getValue(theme.opacity, opacity),
			},
		]) as S;
	}, [m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr, opacity, style]);

	return [mergedStyle, rest as Exclude<P, keyof ContainerProps>];
}
