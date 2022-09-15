import ShopModel from './ShopModel';
import classNames from 'classnames/bind';
import styles from './Shop.module.scss';

const cx = classNames.bind(styles);

function Shop() {
    return (
        <div className={cx('shop')}>
            <ShopModel
                modelName="AVENTADOR"
                modelDes="DES1"
                url1="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/09_21_restyle/gw_aven_07.jpg"
                url2="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/aventador/2021/gate_aven_01.jpg"
                urlCurrent="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/model/aventador/aventador-svj-roadster/family/gallery/01_Gallery-Gateway-Famiglia.jpg"
            />
            <ShopModel
                modelName="HURACÁN"
                modelDes="DES2"
                url1="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/gallery/gate_hura_02.jpg"
                url2="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/gallery/gate_hura_05.jpg"
                urlCurrent="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/gallery/gate_hura_03.jpg"
            />
            <ShopModel
                modelName="URUS"
                modelDes="DES3"
                url1="https://paultan.org/image/2019/06/2020-Lamborghini-Urus-by-ABT-7_BM.jpg"
                url2="https://www.hdcarwallpapers.com/walls/lamborghini_urus_pearl_capsule_2020_4k-HD.jpg"
                urlCurrent="https://a-static.besthdwallpaper.com/mau-xanh-lamborghini-urus-hinh-nen-3554x1999-2392_53.jpg"
            />
        </div>
    );
}
export default Shop;
