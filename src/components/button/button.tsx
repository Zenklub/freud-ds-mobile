import React, { useMemo } from 'react';
import { Button as NBButton, composeEventHandlers } from 'native-base';
import { ButtonProps } from '@components/button/button.types';
import { Icon } from '@components/icon/icon';
import { useIconColor } from '@helpers/icons-color.hook';
import buttonTheme from '@theme/components/button';

export const Button: React.FC<ButtonProps> = ({
	testID,
	icon,
	inverted,
	onPressIn,
	onPressOut,
	children,
	...props
}) => {
	const [iconColor, pressableProps] = useIconColor(buttonTheme.variants, {
		icon,
		inverted,
		...props,
	});

	const _isLoadingText = useMemo(() => {
		if (props.isLoading) return children as string;
		return undefined;
	}, [props.isLoading, children]);

	return (
		<NBButton
			testID={testID}
			size="md"
			onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
			onPressOut={composeEventHandlers(onPressOut, pressableProps.onPressOut)}
			colorScheme={inverted ? 'neutral.white' : 'brand.pure'}
			endIcon={
				icon ? (
					<Icon
						name={icon}
						size={props.size}
						color={iconColor ?? 'white'}
						testID={`${testID}-icon`}
					/>
				) : undefined
			}
			{...props}
			isDisabled={props.disabled || props.isLoading}
			isLoadingText={_isLoadingText}
			spinnerPlacement="end"
		>
			{children}
		</NBButton>
	);
};
