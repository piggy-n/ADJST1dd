import type { VideoEleAttributes } from '@/index.d';

export interface PlayerIconState {
    showLoadingIcon?: boolean;
}

export interface PlayerStoreState extends VideoEleAttributes, PlayerIconState {
    uuid?: string;
    videoEle?: HTMLVideoElement | null;
    videoContainerEle?: HTMLDivElement | null;
}

export const initialVideoEleAttributes: VideoEleAttributes = {
    playing: false,
    buffering: false,
    canplay: false,
    ended: false,
    resizing: false,
    error: 0,
    currentTime: 0,
    totalTime: 0,
    bufferedTime: 0,
    videoWidth: 0,
    videoHeight: 0,
    networkState: 0,
    readyState: 0,
};

export const initialState: PlayerStoreState = {
    ...initialVideoEleAttributes,
};
