import { forwardRef, VideoHTMLAttributes } from 'react';
import type { ForwardRefRenderFunction } from 'react';
// import defaultPoster from '@/assets/images/snap.png';

const VanillaVideo: ForwardRefRenderFunction<HTMLVideoElement, { opts?: VideoHTMLAttributes<HTMLVideoElement> }> = (
    { opts },
    ref,
) => {
    return (
        <video
            ref={ref}
            src={'https://gs-files.oss-cn-hongkong.aliyuncs.com/okr/test/file/2021/07/01/haiwang.mp4'}
            muted
            autoPlay
            crossOrigin={'anonymous'}
            // poster={defaultPoster}
            {...opts}
        />
    );
};

export const Video = forwardRef<HTMLVideoElement, { opts?: VideoHTMLAttributes<HTMLVideoElement> }>(VanillaVideo);
