import { PlayerContext } from '@/store/Player';
import { useContext, useEffect } from 'react';
import { isObject } from 'lodash';
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
    const { setUrlAndVideoType, setUrlAndVideoTypeByDeviceOpts } = store.getState();

    const { deviceId, urlPrefix, streamType, channelType } = deviceOpts || {};

    useEffect(
        () => {
            console.log('PropsUpdater useEffect', url, videoType, deviceOpts);
            if (url) {
                const isLive = /^ws:\/\/|^wss:\/\//.test(url);
                return setUrlAndVideoType(url, videoType ?? (isLive ? 'live' : 'record'));
            }

            if (isObject(deviceOpts) && deviceId) {
                setUrlAndVideoTypeByDeviceOpts(deviceOpts, videoType);
            }
        },
        [url, videoType, deviceId, urlPrefix, streamType, channelType],
    );

    return null;
};

export default PropsUpdater;
