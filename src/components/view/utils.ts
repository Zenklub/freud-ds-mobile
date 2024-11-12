import { ContainerProps } from './types';

export const containerPropsKeys = [
	'm',
	'mx',
	'my',
	'mt',
	'mb',
	'ml',
	'mr',
	'p',
	'px',
	'py',
	'pt',
	'pb',
	'pl',
	'pr',
	'borderRadius',
	'borderColor',
	'borderWidth',
	'backgroundColor',
	'opacity',
] as const;

export function hasContainerProps(props: any): props is ContainerProps {
	return containerPropsKeys.some((key) => key in props);
}
