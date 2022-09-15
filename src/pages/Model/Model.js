import classNames from 'classnames/bind';
import styles from './Model.module.scss';

const cx = classNames.bind(styles);

function Model() {
    return (
        <div>
            <div className={cx('filter')}>
                <div className={cx('filter-model')}>
                    <label>Model</label>
                    <select>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className={cx('filter-color')}>
                    <label>Color</label>
                    <select>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="white">white</option>
                        <option value="black">black</option>
                    </select>
                </div>
            </div>
            <div className={cx('models')}>models</div>
        </div>
    );
}

export default Model;
