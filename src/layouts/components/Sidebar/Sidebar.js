import NavItem from './NavItem';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('navbar')}>
            <NavItem content="HOME" />
            <NavItem content="MODEL" />
            <NavItem content="CART" />
            <NavItem content="CONTACT" />
        </div>
    );
}

export default Sidebar;
