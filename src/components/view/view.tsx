import { useContainerPropsStyle } from '@hooks';
import { ContainerProps } from '@theme/container-props-style';
import React from 'react';
import { View as RNView, ViewProps as RNViewProps } from 'react-native';

export type ViewProps = RNViewProps & ContainerProps;

export const View: React.FC<ViewProps> = ({ children, style, ...props }) => {
	const [viewStyle, rest] = useContainerPropsStyle(props, style);

	return (
		<RNView {...rest} style={viewStyle}>
			{children}
		</RNView>
	);
};
