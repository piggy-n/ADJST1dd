import type { VideoEleAttributes, PlayerProps } from '@/index.d';

export type StateProps = Pick<PlayerProps, 'url' | 'videoType' | 'controlsOpts'>

export interface PlayerIconState {
    showLoadingIcon?: boolean;
}

export interface PlayerStoreState extends StateProps, VideoEleAttributes, PlayerIconState {
    uuid?: string;
    videoEle?: HTMLVideoElement | null;
    videoContainerEle?: HTMLDivElement | null;
}

export const initialStateProps: StateProps = {
    url: '',
    videoType: 'live',
    controlsOpts: {
        fullscreen: true,
        recording: false,
        screenshot: true,
    },
};

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
    ...initialStateProps,
    ...initialVideoEleAttributes,
};
