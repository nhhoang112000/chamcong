import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

function NavItem({ content, to }) {
    // return <div className={cx('navItem')}>{props.content}</div>;
    return (
        <NavLink className={(nav) => cx('navItem', { active: nav.isActive })} to={to}>
            {content}
        </NavLink>
    );
}

export default NavItem;
