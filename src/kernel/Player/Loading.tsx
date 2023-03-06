import s from './styles/loading.scss';
import { useStore } from 'zustand';
import { useContext, useEffect, useRef } from 'react';
import { PlayerContext, selectVideoIsLoading, selectVideoIsNotLoading } from '@/store/Player';

const Loading = () => {
    const store = useContext(PlayerContext);
    const isLoading = useStore(store, selectVideoIsLoading);
    const isNotLoading = useStore(store, selectVideoIsNotLoading);
    const showLoadingIcon = useStore(store, s => s.showLoadingIcon);

    const loadingTimeoutRef = useRef<NodeJS.Timeout>();

    useEffect(
        () => {
            loadingTimeoutRef.current && clearTimeout(loadingTimeoutRef.current);

            if (isLoading) {
                loadingTimeoutRef.current = setTimeout(
                    () => store.setState({
                        showLoadingIcon: true,
                    }),
                    750,
                );
            }

            if (isNotLoading) {
                store.setState({
                    showLoadingIcon: false,
                });
            }

            return () => {
                loadingTimeoutRef.current && clearTimeout(loadingTimeoutRef.current);
            };
        },
        [isLoading, isNotLoading],
    );

    useEffect(() => {
        console.log('loading', showLoadingIcon);
    }, [showLoadingIcon]);

    if (!showLoadingIcon) return null;
    return (
        <div className={s.container}>
            {/*<Icon name={'loading'} size={24} />*/}
            <p>正在加载中...</p>
        </div>
    );
};

export default Loading;
