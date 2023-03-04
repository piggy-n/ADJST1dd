import type { PlayerStore } from '@/store/Player/index';
import type { VideoEleAttributes } from '@/index.d';

export const selectVideoAttributes = (s: PlayerStore): VideoEleAttributes => ({
    playing: s.playing,
    buffering: s.buffering,
    canplay: s.canplay,
    ended: s.ended,
    error: s.error,
    currentTime: s.currentTime,
    totalTime: s.totalTime,
    bufferedTime: s.bufferedTime,
    videoWidth: s.videoWidth,
    videoHeight: s.videoHeight,
    networkState: s.networkState,
    readyState: s.readyState,
});
