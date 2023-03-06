import c from 'classnames';
import s from './styles/player.scss';
import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { createPlayerStore, PlayerContext } from '@/store/Player';
import { Video, VideoListener } from '@/kernel/Player';
import type { PlayerRef, PlayerProps } from '@/index.d';
import type { ForwardRefRenderFunction } from 'react';

const VanillaPlayer: ForwardRefRenderFunction<PlayerRef, PlayerProps> = (
    {
        videoContainerEleOpts,
        ...rest
    },
    ref,
) => {
    const store = createPlayerStore();
    const { uuid } = store.getState();

    const videoEleRef = useRef<HTMLVideoElement>(null);
    const videoContainerEleRef = useRef<HTMLDivElement>(null);

    useEffect(
        () => store.setState({
            videoEle: videoEleRef.current,
            videoContainerEle: videoContainerEleRef.current,
        }),
        [videoEleRef.current, videoContainerEleRef.current],
    );

    useImperativeHandle(
        ref,
        () => ({
            video: videoEleRef.current,
        }),
    );

    return (
        <PlayerContext.Provider value={store}>
            <div
                id={`player-${uuid}`}
                ref={videoContainerEleRef}
                {...videoContainerEleOpts}
                className={c(s.container, videoContainerEleOpts?.className)}
            >
                <Video ref={videoEleRef} />
                <VideoListener />
            </div>
        </PlayerContext.Provider>
    );
};

export const Player = forwardRef<PlayerRef, PlayerProps>(VanillaPlayer);
