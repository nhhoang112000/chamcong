import classNames from 'classnames/bind';
import styles from './Model.module.scss';

const cx = classNames.bind(styles);

function ModelItem({ modelItemImg, modelName, modelPrice, sendDataToParent }) {
    return (
        <div className={cx('item')}>
            <img className={cx('item-img')} src={modelItemImg} alt={modelName} />
            <label className={cx('item-name')}>{modelName}</label>
            <div className={cx('item-bottom')}>
                <label className={cx('item-price')}>{modelPrice} $</label>
                <button className={cx('add-btn')} onClick={() => sendDataToParent(modelName)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default ModelItem;
