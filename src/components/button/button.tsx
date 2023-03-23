import React, { useMemo } from 'react';
import { Button as NBButton, useToken } from 'native-base';
import { ButtonProps } from '@components/button/types';
import { Icon } from '@components/icon/icon';
import buttonTheme from '@theme/components/button';

export const Button: React.FC<ButtonProps> = ({ icon, inverted, ...props }) => {
	const iconColorKey: string = useMemo(() => {
		if (!icon) return 'brand.pure';
		const variant = props.variant || 'solid';

		const result = buttonTheme.variants[variant]?.(props);
		if (inverted) {
			return result._dark?._icon?.color ?? 'brand.pure';
		}
		return result._icon?.color ?? 'neutral.white';
	}, [icon, inverted, props.variant]);

	const [iconColor] = useToken('colors', [iconColorKey]);

	const _isLoadingText = useMemo(() => {
		if (props.isLoading) return props.children as string;
		return undefined;
	}, [props.isLoading, props.children]);

	return (
		<NBButton
			size="md"
			colorScheme={inverted ? 'neutral.white' : 'brand.pure'}
			endIcon={
				icon ? (
					<Icon name={icon} size="md" color={iconColor ?? 'white'} />
				) : undefined
			}
			{...props}
			isDisabled={props.disabled || props.isLoading}
			isLoadingText={_isLoadingText}
			spinnerPlacement="end"
		>
			{props.variant}
		</NBButton>
	);
};
