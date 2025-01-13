import { Text } from '@components/typography/text';
import { Portal } from '@gorhom/portal';
import { useMeasurement } from '@helpers/use-measure.hook';
import { useColorMode, useComponentTheme } from '@hooks/use-theme.hook';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { calculatePosition } from './calculate-position';

export interface PopoverProps {
	placement: 'top' | 'bottom' | 'left' | 'right';
	content: string | React.ReactNode;
	maxWidth?: number;
	backdropColor?: string;
	children: React.ReactNode;
	containerStyle?: ViewStyle | ViewStyle[];
	inverted?: boolean;
	dismissOnBackdropPress?: boolean;
}

const SPACE_TO_START_ANIMATION = 4;

export const Popover: React.FC<PopoverProps> = (props) => {
	const {
		content,
		placement,
		children,
		dismissOnBackdropPress = true,
		containerStyle,
	} = props;

	const theme = usePopoverTheme(props);

	const [visible, setVisible] = React.useState(false);
	const [layout, onRef, onLayoutHandler] = useMeasurement();
	const [tooltipLayout, onTooltipRef, setTooltipLayout] = useMeasurement();
	const animation = useRef(new Animated.Value(0));

	const onPressHandler = () => {
		setVisible(true);
	};

	const onBackdropPress = () => {
		if (dismissOnBackdropPress) {
			setVisible(false);
		}
	};

	useEffect(() => {
		Animated.timing(animation.current, {
			toValue: visible ? 1 : 0,
			duration: theme.animation.duration,
			easing: theme.animation.easing,
		}).start();
	}, [visible]);

	const renderTooltip = () => {
		const [tooltipPosition, arrowStyle] = calculatePosition(
			placement,
			layout,
			tooltipLayout
		);
		return (
			<Portal>
				<Animated.View
					style={[
						styles.backdrop,
						{
							opacity: animation.current.interpolate({
								inputRange: [0, 1],
								outputRange: [0, 1],
							}),
							marginTop: animation.current.interpolate({
								inputRange: [0, 1],
								outputRange: [SPACE_TO_START_ANIMATION, 0],
							}),
							backgroundColor: theme.backdropColor,
						},
					]}
					onTouchEnd={onBackdropPress}
					pointerEvents={visible ? 'auto' : 'none'}
				>
					<View
						style={[
							styles.tooltip,
							{ ...theme.style },
							tooltipPosition,
							// { maxWidth, backgroundColor, borderRadius, ...shadows },
						]}
						onLayout={setTooltipLayout}
						onTouchEnd={(e) => e.stopPropagation()}
						ref={onTooltipRef}
					>
						<View style={[styles.arrow, theme.arrow.style, arrowStyle]} />
						{typeof content === 'string' ? (
							<Text color="neutral.white">{content}</Text>
						) : (
							<>{content}</>
						)}
					</View>
				</Animated.View>
			</Portal>
		);
	};

	return (
		<View
			style={[containerStyle]}
			onLayout={onLayoutHandler}
			onTouchEnd={onPressHandler}
			ref={onRef}
		>
			{children}
			{renderTooltip()}
		</View>
	);
};

function usePopoverTheme({ inverted, backdropColor, maxWidth }: PopoverProps) {
	const colorMode = useColorMode(inverted);
	const theme = useComponentTheme('Popover', colorMode);

	return {
		...theme,
		backdropColor: backdropColor ?? theme.backdropColor,
		maxWidth: maxWidth ?? theme.style.maxWidth,
	};
}

const styles = StyleSheet.create({
	backdrop: {
		...StyleSheet.absoluteFillObject,
	},
	tooltip: {
		position: 'absolute',
	},
	arrow: {
		position: 'absolute',
	},
});
