import React from 'react';
import { View } from 'react-native';

export interface HStackProps {
	space?: number;
	alignItems?: 'flex-start' | 'center' | 'flex-end';
	paddingX?: number;
	background?: string;
	width?: number | string;
	justifyContent?:
		| 'flex-start'
		| 'center'
		| 'flex-end'
		| 'space-around'
		| 'space-between'
		| 'space-evenly';
	marginBottom?: number;
}

export const HStack: React.FC<HStackProps> = ({
	space,
	alignItems,
	paddingX,
	background,
	justifyContent = 'flex-start',
	marginBottom,
	width,
	children,
}) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				alignItems,
				paddingHorizontal: paddingX,
				backgroundColor: background,
				justifyContent: justifyContent,
				marginBottom,
				width: width,
			}}
		>
			{React.Children.map(children, (child, index) => {
				if (index === 0) {
					return child;
				}
				return (
					<>
						<View style={{ width: space }} />
						{child}
					</>
				);
			})}
		</View>
	);
};
