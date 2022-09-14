import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function NavItem(props) {
    return <div className={cx('navItem')}>{props.content}</div>;
}

export default NavItem;
