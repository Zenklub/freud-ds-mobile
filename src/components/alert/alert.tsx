import React, { memo, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import { Text } from '../typography';

import { AlertStatus, AlertProps } from './alert.types';
import { useOnLayout } from '@helpers/use-on-layout';
import { Touchable } from '@components/touchable/touchable';
import { Icon, IconName } from '@components/icon';
import { useColors, useTokens } from '@hooks';
import { IColors } from '@theme/base/colors';
import { ConditionalTouchable } from '@components/touchable';

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
	warning: 'exclamation-circle',
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

		const [backgroundColor, iconColor] = useColors(...StatusColors[status]);

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
					style={{ marginTop: body ? 4 : undefined }}
					color={iconColor}
					name={StatusIconNamesMap[status]}
					testID={iconTestID}
					size={22}
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
						<Text.Medium
							fontSize={body ? 'md' : 'sm'}
							testID={`${testID}-title`}
						>
							{title}
						</Text.Medium>
						{body ? (
							<Text.Regular
								fontSize="sm"
								testID={`${testID}-body`}
								style={{ marginTop: 4 }}
							>
								{body}
							</Text.Regular>
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
								color="neutral.dark.400"
								testID={`${testID}-dismiss-icon`}
								name="close"
								size={16}
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
				<ConditionalTouchable
					condition={!!action}
					onPress={action}
					style={[styles.innerContainer, { borderRadius, backgroundColor }]}
				>
					{renderContent()}
				</ConditionalTouchable>
			</Animated.View>
		);
	}
);
