import { useContainerPropsStyle } from '@hooks';
import React from 'react';
import { View as RNView, ViewProps as RNViewProps } from 'react-native';
import { ContainerProps } from './types';

export type ViewProps = RNViewProps & ContainerProps;

export const View: React.FC<ViewProps> = ({ children, style, ...props }) => {
	const [viewStyle, rest] = useContainerPropsStyle(props);

	return (
		<RNView {...rest} style={[viewStyle, style]}>
			{children}
		</RNView>
	);
};
