import { CounterContext, createCounterStore } from '@/store/useStore';
import Component from '@/kernel/Component';

const Test = () => {
    const store = createCounterStore();
    return (
        <CounterContext.Provider value={store}>
            <Component />
        </CounterContext.Provider>
    );
};

export default Test;
