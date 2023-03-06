import { obtainDeviceStreamList } from '@/utils/methods/async/device';
import { isObject } from 'lodash';
import type { StoreApi } from 'zustand';
import type { VideoType, DeviceOpts } from '@/index.d';
import type { PlayerStoreState } from '@/store/Player/state';

export interface PlayerStoreAction {
    setUrlAndVideoType: (url?: string, videoType?: VideoType, deviceOpts?: DeviceOpts) => void;
}

export const action = (
    set: StoreApi<PlayerStoreState & PlayerStoreAction>['setState'],
    get: StoreApi<PlayerStoreState & PlayerStoreAction>['getState'],
): PlayerStoreAction => ({
    setUrlAndVideoType: async (url, videoType, deviceOpts) => {
        const { deviceId, streamType = '1', channelType = '1' } = deviceOpts || {};

        if (url) {
            const isLive = /^ws:\/\/|^wss:\/\//.test(url);
            return set({
                url,
                videoType: videoType ?? (isLive ? 'live' : 'record'),
            });
        }

        if (isObject(deviceOpts) && deviceId) {
            const streamList = await obtainDeviceStreamList(deviceOpts);
            const streamInfo = streamList.find(item => item.streamTypeCode === streamType && item.channelCode === channelType);
            const streamUrl = streamInfo?.url ?? '';

            set({
                url: streamUrl,
                videoType: videoType === 'stream-record' ? 'stream-record' : 'live',
            });
        }
    },
});
