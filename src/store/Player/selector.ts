import type { PlayerStore } from '@/store/Player/index';

export const selectVideoIsLoading = (s: PlayerStore) => {
    const { playing, buffering } = s;
    return playing && buffering;
};

export const selectVideoIsNotLoading = (s: PlayerStore) => {
    const { playing, readyState, networkState, videoEle } = s;
    const inPlay = playing && [1, 2].includes(networkState) && [3, 4].includes(readyState);
    const inReady = !videoEle?.autoplay && readyState === 4;

    return inPlay || inReady;
};
