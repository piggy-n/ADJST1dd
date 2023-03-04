import { forwardRef } from 'react';
// import defaultPoster from '@/assets/images/snap.png';
import type { ForwardRefRenderFunction } from 'react';

const VanillaVideo: ForwardRefRenderFunction<HTMLVideoElement> = (
    _,
    ref,
) => {
    return (
        <video
            ref={ref}
            muted
            autoPlay
            // poster={defaultPoster}
            crossOrigin={'anonymous'}
            // {...videoEleOpts}
        />
    );
};

export const Video = forwardRef<HTMLVideoElement>(VanillaVideo);
