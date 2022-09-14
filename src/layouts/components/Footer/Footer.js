import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInstagram,
    faFacebook,
    faYoutube,
    faTwitter,
    faLinkedin,
    faDiscord,
} from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('footer1')}>
                <div className={cx('footer1_left')}>
                    <span className={cx('footer1_text')}>COMPANY</span>
                    <span className={cx('footer1_text')}>CAREERS</span>
                    <span className={cx('footer1_text')}>CONTACT US</span>
                    <span className={cx('footer1_text')}>MEDIA CENTER</span>
                    <span className={cx('footer1_text')}>PRIVACY & LEGAL</span>
                    <span className={cx('footer1_text')}>COOKIE SETTINGS</span>
                    <span className={cx('footer1_text')}>SITEMAP</span>
                    <span className={cx('footer1_text')}>NEWLETTER</span>
                </div>
                <div className={cx('footer1_right')}>
                    <div className={cx('footer1_icon')}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className={cx('footer1_icon')}>
                        <FontAwesomeIcon icon={faFacebook} />
                    </div>
                    <div className={cx('footer1_icon')}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </div>
                    <div className={cx('footer1_icon')}>
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className={cx('footer1_icon')}>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </div>
                    <div className={cx('footer1_icon')}>
                        <FontAwesomeIcon icon={faDiscord} />
                    </div>
                </div>
            </div>

            <div className={cx('footer2')}>
                * The consumption and emissions values in the website refer to your geographical IP. This value might be
                unrealistic if you navigate using VPN or if the position of your Internet provider is imprecise. If you
                believe you are incorrectly geolocalized, contact your dealer to get valid consumption and emissions
                information in your area.
            </div>
            <div className={cx('footer3')}>
                Copyright © 2022 Automobili Lamborghini S.p.A. a sole shareholder company part of Audi Group.
            </div>
            <div className={cx('footer4')}>All rights reserved. VAT no. IT 00591801204</div>
        </div>
    );
}

export default Footer;
