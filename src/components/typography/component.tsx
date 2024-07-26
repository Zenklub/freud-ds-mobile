import { useTypographyStyle } from '@hooks';
import React from 'react';
import { TextProps as RNTextProps, Text } from 'react-native';
import { HeadingProps, TextProps } from './typography.types';

type TypographyComponentProps =
	| ({ type: 'text' } & TextProps)
	| ({ type: 'heading' } & HeadingProps);

export const TypographyComponent: React.FC<TypographyComponentProps> = ({
	testID,
	children,
	...props
}) => {
	const typographyProps = useTypographyProps(props);
	return (
		<Text {...typographyProps} testID={testID}>
			{children}
		</Text>
	);
};

function useTypographyProps(props: TypographyComponentProps): RNTextProps {
	const { type, size = 'md', ...rest } = props;

	const { style, rest: textProps } = useTypographyStyle(
		type as any,
		size as any,
		rest
	);

	const { ellipsis, isTruncated, noWrap } = textProps;

	if (isTruncated && textProps.numberOfLines === undefined) {
		textProps.numberOfLines = 1;
	} else if (ellipsis && textProps.numberOfLines === undefined) {
		textProps.numberOfLines = 1;
	}

	if (noWrap) {
		textProps.numberOfLines = 1;
	}

	return {
		style,
		...textProps,
	};
}
