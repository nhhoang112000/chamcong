import New from './New';
import classNames from 'classnames/bind';
import styles from './News.module.scss';

const cx = classNames.bind(styles);

function News() {
    return (
        <div className={cx('news')}>
            <New
                date="30/4/1975"
                title="LAMBORGHINI SQUADRA CORSE PRESENTS THE NEW HURACÁN GT3 EVO2"
                newUrl="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2022/05_03_lancio_gt3_evo2/cover_d_gt3evo2.jpg"
            />
            <New
                date="30/4/1976"
                title="AVENTADOR ULTIMAE: LAMBORGHINI’S LATEST PURE V12 ON THE ROAD"
                newUrl="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2022/05_01_ultimae/cover_d.jpg"
            />
            <New
                date="30/4/1977"
                title="AUTOMOBILI LAMBORGHINI RECEIVES THE GREEN STAR AWARD 2022"
                newUrl="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2022/04_26_green_star/cover_d.jpg"
            />
            <New
                date="30/4/1978"
                title="LAMBORGHINI WINTER DRIVE"
                newUrl="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/news/2022/03_21_winter/cover.jpg"
            />
        </div>
    );
}

export default News;
