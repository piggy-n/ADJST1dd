import { createStore } from 'zustand';
import { devtools } from 'zustand/middleware';
import { action, initialState } from '@/store/Player';
import type { StoreApi } from 'zustand';
import type { PlayerStore } from '@/store/Player';

export const createPlayerStore = (): StoreApi<PlayerStore> => createStore<PlayerStore>()(
    devtools(
        (
            set,
            get,
        ) => ({
            ...initialState,
            ...action(set, get),
        }),
        { name: 'PlayerStore' },
    ),
);
