import { PressableResponder } from '@components/touchable';

export function mergePressableResponder(
	...responders: Array<((...args: any) => any) | undefined>
): any {
	return ((...args: any[]) => {
		for (const responder of responders) {
			responder?.(...args);
		}
	}) as PressableResponder<any>;
}
