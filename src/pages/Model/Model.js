import ModelItem from './ModelItem';
import classNames from 'classnames/bind';
import styles from './Model.module.scss';

const cx = classNames.bind(styles);

const modelItems = [
    {
        img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/09_21_restyle/gw_aven_07.jpg',
        name: 'name1',
        price: 1,
    },
    {
        img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/gate_aven_01.jpg',
        name: 'name2',
        price: 12,
    },
    {
        img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/gallery/gate_hura_02.jpg',
        name: 'name3',
        price: 13,
    },
    {
        img: 'https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/gallery/gate_hura_05.jpg',
        name: 'name4',
        price: 14,
    },
];

function Model() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('filter')}>
                <div className={cx('filter-model')}>
                    <label className={cx('filter-text')}>Model</label>
                    <select className={cx('filter-dropdown')}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className={cx('filter-color')}>
                    <label className={cx('filter-text')}>Color</label>
                    <select className={cx('filter-dropdown')}>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="white">white</option>
                        <option value="black">black</option>
                    </select>
                </div>
                <div className={cx('filter-price')}>
                    <label className={cx('filter-text')}>Price:</label>
                    <input type={'number'} className={cx('filter-input')} />
                    <label className={cx('filter-text')}>to</label>
                    <input type={'number'} className={cx('filter-input')} />
                </div>
            </div>
            <div className={cx('models')}>
                {modelItems.map((item, index) => (
                    <ModelItem key={index} modelItemImg={item.img} modelName={item.name} modelPrice={item.price} />
                ))}
            </div>
        </div>
    );
}

export default Model;
