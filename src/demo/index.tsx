import { render } from 'react-dom';
import Player from '@/kernel/Player';

const Demo = () => {
    return (
        <>
            <div style={{
                width: '200px',
                height: '200px',
            }}>
                <Player />
            </div>
            <br />
            {/*<Player />*/}
        </>
    );
};

render(<Demo />, document.getElementById('root'));
