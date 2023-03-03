import c from 'classnames';
import s from './styles/player.scss';
import { forwardRef, useRef } from 'react';
import { createPlayerStore, PlayerContext } from '@/store/Player';
import type { PlayerRef, PlayerProps } from '@/index.d';
import type { ForwardRefRenderFunction } from 'react';
import Component from '@/T/Component';

const VanillaPlayer: ForwardRefRenderFunction<PlayerRef, PlayerProps> = (
    {
        videoContainerEleOpts,
        ...rest
    },
    ref,
) => {
    const playerStore = createPlayerStore();
    const videoContainerEleRef = useRef<HTMLDivElement>(null);

    return (
        <PlayerContext.Provider value={playerStore}>
            <div
                id={`player-${playerStore.getState().uuid}`}
                ref={videoContainerEleRef}
                {...videoContainerEleOpts}
                className={c(s.container, videoContainerEleOpts?.className)}
            >
                <Component />
            </div>
        </PlayerContext.Provider>
    );
};

export const Player = forwardRef<PlayerRef, PlayerProps>(VanillaPlayer);
