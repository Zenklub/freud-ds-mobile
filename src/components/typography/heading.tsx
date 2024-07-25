import React from 'react';
import { HeadingProps } from './typography.types';
import { TypographyComponent } from './component';

export const Heading: React.FC<HeadingProps> = (props) => {
	return <TypographyComponent {...props} type="heading" />;
};

Heading.displayName = 'Heading';
