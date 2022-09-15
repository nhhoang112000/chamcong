import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './Shop.module.scss';

const cx = classNames.bind(styles);

function ShopModel(props) {
    return (
        <div className={cx('shopModel')}>
            <div className={cx('modelOption')}>
                <div className={cx('modelBtn')}>
                    <FontAwesomeIcon icon={faChevronLeft} className={cx('prevBtn')} />
                    <FontAwesomeIcon icon={faChevronRight} className={cx('nextBtn')} />
                </div>
                <div className={cx('modelName')}>{props.modelName}</div>
                <div className={cx('modelDes')}>{props.modelDes}</div>
            </div>

            <div className={cx('allImagesModel')}>
                <div className={cx('model1')} style={{ backgroundImage: 'url(' + props.url1 + ')' }}></div>
                <div className={cx('model2')} style={{ backgroundImage: 'url(' + props.url2 + ')' }}></div>
                <div className={cx('modelCurrent')} style={{ backgroundImage: 'url(' + props.urlCurrent + ')' }}></div>
            </div>
        </div>
    );
}

export default ShopModel;
