import { forwardRef } from 'react';
import type { ForwardRefRenderFunction } from 'react';
// import defaultPoster from '@/assets/images/snap.png';

const VanillaVideo: ForwardRefRenderFunction<HTMLVideoElement> = (
    _,
    ref,
) => {
    return (
        <video
            ref={ref}
            src={'https://www.w3schools.com/html/mov_bbb.mp4'}
            muted
            autoPlay
            crossOrigin={'anonymous'}
            // poster={defaultPoster}
            // {...videoEleOpts}
        />
    );
};

export const Video = forwardRef<HTMLVideoElement>(VanillaVideo);
