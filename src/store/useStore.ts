import { createStore } from 'zustand';
import { createContext } from 'react';
import type { StoreApi } from 'zustand';
import { devtools } from 'zustand/middleware';

interface CounterState {
    count: number;
}

interface CounterAction {
    increase: () => void;
    decrease: () => void;
}

export type CounterStore = CounterState & CounterAction;

export const createCounterStore = (): StoreApi<CounterStore> => createStore<CounterStore>()(
    devtools(
        (set, get) => ({
            count: 0,
            increase: () => {
                set((state) => ({ count: state.count + 1 }));
            },
            decrease: () => {
                set((state) => ({ count: state.count - 1 }));
            },
        }),
        { name: 'CounterStore' },
    ),
);

export const CounterContext = createContext<ReturnType<typeof createCounterStore>>(<ReturnType<typeof createCounterStore>>{});
