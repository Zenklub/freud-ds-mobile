import React from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import { Props } from '../build/components/bottom-sheet/bottom-sheet-patched';

const BottomSheetMock = React.forwardRef(
	(props: Props, ref: React.Ref<BottomSheet>) => (
		<BottomSheet {...props} ref={ref} />
	)
);

export default BottomSheetMock;
