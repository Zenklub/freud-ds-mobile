import { AlertProps } from '@components/alert';

export interface ToastDialogConfig extends AlertProps {
	/**
	 * Duration in milliseconds until auto dismiss
	 *
	 * It's possible to define as permanent, in this case just set to `permanent`
	 * @default 2000 (2 sec)
	 */
	duration?: number | 'permanent';
}

export interface ToastDialogHook {
	dismissAll(): void;
	dismiss(key: string): void;
	present(config: ToastDialogConfig): string;
}
