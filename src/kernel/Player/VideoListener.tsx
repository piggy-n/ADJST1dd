import { useContext, useEffect, useRef } from 'react';
import { PlayerContext } from '@/store/Player';
import { useStore } from 'zustand';
import { useSize } from 'ahooks';

const VideoListener = () => {
    const store = useContext(PlayerContext);
    const videoEle = useStore(store, s => s.videoEle);
    const videoEleSize = useSize(videoEle);

    const videoListenerIntervalRef = useRef<NodeJS.Timer>();
    const videoResizingTimeoutRef = useRef<NodeJS.Timeout>();

    const canPlayHandler = () => {
        if (!videoEle) return;

        store.setState({
            canplay: true,
            totalTime: videoEle.duration,
            videoWidth: videoEle.videoWidth,
            videoHeight: videoEle.videoHeight,
        });
    };

    const progressHandler = () => {
        if (!videoEle) return;

        if (videoEle.buffered.length >= 1) {
            store.setState({
                bufferedTime: videoEle.buffered.end(0),
            });
        }
    };

    const playOrPauseHandler = () => {
        if (!videoEle) return;

        store.setState({
            playing: !videoEle.paused,
        });
    };

    const errorHandler = () => {
        store.setState({
            error: Date.now(),
            canplay: false,
        });
    };

    const endedHandler = () => {
        if (!videoEle) return;

        store.setState({
            ended: videoEle.ended,
        });
    };

    const waitingHandler = () => {
        store.setState({
            buffering: true,
        });
    };

    const playingHandler = () => {
        store.setState({
            buffering: false,
        });
    };

    useEffect(
        () => {
            if (!videoEle) return;

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
                    store.setState({
                        currentTime: videoEle.currentTime,
                        ended: videoEle.ended,
                        playing: !videoEle.paused,
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

    useEffect(
        () => {
            store.setState({
                resizing: true,
            });

            videoResizingTimeoutRef.current && clearTimeout(videoResizingTimeoutRef.current);
            videoResizingTimeoutRef.current = setTimeout(
                () => store.setState({
                    resizing: false,
                }),
                250,
            );

            return () => videoResizingTimeoutRef.current && clearTimeout(videoResizingTimeoutRef.current);
        },
        [videoEleSize],
    );

    return null;
};

export default VideoListener;
