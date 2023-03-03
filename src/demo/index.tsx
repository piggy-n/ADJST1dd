import { render } from 'react-dom';
import Test from '@/T/Test';

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
