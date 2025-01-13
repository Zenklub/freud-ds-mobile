import React from 'react';
import { IText } from './typography.types';

import { TypographyComponent } from './component';

export const Text: IText = (props) => {
	return <TypographyComponent {...props} family="body" />;
};

const TextMedium: IText['Medium'] = (props) => {
	return <Text {...props} fontWeight="medium" />;
};

const TextRegular: IText['Regular'] = (props) => {
	return <Text {...props} fontWeight="regular" />;
};

Text.Medium = TextMedium;
Text.Regular = TextRegular;

Text.displayName = 'Text';
Text.Regular.displayName = 'Text.Regular';
Text.Medium.displayName = 'Text.Medium';
