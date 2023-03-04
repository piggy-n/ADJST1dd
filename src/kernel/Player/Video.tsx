import { forwardRef, useContext, useEffect } from 'react';
// import defaultPoster from '@/assets/images/snap.png';
import type { ForwardRefRenderFunction } from 'react';
import { PlayerContext } from '@/store/Player';
import { useStore } from 'zustand';

const VanillaVideo: ForwardRefRenderFunction<HTMLVideoElement> = (
    _,
    ref,
) => {
    const { store } = useContext(PlayerContext);
    const currentTime = useStore(store, (state) => state.totalTime);
    useEffect(() => {
        console.log(currentTime);
    }, [currentTime]);
    return (
        <video
            ref={ref}
            src={'https://www.w3schools.com/html/mov_bbb.mp4'}
            muted
            autoPlay
            // poster={defaultPoster}
            crossOrigin={'anonymous'}
            // {...videoEleOpts}
        />
    );
};

export const Video = forwardRef<HTMLVideoElement>(VanillaVideo);
