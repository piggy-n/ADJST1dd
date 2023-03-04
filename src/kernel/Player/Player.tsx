import c from 'classnames';
import s from './styles/player.scss';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPlayerStore, PlayerContext } from '@/store/Player';
import { useVideoListener } from '@/utils/hooks';
import { Video } from '@/kernel/Player';
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
    const videoEleAttributes = useVideoListener(videoEleRef.current, store.setState);

    useImperativeHandle(
        ref,
        () => ({
            // ...playerMethods,
            attributes: videoEleAttributes,
            video: videoEleRef.current,
        }),
    );

    return (
        <PlayerContext.Provider value={{
            store,
            videoEle: videoEleRef.current,
            videoContainerEle: videoContainerEleRef.current,
        }}>
            <div
                id={`player-${uuid}`}
                ref={videoContainerEleRef}
                {...videoContainerEleOpts}
                className={c(s.container, videoContainerEleOpts?.className)}
            >
                <Video ref={videoEleRef} />
            </div>
        </PlayerContext.Provider>
    );
};

export const Player = forwardRef<PlayerRef, PlayerProps>(VanillaPlayer);
