import { obtainDeviceStreamList } from '@/utils/methods/async/device';
import type { StoreApi } from 'zustand';
import type { VideoType, DeviceOpts } from '@/index.d';
import type { PlayerStoreState } from '@/store/Player/state';

export interface PlayerStoreAction {
    setUrlAndVideoType: (url: string, videoType: VideoType) => void;
    setUrlAndVideoTypeByDeviceOpts: (deviceOpts: DeviceOpts, videoType?: VideoType) => void;
}

export const action = (
    set: StoreApi<PlayerStoreState & PlayerStoreAction>['setState'],
    get: StoreApi<PlayerStoreState & PlayerStoreAction>['getState'],
): PlayerStoreAction => ({
    setUrlAndVideoType: (url, videoType) => set({ url, videoType }),
    setUrlAndVideoTypeByDeviceOpts: async (deviceOpts, videoType?: VideoType) => {
        const { streamType, channelType } = deviceOpts;
        const streamList = await obtainDeviceStreamList(deviceOpts);
        const streamInfo = streamList.find(item => item.streamTypeCode === streamType && item.channelCode === channelType);
        const streamUrl = streamInfo?.url ?? '';

        set({
            url: streamUrl,
            videoType: videoType === 'stream-record' ? 'stream-record' : 'live',
        });
    },
});
