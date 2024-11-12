import React, { memo, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';

import { Text } from '../typography';

import { Icon } from '@components/icon';
import { ConditionalTouchable } from '@components/touchable';
import { Touchable } from '@components/touchable/touchable';
import { useOnLayout } from '@helpers/use-on-layout';
import { useColorMode, useComponentTheme } from '@hooks/use-theme';
import { AlertStatus } from '@theme/tokens/components/alert';
import { AlertProps } from './alert.types';

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
	},
	innerContainer: {
		flex: 1,
		flexDirection: 'row',
	},
});

// const StatusIconNamesMap: Record<AlertStatus, IconName> = {
// 	success: 'check-circle',
// 	info: 'info-circle',
// 	warning: 'exclamation-circle',
// 	danger: 'exclamation-triangle',
// };

// const StatusColors: Record<AlertStatus, ColorTokensPath[]> = {
// 	success: ['feedback.positive.100', 'feedback.positive.pure'],
// 	info: ['feedback.neutral.100', 'feedback.neutral.pure'],
// 	warning: ['feedback.warning.100', 'feedback.warning.pure'],
// 	danger: ['feedback.negative.100', 'feedback.negative.pure'],
// };

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
		inverted = false,
		testID = 'Alert',
	}) => {
		const [layout, onLayoutHandler] = useOnLayout();

		const isTitleOnly = !body;

		const theme = useAlertTheme(inverted, status, isTitleOnly);

		const onClose = () => {
			onDismiss?.();
		};

		const renderIcon = () => {
			return (
				<Icon
					testID={`${testID}-icon-${status}`}
					{...theme.icon}
					size={theme.icon.size ?? 'md'}
					name={theme.icon.name}
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
							justifyContent: 'center',
						}}
					>
						<Text
							testID={`${testID}-title`}
							{...theme.title.props}
							style={theme.title.style}
						>
							{title}
						</Text>
						{body ? (
							<Text
								testID={`${testID}-body`}
								{...theme.body.props}
								style={theme.body.style}
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
						>
							<Icon
								testID={`${testID}-dismiss-icon`}
								{...theme.close}
								size={theme.close.size ?? 'md'}
								name={theme.close.name ?? 'close'}
							/>
						</Touchable>
					)}
				</>
			);
		};

		return (
			<Animated.View
				style={[style as any]}
				testID={testID}
				onLayout={onLayoutHandler}
			>
				<ConditionalTouchable
					condition={!!action}
					onPress={action}
					style={[styles.innerContainer, theme.style]}
				>
					{renderContent()}
				</ConditionalTouchable>
			</Animated.View>
		);
	}
);

function useAlertTheme(
	inverted: boolean,
	status: AlertStatus,
	isTitleOnly: boolean
) {
	const colorMode = useColorMode(inverted);
	const alertTheme = useComponentTheme('Alert', colorMode);

	const theme = isTitleOnly
		? alertTheme.titleOnly[status]
		: alertTheme.full[status];

	return theme;

	// // Container
	// const borderRadius = useRadii(theme.borderRadius);
	// const borderWidth = useBorder(theme.borderWidth);
	// const borderColor = useColorTokenOrHardCoded(
	// 	theme.borderColor,
	// 	'neutral.light.300'
	// );
	// const backgroundColor = useColorTokenOrHardCoded(
	// 	theme.backgroundColor,
	// 	'neutral.white'
	// );
	// const padding = useSpacing(theme.padding ?? 0);
	// const paddingHorizontal = useSpacing(theme.paddingHorizontal);
	// const paddingVertical = useSpacing(theme.paddingVertical);

	// const containerProps = useMemo(() => {
	// 	return {
	// 		style: {
	// 			borderRadius,
	// 			borderWidth,
	// 			borderColor,
	// 			backgroundColor,
	// 			opacity: theme.opacity,
	// 			padding: theme.padding ? padding : undefined,
	// 			paddingHorizontal: theme.paddingHorizontal
	// 				? paddingHorizontal
	// 				: undefined,
	// 			paddingVertical: theme.paddingVertical ? paddingVertical : undefined,
	// 		},
	// 	};
	// }, [theme]);

	// // Icon Container
	// const iconContainerProps = useMemo(() => {
	// 	return {
	// 		p: theme.icon.padding,
	// 		ml: theme.icon.spacing,
	// 		opacity: theme.icon.opacity,
	// 	};
	// }, [theme]);

	// // Icon
	// const iconProps = useMemo(() => {
	// 	return {
	// 		color: theme.icon.color,
	// 		size: theme.icon.size,
	// 	};
	// }, [theme]);

	// // Title
	// const titleProps = theme.title as TextProps;

	// // Description
	// const descriptionProps = useMemo(() => {
	// 	return {
	// 		...theme.body,
	// 		mt: theme.body.spacing,
	// 	} as TextProps;
	// }, [theme]);

	// // Close Icon Container

	// const closeIconContainerProps = useMemo(() => {
	// 	return {
	// 		p: theme.close.padding,
	// 		ml: theme.close.spacing,
	// 		opacity: theme.close.opacity,
	// 	};
	// }, [theme]);

	// // Close Icon
	// const closeIconProps = useMemo(() => {
	// 	return {
	// 		color: theme.close.color,
	// 		size: theme.close.size,
	// 	};
	// }, [theme]);

	// return {
	// 	containerProps,
	// 	iconContainerProps,
	// 	iconProps,
	// 	titleProps,
	// 	descriptionProps,
	// 	closeIconContainerProps,
	// 	closeIconProps,
	// };
}
