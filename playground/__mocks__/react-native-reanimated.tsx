import React from 'react';
import AnimatedMock from 'react-native-reanimated/mock';

const MockText = jest.requireMock('react-native').Text;
const MockView = jest.requireMock('react-native').View;

const resolveStyle = (prop) => {
	if (prop !== null && typeof prop === 'object') {
		return prop._value;
	}
	return prop;
};

const clearAnimatedStyle = (style: object) => {
	if (!style) {
		return style;
	}
	if (Array.isArray(style)) {
		return style.map(clearAnimatedStyle);
	}
	return Object.keys(style).reduce(
		(acc, key) => ({
			...acc,
			[key]: resolveStyle(style[key]),
		}),
		style
	);
};

export * from 'react-native-reanimated/mock';

export const createAnimatedComponent =
	(Component) =>
	({ style, ...props }) => {
		return <Component {...props} style={clearAnimatedStyle(style)} />;
	};

export const interpolateColors = jest.fn();

export const Text = createAnimatedComponent(MockText);
export const View = createAnimatedComponent(MockView);

export default {
	...AnimatedMock,
	createAnimatedComponent,
	interpolateColors,
};
