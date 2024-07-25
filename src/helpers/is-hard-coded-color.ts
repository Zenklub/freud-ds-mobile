export const isHardCodedColor = (color: string) => {
	return color.includes('#') || color.startsWith('rgb');
};
