import { useSyncExternalStore } from 'react';

const globalStore = {} as Record<string, any>;

export function useGlobalState<T>(key: string, value?: T): [T, (newValue: T) => void] {
    const snapshot = useSyncExternalStore(subscribe, () => globalStore[key]);

    if (globalStore[key] === undefined && value !== undefined) {
        globalStore[key] = value;
        emitChange();
    }

    const setGlobalState = (newValue: T) => {
        globalStore[key] = newValue;
        emitChange();
    }

    return [snapshot, setGlobalState]
}

const globalListeners = new Set<Function>();

const subscribe = (listener: Function) => {
    globalListeners.add(listener);
    return () => {
        globalListeners.delete(listener);
    }
}

const emitChange = () => {
    for (const listener of globalListeners) {
        listener();
    }
}


