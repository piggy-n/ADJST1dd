import { render } from 'react-dom';
import { Player } from '@/index';

const Demo = () => {
    return (
        <>
            <Player />
            <br />
            <Player />
        </>
    );
};

render(<Demo />, document.getElementById('root'));
