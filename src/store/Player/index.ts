import { action } from '@/store/Player/action';
import { initialState } from '@/store/Player/state';
import { createPlayerStore, PlayerContext } from '@/store/Player/create';
import type { PlayerStoreState } from '@/store/Player/state';
import type { PlayerStoreAction } from '@/store/Player/action';

export {
    action,
    createPlayerStore,
    initialState,
    PlayerContext,
};
export type PlayerStore = PlayerStoreState & PlayerStoreAction;
