import { ContainerProps } from '@components/view';
import { useMemo } from 'react';
import { ViewStyle } from 'react-native';
import { useTokens } from './use-theme.hook';

function getValue<T, K extends keyof T = keyof T, V = T[K]>(
	obj: T,
	keyOrValue?: K | V
): V | undefined {
	if (keyOrValue === undefined) {
		return undefined;
	}

	if (
		obj &&
		typeof obj === 'object' &&
		typeof keyOrValue === 'string' &&
		keyOrValue in obj
	) {
		return obj[keyOrValue as K] as V;
	}

	return keyOrValue as V;
}

export function useContainerPropsStyle<
	P extends ContainerProps,
	S extends ViewStyle
>(props: P): [style: S, rest: Omit<P, keyof ContainerProps>] {
	const {
		bg,
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

	const theme = useTokens();

	const mergedStyle = useMemo(() => {
		return {
			backgroundColor: getValue(theme.color, bg),
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
		} as S;
	}, [bg, m, mx, my, mt, mb, ml, mr, p, px, py, pt, pb, pl, pr, opacity]);

	return [mergedStyle, rest as Omit<P, keyof ContainerProps>];
}
