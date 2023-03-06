import s from './styles/loading.scss';
import { useContext, useEffect, useRef, useState } from 'react';
import { PlayerContext, selectVideoLoadingAttributes } from '@/store/Player';
import { useStore } from 'zustand';

const Loading = () => {
    const store = useContext(PlayerContext);
    const { isLoading, isNotLoading } = useStore(store, selectVideoLoadingAttributes);

    const [loading, setLoading] = useState(false);
    const loadingTimeoutRef = useRef<NodeJS.Timeout>();

    useEffect(
        () => {
            loadingTimeoutRef.current && clearTimeout(loadingTimeoutRef.current);

            if (isLoading) {
                loadingTimeoutRef.current = setTimeout(
                    () => setLoading(true),
                    750,
                );
            }

            if (isNotLoading) setLoading(false);

            return () => loadingTimeoutRef.current && clearTimeout(loadingTimeoutRef.current);
        },
        [isLoading, isNotLoading],
    );

    useEffect(()=>{
        console.log('loading',loading);
    },[loading])

    if (!loading) return null;
    return (
        <div className={s.container}>
            {/*<Icon name={'loading'} size={24} />*/}
            <p>正在加载中...</p>
        </div>
    );
};

export default Loading;
