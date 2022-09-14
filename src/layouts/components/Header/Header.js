import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCircleUser, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header')}>
            <div className={cx('header-left')}>
                <div className={cx('logo')}></div>
                <div className={cx('search')}>
                    {<FontAwesomeIcon icon={faSearch} className={cx('icon')} />}
                    <div className={cx('search-input')}>
                        <input placeholder="Search" />
                    </div>
                </div>
            </div>

            <div className={cx('header-right')}>
                <FontAwesomeIcon icon={faFilterCircleXmark} className={cx('icon')} />
                <FontAwesomeIcon icon={faCircleUser} className={cx('icon')} />
            </div>
        </div>
    );
}

export default Header;
