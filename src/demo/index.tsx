import { render } from 'react-dom';
import Player from '@/kernel/Player';
import { useEffect, useRef } from 'react';

const Demo = () => {
    const ref = useRef<any>();
    useEffect(() => {
        console.log(ref.current?.video);
    }, [ref.current?.video]);
    return (
        <>
            <div style={{
                width: '50px',
                height: '50px',
            }}>
                <Player ref={ref} />
            </div>
            <br />
            {/*<Player />*/}
        </>
    );
};

render(<Demo />, document.getElementById('root'));
