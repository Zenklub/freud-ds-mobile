import React, { memo, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import { Text } from '../typography';

import { AlertStatus, AlertProps } from './alert.types';
import { useOnLayout } from '@helpers/use-on-layout';
import { Touchable } from '@components/touchable/touchable';
import { Icon, IconName } from '@components/icon';
import { useColors, useTokens } from '@hooks';
import { IColors } from '@theme/base/colors';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
	},
	innerContainer: {
		flex: 1,
		flexDirection: 'row',
		padding: 12,
	},
});

const StatusIconNamesMap: Record<AlertStatus, IconName> = {
	success: 'check-circle',
	info: 'info-circle',
	warning: 'exclamation-triangle',
	danger: 'exclamation-triangle',
};

const StatusColors: Record<AlertStatus, IColors[]> = {
	success: ['feedback.positive.100', 'feedback.positive.pure'],
	info: ['feedback.neutral.100', 'feedback.neutral.pure'],
	warning: ['feedback.warning.100', 'feedback.warning.pure'],
	danger: ['feedback.negative.100', 'feedback.negative.pure'],
};

export const Alert: React.FC<AlertProps> = memo(
	({
		title,
		body,
		status = 'info',
		dismissible = true,
		style,
		onDismiss,
		action,
		onLayout,
		testID = 'Alert',
	}) => {
		const [layout, onLayoutHandler] = useOnLayout();

		const [backgroundColor, iconColor, textColor] = useColors(
			...StatusColors[status],
			'neutral.dark.400'
		);

		const [borderRadius, closeButtonRadius, marginBetween] = useTokens(
			'radii.sm',
			'radii.circular',
			'sizes.spacing.nano'
		);

		const onClose = () => {
			onDismiss?.();
		};

		const renderIcon = () => {
			const iconTestID = `${testID}-icon-${status}`;
			return (
				<Icon
					color={iconColor}
					name={StatusIconNamesMap[status]}
					testID={iconTestID}
					size="md"
				/>
			);
		};

		useEffect(() => {
			if (layout?.height) {
				onLayout?.(layout);
			}
		}, [layout]);

		const renderContent = () => {
			return (
				<>
					{renderIcon()}
					<View
						style={{
							flex: 1,
							marginLeft: marginBetween,
							justifyContent: 'center',
						}}
					>
						<Text
							color={textColor}
							fontSize={body ? 'md' : 'sm'}
							lineHeight={'sm'}
							fontWeight="medium"
							testID={`${testID}-title`}
						>
							{title}
						</Text>
						{body ? (
							<Text
								color={textColor}
								fontSize="sm"
								lineHeight="sm"
								testID={`${testID}-body`}
								marginTop="2"
							>
								{body}
							</Text>
						) : null}
					</View>
					{dismissible && (
						<Touchable
							onPress={onClose}
							hitSlop={{ top: 16, right: 16, bottom: 16, left: 16 }}
							testID={`${testID}-dismiss-touchable`}
							style={{
								marginLeft: marginBetween,
								borderRadius: closeButtonRadius,
							}}
						>
							<Icon
								color={textColor}
								testID={`${testID}-dismiss-icon`}
								name="close"
								size="xs"
							/>
						</Touchable>
					)}
				</>
			);
		};

		return (
			<Animated.View
				style={[styles.container, style as any]}
				testID={testID}
				onLayout={onLayoutHandler}
			>
				{action ? (
					<Touchable
						onPress={action}
						style={[styles.innerContainer, { borderRadius, backgroundColor }]}
					>
						{renderContent()}
					</Touchable>
				) : (
					<View
						style={[styles.innerContainer, { borderRadius, backgroundColor }]}
					>
						{renderContent()}
					</View>
				)}
			</Animated.View>
		);
	}
);
