import Slider from '~/components/Slider';
import News from './News';
import Shop from './Shop';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className="body_right">
            <Slider />
            <Shop />
            <News />
        </div>
    );
}

export default Home;
