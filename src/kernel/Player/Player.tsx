import c from 'classnames';
import s from './styles/player.scss';
import { forwardRef, useRef } from 'react';
import type { PlayerRef, PlayerProps } from '@/index.d';
import type { ForwardRefRenderFunction } from 'react';

const VanillaPlayer: ForwardRefRenderFunction<PlayerRef, PlayerProps> = (
    {
        videoContainerEleOpts,
        ...rest
    },
    ref,
) => {
    const videoContainerEleRef = useRef<HTMLDivElement>(null);

    return (
        <div
            // id={`player-${uuid}`}
            ref={videoContainerEleRef}
            {...videoContainerEleOpts}
            className={c(s.container, videoContainerEleOpts?.className)}
        >
        </div>
    );
};

export const Player = forwardRef<PlayerRef, PlayerProps>(VanillaPlayer);
