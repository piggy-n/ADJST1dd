import c from 'classnames';
import s from './styles/player.scss';
import { forwardRef, useRef } from 'react';
import { createPlayerStore, PlayerContext } from '@/store/Player';
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
                {/*<Component />*/}
            </div>
        </PlayerContext.Provider>
    );
};

export const Player = forwardRef<PlayerRef, PlayerProps>(VanillaPlayer);
