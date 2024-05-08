import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Animated, LayoutRectangle, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
	TOAST_ANIMATION_DURATION,
	TOAST_ANIMATION_EASING,
	TOAST_DEFAULT_DURATION,
} from './constants';
import { Alert } from '../alert';
import { ToastDialogConfig, ToastDialogHook } from './toast.types';
import { UniqueId } from '@helpers/unique-id-generator';

interface ToastDialogContext {
	present: (key: string, config: ToastDialogConfig) => void;
	dismiss: (key: string) => void;
	dismissAll: () => void;
}

type ITostPresentState = 'created' | 'presenting' | 'hidden';

type IToastDisplayInstance = {
	key: string;
	config: ToastDialogConfig;
	currentState: ITostPresentState;
	nextState: ITostPresentState;
};

const Context = React.createContext({} as ToastDialogContext);

export const TOAST_MARGIN_BETWEEN = 8;
export const TOAST_MARGIN_TOP = 12;
export const TOAST_MARGIN_HORIZONTAL = 16;

export const ToastDialogProvider: React.FC = ({ children }) => {
	const [instances, setInstances] = useState<IToastDisplayInstance[]>([]);
	const timers = useRef<{ [key: string]: any }>({});
	const animations = useRef<{ [key: string]: Animated.Value }>({});
	const toastHeights = useRef<{ [key: string]: number }>({});

	const { top: topInset } = useSafeAreaInsets();

	const clearReferences = (key: string) => {
		delete toastHeights.current[key];
		delete animations.current[key];
		if (timers.current[key]) {
			clearTimeout(timers.current[key]);
			delete timers.current[key];
		}
	};

	const dismiss = (key: string) => {
		setInstances((vals) =>
			vals.map((instance) => {
				return {
					...instance,
					nextState: instance.key === key ? 'hidden' : instance.nextState,
				};
			})
		);
	};

	const dismissAll = () => {
		setInstances((vals) =>
			vals.map((instance) => {
				return {
					...instance,
					nextState: 'hidden',
				};
			})
		);
	};

	const present = (key: string, config: ToastDialogConfig) => {
		animations.current[key] = new Animated.Value(-topInset);
		animations.current[key].setOffset(topInset + TOAST_MARGIN_TOP);
		toastHeights.current[key] = 0;
		const instance: IToastDisplayInstance = {
			key,
			config,
			currentState: 'created',
			nextState: 'presenting',
		};
		// fix: Cannot update a component from inside the function body of a different component
		setTimeout(() => {
			setInstances((vals) => [...vals, instance]);
		}, 0);
	};

	const startTimer = (instance: IToastDisplayInstance) => {
		const { config, key } = instance;
		if (config.duration !== 'permanent' && !timers.current[key]) {
			const { duration = TOAST_DEFAULT_DURATION } = config;
			timers.current[key] = setTimeout(() => {
				dismiss(key);
			}, duration);
		}
	};

	const onAnimationFinishes = useCallback(() => {
		setInstances((vals) => {
			return vals
				.map((instance) => {
					startTimer(instance);
					return {
						...instance,
						currentState: instance.nextState,
					};
				})
				.filter(({ currentState, key, config }) => {
					if (currentState === 'hidden') {
						config.onDismiss?.();
						clearReferences(key);
						return false;
					}
					return true;
				});
		});
	}, []);

	const onChangeAnimation = () => {
		const shouldUpdate = instances.some(
			({ nextState, currentState }) => nextState !== currentState
		);

		if (!shouldUpdate) return;
		let topPosition = 0;

		Animated.parallel(
			instances
				.filter((it) => !!animations.current[it.key])
				.map((instance) => {
					const { key, nextState } = instance;
					const height = toastHeights.current[key];
					let itemFinalPosition =
						nextState === 'hidden'
							? -(height + topInset + TOAST_MARGIN_TOP)
							: topPosition;

					const animation = Animated.timing(animations.current[key], {
						toValue: itemFinalPosition,
						duration: TOAST_ANIMATION_DURATION,
						easing: TOAST_ANIMATION_EASING,
						useNativeDriver: false,
					});

					if (nextState !== 'hidden') {
						topPosition += height + TOAST_MARGIN_BETWEEN;
					}

					return animation;
				})
		).start(onAnimationFinishes);
	};

	useEffect(() => {
		requestAnimationFrame(onChangeAnimation);
	}, [instances, animations, timers]);

	const renderToasts = useCallback(() => {
		return instances.map(({ key, config }: IToastDisplayInstance) => {
			const onToastLayout = (layout: LayoutRectangle) => {
				const { height } = layout;
				config.onLayout?.(layout);
				if (toastHeights.current[key] === height) return;
				toastHeights.current[key] = height;
			};
			return (
				<Animated.View
					key={`toast-${key}`}
					testID={`toast-${key}`}
					style={{
						left: TOAST_MARGIN_HORIZONTAL,
						right: TOAST_MARGIN_HORIZONTAL,
						position: 'absolute',
						top: animations.current[key],
					}}
				>
					<Alert
						{...config}
						style={config.style}
						onDismiss={() => dismiss(key)}
						testID={`toast-dialog`}
						onLayout={onToastLayout}
					/>
				</Animated.View>
			);
		});
	}, [instances, animations]);

	return (
		<Context.Provider value={{ present, dismiss, dismissAll }}>
			{children}
			<View style={StyleSheet.absoluteFill} pointerEvents="box-none">
				{renderToasts()}
			</View>
		</Context.Provider>
	);
};

export const useToastDialog = (): ToastDialogHook => {
	const context = React.useContext(Context);

	if (!context) {
		throw new Error(
			'useToastDialog should be used inside a ToastDialogProvider'
		);
	}

	const present = (config: ToastDialogConfig) => {
		const key = UniqueId.generate();
		context.present(key, config);
		return key;
	};

	const dismiss = (key: string) => {
		context.dismiss(key);
	};

	return {
		present,
		dismiss,
		dismissAll: context.dismissAll,
	};
};
