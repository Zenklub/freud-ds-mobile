import React from 'react';
import { View } from 'react-native';

export interface VStackProps {
	space?: number;
	alignItems?: 'flex-start' | 'center' | 'flex-end';
	paddingY?: number;
	background?: string;
	paddingX?: number;
}

export const VStack: React.FC<VStackProps> = ({
	space,
	alignItems,
	paddingY,
	paddingX,
	background,
	children,
}) => {
	return (
		<View
			style={{
				flexDirection: 'column',
				alignItems,
				paddingVertical: paddingY,
				paddingHorizontal: paddingX,
				backgroundColor: background,
			}}
		>
			{React.Children.map(children, (child, index) => {
				if (index === 0) {
					return child;
				}
				return (
					<>
						<View style={{ height: space }} />
						{child}
					</>
				);
			})}
		</View>
	);
};
