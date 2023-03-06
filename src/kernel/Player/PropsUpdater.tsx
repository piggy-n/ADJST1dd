import { PlayerContext } from '@/store/Player';
import { useContext, useEffect } from 'react';
import type { FC } from 'react';
import type { PlayerProps } from '@/index.d';
import { isObject } from 'lodash';

const PropsUpdater: FC<PlayerProps> = (
    {
        url,
        videoType,
        deviceOpts,
        controlsOpts,
    },
) => {
    const store = useContext(PlayerContext);
    const { setUrlAndVideoType } = store.getState();

    const { deviceId, urlPrefix, streamType = '1', channelType = '1' } = deviceOpts || {};

    useEffect(
        () => {
            if (url) {
                const isLive = /^ws:\/\/|^wss:\/\//.test(url);
                setUrlAndVideoType(url, videoType ?? (isLive ? 'live' : 'record'));
            }
        },
        [url, videoType],
    );

    useEffect(
        () => {
            if (isObject(deviceOpts) && deviceId && !url) {

            }
        },
        [deviceId, urlPrefix, streamType, channelType],
    );

    return null;
};

export default PropsUpdater;
