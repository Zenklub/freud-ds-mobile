import React, { useCallback, useEffect, useRef, useState } from 'react';
import { LayoutRectangle, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { UniqueId } from '@helpers/unique-id-generator';
import { useComponentTheme } from '@hooks/use-theme';
import Animated from 'react-native-reanimated';
import { Alert } from '../alert';
import { ToastDialogConfig, ToastDialogHook } from './toast.types';

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

export const ToastDialogProvider: React.FC = ({ children }) => {
	const [instances, setInstances] = useState<IToastDisplayInstance[]>([]);
	const timers = useRef<{ [key: string]: any }>({});
	const animations = useRef<{ [key: string]: Animated.Value<number> }>({});
	const toastHeights = useRef<{ [key: string]: number }>({});

	const { top: topInset } = useSafeAreaInsets();

	const theme = useComponentTheme('Toast');

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
		setInstances((it) =>
			it.map((instance) => {
				return {
					...instance,
					nextState: 'hidden',
				};
			})
		);
	};

	const present = (key: string, config: ToastDialogConfig) => {
		animations.current[key] = new Animated.Value(-200);
		toastHeights.current[key] = 0;
		requestAnimationFrame(() => {
			const instance: IToastDisplayInstance = {
				key,
				config,
				currentState: 'created',
				nextState: 'presenting',
			};
			setInstances((vals) => [...vals, instance]);
		});
	};

	const startTimer = (instance: IToastDisplayInstance) => {
		const { config, key } = instance;
		if (config.duration !== 'permanent' && !timers.current[key]) {
			const { duration = theme.displayDuration } = config;
			timers.current[key] = setTimeout(() => {
				dismiss(key);
			}, duration);
		}
	};

	const onAnimationFinishes = useCallback(() => {
		setInstances((vals) => {
			return vals.filter(({ currentState, key, config }) => {
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

		let displayPosition = topInset + theme.containerMarginTop;

		for (const instance of instances) {
			const { key, nextState } = instance;
			const height = toastHeights.current[key];
			const hiddenPosition = -(
				height +
				topInset +
				theme.containerMarginTop +
				80
			);
			let finalPosition =
				nextState === 'hidden' ? hiddenPosition : displayPosition;

			if (nextState === 'presenting' && instance.currentState === 'created') {
				animations.current[key].setValue(hiddenPosition);
			}

			const animationConfig = {
				toValue: finalPosition,
				duration: theme.animation.duration,
				easing: theme.animation.easing,
			};

			Animated.timing(animations.current[key], animationConfig).start();

			if (nextState !== 'hidden') {
				displayPosition += height + theme.spaceBetween;
			}
		}

		setInstances((vals) => {
			return vals.map((instance) => {
				startTimer(instance);
				return {
					...instance,
					currentState: instance.nextState,
				};
			});
		});

		setTimeout(() => {
			onAnimationFinishes();
		}, theme.animation.duration + 50);
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
						...theme.alertContainer.style,
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

export const useToast = (): ToastDialogHook => {
	const context = React.useContext(Context);

	if (!context) {
		throw new Error('useToast should be used inside a ToastDialogProvider');
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
