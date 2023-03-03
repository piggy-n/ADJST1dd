import { randomString } from '@/methods/common';
import type { VideoEleAttributes } from '@/index.d';

export interface PlayerStoreState extends VideoEleAttributes {
    uuid: string;
}

export const initialState: PlayerStoreState = {
    // state
    uuid: randomString(),
    // videoEleAttributes
    playing: false,
    buffering: false,
    canplay: false,
    ended: false,
    currentTime: 0,
    totalTime: 0,
    bufferedTime: 0,
    videoWidth: 0,
    videoHeight: 0,
    networkState: 0,
    readyState: 0,
};
