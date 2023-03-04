import { action } from '@/store/Player/action';
import { createPlayerStore } from '@/store/Player/create';
import { initialState, initialVideoEleAttributes } from '@/store/Player/state';
import { PlayerContext } from '@/store/Player/context';
import { playerContextDefaultValue } from '@/store/Player/context';
import type { PlayerStoreState } from '@/store/Player/state';
import type { PlayerStoreAction } from '@/store/Player/action';

export type PlayerStore = PlayerStoreState & PlayerStoreAction

export {
    action,
    createPlayerStore,
    initialState,
    initialVideoEleAttributes,
    PlayerContext,
    playerContextDefaultValue,
};
