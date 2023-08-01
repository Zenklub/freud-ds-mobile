import { useMemo } from 'react';
import { useToken } from 'native-base';
import { IconName } from '@components/icon/icon.types';
import { ButtonVariants } from '@components/button/button.types';
// @ts-ignore
import { useIsPressed } from 'native-base/lib/module/components/primitives/Pressable/Pressable';

export interface UseIconColorProps {
	icon?: IconName;
	variant?: ButtonVariants;
	inverted?: boolean;
}

export const useIconColor = (
	themeVariants: Record<ButtonVariants, (props: any) => any>,
	{ icon, variant, inverted }: UseIconColorProps & Record<string, any>
) => {
	const { pressableProps, isPressed } = useIsPressed();
	const iconColorKey: string = useMemo(() => {
		if (!icon) return 'brand.pure';
		const _variant = variant || 'solid';

		const result = themeVariants[_variant]?.({
			variant: _variant,
			inverted,
		});

		if (isPressed) {
			return inverted
				? result._dark?._pressed?._icon?.color
				: result._pressed?._icon?.color;
		}

		return inverted ? result._dark?._icon?.color : result._icon?.color;
	}, [icon, inverted, isPressed, variant]);

	const [iconColor] = useToken('colors', [iconColorKey]);

	return [iconColor, pressableProps];
};
