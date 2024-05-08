import { useState, useRef } from 'react';
import { View } from 'react-native';

export interface Measure {
	x: number;
	y: number;
	width: number;
	height: number;
	pageX: number;
	pageY: number;
}

export const useMeasurement = (): [
	measure: Measure | undefined,
	ref: React.RefObject<View>,
	onLayout: () => void
] => {
	const [measure, setMeasure] = useState<Measure>();
	const ref = useRef<View>(null);

	const onLayout = () => {
		ref.current?.measure((x, y, width, height, pageX, pageY) => {
			setMeasure({ x, y, width, height, pageX, pageY });
			console.log(x, y, width, height, pageX, pageY);
		});
	};

	return [measure, ref, onLayout];
};
