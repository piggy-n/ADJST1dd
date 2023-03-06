import { render } from 'react-dom';
import Player from '@/kernel/Player';
import { useEffect, useRef, useState } from 'react';

const Demo = () => {
    const ref = useRef<any>();
    useEffect(() => {
        console.log(ref.current?.video);
    }, [ref.current?.video]);
    const [device, setDevice] = useState<any>({
        deviceId: '1557971994772955138',
        streamType: '1',
    });
    return (
        <>
            <button onClick={() => setDevice({
                deviceId: '1557971994772955138',
                streamType: Math.random() > 0.5 ? '1' : '2',
                channelType: Math.random() > 0.5 ? '1' : '2',
            })}>AA</button>
            <div style={{
                width: '50px',
                height: '50px',
            }}>
                <Player ref={ref} deviceOpts={device} />
            </div>
            <br />
            {/*<Player />*/}
        </>
    );
};

render(<Demo />, document.getElementById('root'));
