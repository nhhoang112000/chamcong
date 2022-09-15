import NavItem from './NavItem';
import config from '~/config';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx('navbar')}>
            <NavItem content="HOME" to={config.routes.home} />
            <NavItem content="MODEL" to={config.routes.model} />
            <NavItem content="CART" to={config.routes.cart} />
            <NavItem content="CONTACT" to={config.routes.contact} />
        </div>
    );
}

export default Sidebar;
