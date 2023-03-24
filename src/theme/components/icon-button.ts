// @ts-ignore
import * as Tokens from '@freud-ds/tokens/style/react-native/variables';
import button from '@theme/components/button';

const baseStyle = (props: any) => {
	return {
		...button.baseStyle(props),
		borderRadius: Tokens.borderRadiusSm,
		_disabled: {
			opacity: Tokens.opacityLevel5,
		},
	};
};

function variantGhost(props: any) {
	return {
		...button.variants.ghost(props),
		borderRadius: Tokens.borderRadiusSm,
		_disabled: {
			opacity: Tokens.opacityLevel5,
		},
	};
}

function variantOutline(props: any) {
	return {
		...button.variants.outline(props),
		borderRadius: Tokens.borderRadiusSm,
		_disabled: {
			opacity: Tokens.opacityLevel5,
		},
	};
}

function variantSolid(props: any) {
	return {
		...button.variants.solid(props),
		borderRadius: Tokens.borderRadiusSm,
		_disabled: {
			opacity: Tokens.opacityLevel5,
		},
	};
}

const variants = {
	ghost: variantGhost,
	outline: variantOutline,
	solid: variantSolid,
};

const sizes = {
	lg: {
		px: '2',
		py: '2',
		height: Tokens.spacingSizeMd / 4,
		width: Tokens.spacingSizeMd / 4,
	},
	md: {
		px: '2',
		py: '2',
		height: Tokens.spacingSizeSm / 4,
		width: Tokens.spacingSizeSm / 4,
	},
	sm: {
		px: '2',
		py: '2',
		height: Tokens.spacingSizeXs / 4,
		width: Tokens.spacingSizeXs / 4,
	},
	xs: {
		px: '1',
		py: '1',
		height: Tokens.spacingSizeXxs / 4,
		width: Tokens.spacingSizeXxs / 4,
	},
};

const defaultProps = {
	variant: 'solid',
	size: 'md',
	colorScheme: 'brand.pure',
};

export default {
	baseStyle,
	variants,
	sizes,
	defaultProps,
};
