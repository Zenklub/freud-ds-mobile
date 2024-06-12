import { SetStateAction, Dispatch, useCallback, useState } from 'react';

export interface BooleanStateHook {
	state: boolean;
	setOn: () => void;
	setOff: () => void;
	toggle: () => void;
	setState: Dispatch<SetStateAction<boolean>>;
}

export interface VisibilityStateHook {
	visible: boolean;
	setVisible: () => void;
	setHidden: () => void;
	toggle: () => void;
	setState: Dispatch<SetStateAction<boolean>>;
}

export const useBooleanState = (initialState = false): BooleanStateHook => {
	const [state, setState] = useState(initialState);

	const setOn = useCallback(() => {
		setState(true);
	}, [setState]);

	const setOff = useCallback(() => {
		setState(false);
	}, [setState]);

	const toggle = useCallback(() => {
		setState((state) => !state);
	}, [setState]);

	return {
		state,
		setOn,
		setOff,
		setState,
		toggle,
	};
};

export const useVisibilityState = (
	initialState = false
): VisibilityStateHook => {
	const state = useBooleanState(initialState);

	return {
		visible: state.state,
		setVisible: state.setOn,
		setHidden: state.setOff,
		toggle: state.toggle,
		setState: state.setState,
	};
};

interface FetchingState {
	loading: boolean;
	error: boolean;
}

export interface FetchingStateHook<T> {
	setOn: (newValues?: Partial<T>) => void;
	setOff: (newValues?: Partial<T>) => void;
	setOnError: (newValues?: Partial<T>) => void;
	setOffError: (newValues?: Partial<T>) => void;
	onSetState: (newValues?: Partial<T>) => void;
	setState: Dispatch<SetStateAction<T>>;
}

export const useFetchingState = <T extends FetchingState>(
	initialState = {
		loading: true,
		error: false,
	} as T
): FetchingStateHook<T> & T => {
	const [state, _setState] = useState<T>(initialState);

	const setOn = useCallback((newValues?: Partial<T>) => {
		_setState((values) => ({
			...values,
			loading: true,
			error: false,
			...(newValues || {}),
		}));
	}, []);

	const setOff = useCallback((newValues?: Partial<T>) => {
		_setState((values) => ({
			...values,
			loading: false,
			error: false,
			...(newValues || {}),
		}));
	}, []);

	const setOnError = useCallback((newValues?: Partial<T>) => {
		_setState((values) => ({
			...values,
			loading: false,
			error: true,
			...(newValues || {}),
		}));
	}, []);

	const setOffError = useCallback((newValues?: Partial<T>) => {
		_setState((values) => ({
			...values,
			loading: false,
			error: false,
			...(newValues || {}),
		}));
	}, []);

	const onSetState = useCallback((newValues?: Partial<T>) => {
		_setState((values) => ({
			...values,
			...(newValues || {}),
		}));
	}, []);

	return {
		...state,
		onSetState,
		setOn,
		setOff,
		setOnError,
		setOffError,
		setState: _setState,
	};
};
