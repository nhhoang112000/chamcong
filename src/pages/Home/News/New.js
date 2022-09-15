import classNames from 'classnames/bind';
import styles from './News.module.scss';

const cx = classNames.bind(styles);

function New(props) {
    return (
        <div className={cx('new')}>
            <div className={cx('new_image')} style={{ backgroundImage: 'url(' + props.newUrl + ')' }}></div>
            <div className={cx('new_info')}>
                <div className={cx('new_date')}>{props.date}</div>
                <div className={cx('new_title')}>{props.title}</div>
                <div className={cx('readmore_btn')}>read more</div>
            </div>
        </div>
    );
}

export default New;
