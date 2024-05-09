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

// @ts-ignore
export * from 'react-native-reanimated/mock';

export const createAnimatedComponent =
	(Component) =>
	({ style, ...props }) => {
		return <Component {...props} style={clearAnimatedStyle(style)} />;
	};

export const interpolateColors = jest.fn();

export const Text = createAnimatedComponent(MockText);
export const View = createAnimatedComponent(MockView);

export const Easing = {
	linear: jest.fn(),
	ease: jest.fn(),
	easeIn: jest.fn(),
	easeOut: jest.fn(),
	easeInOut: jest.fn(),
	sine: jest.fn(),
	circle: jest.fn(),
	back: jest.fn(),
	elastic: jest.fn(),
	bounce: jest.fn(),
	bezier: jest.fn(),
	in: jest.fn(),
	out: jest.fn(),
	inOut: jest.fn(),
};

export default {
	...AnimatedMock,
	createAnimatedComponent,
	interpolateColors,
	Easing,
};
