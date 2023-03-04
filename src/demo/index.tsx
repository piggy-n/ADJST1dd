import { render } from 'react-dom';
import Player from '@/kernel/Player';

const Demo = () => {
    return (
        <>
            <div style={{
                width: '50px',
                height: '50px',
            }}>
                <Player />
            </div>
            <br />
            {/*<Player />*/}
        </>
    );
};

render(<Demo />, document.getElementById('root'));
