import { useContext } from 'react';
import { CounterContext } from '@/store/useStore';
import { useStore } from 'zustand';

const Component = () => {
    const store = useContext(CounterContext);
    const { count, increase, decrease } = useStore(store);

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={increase}> + 1</button>
            <button onClick={decrease}> - 1</button>
        </div>
    );
};

export default Component;
