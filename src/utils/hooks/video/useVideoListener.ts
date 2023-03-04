import { useMandatoryUpdate } from '@/utils/hooks';
import { useLatest } from 'ahooks';
import { useEffect, useMemo, useRef } from 'react';
import { initialVideoEleAttributes } from '@/store/Player';
import type { StoreApi } from 'zustand';
import type { VideoEleAttributes } from '@/index.d';
import type { PlayerStoreState } from '@/store/Player/state';
import type { PlayerStoreAction } from '@/store/Player/action';

const useVideoListener = (
    ele: HTMLVideoElement | null,
    set: StoreApi<PlayerStoreState & PlayerStoreAction>['setState'],
) => {
    const forceUpdate = useMandatoryUpdate();
    const latestVideoEleRef = useLatest(ele);
    const videoEle = latestVideoEleRef.current;

    const videoListenerIntervalRef = useRef<NodeJS.Timer>();
    const videoEleAttributesRef = useRef<VideoEleAttributes>({ ...initialVideoEleAttributes });

    const setVideoEleAttributesHandler = <T extends Partial<VideoEleAttributes>>(val: T) => {
        videoEleAttributesRef.current = { ...videoEleAttributesRef.current, ...val };
    };

    const canPlayHandler = () => {
        if (!videoEle) return;

        setVideoEleAttributesHandler({
            totalTime: videoEle.duration,
            videoWidth: videoEle.videoWidth,
            videoHeight: videoEle.videoHeight,
        });

        set(() => ({
            canplay: true,
            totalTime: videoEle.duration,
            videoWidth: videoEle.videoWidth,
            videoHeight: videoEle.videoHeight,
        }));
    };

    const progressHandler = () => {
        if (!videoEle) return;

        if (videoEle.buffered.length >= 1) {
            setVideoEleAttributesHandler({
                bufferedTime: videoEle.buffered.end(0),
            });
        }

        set(() => ({
            bufferedTime: videoEle.buffered.end(0),
        }));
    };

    const playOrPauseHandler = () => {
        if (!videoEle) return;

        setVideoEleAttributesHandler({
            playing: !videoEle.paused,
        });

        set(() => ({
            playing: !videoEle.paused,
        }));
    };

    const errorHandler = () => {
        setVideoEleAttributesHandler({
            error: Date.now(),
        });

        set(() => ({
            error: Date.now(),
            canplay: false,
        }));
    };

    const endedHandler = () => {
        if (!videoEle) return;

        setVideoEleAttributesHandler({
            ended: videoEle.ended,
        });

        set(() => ({
            ended: videoEle.ended,
        }));
    };

    const waitingHandler = () => {
        setVideoEleAttributesHandler({
            buffering: true,
        });

        set(() => ({
            buffering: true,
        }));
    };

    const playingHandler = () => {
        setVideoEleAttributesHandler({
            buffering: false,
        });

        set(() => ({
            buffering: false,
        }));
    };

    useEffect(
        () => {
            if (!videoEle) return forceUpdate();

            videoEle.addEventListener('canplay', canPlayHandler);
            videoEle.addEventListener('progress', progressHandler);
            videoEle.addEventListener('play', playOrPauseHandler);
            videoEle.addEventListener('pause', playOrPauseHandler);
            videoEle.addEventListener('timeupdate', playOrPauseHandler);
            videoEle.addEventListener('ended', endedHandler);
            videoEle.addEventListener('error', errorHandler);
            videoEle.addEventListener('waiting', waitingHandler);
            videoEle.addEventListener('playing', playingHandler);

            videoListenerIntervalRef.current && clearInterval(videoListenerIntervalRef.current);
            videoListenerIntervalRef.current = setInterval(
                () => {
                    forceUpdate();

                    setVideoEleAttributesHandler({
                        currentTime: videoEle.currentTime,
                        totalTime: videoEle.duration,
                        playing: !videoEle.paused,
                        ended: videoEle.ended,
                        networkState: videoEle.networkState,
                        readyState: videoEle.readyState,
                        videoWidth: videoEle.videoWidth,
                        videoHeight: videoEle.videoHeight,
                    });
                },
                1,
            );

            return () => {
                videoEle.removeEventListener('canplay', canPlayHandler);
                videoEle.removeEventListener('progress', progressHandler);
                videoEle.removeEventListener('play', playOrPauseHandler);
                videoEle.removeEventListener('pause', playOrPauseHandler);
                videoEle.removeEventListener('timeupdate', playOrPauseHandler);
                videoEle.removeEventListener('ended', endedHandler);
                videoEle.removeEventListener('error', errorHandler);
                videoEle.removeEventListener('waiting', waitingHandler);
                videoEle.removeEventListener('playing', playingHandler);
                videoListenerIntervalRef.current && clearInterval(videoListenerIntervalRef.current);
            };
        },
        [videoEle],
    );

    return useMemo(
        () => videoEleAttributesRef.current,
        [videoEleAttributesRef.current],
    );
};

export default useVideoListener;
