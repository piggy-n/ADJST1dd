import { render } from 'react-dom';
import Player from '@/kernel/Player';

const Demo = () => {
    return (
        <>
            <div style={{
                width: '5px',
                height: '5px',
            }}>
                <Player />
            </div>
            <br />
            {/*<Player />*/}
        </>
    );
};

render(<Demo />, document.getElementById('root'));
