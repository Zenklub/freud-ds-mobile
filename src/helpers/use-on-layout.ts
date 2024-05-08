import { useCallback, useState } from 'react';
import { LayoutChangeEvent, LayoutRectangle } from 'react-native';

const initialLayout: LayoutRectangle = {
	x: 0,
	y: 0,
	width: 0,
	height: 0,
};

type IUseOnLayoutHook = [LayoutRectangle, (event: LayoutChangeEvent) => void];

interface IUseOnLayoutConfigurations {
	onlyOnce?: boolean;
}

export const useOnLayout = (
	{ onlyOnce = false }: IUseOnLayoutConfigurations = {},
	callback?: (event: LayoutChangeEvent) => void
): IUseOnLayoutHook => {
	const [layout, setLayout] = useState<LayoutRectangle>(initialLayout);
	const onLayout = useCallback(
		(event: LayoutChangeEvent) => {
			callback?.(event);
			if (onlyOnce && layout.width) return;
			setLayout(event.nativeEvent.layout);
		},
		[setLayout, onlyOnce, layout]
	);

	return [layout, onLayout];
};
