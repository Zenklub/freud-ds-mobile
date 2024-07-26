import { ContainerProps } from '../theme/container-props-style';

interface ExtractContainerDistancePropsReturn<P extends Record<string, any>> {
	style: ContainerProps;
	rest: Exclude<P, keyof ContainerProps>;
}

export function useContainerPropsStyle<P extends Record<string, any>>(
	props: P
): ExtractContainerDistancePropsReturn<P> {
	const {
		margin,
		marginHorizontal,
		marginVertical,
		marginTop,
		marginBottom,
		marginLeft,
		marginRight,
		padding,
		paddingHorizontal,
		paddingVertical,
		paddingTop,
		paddingBottom,
		paddingLeft,
		...rest
	} = props;

	return {
		style: {
			margin,
			marginHorizontal,
			marginVertical,
			marginTop,
			marginBottom,
			marginLeft,
			marginRight,
			padding,
			paddingHorizontal,
			paddingVertical,
			paddingTop,
			paddingBottom,
			paddingLeft,
		},
		rest: rest as Exclude<P, keyof ContainerProps>,
	};
}
