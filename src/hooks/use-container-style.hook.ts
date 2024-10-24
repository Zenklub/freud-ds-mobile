import { ViewStyle } from 'react-native';
import { ContainerProps } from '../theme/container-props-style';
import { useExtractProps } from './use-extract-props';

export function useContainerPropsStyle<P extends Record<string, any>>(
	props: P
): [style: ViewStyle, rest: Exclude<P, keyof ContainerProps>] {
	const [style, rest] = useExtractProps(props, [
		'margin',
		'marginHorizontal',
		'marginVertical',
		'marginTop',
		'marginBottom',
		'marginLeft',
		'marginRight',
		'padding',
		'paddingHorizontal',
		'paddingVertical',
		'paddingTop',
		'paddingBottom',
		'paddingLeft',
	]);

	return [style, rest as Exclude<P, keyof ContainerProps>];
}
