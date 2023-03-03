import { createContext } from 'react';
import type { StoreApi } from 'zustand';
import type { PlayerStore } from '@/store/Player/index';

export interface PlayerContextType {
    store: StoreApi<PlayerStore>;
    videoEle: HTMLVideoElement | null;
    videoContainerEle: HTMLDivElement | null;
}

export const playerContextDefaultValue: Partial<PlayerContextType> = {
    videoEle: null,
    videoContainerEle: null,
};

export const PlayerContext = createContext<PlayerContextType>(<PlayerContextType>playerContextDefaultValue);
