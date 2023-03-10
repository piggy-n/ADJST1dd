import { action } from '@/store/Player/action';
import { createPlayerStore, PlayerContext } from '@/store/Player/create';
import { initialState, initialVideoEleAttributes } from '@/store/Player/state';
import type { PlayerStoreState } from '@/store/Player/state';
import type { PlayerStoreAction } from '@/store/Player/action';

export {
    action,
    createPlayerStore,
    PlayerContext,
    initialState,
    initialVideoEleAttributes,
};
export * from '@/store/Player/selector';
export type PlayerStore = PlayerStoreState & PlayerStoreAction

