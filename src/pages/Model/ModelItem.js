import classNames from 'classnames/bind';
import styles from './Model.module.scss';

const cx = classNames.bind(styles);

function ModelItem({ cartItem, sendDataToParent }) {
    return (
        <div className={cx('item')}>
            <img className={cx('item-img')} src={cartItem.img} alt={cartItem.name} />
            <label className={cx('item-name')}>{cartItem.name}</label>
            <div className={cx('item-bottom')}>
                <label className={cx('item-price')}>{cartItem.price} $</label>
                <button className={cx('add-btn')} onClick={() => sendDataToParent(cartItem)}>
                    Add to cart
                </button>
            </div>
        </div>
    );
}

export default ModelItem;
