import type { StoreApi } from 'zustand';
import type { PlayerStoreState } from '@/store/Player/state';

export interface PlayerStoreAction {

}

export const action = (
    set: StoreApi<PlayerStoreState & PlayerStoreAction>['setState'],
    get: StoreApi<PlayerStoreState & PlayerStoreAction>['getState'],
) => ({});
