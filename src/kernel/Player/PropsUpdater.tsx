import { PlayerContext } from '@/store/Player';
import { useContext, useEffect } from 'react';
import type { FC } from 'react';
import type { PlayerProps } from '@/index.d';

const PropsUpdater: FC<PlayerProps> = (
    {
        url,
        videoType,
        deviceOpts,
        // controlsOpts,
    },
) => {
    const store = useContext(PlayerContext);
    const { setUrlAndVideoType } = store.getState();

    useEffect(
        () => setUrlAndVideoType(url, videoType, deviceOpts),
        [url, videoType, { ...deviceOpts }],
    );

    return null;
};

export default PropsUpdater;
