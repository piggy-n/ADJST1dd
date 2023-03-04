import { createStore } from 'zustand';
import { devtools } from 'zustand/middleware';
import { action, initialState } from '@/store/Player';
import { uuid } from '@/utils/methods/common';
import type { StoreApi } from 'zustand';
import type { PlayerStore } from '@/store/Player';

export const createPlayerStore = (): StoreApi<PlayerStore> => createStore<PlayerStore>()(
    devtools(
        (
            set,
            get,
        ) => ({
            uuid: uuid(),
            ...initialState,
            ...action(set, get),
        }),
        { name: 'PlayerStore' },
    ),
);
