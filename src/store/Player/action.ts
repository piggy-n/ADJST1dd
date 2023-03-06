import type { StoreApi } from 'zustand';
import type { VideoType } from '@/index.d';
import type { PlayerStoreState } from '@/store/Player/state';

export interface PlayerStoreAction {
    setUrlAndVideoType: (url: string, videoType: VideoType) => void;
}

export const action = (
    set: StoreApi<PlayerStoreState & PlayerStoreAction>['setState'],
    get: StoreApi<PlayerStoreState & PlayerStoreAction>['getState'],
): PlayerStoreAction => ({
    setUrlAndVideoType: (url, videoType) => set({ url, videoType }),

});
