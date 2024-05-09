import { Dimensions, ViewStyle } from 'react-native';
import { PopoverProps } from '.';
import { ARROW_SIZE, MIN_SPACE_FROM_BORDER } from './constants';
import { Measure } from '@helpers/use-measure.hook';

export const calculatePosition = (
	placement: PopoverProps['placement'],
	layout: Measure | undefined,
	tooltipLayout: Measure | undefined
): [ViewStyle, ViewStyle] => {
	if (!layout || !tooltipLayout) {
		return [
			{
				top: 0,
				left: 0,
			},
			{},
		];
	}

	const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

	const { width, height } = tooltipLayout;
	const {
		pageX,
		pageY,
		width: containerWidth,
		height: containerHeight,
	} = layout;

	const findHorizontalCenter = () => {
		let x = containerWidth / 2 - width / 2 + pageX;
		if (x + width + MIN_SPACE_FROM_BORDER > screenWidth) {
			x = screenWidth - width - MIN_SPACE_FROM_BORDER;
		}

		if (x - MIN_SPACE_FROM_BORDER < 0) {
			x = MIN_SPACE_FROM_BORDER;
		}

		return x;
	};

	const findVerticalCenter = () => {
		let y = containerHeight / 2 - height / 2 + pageY;

		if (y + height + MIN_SPACE_FROM_BORDER > screenHeight) {
			y = screenHeight - height - MIN_SPACE_FROM_BORDER;
		}

		if (y - MIN_SPACE_FROM_BORDER < 0) {
			y = MIN_SPACE_FROM_BORDER;
		}

		return y;
	};

	const horizontalCenter = findHorizontalCenter();
	const verticalCenter = findVerticalCenter();

	switch (placement) {
		case 'bottom':
			return [
				{
					top: pageY + containerHeight + ARROW_SIZE,
					left: horizontalCenter,
				},
				{
					top: -(ARROW_SIZE / 2),
					left: pageX - horizontalCenter + containerWidth / 2 - ARROW_SIZE / 2,
				},
			];
		case 'top':
			return [
				{
					top: pageY - height - ARROW_SIZE,
					left: horizontalCenter,
				},
				{
					top: height - ARROW_SIZE / 2,
					left: pageX - horizontalCenter + containerWidth / 2 - ARROW_SIZE / 2,
				},
			];
		case 'left':
			return [
				{
					top: verticalCenter,
					left: pageX - width - ARROW_SIZE,
				},
				{
					top: height / 2 - ARROW_SIZE / 2,
					left: width - ARROW_SIZE / 2,
				},
			];
		case 'right':
			return [
				{
					top: verticalCenter,
					left: pageX + containerWidth + ARROW_SIZE,
				},

				{
					top: height / 2 - ARROW_SIZE / 2,
					left: -(ARROW_SIZE / 2),
				},
			];
		default:
			return [{}, {}];
	}
};
