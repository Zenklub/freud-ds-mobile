import { HardCodedColor } from '@theme';

function isValidHexColor(hex: string): boolean {
	return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
}

function isValidRGBColor(rgb: string): boolean {
	return /^rgba?\((\d{1,3}), (\d{1,3}), (\d{1,3})\)$/.test(rgb);
}

export const isHardCodedColor = (color: string): color is HardCodedColor => {
	return (
		color === 'transparent' || isValidHexColor(color) || isValidRGBColor(color)
	);
};
