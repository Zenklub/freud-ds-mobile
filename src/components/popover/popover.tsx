import { Portal } from '@gorhom/portal';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { calculatePosition } from './calculate-position';
import { ANIMATION_DURATION, ARROW_SIZE, EASING } from './constants';
import { useMeasurement } from '@helpers/use-measure.hook';
import { Text } from '@components/typography/text';
import { useColors, useTokens } from '@hooks';

export interface PopoverProps {
	placement: 'top' | 'bottom' | 'left' | 'right';
	content: string | React.ReactNode;
	maxWidth?: number;
	backdropColor?: string;
	children: React.ReactNode;
	containerStyle?: ViewStyle | ViewStyle[];
	dismissOnBackdropPress?: boolean;
}

const SPACE_TO_START_ANIMATION = 4;

export const Popover: React.FC<PopoverProps> = ({
	content,
	placement,
	children,
	maxWidth,
	dismissOnBackdropPress = true,
	backdropColor = 'transparent',
	containerStyle,
}) => {
	const [visible, setVisible] = React.useState(false);
	const [layout, onRef, onLayoutHandler] = useMeasurement();
	const [tooltipLayout, onTooltipRef, setTooltipLayout] = useMeasurement();
	const animation = useRef(new Animated.Value(0));

	const [backgroundColor, color] = useColors(
		'neutral.dark.300',
		'neutral.white'
	);

	const [borderRadius, shadows] = useTokens('radii.md', 'shadows.shadowLevel3');

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
			duration: ANIMATION_DURATION,
			easing: EASING,
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
							backgroundColor: backdropColor,
						},
					]}
					onTouchEnd={onBackdropPress}
					pointerEvents={visible ? 'auto' : 'none'}
				>
					<View
						style={[
							styles.tooltip,
							tooltipPosition,
							{ maxWidth, backgroundColor, borderRadius, ...shadows },
						]}
						onLayout={setTooltipLayout}
						onTouchEnd={(e) => e.stopPropagation()}
						ref={onTooltipRef}
					>
						<View style={[styles.arrow, arrowStyle, { backgroundColor }]} />
						{typeof content === 'string' ? (
							<Text color={color}>{content}</Text>
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
const styles = StyleSheet.create({
	backdrop: {
		...StyleSheet.absoluteFillObject,
	},
	tooltip: {
		position: 'absolute',
		padding: 10,
	},
	arrow: {
		position: 'absolute',
		width: ARROW_SIZE,
		height: ARROW_SIZE,
		transform: [{ rotate: '45deg' }],
	},
});
