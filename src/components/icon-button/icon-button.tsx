import { ButtonsState } from '@components/button/use-button-props';
import { Icon } from '@components/icon/icon';
import { Spinner } from '@components/spinner';
import { Touchable } from '@components/touchable';
import { mergePressableResponder } from '@helpers/merge-pressable-responder';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButtonProps } from './icon-button.types';
import { useIconButtonProps } from './use-icon-button-props';

export function IconButton<T>(props: Readonly<IconButtonProps<T>>) {
	const { icon, testID } = props;

	const [state, setState] = React.useState<ButtonsState>('normal');

	const {
		pressable: pressableProps,
		container: containerProps,
		icon: iconProps,
		spinner: spinnerProps,
	} = useIconButtonProps(props, state);

	useEffect(() => {
		if (props.disabled) {
			setState('disabled');
		} else if (props.isLoading) {
			setState('loading');
		}
	}, [props.disabled]);

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
				() => setState('normal'),
				pressableProps.onPressOut
			)}
			disabled={props.disabled ?? props.isLoading}
		>
			<View
				testID={`${testID}-container`}
				{...containerProps}
				style={[styles.container, containerProps.style]}
			>
				{props.isLoading ? (
					<View testID={`${testID}-spinner`}>
						<Spinner {...spinnerProps} />
					</View>
				) : (
					<Icon testID={`${testID}-icon`} {...iconProps} name={icon} />
				)}
			</View>
		</Touchable>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
	},
});

IconButton.displayName = 'IconButton';
