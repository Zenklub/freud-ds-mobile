import React from 'react';
import { composeEventHandlers, IconButton as NRIconButton } from 'native-base';
import { IconButtonProps } from '@components/icon-button/icon-button.types';
import { Icon } from '@components/icon/icon';
import { useIconColor } from '@helpers/icons-color.hook';
import iconButtonTheme from '@theme/components/icon-button';

export const IconButton: React.FC<IconButtonProps> = ({
	inverted = false,
	variant = 'solid',
	icon,
	testID,
	size = 'md',
	disabled = false,
	onPressIn,
	onPressOut,
	onPress,
	...props
}) => {
	const [iconColor, pressableProps] = useIconColor(iconButtonTheme.variants, {
		icon,
		variant,
		inverted,
		...props,
	});

	return (
		<NRIconButton
			testID={testID}
			variant={variant}
			size={size}
			colorScheme={inverted ? 'neutral.white' : 'brand.pure'}
			isDisabled={disabled}
			onPressIn={composeEventHandlers(onPressIn, pressableProps.onPressIn)}
			onPressOut={composeEventHandlers(onPressOut, pressableProps.onPressOut)}
			onPress={composeEventHandlers(onPress, pressableProps.onPress)}
			icon={
				<Icon
					name={icon}
					size={size}
					color={iconColor ?? 'white'}
					testID={`${testID}-icon`}
				/>
			}
		/>
	);
};
