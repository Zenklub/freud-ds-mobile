import { ButtonProps } from '@components/button/button.types';
import { Icon } from '@components/icon';
import { Spinner } from '@components/spinner';
import { Touchable } from '@components/touchable';
import { Text } from '@components/typography';
import { mergePressableResponder } from '@helpers/merge-pressable-responder';
import React, { useCallback, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { ButtonsState, useButtonProps } from './use-button-props';

export function Button<T>(props: Readonly<ButtonProps<T>>) {
	const { text, testID } = props;

	const [state, setState] = React.useState<ButtonsState>('default');

	const {
		pressable: pressableProps,
		container: containerProps,
		text: textProps,
		icon: iconProps,
		spinner: spinnerProps,
	} = useButtonProps(props, state);

	useEffect(() => {
		if (props.disabled) {
			setState('disabled');
		} else if (props.isLoading) {
			setState('loading');
		}
	}, [props.disabled]);

	const renderRightComponent = useCallback(() => {
		if (props.isLoading) {
			return (
				<View testID={`${testID}-spinner`} style={styles.icon}>
					<Spinner {...spinnerProps} />
				</View>
			);
		}

		if (props.icon) {
			return (
				<Icon
					testID={`${testID}-icon`}
					name={props.icon}
					{...iconProps}
					style={styles.icon}
				/>
			);
		}

		return null;
	}, [props.icon, props.isLoading]);

	return (
		<Touchable
			testID={testID}
			{...pressableProps}
			activeOpacity={1}
			onPressIn={mergePressableResponder(
				() => setState('active'),
				pressableProps.onPressIn
			)}
			onPressOut={mergePressableResponder(
				() => setState('default'),
				pressableProps.onPressOut
			)}
			disabled={props.disabled ?? props.isLoading}
		>
			<View
				testID={`${testID}-container`}
				{...containerProps}
				style={[styles.container, containerProps.style]}
			>
				<Text testID={`${testID}-text`} {...textProps}>
					{text}
				</Text>

				{renderRightComponent()}
			</View>
		</Touchable>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	icon: {
		marginLeft: 4,
	},
});

Button.displayName = 'Button';
