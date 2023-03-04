import _ from 'lodash';
import { useEffect } from 'react';
import { selectVideoAttributes } from '@/store/Player';
import type { StoreApi } from 'zustand';
import type { PlayerStore } from '@/store/Player';

const useVideoEleAttributesSubscribe = (store: StoreApi<PlayerStore>) => {
    useEffect(
        () => {
            const unsubscribe = store.subscribe(
                (state, prevState) => {
                    const currAttributes = selectVideoAttributes(state);
                    const prevAttributes = selectVideoAttributes(prevState);
                    const isEqual = _.isEqual(currAttributes, prevAttributes);
                    if (!isEqual) {
                        // setVideoEleAttributes(currAttributes);
                    }
                },
            );

            return () => unsubscribe();
        },
        [],
    );

    return null;
};

export default useVideoEleAttributesSubscribe;
