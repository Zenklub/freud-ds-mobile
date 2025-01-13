import { useContainerPropsStyle } from '@hooks/use-container-style.hook';
import React, { forwardRef } from 'react';
import { View as RNView, ViewProps as RNViewProps } from 'react-native';
import { ContainerProps } from './types';

export type ViewProps = RNViewProps & ContainerProps;

export const View = forwardRef<View, ViewProps>(
	({ children, style, ...props }, ref: any) => {
		const [viewStyle, rest] = useContainerPropsStyle(props);

		return (
			<RNView {...rest} style={[viewStyle, style]} ref={ref}>
				{children}
			</RNView>
		);
	}
);

export type View = typeof RNView;
