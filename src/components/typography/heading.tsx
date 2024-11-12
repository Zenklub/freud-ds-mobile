import React from 'react';
import { TypographyComponent } from './component';
import { HeadingProps } from './typography.types';

export const Heading: React.FC<HeadingProps> = (props) => {
	return <TypographyComponent {...props} family="heading" />;
};

Heading.displayName = 'Heading';
