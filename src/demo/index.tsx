import { render } from 'react-dom';
import Test from '@/kernel/Test';

const Demo = () => {
    return (
        <>
            <Test />
            <br />
            <Test />
        </>
    );
};

render(<Demo />, document.getElementById('root'));
