import type { PlayerStore } from '@/store/Player/index';
import type { VideoEleAttributes } from '@/index.d';

export const selectVideoAttributes = (s: PlayerStore): VideoEleAttributes => ({
    playing: s.playing,
    buffering: s.buffering,
    canplay: s.canplay,
    ended: s.ended,
    error: s.error,
    resizing: s.resizing,
    currentTime: s.currentTime,
    totalTime: s.totalTime,
    bufferedTime: s.bufferedTime,
    videoWidth: s.videoWidth,
    videoHeight: s.videoHeight,
    networkState: s.networkState,
    readyState: s.readyState,
});

export const selectVideoLoadingAttributes = (s: PlayerStore) => {
    const { playing, buffering, readyState, networkState, videoEle } = s;
    const inPlay = playing && [1, 2].includes(networkState) && [3, 4].includes(readyState);
    const inReady = !videoEle?.autoplay && readyState === 4;
    const inBuffer = playing && buffering;

    return {
        isLoading: inBuffer,
        isNotLoading: inPlay || inReady,
    };
};
